import { Component, OnInit } from '@angular/core';
import { ChicoServicio, Service } from 'src/app/interfaces/RespApi';
import { ServicesByStatusService } from '../../../services/services-by-status.service';
import { MatTableDataSource } from '@angular/material/table';
import { Severity } from '../../../interfaces/RespApi';


export interface ServicioFake {
  Folio:    any;
  Usuario:  any;
  Status:   any;
}


@Component({
  selector: 'app-servicios-hoy',
  templateUrl: './servicios-hoy.component.html',
  styleUrls: ['./servicios-hoy.component.css']
})
export class ServiciosHoyComponent implements OnInit {

  UserSite_selected: string = "Carlos Castillo";
  Severities_selected: string= "Alta";
  UsersSite!: ChicoServicio[];

  Severities!: Severity[];

  constructor(private ServicesByStatusService: ServicesByStatusService) { }

  ngOnInit(): void {
    this.cargarUsersSite();
    this.cargarSeverities();
  }

  get _Users(){  
    
    return this.ServicesByStatusService.DataTable
  
  }



  ELEMENT_DATA_TABLE: ServicioFake[] = [
    {Folio:'2020-10-1:122', Usuario:'Computo', Status:'FFF'},
  ]


  displayedColumns: string[] = ['Folio', 'Usuario', 'Status', 'Asignar' ,"Nivel", "Acciones"];
  dataSource = new  MatTableDataSource <ServicioFake>(this.ELEMENT_DATA_TABLE);
  
  
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  cargarUsersSite(){

    this.ServicesByStatusService.Get_ActiveUsersAPI().subscribe(
      resp=>{
        this.UsersSite= resp.users;
      }
    )

  }


  cargarSeverities(){

    this.ServicesByStatusService.Get_SeveritiesAPI().subscribe(
      resp=>{
        this.Severities= resp.severities;
      }
    )

  }


}
