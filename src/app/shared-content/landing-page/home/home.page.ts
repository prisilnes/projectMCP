import { dummy } from './../../../model/data';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  data : dummy[] = [{
    nama : 'Panti Asuhan',
  },
  {
    nama : 'Panti Jompo',
  },
  {
    nama : 'Panti Tuna Netra',
  }
  ]

  pantiAsuhan : dummy[] = [{
    nama : 'Panti A'
  },
  {
    nama : 'Panti B'
  },
  {
    nama : 'Panti C'
  },
  {
    nama : 'Panti D'
  },
  {
    nama : 'Panti E'
  },
  {
    nama : 'Panti E'
  },
  ]

  constructor() { }

  ngOnInit() {
  }

}
