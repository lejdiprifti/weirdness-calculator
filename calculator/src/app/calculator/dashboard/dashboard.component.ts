import { Component, OnInit } from '@angular/core';
import { GifService } from 'src/app/service/gif.service';
import { LikedGif } from 'src/app/models/liked-gif';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/service/logger.service';

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
  constructor(private gifService: GifService, private router: Router, private logger: LoggerService) { }

  ngOnInit() {
    this.data = {}
    this.myLikes = []
    this.gif = {}
    this.weirdness = 0
  }

  searchForWeirdness(phrase?: string): void {
    this.phrase = phrase
    this.gifService.getByPhraseAndWeirdness(this.phrase, this.weirdness).subscribe(res => {
      this.gif = this.createLikedGifObject(res)
    }, err => {
      this.logger.error('Error', 'Could not get the GIF. Try again later!');
      
    })
  }

  like(): void {
    const counter = this.myLikes.length
    if ( counter <= 4 ) {
      if ( this.myLikes.filter(el => el.phrase === this.gif.phrase).length === 0 ) {
        this.myLikes.push(this.gif)
        this.logger.success('Success', 'Hahah that was funny! Let\'s search for another word now!')
        if (counter === 4) {
          window.sessionStorage.setItem('likedGIFs', JSON.stringify(this.myLikes));
          this.router.navigate(['result']);
        }
      } else {
        this.logger.warning('Warning', 'You have already liked a GIF with this phrase! Please search for another phrase!')
      }
    }
  }

  unlike(likedGIF: LikedGif): void {
    const index: number = this.myLikes.indexOf(likedGIF);
    if (index !== -1) {
      this.myLikes.splice(index, 1);
      this.logger.info('Info', 'You unliked the GIF!');
    }
  }

  createLikedGifObject(response: any): LikedGif {
    return {
      title: response.data.title,
      phrase: this.phrase,
      url: response.data.images.original.url,
      weirdness: this.weirdness
    }
  }

}
