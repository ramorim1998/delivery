import { Food } from './../menu/models/food';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { take, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  bag : Food [] =[];
  food:Food;
  private readonly APIBAG = `${environment.API}/bag`;
  constructor( private http: HttpClient) { 
  
  }

  listAllBag(){
    return this.http.get<Food[]>(this.APIBAG).pipe(delay(1000));
  }
  addToBag(food: Food){
    this.bag.includes(food);
    return this.http.post<Food[]>(this.APIBAG,food).pipe(take(1));
  }
  delete(id){
    return this.http.delete(`${this.APIBAG}/${id}`).pipe(take(1));
  }

  incrementQnt(food:Food){
    for (let i = 0; i < this.bag.length; i++) {
      if(this.bag[i].id === this.food.id)
      this.bag[i].quantity++;
    }
  }
}
