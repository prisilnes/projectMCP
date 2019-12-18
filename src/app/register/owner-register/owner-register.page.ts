import { File } from '@ionic-native/file/ngx';
import { IonSlides, ActionSheetController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginRegisterService } from 'src/app/service/login-register.service';
import { newOwner } from './../../model/data';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

import * as firebase from 'firebase';

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
  selectedImage: SafeResourceUrl;
  photo: any;

  date : Date;

  userData : newOwner;
  constructor(
    private regisSvc: LoginRegisterService,
    private route: Router,
    // private camera: Plugins,
    private file: File,
    private actionSheet: ActionSheetController,
    private alertController: AlertController,
    private sanitizer: DomSanitizer,
  ) { }
  registerForm: FormGroup



  // async takePicture() {
// const image = await Plugins.Camera.getPhoto({
// quality: 100,
// allowEditing: false,
// resultType: CameraResultType.Base64,
// source: CameraSource.Camera
// });

// this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.base64String));

// // Create a root reference
// var storageRef = firebase.storage().ref();

// // Create a reference to 'mountains.jpg'
// let name = this.authSvc.getUser();
// var date = new Date;
// var uploadRef = storageRef.child( name + date.getUTCDate() + date.getUTCDay() + date.getUTCMonth() + date.getUTCFullYear() + 
//   date.getUTCHours() + date.getUTCMinutes() + date.getUTCSeconds() + '.jpg');

// // this.item.imageUrl = image.dataUrl;
// // console.log(this.item);

// return uploadRef
// .putString(image.base64String, 'base64', { contentType: 'image/png' })
// .then(() => {
//   return uploadRef.getDownloadURL().then(downloadURL => {
//     console.log(downloadURL);
//     this.item.imageUrl = downloadURL;
//     this.photo = downloadURL;
//     return this.homeService.setImage(downloadURL);
//   });
// });


  async takePhoto() {
    const { Camera } = Plugins;
    const result = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64
    });

    this.selectedImage = this.sanitizer.bypassSecurityTrustResourceUrl(
      result && result.base64String,
      );

    var storageRef = firebase.storage().ref();
    var date = new Date;
    var name = this.registerForm.value.firstName;
    var uploadRef = storageRef.child( name + date.getUTCDate() + date.getUTCDay() + date.getUTCMonth() + date.getUTCFullYear() + 
    date.getUTCHours() + date.getUTCMinutes() + date.getUTCSeconds() + '.jpg');

    return uploadRef
    .putString(result.base64String, 'base64', { contentType: 'image/png' })
    .then(() => {
      return uploadRef.getDownloadURL().then(downloadURL => {
        console.log(downloadURL);
        this.selectImage = downloadURL;
      });
    });
  }

  async pickPhoto() {
    const { Camera } = Plugins;
    const result = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      source: CameraSource.Photos,
      resultType: CameraResultType.Base64
    });

    this.selectedImage = this.sanitizer.bypassSecurityTrustResourceUrl(
      result && result.base64String,
      );
  }


  async selectImage(){
    const actionSheet = await this.actionSheet.create({
      header : 'Select Image Source',
      buttons: [{
        text: 'Load from library',
        handler: () => {
          this.pickPhoto();
        }
      },
      {
        text: 'Camera',
        handler: () => {
          this.takePhoto();
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
      kategoriPanti: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      jumlahPenghuni: new FormControl(null, {
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

  async presentAlert(status: boolean, functionName: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'GPS Status :' + functionName + status,
      buttons: ['OK']
    });

    await alert.present();
  }
}




