import { Component, OnInit } from '@angular/core';
import { ShoppingService } from "../shoppinglist/shoppinglist.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent {

  filterend:number;
  constructor(private ShoppingService: ShoppingService) {}

  setRanges(value) {
    this.ShoppingService.selectedPriceFilter.next(value);
  }

}
