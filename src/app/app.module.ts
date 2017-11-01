import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StockComponent} from './stock/stock.component';
import {StockService} from './shared/stock.service';
import {Stock2Component} from './stock2/stock2.component';
import {LoggerService} from './shared/logger.service';
import {AnotherStockService} from './shared/another-stock.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    {
      provide: StockService, useFactory: (logger: LoggerService, isDiv) => {
      if (isDiv) {
        return new StockService(logger);
      } else {
        return new AnotherStockService(logger);
      }
    }, deps: [LoggerService, 'is_dev']
    },
    {
      provide: 'is_dev', useValue: true
    },
    LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
