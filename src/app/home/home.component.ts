import { Component, OnInit } from '@angular/core';
import { ShoppingService } from "../shoppinglist/shoppinglist.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private ShoppingService: ShoppingService) {}
  ngOnInit() {

  }

}
