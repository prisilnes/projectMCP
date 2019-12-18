import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss'],
})

export class TermsConditionsComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }


  ngOnInit() {}

  close() {
    this.modalCtrl.dismiss();
  }
}
