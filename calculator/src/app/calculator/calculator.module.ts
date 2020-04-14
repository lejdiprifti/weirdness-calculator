import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultComponent } from './result/result.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    ResultComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class CalculatorModule { }
