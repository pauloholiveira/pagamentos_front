import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private readonly baseUrl = 'https://pagamentosestudos-bkfmcycmhresd0a2.brazilsouth-01.azurewebsites.net';
  private readonly http = inject(HttpClient);

  getLista(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/lista`);
  }
}
