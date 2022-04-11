import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciosHoyComponent } from './servicios-hoy/servicios-hoy.component';
import { ServiciosComponent } from './servicios.component';

const routes: Routes = [

  
  {path: '', component: ServiciosComponent, children:[
    {path: 'Hoy',component: ServiciosHoyComponent},
    {path: '', redirectTo:'Hoy'},

  ]}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
