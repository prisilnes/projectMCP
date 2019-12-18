import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
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
    private modalCtrl: ModalController,
    private androidPermission: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,
    private route: Router,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.checkGps();
  }

  close() {
    this.modalCtrl.dismiss();
    this.navigate();
  }

  checkGps() { // ngecek GPS udah nyala atau belum
    this.diagnostic.isGpsLocationAvailable().then((isEnabled) => {
      this.gpsActive = isEnabled;
      this.presentAlert(this.gpsActive, 'isGpsLocationAvailable');
    })
    this.diagnostic.getLocationMode().then((isEnabled) => {
      this.gpsActive = isEnabled;
      this.presentAlert(this.gpsActive, 'getLocationMode');
    })
    // this.diagnostic.isLocationEnabled().then((isEnabled) => {
    //   this.gpsActive = isEnabled;
    //   console.log(this.gpsActive);
    //   alert(this.gpsActive);
    // })
    // alert(this.gpsActive);
    // this.diagnostic.getLocationMode().then(
    //   (state: any) => {
    //     if (state === this.diagnostic.locationMode.LOCATION_OFF) {
    //       this.gpsActive = false;
    //     } else {
    //       this.gpsActive = true;
    //     }
    //   }
    // )
  }

  checkPermission() { // Ngecek kita punya permission ga buat pake GPS
    this.androidPermission.checkPermission(this.androidPermission.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
      if(result.hasPermission){
        this.checkGps(); // Kalo punya permission bakalan minta buka GPS
      } else {
        this.requestGpsPermission(); // Kalo ga punya permission bakalan minta buka GPS
      }
    },
    )
  }

  askTurnOn() { // Minta buat nyalain GPS
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        this.gpsActive = true;
      },
      error => alert('Error Requestin location permissions' + JSON.stringify(error))
    );
  }

  requestGpsPermission() { // Request Permission buat ngepake GPS
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log('Hello');
      } else {
        this.androidPermission.requestPermission(this.androidPermission.PERMISSION.ACCESS_COARSE_LOCATION)
        .then(
          () => {
            this.askTurnOn();
          },
          error => {
            alert('requestPermission Error Requesting location Permissions' + error);
          }
        )
      }
    })
  }



  navigate(){
    this.route.navigate(['/','explore'])
  }

  async presentAlert(status: boolean, functionName: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'GPS Status :' + functionName + status,
      buttons: ['OK']
    });

    await alert.present();
  }
}
