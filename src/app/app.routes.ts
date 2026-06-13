import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { ShellComponent } from './layout/shell/shell.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth/login'
  },
  {
    path: '',
    canActivate: [authGuard],
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard-page.component').then((m) => m.DashboardPageComponent)
      },
      {
        path: 'admin-dashboard',
        canActivate: [roleGuard],
        data: { roles: ['Admin'] },
        loadComponent: () =>
          import('./features/dashboard/admin-dashboard-page.component').then((m) => m.AdminDashboardPageComponent)
      },
      {
        path: 'agent-dashboard',
        canActivate: [roleGuard],
        data: { roles: ['Agent'] },
        loadComponent: () =>
          import('./features/dashboard/agent-dashboard-page.component').then((m) => m.AgentDashboardPageComponent)
      },
      {
        path: 'customer-dashboard',
        canActivate: [roleGuard],
        data: { roles: ['Customer'] },
        loadComponent: () =>
          import('./features/dashboard/customer-dashboard-page.component').then((m) => m.CustomerDashboardPageComponent)
      },
      {
        path: 'customers',
        loadChildren: () => import('./features/customers/customers.routes').then((m) => m.CUSTOMERS_ROUTES)
      },
      {
        path: 'products',
        loadChildren: () => import('./features/products/products.routes').then((m) => m.PRODUCTS_ROUTES)
      },
      {
        path: 'quotes',
        loadChildren: () => import('./features/quotes/quotes.routes').then((m) => m.QUOTES_ROUTES)
      },
      {
        path: 'premiums',
        loadChildren: () => import('./features/premiums/premiums.routes').then((m) => m.PREMIUMS_ROUTES)
      },
      {
        path: 'underwriting',
        loadChildren: () =>
          import('./features/underwriting/underwriting.routes').then((m) => m.UNDERWRITING_ROUTES)
      },
      {
        path: 'policies',
        loadChildren: () => import('./features/policies/policies.routes').then((m) => m.POLICIES_ROUTES)
      },
      {
        path: 'claims',
        loadChildren: () => import('./features/claims/claims.routes').then((m) => m.CLAIMS_ROUTES)
      },
      {
        path: 'claim-investigations',
        loadChildren: () =>
          import('./features/claim-investigations/claim-investigations.routes').then(
            (m) => m.CLAIM_INVESTIGATIONS_ROUTES
          )
      },
      {
        path: 'claim-settlements',
        loadChildren: () =>
          import('./features/claim-settlements/claim-settlements.routes').then((m) => m.CLAIM_SETTLEMENTS_ROUTES)
      },
      {
        path: 'documents',
        loadChildren: () => import('./features/documents/documents.routes').then((m) => m.DOCUMENTS_ROUTES)
      },
      {
        path: 'agents',
        loadChildren: () => import('./features/agents/agents.routes').then((m) => m.AGENTS_ROUTES)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./features/notifications/notifications.routes').then((m) => m.NOTIFICATIONS_ROUTES)
      },
      {
        path: 'reports',
        loadChildren: () => import('./features/reports/reports.routes').then((m) => m.REPORTS_ROUTES)
      },
      {
        path: 'raise-ticket',
        loadChildren: () => import('./features/raise-ticket/raise-ticket.routes').then((m) => m.RAISE_TICKET_ROUTES)
      },
      {
        path: 'payments',
        loadChildren: () => import('./features/payments/payments.routes').then((m) => m.PAYMENTS_ROUTES)
      },
      {
        path: 'premium-schedules',
        loadChildren: () =>
          import('./features/premium-schedules/premium-schedules.routes').then((m) => m.PREMIUM_SCHEDULES_ROUTES)
      },
      {
        path: 'reminders',
        loadChildren: () => import('./features/reminders/reminders.routes').then((m) => m.REMINDERS_ROUTES)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
