import { Injectable } from '@angular/core';
// Importamos modelo
import { DepartamentI } from '../models/model.interface';
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
      countryId: "Brazil",
      name: 'Roraima'
    }, {
      id: 6,
      countryId: "Brazil",
      name: "Amazonas"
    }, {
      id: 7,
      countryId: "Brazil",
      name: "Acre"
    }
  ]

  getDepartaments(): DepartamentI[] {
    return this.departaments;
  }

}
