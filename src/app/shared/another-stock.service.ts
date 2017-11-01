import {Injectable} from '@angular/core';
import {Stock, StockService} from './stock.service';
import {LoggerService} from './logger.service';

@Injectable()
export class AnotherStockService implements StockService {

  getStock(): Stock {
    this.loggerService.log('getStock2方法被调用');
    return new Stock(2, '微软');
  }

  constructor(public loggerService: LoggerService) {
  }

}
