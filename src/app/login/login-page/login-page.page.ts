import { User, LoginData } from './../../model/data';

import { TurnGpsComponent } from './../../modal/turn-gps/turn-gps.component';
import { GetStartedComponent } from 'src/app/modal/get-started/get-started.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { SignupOptionComponent } from 'src/app/modal/signup-option/signup-option.component';
import { LoginRegisterService } from 'src/app/service/login-register.service';  
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  logindata: LoginData

  loginForm : FormGroup;
  userData : User;
  splashStatus = 0;
  constructor(
    private modalCtrl: ModalController,
    private loginSvc: LoginRegisterService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
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

  login(){
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Login in Process'
    })
    .then(loading => {
      loading.present();
      this.logindata = {
        email : this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.loginSvc.loginUser(this.logindata).subscribe( (data:any) => {
        if(data.success === true){
          localStorage.setItem('userId', data.data[0].user_id);
          localStorage.setItem('userFirstName', data.data[0].user_first_name);
          localStorage.setItem('userLastName', data.data[0].user_last_name);
          localStorage.setItem('userEmail', data.data[0].user_email);
          localStorage.setItem('userImage', data.data[0].user_image);
          loading.dismiss();
          this.loginUser();
        }
      },
      (err) => {
        this.presentAlert();
      })
    })
  }

  loginUser(){
    this.modalCtrl.create({ component : TurnGpsComponent})
    .then(modal => {
      modal.present();
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Login',
      subHeader: 'Error',
      message: 'Password / Email yang anda masukkan salah!',
      buttons: ['OK']
    });

    await alert.present();
  }
}

