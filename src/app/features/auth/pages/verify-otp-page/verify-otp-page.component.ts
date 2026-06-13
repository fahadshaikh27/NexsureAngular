import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-verify-otp-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="auth-page">
      <section class="auth-panel">
        <h1>Verify OTP</h1>
        <p class="muted">Wire this form to <code>AuthApiService.verifyOtp()</code>.</p>
        <form>
          <label>
            Email
            <input type="email" name="email" autocomplete="email">
          </label>
          <label>
            OTP
            <input type="text" name="otp" inputmode="numeric">
          </label>
          <button class="button" type="button">Verify</button>
        </form>
        <a routerLink="/auth/login">Back to login</a>
      </section>
    </main>
  `,
  styleUrl: '../login-page/login-page.component.scss'
})
export class VerifyOtpPageComponent {}
