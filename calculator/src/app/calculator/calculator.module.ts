import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultComponent } from './result/result.component';
import { RouterModule } from '@angular/router';
import {
  ButtonModule,
  InputTextModule,
  SliderModule
} from 'primeng'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    DashboardComponent,
    ResultComponent
  ],
  imports: [
    InputTextModule,
    ButtonModule,
    RouterModule,
    CommonModule,
    SliderModule,
    FormsModule
  ]
})
export class CalculatorModule { }
