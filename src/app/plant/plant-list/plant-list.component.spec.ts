/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PlantListComponent } from './plant-list.component';
import { PlantService } from '../plant.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Plant } from '../plant';
import { of } from 'rxjs';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let plantService: PlantService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PlantListComponent],
      providers: [PlantService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    plantService = TestBed.inject(PlantService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of plants in the table', () => {
    const mockPlants: Plant[] = [
      {
        id: 1,
        nombre_comun: 'nombre_comun 1',
        nombre_cientifico: 'nombre_cientifico 1',
        tipo: 'tipo 1',
        altura_maxima: 1,
        clima: 'clima 1',
        sustrato_siembra: 'sustrato_siembra 1',
      },
      {
        id: 2,
        nombre_comun: 'nombre_comun 2',
        nombre_cientifico: 'nombre_cientifico 2',
        tipo: 'tipo 2',
        altura_maxima: 2,
        clima: 'clima 2',
        sustrato_siembra: 'sustrato_siembra 2',
      },
      {
        id: 3,
        nombre_comun: 'nombre_comun 3',
        nombre_cientifico: 'nombre_cientifico 3',
        tipo: 'tipo 3',
        altura_maxima: 3,
        clima: 'clima 3',
        sustrato_siembra: 'sustrato_siembra 3',
      },
    ];

    spyOn(plantService, 'getPlants').and.returnValue(of(mockPlants));

    fixture.detectChanges();

    // Verificar el encabezado de la tabla
    const headerCells = fixture.debugElement.queryAll(By.css('thead th'));
    expect(headerCells.length).toBe(4);
    expect(headerCells[0].nativeElement.textContent).toContain('#');
    expect(headerCells[1].nativeElement.textContent).toContain('Nombre común');
    expect(headerCells[2].nativeElement.textContent).toContain('Tipo');
    expect(headerCells[3].nativeElement.textContent).toContain('Clima');

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);

    const firstRowCells = rows[0].queryAll(By.css('td'));
    expect(firstRowCells[0].nativeElement.textContent).toContain('1');
    expect(firstRowCells[1].nativeElement.textContent).toContain(
      'nombre_comun 1'
    );
    expect(firstRowCells[2].nativeElement.textContent).toContain('tipo 1');
    expect(firstRowCells[3].nativeElement.textContent).toContain('clima 1');

    const secondRowCells = rows[1].queryAll(By.css('td'));
    expect(secondRowCells[0].nativeElement.textContent).toContain('2');
    expect(secondRowCells[1].nativeElement.textContent).toContain(
      'nombre_comun 2'
    );
    expect(secondRowCells[2].nativeElement.textContent).toContain('tipo 2');
    expect(secondRowCells[3].nativeElement.textContent).toContain('clima 2');

    const thirdRowCells = rows[2].queryAll(By.css('td'));
    expect(thirdRowCells[0].nativeElement.textContent).toContain('3');
    expect(thirdRowCells[1].nativeElement.textContent).toContain(
      'nombre_comun 3'
    );
    expect(thirdRowCells[2].nativeElement.textContent).toContain('tipo 3');
    expect(thirdRowCells[3].nativeElement.textContent).toContain('clima 3');
  });
});