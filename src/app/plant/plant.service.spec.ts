/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PlantService } from './plant.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Plant } from './plant';
import { environment } from '../../environments/environment.development';

describe('Service: Plant', () => {
  let service: PlantService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantService],
    });
    service = TestBed.inject(PlantService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch directors as an Observable', () => {
    const dummyPlants: Plant[] = [
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

    service.getPlants().subscribe((plants) => {
      expect(plants.length).toBe(3);
      expect(plants).toEqual(dummyPlants);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPlants);
  });
});