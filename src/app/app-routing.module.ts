import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapturarCurpComponent } from './components/capturar-curp/capturar-curp.component';
import { MostrarReporteComponent } from './components/mostrar-reporte/mostrar-reporte.component';
import { MostrarTiempoDeUsoComponent } from './components/mostrar-tiempo-de-uso/mostrar-tiempo-de-uso.component';
import { MuestraPersonaEncontradaComponent } from './components/muestra-persona-encontrada/muestra-persona-encontrada.component';
import { RegistrarUsoComponent } from './components/registrar-uso/registrar-uso.component';

const routes: Routes = [
  { path: '', component: CapturarCurpComponent},
  { path: 'registrar', component: RegistrarUsoComponent },
  { path: 'mostrartiempodeuso/:id', component: MostrarTiempoDeUsoComponent },
  { path: 'mostrarpersonaencontrada', component: MuestraPersonaEncontradaComponent },
  { path: 'mostrarreporte', component: MostrarReporteComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }//El path match lo utilizaremos cuano tengamos niveles de rutas

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
