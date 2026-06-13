import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/http/api-endpoints';
import { ApiResponse } from '@core/models/api-response';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PremiumsApiService {
  constructor(private readonly api: ApiService) {}

  getPremiums(): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.premiums.base);
  }

  getPremium(premiumId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.premiums.detail(premiumId));
  }

  savePremium(payload: unknown): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.premiums.base, payload);
  }
}
