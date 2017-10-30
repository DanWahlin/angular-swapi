import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from '../interfaces';

@Component({
  selector: 'cm-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  @Input() customers: ICustomer[];

  constructor() { }

  ngOnInit() {
  }

}
