import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthSessionService } from '@core/services/auth-session.service';

interface NavItem {
  icon: string;
  label: string;
  path: string;
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent {
  constructor(
    private readonly router: Router,
    private readonly session: AuthSessionService
  ) {}

  readonly navItems: NavItem[] = [
    { icon: 'DB', label: 'Dashboard', path: '/dashboard' },
    { icon: 'CU', label: 'Customers', path: '/customers' },
    { icon: 'PR', label: 'Products', path: '/products' },
    { icon: 'QT', label: 'Quotes', path: '/quotes' },
    { icon: 'PM', label: 'Premium Mgmt', path: '/premiums' },
    { icon: 'UW', label: 'Underwriting', path: '/underwriting' },
    { icon: 'PO', label: 'Policies', path: '/policies' },
    { icon: 'CL', label: 'Claims', path: '/claims' },
    { icon: 'IN', label: 'Investigations', path: '/claim-investigations' },
    { icon: 'ST', label: 'Settlements', path: '/claim-settlements' },
    { icon: 'DO', label: 'Documents', path: '/documents' },
    { icon: 'AG', label: 'Agents', path: '/agents' },
    { icon: 'NT', label: 'Notifications', path: '/notifications' },
    { icon: 'RP', label: 'Reports', path: '/reports' },
    { icon: 'TK', label: 'Raise Ticket', path: '/raise-ticket' },
    { icon: 'PY', label: 'Payments', path: '/payments' },
    { icon: 'SC', label: 'Scheduler', path: '/premium-schedules' },
    { icon: 'RM', label: 'Reminders', path: '/reminders' }
  ];

  logout(): void {
    this.session.clear();
    void this.router.navigateByUrl('/auth/login');
  }
}
