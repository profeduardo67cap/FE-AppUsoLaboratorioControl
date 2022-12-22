import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapturarCurpComponent } from './components/capturar-curp/capturar-curp.component';
import { MuestraPersonaEncontradaComponent } from './components/muestra-persona-encontrada/muestra-persona-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    CapturarCurpComponent,
    MuestraPersonaEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
