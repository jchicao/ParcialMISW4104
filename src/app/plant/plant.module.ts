import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListComponent } from './plant-list/plant-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantListComponent],
  exports: [PlantListComponent]
})
export class PlantModule { }