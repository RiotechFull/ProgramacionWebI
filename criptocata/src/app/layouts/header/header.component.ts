import { Component, OnInit } from '@angular/core';
import { SomosService } from 'src/app/services/somos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private datoSomos:SomosService) { }

  ngOnInit(): void {
     this.datoSomos.obtenerDatos();
  }

}
