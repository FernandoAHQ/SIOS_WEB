import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interfaces/RespApi';
import { ServicesByStatusService } from '../../../services/services-by-status.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-servicios-hoy',
  templateUrl: './servicios-hoy.component.html',
  styleUrls: ['./servicios-hoy.component.css']
})
export class ServiciosHoyComponent implements OnInit {

  constructor(private ServicesByStatusService: ServicesByStatusService) { }

  ngOnInit(): void {

  }

  get _Users(){  
    
    return this.ServicesByStatusService.DataTable
  
  }

  ELEMENT_DATA_TABLE: Service[] = this._Users;
  displayedColumns: string[] = ['ID', 'Usuario', 'Status', 'Asignado' ,"Nivel",'Acciones'];
  dataSource = new  MatTableDataSource <Service>(this.ELEMENT_DATA_TABLE);
  
  
    

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
