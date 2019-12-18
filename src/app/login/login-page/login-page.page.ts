import { User } from './../../model/data';

import { TurnGpsComponent } from './../../modal/turn-gps/turn-gps.component';
import { GetStartedComponent } from 'src/app/modal/get-started/get-started.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { SignupOptionComponent } from 'src/app/modal/signup-option/signup-option.component';
import { LoginRegisterService } from 'src/app/service/login-register.service';  
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  loginForm : FormGroup;
  userData : User;
  splashStatus = 0;
  constructor(
    private modalCtrl: ModalController,
    private loginSvc: LoginRegisterService,
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl( null, {
        updateOn : 'change',
        validators : [Validators.required, Validators.minLength(9)],
      }),
      password: new FormControl( null, {
        updateOn: 'change',
        validators: [Validators.required], 
      })
    });
    if (this.splashStatus === 0) {
      this.getStarted();
    }
  }

  signUp(){
    this.modalCtrl.create({ component: SignupOptionComponent })
      .then(modal => {
        modal.present();
      });
  }

  getStarted() {
    this.splashStatus = 1;
    this.modalCtrl.create({ component: GetStartedComponent })
      .then(modal => {
        modal.present();
      });
  }

  loginOwner() {
    this.modalCtrl.create({ component : TurnGpsComponent})
        .then(modal => {
          modal.present();
        })
  }

  loginUser(){
    this.modalCtrl.create({ component : TurnGpsComponent})
    .then(modal => {
      modal.present();
    })
  }
}

