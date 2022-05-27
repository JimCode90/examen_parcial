import { Component, OnInit } from '@angular/core';
import {Empleado} from "../../entities/empleado";
import {EmpleadosService} from "../../services/empleados.service";

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrls: ['./last-news.component.css']
})
export class LastNewsComponent implements OnInit {

  arrayEmpleados: Empleado[] | undefined;

  constructor(private empladosServicio: EmpleadosService) { }

  ngOnInit(): void {

    this.empladosServicio.getEmpleados().subscribe(
      (respuesta) => {
        console.log(respuesta)
        this.arrayEmpleados = JSON.parse(JSON.stringify(respuesta))
      }
    )


  }

}
