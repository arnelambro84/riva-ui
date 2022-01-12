import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Orders } from '../models/orderReport';
import { OrdersReportPayload } from '../models/ordersReportPayload';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const mock_items = [
  {ordersId: 1, poInternal : '123', poExternal: '435', receivedDate:'1/12/2022',productName:'Prod 101',qtyOrdered: 5,entryDate:'1/12/2022',dueDate:'1/32/2022'},
  {ordersId: 2, poInternal : '123', poExternal: '435', receivedDate:'1/12/2022',productName:'Prod 102',qtyOrdered: 5,entryDate:'1/12/2022',dueDate:'1/32/2022'},
  {ordersId: 3, poInternal : '123', poExternal: '435', receivedDate:'1/12/2022',productName:'Prod 103',qtyOrdered: 5,entryDate:'1/12/2022',dueDate:'1/32/2022'}


];

@Injectable({
  providedIn: 'root'
})
export class ReportService {

apiUrl = `${environment.apiUrl}orders/report`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getOrders():Observable<OrdersReportPayload>{
    return this.http.get<OrdersReportPayload>(this.apiUrl)
    .pipe(catchError(this.handleError<OrdersReportPayload>('getOrders')))
  }

   handleError<T>(operation = 'operation', result?: T) {
    return (error: any) : Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }


}


