import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { BagComponent } from './bag/bag.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BagComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
