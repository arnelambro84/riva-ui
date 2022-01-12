import { Component, OnInit } from '@angular/core';
import{ ReportService} from '../services/report.service';
import { Orders } from '../models/orderReport';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders:Orders[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.reportService.getOrders()
      .subscribe(ordersList => {
        this.orders = ordersList.data;
      });
  }

}
