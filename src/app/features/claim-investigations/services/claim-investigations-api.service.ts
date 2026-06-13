import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/http/api-endpoints';
import { ApiResponse } from '@core/models/api-response';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClaimInvestigationsApiService {
  constructor(private readonly api: ApiService) {}

  getInvestigations(): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.claimInvestigations.list);
  }

  getInvestigation(claimId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.claimInvestigations.detail(claimId));
  }

  createInvestigation(claimId: number | string, payload: unknown): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.claimInvestigations.create(claimId), payload);
  }

  updateInvestigation(claimId: number | string, payload: unknown): Observable<ApiResponse<unknown>> {
    return this.api.put<ApiResponse<unknown>>(API_ENDPOINTS.claimInvestigations.update(claimId), payload);
  }

  deleteInvestigation(investigationId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.delete<ApiResponse<unknown>>(API_ENDPOINTS.claimInvestigations.delete(investigationId));
  }
}
