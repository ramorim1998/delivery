import { Injectable } from '@angular/core';
import {  Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Food } from '../models/food';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements Resolve<any> {
  
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Food[] | Observable<Food[]> | Promise<Food[]> {
     
    if(route.params && route.params['cuisine']){}
    return null;
  }

  
}