import { Record } from './models/record';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  constructor(private httpClient: HttpClient) {}

  getRecords(): Observable<Record[]> {
    return this.httpClient.get<Record[]>(`api/records`);
  }

  getRecordsByValue(search: string): Observable<Record[]> {
    return this.httpClient.get<Record[]>(`/api/records/?counterparty=^${search}`);
  }
}
