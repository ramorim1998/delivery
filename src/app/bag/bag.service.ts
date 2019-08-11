import { Injectable } from '@angular/core';
import { Food } from '../menu/models/food';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BagService {
  bag : Food [];
  private readonly APIBAG = `${environment.API}/bag`;
  constructor( private http: HttpClient) { }

  listAllBag(){
    return this.http.get<Food[]>(this.APIBAG).pipe();
  }
}
