import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetailsComponent } from "./Components/details/details.component";
import { ProductoComponent } from "./producto.component";

const routes: Routes = [
    {path: '', component: ProductoComponent }, 
    {path: 'Details/:name', component: DetailsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule]
})

export class RoutingProductos{}