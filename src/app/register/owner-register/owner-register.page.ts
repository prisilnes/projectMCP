import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-owner-register',
  templateUrl: './owner-register.page.html',
  styleUrls: ['./owner-register.page.scss'],
})
export class OwnerRegisterPage implements OnInit {

  slideOptions = {
    initialSlide: 0,
    speed: 500,
    slideShadows: true
  }


  constructor() { }
  registerForm: FormGroup
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
      namaPanti: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      alamat: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      noTelp: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      jenisPanti: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      jumlahPenghuni: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      tandaDaftar: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      namaYayasan: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
    })
  }

   nextSlide($event) {
    this.slides.getActiveIndex().then(index => {
      console.log(index);
      console.log('currentIndex:', index);
	  this.slides.slideNext();
      // OR this.slides.slideTo(index + 1);
    });
  }
}


