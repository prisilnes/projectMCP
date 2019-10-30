import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent implements OnInit {

  slideOptions = {
    initialSlide: 0,
    speed: 500,
    slideShadows: true
  }

  constructor(
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }
}
