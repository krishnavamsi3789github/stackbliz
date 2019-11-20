import { Component, OnInit, OnChanges } from "@angular/core";
import { ShoppingService } from "./shoppinglist.service";
import { ShopItem } from "../shopItem";

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.less']
})
export class ShoppinglistComponent implements OnInit , OnChanges {

  shopItems:any = [];
  images = [];
  btnStatus = [];
  master: Array<any> = [];
  constructor(private service: ShoppingService) {}
  ngOnInit() {
    this.service.getMethod().subscribe(res => {
      this.shopItems = res;
      this.master = this.shopItems;
      this.images = this.shopItems.map((x, index) => {
        return x.img_url.replace("http", "https");
      });
      if (this.service.addedList.length != 0) {
        this.btnStatus = this.service.buttonEnable;
        this.service.cartItems.next(this.service.addedList);
      } else {
        this.shopItems.forEach((y, index) => {
          this.service.buttonEnable[index] = true;
          this.btnStatus = this.service.buttonEnable;
        });
      }
    });
    this.service.selectedSort.subscribe(x => {
      if (x == "hl") {
        this.shopItems = this.shopItems.sort((a,b)=>{
          return b.price - a.price;
        })
      } else if (x == "lh") {
         this.shopItems = this.shopItems.sort((a,b)=>{
          return a.price - b.price;
        })
      } else {
         this.shopItems = this.shopItems.sort((a,b)=>{
          return b.discount - a.discount;
        })
      }
    });
    
    this.service.selectedPriceFilter.subscribe(x=>{
      if(x != 0){
        this.shopItems = this.master.filter(y=>{
          return y.price >= x.range;
        })
      }
    })
  }
  ngOnChanges() {}
  addToCart(item, i) {
    let shopItem = new ShopItem();
    shopItem.Item = item;
    shopItem.count = 1;
    this.service.buttonEnable[i] = false;
    shopItem.img = this.images[i];
    this.service.addedList.push(shopItem);
    this.service.cartItems.next(this.service.addedList);
  }
}
