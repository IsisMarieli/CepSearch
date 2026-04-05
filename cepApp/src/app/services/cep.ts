import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  cepDigitado: string = '';
  resultadoCep: any;
  historico: any[] = [];

  constructor(private http: HttpClient) {}

  buscarCep(cep: string) {
    this.cepDigitado = cep;
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  salvarResultado(resultado: any) {
    this.resultadoCep = resultado;
    this.historico.push(resultado);
  }
}
