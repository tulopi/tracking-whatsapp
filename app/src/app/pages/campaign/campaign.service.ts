import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private http = inject(HttpClient);
  private urlApi = "http://localhost:8080/api/campaign/";
  constructor() { };
  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
