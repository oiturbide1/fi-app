import { Component, OnInit } from '@angular/core';
import { Stock } from '../models/stock';

import { InstrumentService } from '../services/instrument.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks: Stock[];
  displayedColumns: string[] = ['name', 'sector', 'symbol'];
  dataSource: Stock[];
  constructor(private instrumentService: InstrumentService) { }

  ngOnInit() {
    this.getStocks();
    this.dataSource = this.stocks;
  }


  getStocks(): void {
    this.instrumentService.getStocks()
      .subscribe(stocks => this.stocks = stocks);
  }
  getStock(id:string): void{
    console.log(this.instrumentService.getStock(id));
  }




}
