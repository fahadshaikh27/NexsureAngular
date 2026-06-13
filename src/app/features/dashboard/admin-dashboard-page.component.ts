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
  selector: 'app-admin-dashboard-page',
  standalone: true,
  imports: [FormsModule, PageHeaderComponent, RouterLink],
  template: `
    <app-page-header title="Admin Dashboard" description="Administration workspace for managing the insurance platform.">
      <button class="button" type="button">New Report</button>
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
      <input type="search" [(ngModel)]="searchText" placeholder="Search admin modules">
      <select [(ngModel)]="statusFilter">
        <option value="">All statuses</option>
        <option value="Review">Review</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
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
          <div class="progress" aria-label="Module progress">
            <span [style.width.%]="item.progress"></span>
          </div>
          <small>{{ item.count }} records ready</small>
        </a>
      } @empty {
        <section class="page-card empty-state">No module matched your search.</section>
      }
    </section>

    <aside class="page-card activity">
      <strong>Today</strong>
      <p class="muted">12 policies pending approval, 4 claims waiting for review, 3 tickets open.</p>
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
export class AdminDashboardPageComponent {
  searchText = '';
  statusFilter = '';

  readonly stats = [
    { label: 'Active policies', value: '1,284', caption: 'Across all products' },
    { label: 'Pending claims', value: '42', caption: 'Need review' },
    { label: 'Agents', value: '86', caption: 'Active this month' },
    { label: 'Open tickets', value: '13', caption: 'Support queue' }
  ];

  readonly items: DashboardItem[] = [
    { name: 'Customers', description: 'Manage customer records and nominees.', path: '/customers', count: 328, status: 'Active', progress: 82 },
    { name: 'Products', description: 'Manage insurance products and types.', path: '/products', count: 18, status: 'Active', progress: 76 },
    { name: 'Policies', description: 'Review, approve, reject, and renew policies.', path: '/policies', count: 126, status: 'Review', progress: 64 },
    { name: 'Claims', description: 'Monitor claim workflows.', path: '/claims', count: 42, status: 'Review', progress: 58 },
    { name: 'Agents', description: 'Manage agents and commissions.', path: '/agents', count: 86, status: 'Active', progress: 70 },
    { name: 'Reports', description: 'View operational reports.', path: '/reports', count: 9, status: 'Pending', progress: 46 }
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
