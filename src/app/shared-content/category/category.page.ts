import { dummy } from './../../model/data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  data : dummy[] = [{
    nama : 'Panti Asuhan',
  },
  {
    nama : 'Panti Jompo',
  },
  {
    nama : 'Panti Tuna Netra',
  },
  {
    nama : 'Panti Tuna Rungu',
  },
  {
    nama : 'Panti ...',
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}
