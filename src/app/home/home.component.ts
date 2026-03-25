import { Component, OnInit, inject } from '@angular/core';
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

  lista: any[] = [];
  carregando = true;
  erro: string | null = null;

  ngOnInit(): void {
    this.pagamentoService.getLista().subscribe({
      next: (dados) => {
        this.lista = dados;
        this.carregando = false;
      },
      error: (err) => {
        this.erro = 'Erro ao carregar a lista.';
        this.carregando = false;
        console.error(err);
      }
    });
  }
}
