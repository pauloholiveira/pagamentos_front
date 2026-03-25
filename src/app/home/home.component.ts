import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentoService } from '../services/pagamento.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private readonly pagamentoService = inject(PagamentoService);

  lista = signal<any[]>([]);
  carregando = signal(true);
  erro = signal<string | null>(null);

  ngOnInit(): void {
    this.pagamentoService.getLista().subscribe({
      next: (dados) => {
        this.lista.set(dados?.pagamentos ?? []);
        this.carregando.set(false);
      },
      error: (err) => {
        this.erro.set('Erro ao carregar a lista.');
        this.carregando.set(false);
        console.error(err);
      }
    });
  }
}
