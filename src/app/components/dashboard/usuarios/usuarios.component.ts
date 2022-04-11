import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataUsers } from 'src/app/interfaces/InterfaceAllUser';
import { AllUsersTableService } from 'src/app/services/all-users-table.service';
import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import {FormControl} from '@angular/forms';
  interface Roles {
    value: string;
    viewValue: string;
  }
  
  
 

  @Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
  })




export class UsuariosComponent implements OnInit {

  role_selected: string = "USER_ROLE" ;

  roles: Roles[] = [
    {value: 'ADMIN_ROLE', viewValue: 'ADMINSTRADOR'},
    {value: 'SITE_ROLE', viewValue: 'SITE'},
    {value: 'USER_ROLE', viewValue: 'DEPARTAMENTOS'},
  ];

  

  constructor(
    private AllUsersTableService: AllUsersTableService ) {
 
     }

    ngOnInit(): void {
      this._getInitUsers("USER_ROLE");
    }

    get _Users(){  
    
    return this.AllUsersTableService.DataTable
  
    }

  

  ELEMENT_DATA_TABLE: DataUsers[] = this._Users;
  displayedColumns: string[] = ['Foto', 'Usuario', 'Nombre', 'Role', 'Acciones'];
  dataSource = new  MatTableDataSource <DataUsers>(this.ELEMENT_DATA_TABLE);
  
  
    

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  _getInitUsers(role : string){ 

    this.AllUsersTableService.Get_UserAPI(role).subscribe(
      resp=> this.dataSource.data = resp.users as DataUsers[]

    )
  }

  cargarUsuarios(){
      const data= "Admin_role"
      this.AllUsersTableService.Get_UserAPI(data).subscribe(
      resp=> this.dataSource.data = resp.users as DataUsers[]
    )
  }

  cambioRole(newRole : any){

    this._getInitUsers(newRole)

  }


}

