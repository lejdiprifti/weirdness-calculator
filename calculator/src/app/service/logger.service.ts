import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng';

@Injectable()
export class LoggerService {

  constructor(private messageService: MessageService) {

  }

  public info(title: string, detail: string): void {

    console.info(title, detail);
    this.messageService.add({ severity: 'info', summary: title, detail: detail });

  }

  public success(title: string, detail: string): void {

    console.info(title, detail);
    this.messageService.add({ severity: 'success', summary: title, detail: detail });

  }

  public warning(title: string, detail: string): void {

    this.messageService.add({ severity: 'warn', summary: title, detail: detail });
    console.warn(title, detail);
  }

  public error(title: string, detail: string): void {

    console.error(title, detail);
    this.messageService.add({ severity: 'error', summary: title, detail: detail });

  }

  public log(title: string, detail: string): void {

    if (!environment.production) {
      console.log(title, detail);
    }

  }

}
