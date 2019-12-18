import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  editForm : FormGroup;
  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {this.editForm = new FormGroup({
    oldPass: new FormControl( null, {
      updateOn : 'change',
      validators : [Validators.required, Validators.minLength(9)],
    }),
    newPass: new FormControl( null, {
      updateOn: 'change',
      validators: [Validators.required, Validators.minLength(8)], 
    }),
    confirmnewPass: new FormControl( null, {
      updateOn: 'change',
      validators: [Validators.required, Validators.minLength(8)], 
    }),
   });
  }

  close(){
    this.modalCtrl.dismiss();
  }
}
