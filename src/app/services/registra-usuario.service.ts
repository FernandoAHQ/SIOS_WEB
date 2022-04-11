import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { RegistrarUsuario, RespuestaRegistrarUsuario } from '../interfaces/Interfaces';
import { map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistraUsuarioService {

  private baseURL : string = environment.baseURL;
  private RegUsuario!: RegistrarUsuario;


  constructor(private http: HttpClient) { }

  get usuario(){return {...this.RegUsuario}}

  registrar( name:string, username: string, role:string,  password: string){

    const url= `${this.baseURL}/auth/register`;
    const body= {name,username,role,password };
    return this.http.post<RespuestaRegistrarUsuario>(url,body)
    .pipe(
      tap(resp => {
        if(resp.status){
          
        }
      }),
      map(resp=> resp.status),
      catchError( err => of(false) )

    )

      
  }

}
