import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Computer } from 'src/app/interfaces/RespApi';
import { ServicesByStatusService } from '../../../services/services-by-status.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  constructor(
    private ServicesByStatusService: ServicesByStatusService,
  ) { }

  ngOnInit(): void {
    this.CargarCompus()
  }
  get data(){  
    
    return this.ServicesByStatusService.DataInventory
  
  }

  Cargando= false;
  // existe= false;
  PaginaActual : number =1;
  TotalResultados: number = 0;

  ELEMENT_DATA_TABLE: Computer[] = this.data;
  displayedColumns: string[] = ['ubication', 'folio','name', 'macAddress', 'Acciones'];
  dataSource = new  MatTableDataSource <Computer>(this.ELEMENT_DATA_TABLE);


  CargarCompus(){

    this.ServicesByStatusService.GetInventory("computers").subscribe(
      resp=>{
        this.dataSource.data = resp.computers as Computer[];
        this.TotalResultados =  resp.totalResults;
        this.Cargando= false;

      }
    )

  }

}
