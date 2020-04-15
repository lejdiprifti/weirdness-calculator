import { Component, OnInit } from '@angular/core';
import { LikedGif } from 'src/app/models/liked-gif';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  myLikes: Array<LikedGif>;
  average: number;
  constructor() { }

  ngOnInit() {
    this.myLikes = []
    this.loadLikedGifs()
    this.calculateWeirdness()
  }

  loadLikedGifs(): void {
    this.myLikes = JSON.parse(window.sessionStorage.getItem('likedGIFs'))
  }

  calculateWeirdness(): void {
    let sum = 0
    this.myLikes.forEach(el => {
      sum = sum + Number(el.weirdness)
    })
    this.average = sum / this.myLikes.length
  }

}
