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
  filtered:string;
  menu: Food[];
  food$: Observable<Food[]>
  constructor(private menuService : MenuService) { }

  ngOnInit() {
    this.menuService.listAll().subscribe(data => this.menu = data);
    this.food$ = this.menuService.listAll().
    pipe(catchError(error =>{
      console.error(error);
      return empty();
    }));
    
  }
  
  addToBag(food: Food){
    this.menuService.addToBag(food).subscribe();
    console.log("ok");
  }
  filter(food:string){
    this.filtered = food;
}

   
}
