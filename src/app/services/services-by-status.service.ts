import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { map, catchError, tap } from 'rxjs/operators';
import { Service, RespTableServices } from '../interfaces/RespApi';





@Injectable({
  providedIn: 'root'
})
export class ServicesByStatusService {


  private baseURL: string = environment.baseURL;
  private Servicios!: Service[];

  get DataTable(){ return {...this.Servicios}}


  constructor(private http: HttpClient) { }

  Get_ServicesAPI(status : string){
  
    const url= `${this.baseURL}/services/all/${status}`;
    return this.http.get<RespTableServices>(url)
    .pipe(
      tap(resp => {
        if(resp.status){
          this.Servicios= resp.services!;
        }
      })

    )
  }
}
