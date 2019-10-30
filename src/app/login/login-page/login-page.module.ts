import { SignupOptionComponent } from './../../modal/signup-option/signup-option.component';
import { GetStartedComponent } from 'src/app/modal/get-started/get-started.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPagePage } from './login-page.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPagePage, SignupOptionComponent, GetStartedComponent],
  entryComponents: [SignupOptionComponent, GetStartedComponent]
})
export class LoginPagePageModule {}
