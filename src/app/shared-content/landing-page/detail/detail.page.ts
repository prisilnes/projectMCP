import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/service/fetch-data.service';
import { DetailPanti } from 'src/app/model/data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(
    private fetchSvc: FetchDataService,
    private url: ActivatedRoute,
  ) { }
  detailData: DetailPanti;
  slug: string;
  detailClass: string;
  titleClass: string;
  lat : number;
  lon : number;
  ngOnInit() {

  }
  ionViewWillEnter(){
    this.detailClass = 'detailCard';
    this.titleClass = 'titleCard';
    this.url.paramMap.subscribe(param => {
      this.slug = param.get('id');
      this.fetchSvc.getDetailPanti(this.slug)
      .subscribe(data => {
        this.detailData = data;
        this.lat = this.detailData[0].location_lat;
        this.lon = this.detailData[0].location_long;
      })
    })
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
