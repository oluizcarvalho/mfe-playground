type StateCallback<T = unknown> = (value: T, key: string) => void;

const GLOBAL_KEY = '__mfeSharedState';

class SharedState {
  private channel!: BroadcastChannel;
  private store = new Map<string, unknown>();
  private listeners = new Map<string, Set<StateCallback>>();

  constructor() {
    // Singleton: reuse existing instance across federated bundles sharing the same window
    const existing = (globalThis as Record<string, unknown>)[GLOBAL_KEY] as SharedState | undefined;
    if (existing) {
      return existing;
    }
    (globalThis as Record<string, unknown>)[GLOBAL_KEY] = this;

    this.channel = new BroadcastChannel('mfe-playground-state');
    this.channel.onmessage = (event: MessageEvent) => {
      const { key, value } = event.data;
      this.store.set(key, value);
      this.notify(key, value);
    };
  }

  set<T = unknown>(key: string, value: T): void {
    this.store.set(key, value);
    this.channel.postMessage({ key, value });
    this.notify(key, value);
  }

  get<T = unknown>(key: string): T | undefined {
    return this.store.get(key) as T | undefined;
  }

  subscribe<T = unknown>(key: string, callback: StateCallback<T>): () => void {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, new Set());
    }
    const cbs = this.listeners.get(key)!;
    cbs.add(callback as StateCallback);
    return () => cbs.delete(callback as StateCallback);
  }

  private notify(key: string, value: unknown): void {
    this.listeners.get(key)?.forEach((cb) => cb(value, key));
  }

  destroy(): void {
    this.channel.close();
    this.store.clear();
    this.listeners.clear();
  }
}

export const sharedState = new SharedState();
