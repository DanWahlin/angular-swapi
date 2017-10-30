import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cm-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  @Input() customers: any[];

  constructor() { }

  ngOnInit() {
  }

}
