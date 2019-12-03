import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfisServicesService {

  perfisURL = 'http://localhost:3000/pessoas';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(`${this.perfisURL}`);
  }

}
