import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { SetBookmarked } from './../model/data';
import { Injectable } from '@angular/core';

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

  bookMarkUrl = 'https://backend-mobile-tamago.herokuapp.com/bookmark-panti'
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

}
