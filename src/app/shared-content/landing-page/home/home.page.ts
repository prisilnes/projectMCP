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

  data: dummy[] = [{
    nama: 'Panti Asuhan'
  },
  {
    nama: 'Panti Jompo'
  },
  {
    nama: 'Panti Tuna Rungu'
  }
  ];

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.fetchSvc.getPanti().subscribe(data => {
      this.pantiAsuhan = data;
    })
  }

  move(slug){
    this.route.navigate(['/', 'explore', 'tabs', slug]);
  }
}
