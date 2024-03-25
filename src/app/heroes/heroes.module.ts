
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
  exports: [
    HeroComponent,
    ListComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    // esto es para poder utilizar las directivas una vez que hacemos uso de modulos
    //Los modulos estan encapsulados y protegidos
    CommonModule
  ]
})
export class HeroesModule { }
