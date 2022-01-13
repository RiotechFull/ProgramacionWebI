import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { MisserviciosComponent } from './misservicios/misservicios.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { LoginComponent } from './login/login.component';
import { MovimientosComponent } from './movimientos/movimientos.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegistroComponent,
    HomeComponent,
    MisserviciosComponent,
    QuienesSomosComponent,
    LoginComponent,
    MovimientosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],

  exports:[
    RegistroComponent,
    HomeComponent,
    MisserviciosComponent,
    QuienesSomosComponent,
    LoginComponent
  ]
})
export class PagesModule { }
