import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Event } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataService } from 'src/app/service/data.service';
import { DepartamentI } from '../../models/model.interface';

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
  // options: string[] = ['Colombia','Brazil','Perú','Argentina'];
  optionsCountry: string[] = ['Colombia','Brazil','Perú','Argentina'];
  filteredOptions?: Observable<string[]>;
  selectedOption?: string[];
  // 
  public departaments?: DepartamentI[];

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    this.filteredOptions = this.myControlCountry.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    // return this.options.filter(option => option.toLowerCase().includes(filterValue));
    return this.optionsCountry.filter(optionsCountry => optionsCountry.toLowerCase().includes(filterValue));
  }

  getSelectOption(optionSel: string) {
    
    console.log(optionSel);
    console.log(this.dataSvc.getDepartaments());
    this.departaments = this.dataSvc.getDepartaments().filter(item => item.countryId === optionSel);
  }
}
