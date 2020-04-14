import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/service/gif.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;

  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.data = {}
  }
  
  search(phrase: string): void {
    this.gifService.getByPhrase(phrase).subscribe(res => {
      this.data = res.data[0].images.original.url
    }, err=> {
      console.log(err)
    })
  }

}
