import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { CocktailService } from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HttpClientModule
  ],
  providers: [CocktailService], 
})
export class ServicesModule { }
