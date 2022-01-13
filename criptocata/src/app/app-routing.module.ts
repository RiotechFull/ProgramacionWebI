import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // cargar el modulo de Routing
//definimos que componente vamos a rutear
import { HomeComponent} from './pages/home/home.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { MisserviciosComponent } from './pages/misservicios/misservicios.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MovimientosComponent } from './pages/movimientos/movimientos.component';
import { LoginComponent } from './pages/login/login.component';

//todos los path deben ser escritos exactamente como RouterLink
const routes: Routes = [{path: 'home' , component: HomeComponent},
{path: 'quienes-somos' , component:QuienesSomosComponent},
{path: 'misservicios', component: MisserviciosComponent},
{path: 'movimientos' , component:MovimientosComponent},
{path: 'registro', component: RegistroComponent},
{path: 'login', component: LoginComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}, //redireccionamiento por defecto

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
