import { User } from 'src/app/model/data';
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
  userData : User;
  ngOnInit() {
    this.userData = {
      user_id : + localStorage.getItem('userId'),
      user_email: localStorage.getItem('userEmail'),
      user_first_name: localStorage.getItem('userFirstName'),
      user_last_name: localStorage.getItem('userLastName'),
      user_image: localStorage.getItem('userImage'),
    }
  }

  // localStorage.setItem('userId', data[0].user_id);
  // localStorage.setItem('userFirstName', data[0].user_first_name);
  // localStorage.setItem('userLastName', data[0].user_last_name);
  // localStorage.setItem('userEmail', data[0].user_email);



  openModal() {
    this.modalCtrl.create({ component : EditProfileComponent})
    .then(modal => {
      modal.present();
    });
  }

}
