import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './models/food';
import {tap, delay, take} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly API = `${environment.API}/food`;
  private readonly APIBAG = `${environment.API}/bag`;
  private  filtered : Food[] = [];
  constructor(private http: HttpClient) { }

  listAll(){
    return this.http.get<Food[]>(this.API).pipe(delay(2000),tap(console.log));
  }

  addToBag(food: Food){
    return this.http.post<Food[]>(this.APIBAG,food).pipe(take(1));
  }
  setFiltered(filter : Food[]){
    this.filtered = filter;
  }
  getFiltered(){
    return this.filtered;
  }
}
