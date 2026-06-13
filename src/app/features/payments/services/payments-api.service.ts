import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/http/api-endpoints';
import { ApiResponse } from '@core/models/api-response';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaymentsApiService {
  constructor(private readonly api: ApiService) {}

  createOrder(payload: unknown): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.payments.createOrder, payload);
  }

  verifyPayment(payload: unknown): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.payments.verify, payload);
  }

  getPaymentHistory(customerId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.payments.history(customerId));
  }

  getPayment(paymentId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.payments.detail(paymentId));
  }
}
