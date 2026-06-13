import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/http/api-endpoints';
import { ApiResponse } from '@core/models/api-response';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AgentsApiService {
  constructor(private readonly api: ApiService) {}

  getAgents(): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.agents.base);
  }

  getAgent(agentId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.agents.detail(agentId));
  }

  getCommissions(agentId: number | string): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.agents.commissions(agentId));
  }
}
