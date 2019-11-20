import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ShoppingService } from "../shoppinglist/shoppinglist.service";
import { Subscription } from "rxjs";
import { faStar } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-cartscreen',
  templateUrl: './cartscreen.component.html',
  styleUrls: ['./cartscreen.component.less']
})
export class CartscreenComponent implements OnInit {

  faStar = faStar;
  hideCart = false;
  sub: Subscription;
  shopItems: Array<any> = [];
  totalCost = 0;
  totalDiscount = 0;
  constructor(
    private router: Router,
    private ShoppingService: ShoppingService
  ) {}
  ngOnInit() {
    this.hideCart = true;
    this.shopItems = this.ShoppingService.addedList;
    this.calTotalDis();
  }
  goHome() {
    this.router.navigate(["/Home"]);
  }
  increment(item) {
    this.shopItems.forEach(x => {
      if (x.Item.id === item.Item.id) {
        x.count++;
      }
    });
    this.calTotalDis();
  }
  decrement(item) {
    if (item.count > 1) {
      this.shopItems.forEach(x => {
        if (x.Item.id === item.Item.id) {
          x.count--;
        }
      });
    }
    this.calTotalDis();
  }
  calTotalDis() {
    this.totalCost = 0;
    this.totalDiscount = 0;
    this.shopItems.forEach(x => {
      this.totalCost += x.Item.price * x.count;
      this.totalDiscount += x.Item.price * (x.Item.discount / 100) * x.count;
    });
  }

}
