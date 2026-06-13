import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-reminders-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Reminders" description="Premium reminder send and history workspace.">
      <button class="button" type="button">Send Reminder</button>
    </app-page-header>

    <section class="page-card">
      <strong>Reminders module</strong>
      <p class="muted">Connect screens here using <code>RemindersApiService</code>.</p>
    </section>
  `
})
export class RemindersPageComponent {}
