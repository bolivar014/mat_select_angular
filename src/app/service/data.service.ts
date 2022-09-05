import { Injectable } from '@angular/core';
// Importamos modelo
import { DepartamentI, CityI } from '../models/model.interface';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor() { }
  private departaments: DepartamentI[] = [
    {
      id: 1,
      countryId: "Colombia",
      name: 'Antioquia',
    }, {
      id: 2,
      countryId: "Colombia",
      name: 'Amazonas',
    }, {
      id: 3,
      countryId: "Colombia",
      name: 'Valle',
    }, {
      id: 4,
      countryId: "Colombia",
      name: 'Cundinamarca',
    }, {
      id: 5,
      countryId: "Brasil",
      name: 'Roraima'
    }, {
      id: 6,
      countryId: "Brasil",
      name: "Amazonas"
    }, {
      id: 7,
      countryId: "Brasil",
      name: "Acre"
    }
  ]

  // Provider Cities
  private cities: CityI[] = [
    {
      id: 1,
      countryId: "Brasil",
      departamentId: "6",
      name: 'Sao Paulo'
    }, {
      id: 2,
      countryId: "Brasil",
      departamentId: "7",
      name: 'Brasilia'
    }, {
      id: 3,
      countryId: "España",
      departamentId: "2",
      name: 'Barcelona'
    }, {
      id: 4,
      countryId: "España",
      departamentId: "2",
      name: 'Madrid'
    }, {
      id: 5,
      countryId: "Peru",
      departamentId: "3",
      name: 'Lima'
    }, {
      id: 6,
      countryId: "Peru",
      departamentId: "3",
      name: 'Trujillo'
    }, {
      id: 7,
      countryId: "Argentina",
      departamentId: "4",
      name: 'Buenos Aires'
    }, {
      id: 8,
      countryId: "Argentina",
      departamentId: "4",
      name: 'La Plata'
    }, {
      id: 9,
      countryId: "Argentina",
      departamentId: "5",
      name: 'La Romana'
    }, {
      id: 10,
      countryId: "Republica dominicana",
      departamentId: "5",
      name: 'Santiago'
    }, {
      id: 11,
      countryId: "Colombia",
      departamentId: "Antioquia",
      name: 'Medellín'
    }, {
      id: 12,
      countryId: "Colombia",
      departamentId: "Cundinamarca",
      name: 'Bogota'
    }
  ]

  getDepartaments(): DepartamentI[] {
    return this.departaments;
  }

  getCities(): CityI[] {
    return this.cities;
  }
}
