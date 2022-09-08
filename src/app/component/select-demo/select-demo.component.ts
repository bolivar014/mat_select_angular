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

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(environment.api);
  }

  ngOnInit(): void {
  }

}
