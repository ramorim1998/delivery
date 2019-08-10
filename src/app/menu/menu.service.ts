import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly API = 'http://localhost:3000/food';
  constructor(private http: HttpClient) { }

  listAll(){
    return this.http.get(this.API);
  }
}
