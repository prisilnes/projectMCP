import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})

export class EditProfileComponent implements OnInit {

  editForm : FormGroup;
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      name : new FormControl( null, {
        updateOn : 'change',
        validators : [Validators.required, Validators.minLength(9)],
      }),
      email: new FormControl( null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.minLength(8)], 
      }),
  });
}

  closeModal(){
    this.modalCtrl.dismiss();
  }
}
