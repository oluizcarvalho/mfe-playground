type EventCallback<T = unknown> = (data: T) => void;

class EventBus {
  private target = new EventTarget();

  emit<T = unknown>(event: string, data?: T): void {
    this.target.dispatchEvent(
      new CustomEvent(event, { detail: data })
    );
  }

  on<T = unknown>(event: string, callback: EventCallback<T>): () => void {
    const handler = (e: Event) => {
      callback((e as CustomEvent<T>).detail);
    };
    this.target.addEventListener(event, handler);
    return () => this.target.removeEventListener(event, handler);
  }

  once<T = unknown>(event: string, callback: EventCallback<T>): void {
    const handler = (e: Event) => {
      callback((e as CustomEvent<T>).detail);
    };
    this.target.addEventListener(event, handler, { once: true });
  }
}

export const eventBus = new EventBus();
