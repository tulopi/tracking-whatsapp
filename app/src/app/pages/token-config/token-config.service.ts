import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenConfigService {

  private urlApi = "localhost:8080/api/campaign/";
  constructor(private http: HttpClient) { };
  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
