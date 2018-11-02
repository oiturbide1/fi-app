import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { Stock } from '../models/stock';
//import { STOCKS } from '../models/mock-stocks';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  STOCKS: Stock[];
  constructor(private messageService: MessageService, private http: HttpClient) {
    this.getJSON().subscribe(data => {
        //console.log(data);
        this.STOCKS = data;
       });
    }

  getStocks(): Observable<any> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('InstrumentService: fetched financial instruments');
    //return of(this.http.get("../assets/files/snp500.json"));
    //console.log(this.STOCKS);
    return of(this.http.get("../assets/files/snp500.json"))  ;
  }
  getStock(id:string): Observable<Stock>{
    this.messageService.add('InstrumentService: fetched instrument ' + id);
    return of(this.STOCKS.find(x => x.symbol === id));
  }


  public getJSON(): Observable<any> {
        return this.http.get("../assets/files/snp500.json");
    }
}
