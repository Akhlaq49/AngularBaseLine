import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() {}

  getData() {
    // Fetch and return data
    return [{ id: 1, name: 'Dashboard Item 1' }];
  }
}
