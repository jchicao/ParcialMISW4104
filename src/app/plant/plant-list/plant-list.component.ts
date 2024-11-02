import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

interface PlantasInteriorExterior{
  tipoplanta: string;
  total:number;
}

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  plants: Array<Plant> = [];
  PlantasInteriorExterior: PlantasInteriorExterior[] = [];

  constructor(private plantService: PlantService) { }

  getPlants(){
    this.plantService.getPlants().subscribe((plants) => {
      this.plants = plants;
      this.contarPlantasInteriorExterior();
    })
  }

  contarPlantasInteriorExterior(): void {
    const contador: { [tipoplanta: string]: number } = this.plants.reduce(
      (acc: { [tipoplanta: string]: number }, plants) => {
        acc[plants.tipo] = (acc[plants.tipo] || 0) + 1;
        return acc;
      },
      {} as { [tipoplanta: string]: number }
    );

    this.PlantasInteriorExterior = Object.keys(contador).map((tipoplanta) => ({
      tipoplanta,
      total: contador[tipoplanta],
    }));
  }

  ngOnInit() {
    this.getPlants();
  }

}