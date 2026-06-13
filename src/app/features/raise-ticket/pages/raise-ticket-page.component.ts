import { Component } from '@angular/core';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

@Component({
  selector: 'app-raise-ticket-page',
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Raise Ticket" description="Support ticket creation, assignment, status, and resolution workflow area.">
      <button class="button" type="button">New Ticket</button>
    </app-page-header>

    <section class="page-card">
      <strong>Raise ticket module</strong>
      <p class="muted">Connect screens here using <code>RaiseTicketApiService</code>.</p>
    </section>
  `
})
export class RaiseTicketPageComponent {}
