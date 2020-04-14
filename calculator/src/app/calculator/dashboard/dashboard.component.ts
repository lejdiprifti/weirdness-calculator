import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/service/gif.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.getGIFbyPhrase()
  }

  getGIFbyPhrase(): void {
    this.gifService.getByPhrase('spongebob').subscribe(res => {
      
    }, err=> {
      console.log(err)
    })
  }

}
