import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/http/api-endpoints';
import { ApiResponse } from '@core/models/api-response';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UnderwritingApiService {
  constructor(private readonly api: ApiService) {}

  getCases(): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.underwriting.base);
  }

  getCase(caseId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.underwriting.detail(caseId));
  }

  approveCase(caseId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.put<ApiResponse<unknown>>(API_ENDPOINTS.underwriting.approve(caseId));
  }

  rejectCase(caseId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.put<ApiResponse<unknown>>(API_ENDPOINTS.underwriting.reject(caseId));
  }
}
