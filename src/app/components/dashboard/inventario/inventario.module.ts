import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoModule } from 'src/app/components/compartido/compartido.module';
import { InventarioRoutingModule } from './inventario-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { AccessPointComponent } from './access-point/access-point.component';
import { RegistrarComputadoraComponent } from './computadoras/registrar-computadora/registrar-computadora.component';
import { ModificarComputadorasComponent } from './computadoras/modificar-computadoras/modificar-computadoras.component';


@NgModule({
  declarations: [
  
    RegistrarComputadoraComponent,
       ModificarComputadorasComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    CompartidoModule,
  ]
})
export class InventarioModule { }
