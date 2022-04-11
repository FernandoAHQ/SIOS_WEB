import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { DataUsers, RespAlluser } from '../interfaces/InterfaceAllUser';
import { map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllUsersTableService {

  private baseURL: string = environment.baseURL;
  private AllUsers!: DataUsers[];

  get DataTable(){ return {...this.AllUsers}}

  constructor(private http: HttpClient) {

  }

  Get_UserAPI(usuario : string){
  
    const url= `${this.baseURL}/users/all/${usuario}`;
    return this.http.get<RespAlluser>(url)
    .pipe(
      tap(resp => {
        if(resp.status){
          this.AllUsers= resp.users!;
        }
      })

    )
  }

}
