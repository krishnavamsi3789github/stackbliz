import { Component, Input, OnInit , OnChanges } from "@angular/core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";
import { ShoppingService } from "../shoppinglist/shoppinglist.service";

@Component({
  selector: 'app-carticon',
  templateUrl: './carticon.component.html',
  styleUrls: ['./carticon.component.less']
})
export class CarticonComponent implements OnInit {
  faCart = faShoppingCart;
  cartCount = 0;
  hideCart = false;

  constructor(
    private router: Router,
    private shoppingService: ShoppingService
  ) {}
  ngOnInit() {
    this.shoppingService.cartItems.subscribe(x => {
      this.cartCount = x.length;
    }); 
  }
  ngOnChanges(){

  }
  gotoCart() {
    this.router.navigate(["/Cart"]);
  }

}
