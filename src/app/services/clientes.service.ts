import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  getClientes(){
    const urlApi = "https://servicios.campus.pe/servicioclientes.php";
    return this.httpClient.get(urlApi);
  }


}
