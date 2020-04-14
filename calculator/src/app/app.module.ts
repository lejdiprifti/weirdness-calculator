import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { CalculatorRoutingModule } from './calculator/calculator-routing.module';
import { Router } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      CalculatorModule,
      CalculatorRoutingModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { 
   constructor(router: Router) {

   }
}
