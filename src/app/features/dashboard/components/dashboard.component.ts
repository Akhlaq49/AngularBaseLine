import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.data = this.dashboardService.getData();
  }
}
