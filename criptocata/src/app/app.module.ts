import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; //modulo routing
import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layout.module';
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms'; // Importar modulo para formularios reactivos
import { HttpClientModule} from '@angular/common/http'; // Importar HttpClient pero antes imports para que lo reconozca

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //modulo routing
    LayoutModule,
    PagesModule,

    ReactiveFormsModule, //modulo forms Reactivo
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
