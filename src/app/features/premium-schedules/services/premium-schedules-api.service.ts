import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/http/api-endpoints';
import { ApiResponse } from '@core/models/api-response';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PremiumSchedulesApiService {
  constructor(private readonly api: ApiService) {}

  generateSchedule(payload: unknown): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.premiumSchedules.generate, payload);
  }

  getByPolicy(policyId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.premiumSchedules.byPolicy(policyId));
  }

  getSchedule(scheduleId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.premiumSchedules.detail(scheduleId));
  }

  markPaid(scheduleId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.put<ApiResponse<unknown>>(API_ENDPOINTS.premiumSchedules.markPaid(scheduleId));
  }
}
