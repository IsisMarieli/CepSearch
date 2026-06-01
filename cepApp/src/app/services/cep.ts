import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular'; 

@Injectable({
  providedIn: 'root',
})
export class CepService {
  cepDigitado: string = '';
  resultadoCep: any;
  historico: any[] = [];

  constructor(
    private http: HttpClient, 
    private alertCtrl: AlertController 
  ) {
    this.carregarHistorico();
  }

  buscarCep(cep: string) {
    this.cepDigitado = cep;
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  salvarResultado(resultado: any) {
    this.resultadoCep = resultado;
    
    const jaExiste = this.historico.some(item => item.cep === resultado.cep);
    if (!jaExiste) {
      this.historico.unshift(resultado); 
      this.salvarHistorico();
    }

    this.exibirAlerta(resultado.cep);
  }

  async exibirAlerta(cep: string) {
    const alert = await this.alertCtrl.create({
      header: 'Endereço Localizado!',
      message: `O CEP ${cep} foi encontrado e adicionado ao seu histórico.`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  private salvarHistorico() {
    localStorage.setItem('historicoCeps', JSON.stringify(this.historico));
  }

  private carregarHistorico() {
    const dados = localStorage.getItem('historicoCeps');
    if (dados) {
      this.historico = JSON.parse(dados);
    }
  }

  removerItem(index: number) {
    this.historico.splice(index, 1);
    this.salvarHistorico();
  }

  limparTudo() {
    this.historico = [];
    localStorage.removeItem('historicoCeps');
  }
}