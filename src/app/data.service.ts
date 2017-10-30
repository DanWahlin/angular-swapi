import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ICustomer } from './interfaces';

@Injectable()
export class DataService {

  url = 'https://swapi.co/api/people/';

  constructor(private http: HttpClient) { }

  getCustomers() : Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.url)
               .map(data => {
                  return data['results'];
               });
  }

}
