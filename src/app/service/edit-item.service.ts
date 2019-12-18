import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SetBookmarked, EditProfile } from './../model/data';
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

  bookMarkUrl= 'https://backend-mobile-tamago.herokuapp.com/bookmark-panti';
  bookDeleteUrl= 'https://backend-mobile-tamago.herokuapp.com/delete-bookmark';
  editProfileUrl = 'https://backend-mobile-tamago.herokuapp.com/edit-profile/';
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

  deleteBookmark(data : SetBookmarked){
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.post(this.bookDeleteUrl, data , httpOptions)
    .pipe(
      map(this.extractData)
    )
  }

  editProfile(data : EditProfile){
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.post(this.editProfileUrl + data.id_user, data, httpOptions);
  }

  uploadImage(imageUri){
    return new Promise<any>((resolve, reject) => {
      let storageRef = firebase.storage().ref();
      let imageRef = storageRef.child('image' + '.jpg')
        return imageRef.putString(imageUri, 'data_url', { contentType: 'image/png' }) 
        .then(downloadUrl => {
          resolve(downloadUrl)
        }, err => {
          reject(err);
        })
      })
    };
}

