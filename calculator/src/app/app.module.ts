import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorModule } from './calculator/calculator.module';
import { CalculatorRoutingModule } from './calculator/calculator-routing.module';
import { Router, RouterModule } from '@angular/router';
import { GifService } from './service/gif.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService, ToastModule } from 'primeng';
import { LoggerService } from './service/logger.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      CalculatorModule,
      CalculatorRoutingModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule,
      ToastModule,
      BrowserAnimationsModule,
      FontAwesomeModule
   ],
   providers: [
      GifService,
      LoggerService,
      MessageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { 
   constructor(router: Router) {

   }
}
