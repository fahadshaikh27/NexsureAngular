import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/http/api-endpoints';
import { ApiResponse } from '@core/models/api-response';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClaimSettlementsApiService {
  constructor(private readonly api: ApiService) {}

  getSettlements(): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.claimSettlements.list);
  }

  getSettlement(claimId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.claimSettlements.detail(claimId));
  }

  createSettlement(claimId: number | string, payload: unknown): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.claimSettlements.create(claimId), payload);
  }

  completeSettlement(claimId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.put<ApiResponse<unknown>>(API_ENDPOINTS.claimSettlements.complete(claimId));
  }
}
