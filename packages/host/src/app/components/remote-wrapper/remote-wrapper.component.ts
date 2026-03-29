import { Component, ElementRef, OnInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-remote-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="remote-wrapper">
      <div class="remote-wrapper-header">
        <h2>{{ remoteName }}</h2>
        <span class="badge">{{ loadMode === 'iframe' ? 'iframe' : 'Native Federation' }}</span>
      </div>
      @if (loadMode === 'iframe') {
        <iframe
          [src]="iframeSrc"
          class="remote-iframe"
          frameborder="0"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      } @else {
        <div #container class="remote-container"></div>
      }
    </div>
  `,
  styles: [`
    .remote-wrapper { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius); overflow: hidden; }
    .remote-wrapper-header { display: flex; justify-content: space-between; align-items: center; padding: 16px 20px; border-bottom: 1px solid var(--border-color); }
    .remote-wrapper-header h2 { font-size: 18px; font-weight: 700; }
    .badge { font-size: 12px; padding: 4px 10px; background: var(--bg-secondary); border-radius: 8px; color: var(--text-secondary); font-family: monospace; }
    .remote-container { padding: 20px; min-height: 200px; }
    .remote-iframe { width: 100%; height: 480px; border: none; background: transparent; }
  `],
})
export class RemoteWrapperComponent implements OnInit, OnDestroy {
  @ViewChild('container', { static: false }) container?: ElementRef<HTMLDivElement>;

  remoteName = '';
  exposedModule = '';
  loadMode: 'federation' | 'iframe' = 'federation';
  iframeSrc = '';
  private cleanup?: () => void;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    const data = this.route.snapshot.data;
    this.remoteName = data['remoteName'];
    this.exposedModule = data['exposedModule'];
    this.loadMode = data['loadMode'] ?? 'federation';

    if (this.loadMode === 'iframe') {
      const basePath = document.querySelector('base')?.getAttribute('href') ?? '/';
      this.iframeSrc = `${basePath}${this.remoteName}/index.html`;
      return;
    }

    // Native Federation loading
    try {
      const module = await loadRemoteModule(this.remoteName, this.exposedModule);
      if (module.mount && this.container) {
        this.cleanup = module.mount(this.container.nativeElement);
      } else if (module.default?.mount && this.container) {
        this.cleanup = module.default.mount(this.container.nativeElement);
      }
    } catch (err) {
      if (this.container) {
        this.container.nativeElement.innerHTML = `<div style="padding:20px;color:var(--accent-red);text-align:center"><p>Failed to load <strong>${this.remoteName}</strong></p><p style="font-size:12px;color:var(--text-secondary);margin-top:8px">Make sure the remote is running on its designated port.</p></div>`;
      }
      console.error(`Failed to load remote ${this.remoteName}:`, err);
    }
  }

  ngOnDestroy(): void { this.cleanup?.(); }
}
