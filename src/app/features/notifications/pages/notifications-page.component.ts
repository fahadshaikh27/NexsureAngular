import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Notifications" description="Customer, agent, and operational notification workflow area.">
      <button class="button" type="button">Create Notification</button>
    </app-page-header>

    <section class="page-card">
      <strong>Notification module</strong>
      <p class="muted">Connect screens here using <code>NotificationsApiService</code>.</p>
    </section>
  `
})
export class NotificationsPageComponent {}
