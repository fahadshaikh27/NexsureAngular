import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthSessionService, UserRole } from '@core/services/auth-session.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly session = inject(AuthSessionService);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  login(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const role = this.resolveRole(value.email);

    this.session.setSession({
      email: value.email,
      role,
      token: 'temporary-ui-token'
    });

    void this.router.navigateByUrl(this.session.dashboardPathForRole(role));
  }

  private resolveRole(email: string): UserRole {
    const normalizedEmail = email.toLowerCase();

    if (normalizedEmail.includes('admin')) {
      return 'Admin';
    }

    if (normalizedEmail.includes('agent')) {
      return 'Agent';
    }

    return 'Customer';
  }
}
