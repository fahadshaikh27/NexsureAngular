import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthSessionService, UserRole } from '../services/auth-session.service';

export const roleGuard: CanActivateFn = (route) => {
  const session = inject(AuthSessionService);
  const router = inject(Router);
  const role = session.getRole();
  const allowedRoles = (route.data['roles'] ?? []) as UserRole[];

  if (role && allowedRoles.includes(role)) {
    return true;
  }

  return role ? router.createUrlTree([session.dashboardPathForRole(role)]) : router.createUrlTree(['/auth/login']);
};
