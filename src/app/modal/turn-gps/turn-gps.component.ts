import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-turn-gps',
  templateUrl: './turn-gps.component.html',
  styleUrls: ['./turn-gps.component.scss'],
})
export class TurnGpsComponent implements OnInit {

  constructor(
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {}

  close(){
    this.modalCtrl.dismiss();
  }
}
