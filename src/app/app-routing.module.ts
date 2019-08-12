import { BagComponent } from './bag/bag.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home',component: MenuComponent},
  {path:'bag',component: BagComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
