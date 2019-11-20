import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Subject } from 'rxjs';
import  { ShopItem } from '../shopItem';

@Injectable()
export class ShoppingService {
  cartDetails: Array<any> = [];
  buttonEnable: Array<any> = [];
  cartItems = new Subject<ShopItem[]>();
  addedList:Array<ShopItem>= [] ;
  selectedSort = new Subject<any>();
  selectedPriceFilter = new Subject<any>();

  url = "https://api.myjson.com/bins/qzuzi";
  constructor(private http: HttpClient) {}
  
  getMethod() {
    return this.http.get(this.url);
  }
  getClientUserAuth():Observable<any>{
   return this.cartItems.asObservable();
}
}
