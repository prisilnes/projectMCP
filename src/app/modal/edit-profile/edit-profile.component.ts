import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { User, EditProfile } from 'src/app/model/data';
import { EditItemService } from 'src/app/service/edit-item.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})

export class EditProfileComponent implements OnInit {

  editForm: FormGroup;
  userData: User;

  editSlug: EditProfile;
  constructor( 
    private modalCtrl: ModalController,
    private editSvc: EditItemService,
    private toastController: ToastController,
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
        validators : [Validators.required, Validators.minLength(9)],
      }),
      lastName : new FormControl( this.userData.user_last_name, {
        updateOn : 'change',
        validators : [Validators.required, Validators.minLength(9)],
      }),
      email: new FormControl( this.userData.user_email, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)], 
      }),
      password : new FormControl( null, {
        updateOn : 'change',
        validators : [Validators.required, Validators.minLength(9)],
      }),
  });
}

  closeModal(){
    this.modalCtrl.dismiss();
  }

  editProfile(){
    this.editSlug = {
      id_user: ''+this.userData.user_id,
      name: this.editForm.value.firstName,
      email: this.editForm.value.email,
      gambar: '',
      password: this.editForm.value.password,
    }
    this.editSvc.editProfile(this.editSlug).subscribe((data: any) => {
      if(data.code === 200){
        this.closeModal();
      } else if (data.code === 401){
        this.presentToast();
      }
    })
  }

  async presentToast(){
    let toast = await this.toastController.create({
      message : 'Password yang Anda Masukkan Salah',
      duration: 5000,
    })
    await toast.present();
  }
}
