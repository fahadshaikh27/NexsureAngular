import { Injectable } from '@angular/core';

export type UserRole = 'Admin' | 'Agent' | 'Customer';

export interface AuthSession {
  token: string;
  role: UserRole;
  email: string;
}

const SESSION_KEY = 'nexsure.auth.session';

@Injectable({ providedIn: 'root' })
export class AuthSessionService {
  getSession(): AuthSession | null {
    const value = localStorage.getItem(SESSION_KEY);
    return value ? (JSON.parse(value) as AuthSession) : null;
  }

  setSession(session: AuthSession): void {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  clear(): void {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem('nexsure.auth.token');
  }

  isLoggedIn(): boolean {
    return Boolean(this.getSession()?.token);
  }

  getRole(): UserRole | null {
    return this.getSession()?.role ?? null;
  }

  dashboardPathForRole(role: UserRole): string {
    const paths: Record<UserRole, string> = {
      Admin: '/admin-dashboard',
      Agent: '/agent-dashboard',
      Customer: '/customer-dashboard'
    };

    return paths[role];
  }
}
