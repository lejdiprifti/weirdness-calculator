import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/service/gif.service';
import { LikedGif } from 'src/app/models/liked-gif';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  weirdness: number;
  phrase: string;
  myLikes: Array<LikedGif>;
  gif: LikedGif;
  constructor(private gifService: GifService, private router: Router) { }

  ngOnInit() {
    this.data = {}
    this.myLikes = []
    this.gif = {}
    this.weirdness = 0
  }

  search(phrase: string): void {
    this.phrase = phrase
    this.gifService.getByPhraseAndWeirdness(phrase, 0).subscribe(res => {
      this.gif = this.createLikedGif(res)
    }, err=> {
      console.log(err)
    })
  }

  searchForWeirdness(): void {
    this.gifService.getByPhraseAndWeirdness(this.phrase, this.weirdness).subscribe(res => {
      this.gif = this.createLikedGif(res)
    }, err => {
      console.log(err)
    })
  }

  like(): void {
    const counter = this.myLikes.length
    if ( counter < 4 ) {
      if ( this.myLikes.filter(el => el.phrase === this.gif.phrase).length === 0 ) {
        this.myLikes.push(this.gif)
      } else {
        console.log('Choose another one. The phrase is taken!')
      }
    } else {
      window.sessionStorage.setItem('likedGIFs', JSON.stringify(this.myLikes))
      this.router.navigate(['result'])
    }
  }

  unlike(likedGIF: LikedGif): void {
    const index: number = this.myLikes.indexOf(likedGIF)
    if (index !== -1) {
      this.myLikes.splice(index, 1)
    }
  }

  calculate(): void {
    window.sessionStorage.setItem('likedGIFs', JSON.stringify(this.myLikes))
    this.router.navigate(['result'])
  }

  createLikedGif(response: any): LikedGif {
    return {
      title: response.data.title,
      phrase: this.phrase,
      url: response.data.images.original.url,
      weirdness: this.weirdness
    }
  }

}
