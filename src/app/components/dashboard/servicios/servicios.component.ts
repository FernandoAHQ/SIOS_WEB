import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CambiarHistorial(){

    console .log ("Historial")

  }

  CambiarHoy(){

    console .log ("HOY")

  }


}
