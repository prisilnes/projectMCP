import { LoginRegisterService } from 'src/app/service/login-register.service';
import { newUser } from './../../model/data';
import { ModalController, LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TermsConditionsComponent } from 'src/app/modal/terms-conditions/terms-conditions.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {

  userData : newUser;
  constructor(
    private modalCtrl: ModalController,
    private regisSvc: LoginRegisterService,
    private route: Router,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController,
  ) { }
  registerForm : FormGroup;
  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      lastName: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      email: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      password: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      confirmPassword: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      TC: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
    })
  }

  registerUser(){
    if(this.registerForm.value.password === this.registerForm.value.confirmPassword){
    this.loadCtrl.create({
      keyboardClose: true,
      message: 'Sedang Mendaftarkan...'
    })
    .then(loading => {
      loading.present();
    this.userData = {
      email: this.registerForm.value.email,
      first_name: this.registerForm.value.first_name,
      last_name: this.registerForm.value.last_name,
      password: this.registerForm.value.password,
    }
    this.regisSvc.registerUser(this.userData).subscribe((data: any) => {
      if (data.code === 200){
        this.loadCtrl.dismiss();
        this.presentAlert('Berhasil');
        this.route.navigate(['/','login']);
      } else if (data.code === 201){
        this.loadCtrl.dismiss();
        this.presentAlert('Gagal');
        this.route.navigate(['/','login']);
      }
    },
    (err) => {
      this.loadCtrl.dismiss();
      this.presentAlert('Gagal');
      this.initForm();
    });
  })
  }else {
    this.WrongAlert();
  }
  }

  async presentAlert(status: string){
    var alert = await this.alertCtrl.create({
      header: 'Register Status',
      subHeader: status,
      message: 'Proses Pendaftaran Akun Anda ' + status,
      buttons: ['OK']
    });
    await alert.present();
  }

  async WrongAlert(){
    var alert = await this.alertCtrl.create({
      header: 'Password',
      message: 'Password yang anda buat tidak sama',
      buttons: ['OK']
    });
    await alert.present();
  }


}
