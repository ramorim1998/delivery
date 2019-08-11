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
  bag: Food[];
  total: number;
  constructor(private bagService: BagService) {

  }

  ngOnInit() {
    this.total = 0;
    this.bag$ = this.bagService.listAllBag();
    this.bagService.listAllBag().subscribe(data => this.bag = data);
    this.setTotal();    
  }
  

  setTotal(){
    for (let i = 0; i < this.bag.length; i++) {
      this.total += this.bag[i].price;
      console.log(this.bag[i].price);
    }
    console.log(this.total)
  }

}
