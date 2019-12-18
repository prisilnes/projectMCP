import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SetBookmarked } from './../model/data';
import { Injectable } from '@angular/core';
import * as firebase from  'firebase';
@Injectable({
  providedIn: 'root'
})
export class EditItemService {

  constructor(
    private http: HttpClient
  ) { }

  extractData(res) {
    return res;
  }

  bookMarkUrl = 'https://backend-mobile-tamago.herokuapp.com/bookmark-panti';


  setBookmarked(data : SetBookmarked){
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this.http.post(this.bookMarkUrl, data , httpOptions)
    .pipe(
      map(this.extractData)
    )
  }

  uploadImage(imageUri){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image').child('Tes Gambar');
        imageRef.putString(imageUri, 'data_url', { contentType: 'image/png' }) 
        .then(downloadUrl => {
          resolve(downloadUrl)
        }, err => {
          reject(err);
        })
      })
    };
}

