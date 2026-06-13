import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/http/api-endpoints';
import { ApiResponse } from '@core/models/api-response';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DocumentsApiService {
  constructor(private readonly api: ApiService) {}

  uploadPolicyDocument(formData: FormData): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.documents.uploadPolicyCustomer, formData);
  }

  uploadClaimDocument(formData: FormData): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.documents.uploadClaimCustomer, formData);
  }

  getPolicyDocuments(policyId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.documents.policyDocs(policyId));
  }

  getClaimDocuments(claimId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.documents.claimDocs(claimId));
  }

  approveDocument(id: number | string): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.documents.approve(id));
  }

  rejectDocument(id: number | string): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.documents.reject(id));
  }
}
