import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { CalculatorRoutingModule } from './calculator/calculator-routing.module';
import { Router } from '@angular/router';
import { GifService } from './service/gif.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      CalculatorModule,
      CalculatorRoutingModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [
      GifService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { 
   constructor(router: Router) {

   }
}
