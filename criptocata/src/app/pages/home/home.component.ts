import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 //para crear una interpolacion crear variable
  mensajeSinLogin='Los movimientos se visualizarán una vez logueado';

  constructor() { }

  ngOnInit(): void { // debe agregarse : void
  }

}
