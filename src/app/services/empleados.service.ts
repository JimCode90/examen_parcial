import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private httpClient: HttpClient) { }


  getEmpleados(){
    const urlApi = "https://servicios.campus.pe/servicioempleados.php";
    return this.httpClient.get(urlApi);
  }

}
