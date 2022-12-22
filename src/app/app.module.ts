import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapturarCurpComponent } from './components/capturar-curp/capturar-curp.component';
import { MuestraPersonaEncontradaComponent } from './components/muestra-persona-encontrada/muestra-persona-encontrada.component';
import { RegistrarUsoComponent } from './components/registrar-uso/registrar-uso.component';
import { MostrarTiempoDeUsoComponent } from './components/mostrar-tiempo-de-uso/mostrar-tiempo-de-uso.component';
import { MostrarReporteComponent } from './components/mostrar-reporte/mostrar-reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    CapturarCurpComponent,
    MuestraPersonaEncontradaComponent,
    RegistrarUsoComponent,
    MostrarTiempoDeUsoComponent,
    MostrarReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
