import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  // myControl = new FormControl('');
  myControlCountry = new FormControl('');
  // options: string[] = ['Colombia','Brazil','Perú','Argentina'];
  optionsCountry: string[] = ['Colombia','Brazil','Perú','Argentina'];
  filteredOptions?: Observable<string[]>;

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
}
