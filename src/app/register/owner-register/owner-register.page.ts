import { File } from '@ionic-native/file/ngx';
import { IonSlides, ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginRegisterService } from 'src/app/service/login-register.service';
import { newOwner } from './../../model/data';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Camera , CameraOptions } from '@ionic-native/camera/ngx';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import * as firebase from 'firebase';
import { EditItemService } from 'src/app/service/edit-item.service';

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
  photo: SafeResourceUrl;

  date : Date;
  captureData: string;
  userData : newOwner;
  constructor(
    private regisSvc: LoginRegisterService,
    private route: Router,
    private file: File,
    private actionSheet: ActionSheetController,
    private alertController: AlertController,
    private sanitizer: DomSanitizer,
    private imageSvc: EditItemService,
    private toastCtrl: ToastController,
    private camera : Camera,
  ) { }
  registerForm: FormGroup

  async takePhoto() {
    const cameraOptions : CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    }
    this.camera.getPicture(cameraOptions)
    .then((captureDataUrl) => {
      this.captureData = 'data:image/jpeg;base64,'+ captureDataUrl;
    }, (err) => {
      console.log(err);
    });

    let storageRef = firebase.storage().ref();
    const filename = Math.floor(Date.now() / 1000);
    let imageRef = storageRef.child('image').child('image'+ filename + '.jpg');

    return imageRef.putString(this.captureData, firebase.storage.StringFormat.DATA_URL).then((snapshot) => {
      this.selectedImage = snapshot.downloadURL;
    });
  }

  async pickPhoto() {
    const { Camera } = Plugins;
    const result = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      source: CameraSource.Photos,
      resultType: CameraResultType.Uri
    });
    this.uploadImageToFirebase(result);
  }

  async uploadImageToFirebase(image){
    this.imageSvc.uploadImage(image).then(async photoUrl =>{
      const toast = await this.toastCtrl.create({
        message: 'Image was Updated Successfully' + photoUrl,
        duration: 3000
      });
      await toast.present();
    })
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
      alamatOwner: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      telpOwner: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      namaPanti: new FormControl(null, {
        updateOn : 'change',
        validators: [Validators.required],
      }),
      telpPanti: new FormControl(null, {
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
    })
  }

  registerOwner(){
    this.userData = {
      first_name: this.registerForm.value.first_name,
      last_name: this.registerForm.value.last_name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      alamat_owner: this.registerForm.value.alamatOwner,
      telepon_owner: this.registerForm.value.telpOwner,
      nama_panti: this.registerForm.value.namaPanti,
      telepon_panti: this.registerForm.value.telpPanti,
      jumlah_penghuni: this.registerForm.value.jumlahPenghuni,
      kategori_panti: this.registerForm.value.kategoriPanti,
      gambar_filepath : '',
    }
    this.regisSvc.registerUser(this.userData).subscribe((data: any) => {
      if (data.success === true){
        this.route.navigate(['/','login']);
      } 
    })
  }

  async presentAlert(functionName: any) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'GPS Status :' + functionName,
      buttons: ['OK']
    });

    await alert.present();
  }
}

    // const result = await Camera.getPhoto({
    //   quality: 75,
    //   allowEditing: false,
    //   source: CameraSource.Camera,
    //   resultType: CameraResultType.DataUrl



