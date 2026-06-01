import { Component } from '@angular/core';
import { CepService } from '../services/cep';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  constructor(public cepService: CepService) {}

  buscar() {
    const cep = this.cepService.cepDigitado;

    if (cep && cep.trim().length === 8) {
      
      this.cepService.buscarCep(cep).subscribe({
        next: (dados: any) => {
          if (dados.erro) {
            alert('CEP não encontrado na base de dados!');
          } else {
            this.cepService.salvarResultado(dados);
          }
        },
        error: (err) => {
          alert('Erro ao conectar com o serviço ViaCEP.');
          console.error(err);
        }
      });

    } else {
      alert('Por favor, digite um CEP válido com 8 números.');
    }
  }
}