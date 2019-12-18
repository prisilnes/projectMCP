import { Geolocation } from '@ionic-native/geolocation/ngx';
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
    private geolocation: Geolocation,
  ) { }
  detailData: DetailPanti;
  slug: string;
  detailClass: string;
  titleClass: string;
  lat: number;
  lon: number;
  tempLat: string;
  tempLon: string;
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
        this.tempLat = data[0].location_lat;
        this.tempLon = data[0].location_long;
        this.lat = +this.tempLat;
        this.lon = +this.tempLon;
      })
    })
  }

  appear() {
    if (this.detailClass === 'detailCard'){
      this.detailClass = 'detailCardActive';
      this.titleClass = 'titleCardActive';
    } else {
      this.detailClass = 'detailCard';
      this.titleClass = 'titleCard';
    }
  }

  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then(
      
    )
  }

}
