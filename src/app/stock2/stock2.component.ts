import {Component, OnInit} from '@angular/core';
import {Stock, StockService} from '../shared/stock.service';
import {AnotherStockService} from '../shared/another-stock.service';

@Component({
  selector: 'app-stock2',
  templateUrl: './stock2.component.html',
  styleUrls: ['./stock2.component.css'],
})
export class Stock2Component implements OnInit {

  public stock: Stock;

  constructor(public stockService: StockService) {
    this.stock = this.stockService.getStock();
  }

  ngOnInit() {
  }

}
