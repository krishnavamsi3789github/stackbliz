import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarticonComponent } from './carticon/carticon.component';
import { CartscreenComponent } from './cartscreen/cartscreen.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { SortComponent } from './sort/sort.component';
import { ShoppingService } from './shoppinglist/shoppinglist.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CarticonComponent,
    CartscreenComponent,
    FilterComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ShoppinglistComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    AppRoutingModule ,
    HttpClientModule ,
    FontAwesomeModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
