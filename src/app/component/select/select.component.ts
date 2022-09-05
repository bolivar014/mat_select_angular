import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Event } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataService } from 'src/app/service/data.service';
import { DepartamentI, CityI } from '../../models/model.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [DataService] // Inyección de propiedades
})
export class SelectComponent implements OnInit {
  // myControl = new FormControl('');
  myControlCountry = new FormControl('');
  myControlDepartament = new FormControl('');
  myControlCity = new FormControl('');
  // options: string[] = ['Colombia','Brazil','Perú','Argentina'];
  optionsCountry: string[] = ['Colombia','Brasil','Perú','Argentina'];
  filteredOptions?: Observable<string[]>;
  filteredOptionsDep?: Observable<string[]>;
  selectedOption?: string[];
  strCountrySelected?: string;
  // 
  public departaments?: DepartamentI[];
  // departaments?: Observable<string[]>;
  public cities?: CityI[];
  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    this.filteredOptions = this.myControlCountry.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

    /*
    this.departaments = this.myControlDepartament.valueChanges.pipe(
      startWith(''),
      map(value => this._filterDepts(value || '')),
    );
    */
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.optionsCountry.filter(optionsCountry => optionsCountry.toLowerCase().includes(filterValue));
  }

  /*
  private _filterDepts(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.dataSvc.getDepartaments().filter(item => item.countryId === filterValue);
    // return this.dataSvc.getDepartaments();
  }
  */

  // Get para determinar los departamentos
  getSelectOption(optionSel: string) {
    this.strCountrySelected = optionSel;
    console.log('country: ', optionSel);
    console.log(this.dataSvc.getDepartaments());

    // Reset default 
    this.myControlDepartament.reset('');
    this.myControlCity.reset('');
    
    // Asignamos obj departaments
    this.departaments = this.dataSvc.getDepartaments().filter(item => item.countryId === optionSel);
  }
  
  // Get para determinar las ciudades asociadas a los departamentos
  getSelectOptionDepartament(optionSelDepartament: string) {
    console.log('Departament: ', optionSelDepartament);
    console.log(this.dataSvc.getCities());

    // Reset default
    this.myControlCity.reset('');

    // Asignamos obj Cities
    this.cities = this.dataSvc.getCities().filter(item => item.countryId === this.strCountrySelected && item.departamentId === optionSelDepartament);
  }
}
