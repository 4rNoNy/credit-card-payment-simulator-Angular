import { pessoas } from './../models/placeholder.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) { }
  public getPessoas(): Observable<any> {
    return this.http.get('https://run.mocky.io/v3/537e64d9-434d-411e-9b83-cbee1641d79c');
  }
}
