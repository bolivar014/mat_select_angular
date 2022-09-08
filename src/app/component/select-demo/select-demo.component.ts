import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
// Importamos Interfaz Country
import { Country } from 'src/app/models/country.interface';

@Component({
  selector: 'app-select-demo',
  templateUrl: './select-demo.component.html',
  styleUrls: ['./select-demo.component.css']
})
export class SelectDemoComponent implements OnInit {
  
  private baseURL = environment.api;
  // filteredOptions$ = this.getAll();
  ctcountry$ = this.createCountry();

  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]> {
    console.log(this.http.get<Country[]>(`${this.baseURL}`));
    return this.http.get<Country[]>(`${this.baseURL}`);
  }

  createCountry(): Observable<Country> {
    const body = { name: 'Colombia' };
    // return this.http.post<Country>(`${this.baseURL}`, this.body);
    return this.http.post<Country>(this.baseURL, body);
  }

  ngOnInit(): void {
  }

}
