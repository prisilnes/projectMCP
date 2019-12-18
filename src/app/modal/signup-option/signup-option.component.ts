import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup-option',
  templateUrl: './signup-option.component.html',
  styleUrls: ['./signup-option.component.scss'],
})
export class SignupOptionComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ){ }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }
}
