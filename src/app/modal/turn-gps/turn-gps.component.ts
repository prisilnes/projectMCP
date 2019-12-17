import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

@Component({
  selector: 'app-turn-gps',
  templateUrl: './turn-gps.component.html',
  styleUrls: ['./turn-gps.component.scss'],
})
export class TurnGpsComponent implements OnInit {

  gpsActive: boolean;

  constructor(
    private diagnostic: Diagnostic,
    private modalCtrl : ModalController,
    private androidPermission: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,
    private route: Router,
  ) { }

  ngOnInit(){
    this.gpsActive = true;
    this.checkGps()
  }

  close(){
    this.modalCtrl.dismiss();
    this.navigate();
  }

  checkGps(){
    this.diagnostic.getLocationMode().then(
      (state: any) => {
        if (state == this.diagnostic.locationMode.LOCATION_OFF){
          this.gpsActive = false;
        } else {
          this.gpsActive = true;
        }
      }
    )
  }

  navigate(){
    this.route.navigate(['/','explore'])
  }
}
