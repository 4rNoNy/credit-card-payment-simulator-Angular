import { Cartao } from './../models/cardp.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardpService {

  baseUrl = "https://run.mocky.io/v3/187310a0-2db9-492f-8511-cc4c17a7be07"


  constructor(private http: HttpClient) { }

  retorna(cartao: Cartao): Observable<Cartao> {
    return this.http.post<Cartao>(this.baseUrl, cartao)
  }
}
