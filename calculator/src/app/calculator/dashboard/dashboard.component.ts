import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/service/gif.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  weirdness: number;
  phrase: string;
  myLikes: Set<string>;
  constructor(private gifService: GifService) { }

  ngOnInit() {
    this.data = {}
    this.myLikes = new Set()
    this.weirdness = 0
  }

  search(phrase: string): void {
    this.phrase = phrase
    this.gifService.getByPhraseAndWeirdness(phrase, 0).subscribe(res => {
      this.data = res.data.images.original.url
    }, err=> {
      console.log(err)
    })
  }

  searchForWeirdness(): void {
    this.gifService.getByPhraseAndWeirdness(this.phrase, this.weirdness).subscribe(res => {
      this.data = res.data.images.original.url
    }, err => {
      console.log(err)
    })
  }

  like(): void {
    this.myLikes.add(this.data)
  }

}
