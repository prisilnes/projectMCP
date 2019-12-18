import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { UserRegisterPage } from './user-register.page';
import { TermsConditionsComponent } from 'src/app/modal/terms-conditions/terms-conditions.component';

const routes: Routes = [
  {
    path: '',
    component: UserRegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserRegisterPage],
  entryComponents: [],
})
export class UserRegisterPageModule {}
