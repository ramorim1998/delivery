import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.sass']
})
export class FilteredComponent implements OnInit {
  filt: 'chinese';
  constructor() { }

  ngOnInit() {
  }

}
