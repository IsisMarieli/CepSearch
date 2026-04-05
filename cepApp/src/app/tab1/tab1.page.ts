import { Component } from '@angular/core';
import { CepService } from '../services/cep'; 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})

export class Tab1Page { 
  cep: string = ''; 
  
  constructor(public cepService: CepService) {} 
    
  buscar() { 
    this.cepService.buscarCep(this.cep).subscribe((resultado: any) => { 
      this.cepService.salvarResultado(resultado); 
    }); 
  } 
} 
