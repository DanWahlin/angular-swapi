import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface ICustomer {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

@Injectable()
export class DataService {

  url = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get(this.url)
               .map(data => {
                  return data['results'];
               });
  }

}
