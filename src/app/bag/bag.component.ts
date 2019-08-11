import { BagService } from './bag.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../menu/models/food';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.sass']
})
export class BagComponent implements OnInit {
  bag$: Observable<Food[]>;

  constructor(private bagService: BagService) { }

  ngOnInit() {
    this.bag$ = this.bagService.listAllBag();
  }

}
