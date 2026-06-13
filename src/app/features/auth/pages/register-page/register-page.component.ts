import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthSessionService, UserRole } from '@core/services/auth-session.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: '../login-page/login-page.component.scss'
})
export class RegisterPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly session = inject(AuthSessionService);

  readonly roles: UserRole[] = ['Admin', 'Agent', 'Customer'];

  readonly form = this.fb.nonNullable.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['Customer' as UserRole, Validators.required]
  });

  register(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    this.session.setSession({
      email: value.email,
      role: value.role,
      token: 'temporary-ui-token'
    });

    void this.router.navigateByUrl(this.session.dashboardPathForRole(value.role));
  }
}
