import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/service/fetch-data.service';
import { Component, OnInit } from '@angular/core';
import { Bookmarked } from 'src/app/model/data';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {

  bookMark: Bookmarked[];
  constructor(
    private fetchSvc: FetchDataService,
    private route: Router
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.fetchSvc.getBookmarked().subscribe(data => {
      this.bookMark = data;
    })
  }

  move(slug){
    this.route.navigate(['/','explore','tabs',slug]);
  }

}
