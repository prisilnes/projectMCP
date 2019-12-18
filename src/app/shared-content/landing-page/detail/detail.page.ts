import { AlertController } from '@ionic/angular';
import { SetBookmarked, Distance } from './../../../model/data';
import { EditItemService } from './../../../service/edit-item.service';
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
    private editSvc: EditItemService,
    private alertController: AlertController,
  ) { }

  detailData: DetailPanti;
  slug: string;
  detailClass: string;
  titleClass: string;
  lat: number;
  lon: number;
  tempLat: string;
  tempLon: string;

  destination: Distance;
  origin: Distance;

  bookMarkSlug : SetBookmarked;
  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.origin = {
        lat : resp.coords.latitude,
        lng : resp.coords.longitude,
      }
    })
  }
  
  ionViewWillEnter(){
    this.detailClass = 'detailCard';
    this.titleClass = 'titleCard';
    this.url.paramMap.subscribe(param => {
      this.slug = param.get('id');
      this.fetchSvc.getDetailPanti(this.slug)
      .subscribe(data => {
        this.detailData = data;
        this.destination = {
          lat: + data[0].location_lat,
          lng : + data[0].location_long,
        }
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

  bookMark(id: string){
    console.log(id);
    this.bookMarkSlug = {
      id_panti: id,
      id_user: localStorage.getItem('userId'),
    }

    this.editSvc.setBookmarked(this.bookMarkSlug).subscribe((data: any) => {
      if(data.code === 200){
        this.presentSuccessAlert();
      } else if (data.code === 201){
        this.presentFailAlert();
      }
    })
  }

  getCurrentLocation(){
    this.geolocation.getCurrentPosition().then(
    )
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Bookmark',
      subHeader: 'Adding Bookmark',
      message: 'Panti Sudah Disimpan di Halaman Bookmark Anda',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentFailAlert() {
    const alert = await this.alertController.create({
      header: 'Bookmark',
      subHeader: 'Adding Bookmark',
      message: 'Panti Sudah Terdaftar Sebelumnya di Halaman Bookmark Anda',
      buttons: ['OK']
    });

    await alert.present();
  }

}
