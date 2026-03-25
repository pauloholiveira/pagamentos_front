import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private readonly baseUrl = environment.apiUrl;
  private readonly http = inject(HttpClient);

  getLista(): Observable<{ pagamentos: any[] }> {
    return this.http.get<{ pagamentos: any[] }>(`${this.baseUrl}/v1/payments`).pipe(
      timeout(10000)
    );
  }
}
