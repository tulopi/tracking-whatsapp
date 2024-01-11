import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private http: HttpClient;
  private urlApi: string = 'http://localhost:8080/api/config/659e807aeb397fe1ea543e36';

  constructor(http: HttpClient) {
    this.http = http;
  }


  public sendData(data: {
    emoji_apertura?: string[];
    emoji_cierre?: string[];
    frase_bienvenida?: string[];
    frase_despedida?: string[];
    cuerpo_mensaje?: string[];
  }): Observable<any> {
    const body = JSON.stringify(data);
    return this.http.put<any>(this.urlApi, body);
  }
}
