import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { map, catchError, tap } from 'rxjs/operators';
import { Service, RespTableServices, GetRoles, Role, GetStatus, Status, GetSeverities, Severity, GetActivateUsers, ChicoServicio } from '../interfaces/RespApi';





@Injectable({
  providedIn: 'root'
})
export class ServicesByStatusService {


  private baseURL: string = environment.baseURL;
  private Servicios!:             Service[];
  private Roles!:                 Role[]
  private Status!:                Status[]
  private Severities!:            Severity[];
  private ChicosServicioActivos!: ChicoServicio[];

  get DataTable(){ return {...this.Servicios}}

  get DataRoles(){ return {...this.Roles}}

  get DataStatus() {return {...this.Status}}

  get DataSeverities(){ return {...this.Severities}}


  constructor(private http: HttpClient) { }

  Get_ServicesAPI(status : string, page: any){
  
    const url= `${this.baseURL}/services/all/${status}?page=${page}`;
    return this.http.get<RespTableServices>(url)
    .pipe(
      tap(resp => {
        if(resp.status){
          this.Servicios= resp.services!;
        }
      })

    )
  }


  Get_RolesAPI(){

    const url= `${this.baseURL}/auth/roles`

    return this.http.get<GetRoles>(url)
    .pipe(
      tap(resp=>{
        this.Roles = resp.roles!;
      })
    )

  }


  Get_StatusAPI(){

    const url= `${this.baseURL}/services/status`

    return this.http.get<GetStatus>(url)
    .pipe(
      tap(resp=>{
        this.Status= resp.status;
      })
    )


  }


  Get_SeveritiesAPI(){

    const url= `${this.baseURL}/services/severity`

    return this.http.get<GetSeverities>(url)
    .pipe(
      tap(resp=>{

        this.Severities= resp.severities;

      })
    )
  }

  Get_ActiveUsersAPI(){

    const url= `${this.baseURL}/users/all/active`
    return this.http.get<GetActivateUsers>(url)
    .pipe(
      tap(resp=>{

        this.ChicosServicioActivos= resp.users

      })

    )


  }


}
