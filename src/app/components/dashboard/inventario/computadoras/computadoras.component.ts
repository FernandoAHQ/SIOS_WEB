import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Computer } from 'src/app/interfaces/RespApi';
import { ServicesByStatusService } from '../../../../services/services-by-status.service';
import { ModificarComputadorasComponent } from './modificar-computadoras/modificar-computadoras.component';

@Component({
  selector: 'app-computadoras',
  templateUrl: './computadoras.component.html',
  styleUrls: ['./computadoras.component.css']
})
export class ComputadorasComponent implements OnInit {

  constructor(

    public dialog: MatDialog,
    private ServicesByStatusService:ServicesByStatusService ,
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
  displayedColumns: string[] = ['ubication', 'folio','name', 'Acciones'];
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

  editar(pc:Computer){

    this.dialog.open(ModificarComputadorasComponent, {width: '400px',data:pc})


  }

}
