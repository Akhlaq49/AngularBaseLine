import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { DashboardService } from './services/dashboard.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule],
  providers: [DashboardService]
})
export class DashboardModule {}
