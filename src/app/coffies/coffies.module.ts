import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffieListComponent } from './coffie-list/coffie-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CoffieListComponent],
  declarations: [CoffieListComponent]
})
export class CoffiesModule { }
