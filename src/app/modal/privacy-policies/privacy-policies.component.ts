import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policies',
  templateUrl: './privacy-policies.component.html',
  styleUrls: ['./privacy-policies.component.scss'],
})
export class PrivacyPoliciesComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    ) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }

}
