import { Component, OnInit } from '@angular/core';
import { PerfisServicesService } from '../perfis-services.service';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css']
})
export class ListaPessoasComponent implements OnInit {

  pessoas: Array<any>;

  constructor(private perfisService: PerfisServicesService) { }

  ngOnInit() {

    this.listar();
  }

  listar() {
    this.perfisService.listar()
    .subscribe(dados => this.pessoas = dados );
  }

}
