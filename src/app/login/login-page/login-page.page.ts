import { GetStartedComponent } from 'src/app/modal/get-started/get-started.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SignupOptionComponent } from 'src/app/modal/signup-option/signup-option.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  loginForm : FormGroup;

  constructor(
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl( null, {
        updateOn : 'change',
        validators : [Validators.required, Validators.minLength(9)],
      }),
      password: new FormControl( null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)], 
      })
    })
    // this.getStarted();
  }


  signUp(){
    this.modalCtrl.create({ component: SignupOptionComponent })
      .then(modal => {
        modal.present();
      })
  }

  getStarted(){
    this.modalCtrl.create({ component: GetStartedComponent })
      .then(modal => {
        modal.present();
      })
  }
}
