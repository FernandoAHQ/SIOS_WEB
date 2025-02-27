import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearComponent } from './usuarios/crear/crear.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { CrearDeptoComponent } from './departamentos/crear-depto/crear-depto.component';
import { AsignarServiceComponent } from './asignarService/asignar-service.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CommonModule } from '@angular/common';
import { CrearPeriodoComponent } from './periodos/crear-periodo/crear-periodo.component';
import { PeriodosComponent } from './periodos/periodos.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [

  {path: '', component: DashboardComponent, children:[
    {path: 'inicio',component: InicioComponent},
    {path: '', redirectTo:'inicio'},
    {path:  'usuarios', component: UsuariosComponent},
    {path:  'crearUsuario', component: CrearComponent},
    {path:  'crearUsuario/:id', component: CrearComponent},
    {path:  'departamentos', component: DepartamentosComponent},
    {path:  'periodos', component: PeriodosComponent},
    {path:  'ranking', component: RankingComponent},
    {path:  'bitacora', component: BitacoraComponent},
    {path:  'crearDepto', component: CrearDeptoComponent},
    {path:  'crearPeriodo', component: CrearPeriodoComponent},
    {path:  'asignar', component: AsignarServiceComponent},
    {path:  'servicios', loadChildren: ()=>import('./servicios/servicios.module').then(m=>m.ServiciosModule)}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
