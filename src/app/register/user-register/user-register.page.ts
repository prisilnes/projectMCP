import { LoginRegisterService } from 'src/app/service/login-register.service';
import { newUser } from './../../model/data';
import { ModalController } from '@ionic/angular';
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
  ) { }
  registerForm : FormGroup;
  ngOnInit() {
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
    this.userData = {
      email: this.registerForm.value.email,
      first_name: this.registerForm.value.first_name,
      last_name: this.registerForm.value.last_name,
      password: this.registerForm.value.password,
    }
    this.regisSvc.registerUser(this.userData).subscribe((data: any) => {
      if (data.success === true){
        this.route.navigate(['/','login']);
      } 
    })
  }

  // openTerm(){
  //   this.modalCtrl.create({ component: TermsConditionsComponent })
  //     .then(modal => {
  //       modal.present();
  //     });
  // }

}
