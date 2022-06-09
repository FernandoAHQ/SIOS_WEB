import { Component, OnInit } from '@angular/core';
import { Bitacora } from 'src/app/interfaces/Interfaces';
import { ServicesByStatusService } from '../../../services/services-by-status.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-bitacora',
  templateUrl: './bitacora.component.html',
  styleUrls: ['./bitacora.component.css']
})
export class BitacoraComponent implements OnInit {

  datas!: Bitacora[];
  value=""

  constructor(
    private ServicesByStatusService: ServicesByStatusService,
    private activatedRoute: ActivatedRoute,
    private Router: Router
  ) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((querys:any)=>{

      

      if(!querys.page){
        this.PaginaActual= 1;
        }
      else{this.PaginaActual=querys.page}

      if(!querys.value){
        this.value="bitacora"
      }
      else{this.value="bitacora"}

      this.GetInitBitacora( this.PaginaActual );

    })

  }

  Cargando= false;
  // existe= false;
  PaginaActual : number =1;
  TotalResultados: number = 0;


  GetInitBitacora(PaginaActual: any){

    this.Cargando=true;
    this.ServicesByStatusService.GetBitacora(PaginaActual).subscribe(
      resp=>{
        
        this.datas = resp.bitacora as Bitacora[];
        console.log(this.datas);
        this.TotalResultados =  resp.totalResults;
        this.Cargando= false;
      }
    )

  }


}
