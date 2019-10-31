import { dummy } from './../../model/data';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

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
  ]
  constructor() { }

  ngOnInit() {
  }

}
