import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/http/api-endpoints';
import { ApiResponse } from '@core/models/api-response';
import { ApiService } from '@core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RemindersApiService {
  constructor(private readonly api: ApiService) {}

  getReminders(): Observable<ApiResponse<unknown>> {
    return this.api.get<ApiResponse<unknown>>(API_ENDPOINTS.reminders.base);
  }

  sendReminder(payload: unknown): Observable<ApiResponse<unknown>> {
    return this.api.post<ApiResponse<unknown>>(API_ENDPOINTS.reminders.send, payload);
  }
}
