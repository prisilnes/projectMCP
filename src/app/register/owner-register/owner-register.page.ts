import { File } from '@ionic-native/file/ngx';
import { IonSlides, ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginRegisterService } from 'src/app/service/login-register.service';
import { newOwner } from './../../model/data';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  userData : newOwner;
  constructor(
    private regisSvc: LoginRegisterService,
    private route: Router,
    private camera: Camera,
    private file: File,
    private actionSheet : ActionSheetController,
  ) { }
  registerForm: FormGroup

  pickImage(sourceType){
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
    },(err) => {

    })
  }

  async selectImage(){
    const actionSheet = await this.actionSheet.create({
      header : 'Select Image Source',
      buttons: [{
        text: 'Load from library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'User Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    });
    await actionSheet.present();
  }

  currentIndex: number;
  

  @ViewChild('slides', {static: true}) private slides : IonSlides; 
  slideChanged(e: any) {
    this.slides.getActiveIndex().then((index: number) =>{
        this.currentIndex = (index + 1) *  0.34;
      }
    )
  }

  ngOnInit() {
    this.currentIndex = 0.33;
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

  registerOwner(){
    this.userData = {
      first_name: this.registerForm.value.first_name,
      last_name: this.registerForm.value.last_name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      telepon: this.registerForm.value.noTelp,
    }
    this.regisSvc.registerUser(this.userData).subscribe((data: any) => {
      if (data.success === true){
        this.route.navigate(['/','login']);
      } 
    })
  }
}


