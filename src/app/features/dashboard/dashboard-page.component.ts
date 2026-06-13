import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [PageHeaderComponent, RouterLink],
  template: `
    <app-page-header
      title="NexSure Dashboard"
      description="Starting point for API integration and module handoff."
    />

    <section class="grid">
      @for (module of modules; track module.path) {
        <a class="page-card module-card" [routerLink]="module.path">
          <strong>{{ module.name }}</strong>
          <span>{{ module.owner }}</span>
        </a>
      }
    </section>
  `,
  styles: [
    `
      .grid {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      .module-card {
        display: grid;
        gap: 8px;
      }

      .module-card span {
        color: var(--muted);
      }
    `
  ]
})
export class DashboardPageComponent {
  readonly modules = [
    { name: 'Authentication', owner: 'Auth and role team', path: '/auth/login' },
    { name: 'Customer Management', owner: 'Customer team', path: '/customers' },
    { name: 'Product Management', owner: 'Product team', path: '/products' },
    { name: 'Quotes', owner: 'Quote team', path: '/quotes' },
    { name: 'Premium Management', owner: 'Premium team', path: '/premiums' },
    { name: 'Underwriting', owner: 'Risk evaluation team', path: '/underwriting' },
    { name: 'Policies', owner: 'Policy team', path: '/policies' },
    { name: 'Premium Scheduler', owner: 'Installment schedule team', path: '/premium-schedules' },
    { name: 'Payments', owner: 'Payment team', path: '/payments' },
    { name: 'Claims', owner: 'Claims team', path: '/claims' },
    { name: 'Investigations', owner: 'Claims investigation team', path: '/claim-investigations' },
    { name: 'Settlements', owner: 'Claims settlement team', path: '/claim-settlements' },
    { name: 'Documents', owner: 'Document team', path: '/documents' },
    { name: 'Agent Management', owner: 'Agent and commission team', path: '/agents' },
    { name: 'Notifications', owner: 'Notification team', path: '/notifications' },
    { name: 'Reports', owner: 'Reports team', path: '/reports' },
    { name: 'Raise Ticket', owner: 'Support team', path: '/raise-ticket' },
    { name: 'Reminders', owner: 'Reminder team', path: '/reminders' }
  ];
}
