import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-agents-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Agent Management" description="Agent details and commission workflow area.">
      <button class="button" type="button">Add Agent</button>
    </app-page-header>

    <section class="page-card">
      <strong>Agent management module</strong>
      <p class="muted">Connect screens here using <code>AgentsApiService</code>.</p>
    </section>
  `
})
export class AgentsPageComponent {}
