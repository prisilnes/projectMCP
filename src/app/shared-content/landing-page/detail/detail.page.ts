import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor() { }

  detailClass: string;
  ngOnInit() {

  }
  ionViewWillEnter(){
    this.detailClass = 'detailCard';
  }

  appear(){
    if(this.detailClass === 'detailCard'){
      this.detailClass = 'detailCardActive';
    } else {
      this.detailClass = 'detailCard';
    }
  }

}
