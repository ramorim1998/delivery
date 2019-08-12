import { BagService } from './../bag/bag.service';
import { MenuService } from './menu.service';
import { Component, OnInit } from '@angular/core';
import { Food } from './models/food';
import { Observable, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  filtered: string;
  menu: Food[];
  food$: Observable<Food[]>
  constructor(private menuService: MenuService, private bag: BagService) { }

  ngOnInit() {
    this.menuService.listAll().subscribe(data => this.menu = data);
    this.food$ = this.menuService.listAll().
      pipe(catchError(error => {
        console.error(error);
        return empty();
      }));

  }

  addToBag(food: Food) {
    if (this.bag.bag.find((comida: Food) => comida.id === food.id)) { this.bag.incrementQnt(food) } else {
      this.bag.addToBag(food).subscribe();
    }
  }
  filter(food: string) {
    this.filtered = food;
  }


}
