import { ChangePasswordComponent } from './../../../modal/change-password/change-password.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PrivacyPoliciesComponent } from 'src/app/modal/privacy-policies/privacy-policies.component';
import { TermsConditionsComponent } from 'src/app/modal/terms-conditions/terms-conditions.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  openChangePass(){
    this.modalCtrl.create({ component: ChangePasswordComponent })
      .then(modal => {
        modal.present();
      });
  }

  openPolicy(){
    this.modalCtrl.create({ component: PrivacyPoliciesComponent })
      .then(modal => {
        modal.present();
      });
  }

  openTerm(){
    this.modalCtrl.create({ component: TermsConditionsComponent })
      .then(modal => {
        modal.present();
      });
  }

  logOut(){
    localStorage.removeItem('userId');
    localStorage.removeItem('userFirstName');
    localStorage.removeItem('userLastName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userImage');
    this.route.navigate(['/','login']);
  }

}
