import { MenuService } from './menu.service';
import { Component, OnInit } from '@angular/core';
import { Food } from './models/food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  foods: Food[];

  constructor(private menuService : MenuService) { }

  ngOnInit() {
    this.menuService.listAll().subscribe(data => this.foods = data);
  }

}
