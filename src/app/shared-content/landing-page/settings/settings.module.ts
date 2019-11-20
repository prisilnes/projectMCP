import { ChangePasswordComponent } from './../../../modal/change-password/change-password.component';
import { TermsConditionsComponent } from './../../../modal/terms-conditions/terms-conditions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import { PrivacyPoliciesComponent } from 'src/app/modal/privacy-policies/privacy-policies.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SettingsPage,
    PrivacyPoliciesComponent, 
    TermsConditionsComponent, 
    ChangePasswordComponent
  ],
  entryComponents: [
    PrivacyPoliciesComponent, 
    TermsConditionsComponent, 
    ChangePasswordComponent
  ],
})
export class SettingsPageModule {}
