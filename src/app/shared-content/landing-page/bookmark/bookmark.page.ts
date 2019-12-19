import { BookmarkInner, SetBookmarked } from './../../../model/data';
import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/service/fetch-data.service';
import { Component, OnInit } from '@angular/core';
import { Bookmarked, BookmarkData } from 'src/app/model/data';
import { EditItemService } from 'src/app/service/edit-item.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {


  deleteData: SetBookmarked;
  bookMark: BookmarkInner[];
  constructor(
    private fetchSvc: FetchDataService,
    private route: Router,
    private editSvc: EditItemService,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    this.getData();
  }
  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    this.fetchSvc.getBookmarked(localStorage.getItem('userId')).subscribe(data => {
      this.bookMark = data.data;
    })
  }
  move(slug){
    this.route.navigate(['/','explore','tabs',slug]);
  }
  deleteBookmark(id){
    this.loadCtrl.create({
      keyboardClose : true,
      message: 'Delete Bookmark'
    })
    .then(loading => {
      loading.present();
      this.deleteData = {
        id_user : localStorage.getItem('userId'),
        id_panti : id,
      }
      this.editSvc.deleteBookmark(this.deleteData).subscribe((data:any) => {
        if(data.code === 200){
          this.loadCtrl.dismiss();
          this.presentAlert('Berhasil');
          this.getData();
        }
      }, (err)=>{
        this.loadCtrl.dismiss();
        this.presentAlert('Gagal');
      });
    })
  }

  async presentAlert(text) {
    const alert = await this.alertCtrl.create({
      header: 'Bookmark',
      subHeader: text,
      message: 'Bookmark ' + text +' Dihapus',
      buttons: ['OK']
    });
    await alert.present();
  }

}
