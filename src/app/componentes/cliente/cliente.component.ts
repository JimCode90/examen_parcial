import { Component, OnInit } from '@angular/core';
import {ClientesService} from "../../services/clientes.service";
import {Cliente} from "../../entities/cliente";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  arrayClientes: Cliente[] | undefined;

  paginatorCliente: number = 1;
  filtro: any = { empresa: '' };
  ordenamiento : string = 'empresa';
  reversa: boolean = false;
  clienteSeleccionado: Cliente | undefined;

  constructor(private clienteServicio: ClientesService) { }

  ngOnInit(): void {

    this.clienteServicio.getClientes().subscribe(
      (respuesta) => {
        console.log(respuesta)
        this.arrayClientes = JSON.parse(JSON.stringify(respuesta))
      }
    )
  }

  setOrder(nombreColumna: string){
    if (this.ordenamiento == nombreColumna){
      this.reversa = !this.reversa
    }

    this.ordenamiento = nombreColumna;
  }

  seleccionarCliente(cliente: Cliente){
    console.log(cliente)
    this.clienteSeleccionado = cliente
  }

}
