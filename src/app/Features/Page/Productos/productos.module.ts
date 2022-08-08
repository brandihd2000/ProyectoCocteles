import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';
import { RoutingProductos } from './routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ServicesModule } from 'src/app/Shared/Services/services.module';
import { DetailsComponent } from './Components/details/details.component';



@NgModule({
  declarations: [ProductoComponent, DetailsComponent],
  imports: [
    CommonModule,
    RoutingProductos,
    SharedModule,
    ServicesModule,
    RouterModule
  ]
})
export class ProductosModule { }
