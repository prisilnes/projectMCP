import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ModalController, ToastController, ActionSheetController, LoadingController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { User, EditProfile } from 'src/app/model/data';
import { EditItemService } from 'src/app/service/edit-item.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins , CameraResultType, CameraSource } from '@capacitor/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})

export class EditProfileComponent implements OnInit {

  editForm: FormGroup;
  userData: User;
  tempImage: SafeResourceUrl;
  editSlug: EditProfile;
  constructor( 
    private modalCtrl: ModalController,
    private editSvc: EditItemService,
    private toastController: ToastController,
    private sanitizer: DomSanitizer,
    private actionSvc: ActionSheetController,
    private loadCtrl: LoadingController,
    private alertController: AlertController,
    ) { }

  ngOnInit() {
    this.userData ={
      user_id: + localStorage.getItem('userId'),
      user_email: localStorage.getItem('userEmail'),
      user_first_name: localStorage.getItem('userFirstName'),
      user_last_name: localStorage.getItem('userLastName'),
      user_image: localStorage.getItem('userImage'),
    }
    this.editForm = new FormGroup({
      firstName : new FormControl( this.userData.user_first_name, {
        updateOn : 'change',
        validators : [Validators.required, Validators.minLength(3)],
      }),
      lastName : new FormControl( this.userData.user_last_name, {
        updateOn : 'change',
        validators : [Validators.required, Validators.minLength(3)],
      }),
      email: new FormControl( this.userData.user_email, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(3)], 
      }),
      password : new FormControl( null, {
        updateOn : 'change',
        validators : [Validators.required, Validators.minLength(3)],
      }),
  });
}

async takePhoto() {
  const { Camera } = Plugins;
  const result = await Camera.getPhoto({
    quality: 100,
    allowEditing: false,
    source: CameraSource.Camera,
    resultType : CameraResultType.DataUrl,
  });
  this.tempImage = this.sanitizer.bypassSecurityTrustResourceUrl(
    result && (result.dataUrl),
  );
  this.userData.user_image = this.tempImage;
}

async pickPhoto() {
  const { Camera } = Plugins;
  const result = await Camera.getPhoto({
    quality: 100,
    allowEditing: false,
    source: CameraSource.Photos,
    resultType : CameraResultType.DataUrl,
  });
  this.tempImage = this.sanitizer.bypassSecurityTrustResourceUrl(
    result && (result.dataUrl),
  );
  this.userData.user_image = this.tempImage;
}

async selectImage(){
  const actionSheet = await this.actionSvc.create({
    header : 'Select Image Source',
    buttons: [{
      text: 'Camera',
      handler: () => {
        this.takePhoto();
      }
    },
    {
    text: 'Load from Library',
      handler: () => {
        this.takePhoto();
      }
    },
    {
    text: 'Cancel',
    handler: () => {
      this.actionSvc.dismiss();
    }
    }]
  });
  await actionSheet.present();
}
  closeModal(){
    this.modalCtrl.dismiss();
  }

  editProfile(){
    this.loadCtrl.create({
      keyboardClose: true,
      message: 'Sedang Mendaftarkan...'
    })
    .then(loading => {
      loading.present();
    this.editSlug = {
      id_user: ''+this.userData.user_id,
      name: this.editForm.value.firstName,
      email: this.editForm.value.email,
      gambar: '',
      password: this.editForm.value.password,
    }
    this.editSvc.editProfile(this.editSlug).subscribe((data: any) => {
      if(data.code === 200){
        this.loadCtrl.dismiss();
        this.presentAlert('Berhasil')
        this.closeModal();
      } else if (data.code === 401){
        this.loadCtrl.dismiss();
        this.presentToast();
      }
    }, (err) => {
      this.loadCtrl.dismiss();
      this.presentAlert('Gagal');
      
    })
  })
  }

  async presentAlert(status: string){
    var alert = await this.alertController.create({
      header: 'Edit Profil',
      subHeader: status,
      message: 'Proses Edit Profil anda ' + status,
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(){
    let toast = await this.toastController.create({
      message : 'Password yang Anda Masukkan Salah',
      duration: 5000,
    })
    await toast.present();
  }
}
