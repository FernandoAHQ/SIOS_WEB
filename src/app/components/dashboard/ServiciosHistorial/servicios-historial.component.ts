import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/app/interfaces/RespApi';
import { ServicesByStatusService } from '../../../services/services-by-status.service';
import {MatPaginator} from '@angular/material/paginator';

interface LEVELS {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-servicios-historial',
  templateUrl: './servicios-historial.component.html',
  styleUrls: ['./servicios-historial.component.css']
})
export class ServiciosHistorialComponent implements OnInit {

  

  role_selected: string = "USER_ROLE" ;

  Levels: LEVELS[] = [
    {value: 'assigned', viewValue: 'Asignado'},
    {value: 'not-assigned', viewValue: 'No Asignado'}
  ];

  constructor( private ServicesByStatusService: ServicesByStatusService ) { }

  ngOnInit(): void {

    this._getInitServices("assigned");
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

  _getInitServices(status : string){ 

    this.ServicesByStatusService.Get_ServicesAPI(status).subscribe(
      resp=> this.dataSource.data = resp.services as Service[]

    )
  }

  cargarUsuarios(){
      const data= "Admin_role"
      this.ServicesByStatusService.Get_ServicesAPI(data).subscribe(
      resp=> this.dataSource.data = resp.services as Service[]
    )
  }

  cambioStatus(newStatus : any){

    this._getInitServices(newStatus)

  }

}
