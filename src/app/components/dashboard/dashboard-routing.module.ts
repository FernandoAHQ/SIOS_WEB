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

const routes: Routes = [

  {path: '', component: DashboardComponent, children:[
    {path: 'inicio',component: InicioComponent},
    {path: '', redirectTo:'inicio'},
    {path:  'usuarios', component: UsuariosComponent},
    {path:  'crearUsuario', component: CrearComponent},
    {path:  'crearUsuario/:id', component: CrearComponent},
    {path:  'departamentos', component: DepartamentosComponent},
    {path:  'crearDepto', component: CrearDeptoComponent},
    {path:  'asignar', component: AsignarServiceComponent},
    {path:  'servicios', component: ServiciosComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
