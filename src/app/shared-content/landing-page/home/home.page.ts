import { dummy } from './../../../model/data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from 'src/app/service/fetch-data.service';
import { Panti } from 'src/app/model/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pantiAsuhan: Panti[];
  constructor(
    private route: Router,
    private fetchSvc: FetchDataService
  ) { }

  kategori: dummy[] = [{
    nama: 'panti-asuhan'
  },
  {
    nama: 'panti-jompo'
  },
  {
    nama: 'panti-tunarungu'
  }
  ];

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.fetchSvc.getPanti().subscribe(respond => {
      this.pantiAsuhan = respond;
    })
  }

  cariKategori(slug){
    this.pantiAsuhan = [];
    this.fetchSvc.getPantiCategory(slug).subscribe(data => {
      this.pantiAsuhan = data;
    })
  }

  categoryPanti(){

  }
  move(slug){
    this.route.navigate(['/', 'explore', 'tabs', slug]);
  }
}
