import { Routes } from '@angular/router';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { VerifyOtpPageComponent } from './pages/verify-otp-page/verify-otp-page.component';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'forgot-password', component: ForgotPasswordPageComponent },
  { path: 'verify-otp', component: VerifyOtpPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];
