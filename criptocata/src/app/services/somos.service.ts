import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomosService {

  constructor() { }


//ejemplo de obtener datos por consola
  obtenerDatos (){
    console.log ('El servicio en la App esta funcionando correctamente')
  }
  //fin del ejemplo

}
