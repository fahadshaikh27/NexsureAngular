import { Injectable } from '@angular/core';
import { AuthSessionService } from './auth-session.service';

const TOKEN_KEY = 'nexsure.auth.token';

@Injectable({ providedIn: 'root' })
export class AuthTokenService {
  constructor(private readonly session: AuthSessionService) {}

  getToken(): string | null {
    return this.session.getSession()?.token ?? localStorage.getItem(TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  clear(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}
