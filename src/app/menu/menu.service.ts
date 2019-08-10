import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from './models/food';
import {tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly API = `${environment.API}/food`;
  constructor(private http: HttpClient) { }

  listAll(){
    return this.http.get<Food[]>(this.API).pipe(tap(console.log));
  }
}
