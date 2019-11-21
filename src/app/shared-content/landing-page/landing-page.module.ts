import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LandingPagePage } from './landing-page.page';
import { LandingPageRoutingModule } from './landing-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LandingPageRoutingModule,
  ],
  declarations: [LandingPagePage]
})
export class LandingPagePageModule {}
