import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';

interface DashboardItem {
  name: string;
  description: string;
  path: string;
  count: number;
  status: string;
  progress: number;
}

@Component({
  selector: 'app-agent-dashboard-page',
  standalone: true,
  imports: [FormsModule, PageHeaderComponent, RouterLink],
  template: `
    <app-page-header title="Agent Dashboard" description="Agent workspace for customers, quotes, policies, and commissions.">
      <button class="button" type="button">Create Quote</button>
    </app-page-header>

    <section class="stats">
      @for (stat of stats; track stat.label) {
        <article class="page-card stat-card">
          <span>{{ stat.label }}</span>
          <strong>{{ stat.value }}</strong>
          <small>{{ stat.caption }}</small>
        </article>
      }
    </section>

    <section class="toolbar">
      <input type="search" [(ngModel)]="searchText" placeholder="Search agent modules">
      <select [(ngModel)]="statusFilter">
        <option value="">All statuses</option>
        <option value="Active">Active</option>
        <option value="Due">Due</option>
        <option value="Draft">Draft</option>
      </select>
    </section>

    <section class="grid">
      @for (item of filteredItems; track item.path) {
        <a class="page-card module-card" [routerLink]="item.path">
          <div class="card-top">
            <span class="module-icon">{{ item.name.slice(0, 2).toUpperCase() }}</span>
            <span class="status">{{ item.status }}</span>
          </div>
          <strong>{{ item.name }}</strong>
          <span>{{ item.description }}</span>
          <div class="progress">
            <span [style.width.%]="item.progress"></span>
          </div>
          <small>{{ item.count }} items assigned</small>
        </a>
      } @empty {
        <section class="page-card empty-state">No module matched your search.</section>
      }
    </section>

    <aside class="page-card activity">
      <strong>Next actions</strong>
      <p class="muted">Follow up on 7 quotes, upload 5 policy documents, and resolve 2 customer tickets.</p>
    </aside>
  `,
  styles: [
    `
      .stats {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        margin-bottom: 18px;
      }

      .stat-card {
        display: grid;
        gap: 8px;
        min-height: 124px;
      }

      .stat-card strong {
        font-size: 28px;
      }

      .stat-card span,
      .stat-card small {
        color: var(--muted);
      }

      .toolbar {
        display: grid;
        gap: 12px;
        grid-template-columns: minmax(220px, 1fr) 180px;
        margin-bottom: 18px;
      }

      input,
      select {
        border: 1px solid var(--line);
        border-radius: 6px;
        min-height: 42px;
        padding: 0 12px;
      }

      .grid {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      .module-card {
        display: grid;
        gap: 10px;
        min-height: 190px;
        transition: border-color 160ms ease, transform 160ms ease;
      }

      .module-card:hover {
        border-color: var(--primary);
        transform: translateY(-2px);
      }

      .card-top {
        align-items: center;
        display: flex;
        justify-content: space-between;
      }

      .module-icon {
        align-items: center;
        background: #e7f5ff;
        border-radius: 8px;
        color: var(--primary-dark);
        display: inline-flex;
        font-size: 12px;
        font-weight: 800;
        height: 38px;
        justify-content: center;
        width: 38px;
      }

      .module-card .status {
        background: #e9f7ef;
        border-radius: 999px;
        color: #1f7a3b;
        font-size: 12px;
        font-weight: 700;
        padding: 5px 9px;
      }

      .module-card > span {
        color: var(--muted);
      }

      .progress {
        background: #edf2f7;
        border-radius: 999px;
        height: 8px;
        overflow: hidden;
      }

      .progress span {
        background: var(--accent);
        display: block;
        height: 100%;
      }

      .activity {
        margin-top: 18px;
      }

      .empty-state {
        color: var(--muted);
      }

      @media (max-width: 700px) {
        .toolbar {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class AgentDashboardPageComponent {
  searchText = '';
  statusFilter = '';

  readonly stats = [
    { label: 'Customers', value: '74', caption: 'Assigned accounts' },
    { label: 'Open quotes', value: '21', caption: 'Need follow-up' },
    { label: 'Policies', value: '39', caption: 'Created this month' },
    { label: 'Commission', value: '18%', caption: 'Current cycle' }
  ];

  readonly items: DashboardItem[] = [
    { name: 'Customers', description: 'Create and maintain customer profiles.', path: '/customers', count: 74, status: 'Active', progress: 80 },
    { name: 'Quotes', description: 'Prepare quotes for customers.', path: '/quotes', count: 21, status: 'Draft', progress: 62 },
    { name: 'Policies', description: 'Create policies for customers.', path: '/policies', count: 39, status: 'Active', progress: 72 },
    { name: 'Documents', description: 'Upload customer and policy documents.', path: '/documents', count: 12, status: 'Due', progress: 48 },
    { name: 'Payments', description: 'Track customer payment status.', path: '/payments', count: 16, status: 'Due', progress: 55 },
    { name: 'Raise Ticket', description: 'Create support tickets.', path: '/raise-ticket', count: 2, status: 'Active', progress: 90 }
  ];

  get filteredItems(): DashboardItem[] {
    const search = this.searchText.trim().toLowerCase();
    return this.items.filter((item) => {
      const matchesSearch = !search || item.name.toLowerCase().includes(search) || item.description.toLowerCase().includes(search);
      const matchesStatus = !this.statusFilter || item.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }
}
