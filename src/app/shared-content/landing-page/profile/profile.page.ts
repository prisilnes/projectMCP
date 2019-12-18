import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditProfileComponent } from 'src/app/modal/edit-profile/edit-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    ) { }

  ngOnInit() {
  }

  openModal() {
    this.modalCtrl.create({ component : EditProfileComponent})
    .then(modal => {
      modal.present();
    });
  }

}
