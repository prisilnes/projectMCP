import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor() { }

  detailClass: string;
  titleClass: string;
  ngOnInit() {

  }
  ionViewWillEnter(){
    this.detailClass = 'detailCard';
    this.titleClass = 'titleCard';
  }

  appear(){
    if(this.detailClass === 'detailCard'){
      this.detailClass = 'detailCardActive';
      this.titleClass = 'titleCardActive';
    } else {
      this.detailClass = 'detailCard';
      this.titleClass = 'titleCard';
    }
  }

}
