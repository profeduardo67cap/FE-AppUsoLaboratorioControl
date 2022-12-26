import { Component, OnInit } from '@angular/core';
import { Usos } from 'src/app/interfaces/Usos';
import { Time } from '@angular/common';

@Component({
  selector: 'app-mostrar-reporte',
  templateUrl: './mostrar-reporte.component.html',
  styleUrls: ['./mostrar-reporte.component.css']
})
export class MostrarReporteComponent implements OnInit {

  listaUsos: Usos[] = [
    { id: '0001', FechaDeUso: new Date(), HoraDeEntrada: '9:20 pm', HoraDeSalida: '10:30 pm'},
    { id: '0002', FechaDeUso: new Date(), HoraDeEntrada: '11:20 pm', HoraDeSalida: '12:30 pm'},
    { id: '0003', FechaDeUso: new Date(), HoraDeEntrada: '15:20 pm', HoraDeSalida: '17:30 pm'},
  ];

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
