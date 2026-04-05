import { Component } from '@angular/core';
import { CepService } from '../services/cep';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})

export class Tab2Page { 
  constructor(public cepService: CepService) {} 
} 