import { BookmarkInner } from './../../../model/data';
import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/service/fetch-data.service';
import { Component, OnInit } from '@angular/core';
import { Bookmarked, BookmarkData } from 'src/app/model/data';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {

  bookMark: BookmarkInner[];
  constructor(
    private fetchSvc: FetchDataService,
    private route: Router
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter(){

    this.fetchSvc.getBookmarked(localStorage.getItem('userId')).subscribe(data => {
      console.log(data);
      this.bookMark = data.data;
    })
  }

  move(slug){
    this.route.navigate(['/','explore','tabs',slug]);
  }

}
