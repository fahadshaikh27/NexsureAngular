import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/http/api-endpoints';
import { ApiResponse } from '@core/models/api-response';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

export interface LoginRequest {
  email: string;
  password: string;
  role?: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface AuthResult {
  token: string;
  userId: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  constructor(private readonly api: ApiService) {}

  login(payload: LoginRequest): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.auth.login, payload);
  }

  register(payload: RegisterRequest): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.auth.register, payload);
  }

  forgotPassword(payload: ForgotPasswordRequest): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.auth.forgotPassword, payload);
  }

  verifyOtp(payload: VerifyOtpRequest): Observable<ApiResponse<AuthResult>> {
    return this.api.post<ApiResponse<AuthResult>>(API_ENDPOINTS.auth.verifyOtp, payload);
  }
}
