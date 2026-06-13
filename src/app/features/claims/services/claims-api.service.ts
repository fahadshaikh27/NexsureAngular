import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/http/api-endpoints';
import { ApiResponse } from '@core/models/api-response';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClaimsApiService {
  constructor(private readonly api: ApiService) {}

  getClaims(): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.claims.list);
  }

  getClaim(claimId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.claims.detail(claimId));
  }

  createClaim(payload: unknown): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.claims.create, payload);
  }

  approveClaim(claimId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.put<ApiResponse<unknown>>(API_ENDPOINTS.claims.approve(claimId));
  }

  rejectClaim(claimId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.put<ApiResponse<unknown>>(API_ENDPOINTS.claims.reject(claimId));
  }
}
