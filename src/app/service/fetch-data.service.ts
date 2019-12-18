import { SearchResult, SearchSlug } from './../model/data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, observable, BehaviorSubject } from 'rxjs';
import { Panti, DetailPanti, Bookmarked } from 'src/app/model/data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  // allPantiUrl = 'http://localhost:3000/panti/';
  // detailPantilUrl = 'http://localhost:3000/detail_panti/';
  // bookmarkUrl = 'http://localhost:3000/bookmarked_panti';
  allPantiUrl = 'https://backend-mobile-tamago.herokuapp.com/panti/';
  detailPantilUrl = 'https://backend-mobile-tamago.herokuapp.com/detail-panti/';
  bookmarkUrl = 'https://backend-mobile-tamago.herokuapp.com/bookmarked-panti';
  searchUrl = 'https://backend-mobile-tamago.herokuapp.com/search-panti';
  homePanti = new BehaviorSubject<Panti[]>([]);
  extractData(res) {
    return res;
  }

  constructor(
    private http: HttpClient,
  ) { }

  getPanti(): Observable<Panti[]> {
    const httpOptions = {
      headers : new HttpHeaders({
      })
    };
    this.http.get(this.allPantiUrl, httpOptions)
      .pipe(
        map(this.extractData)
      ).subscribe((data) => {
        this.homePanti.next(data);
      })
    return this.homePanti.asObservable();
  }

  getDetailPanti(slug): Observable<DetailPanti> {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.get(this.detailPantilUrl + slug, httpOptions)
    .pipe(
      map(this.extractData)
    );
  }

  getPantiCategory(slug): Observable<Panti[]> {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.get(this.allPantiUrl + slug, httpOptions)
    .pipe(
      map(this.extractData)
    );
  }

  getBookmarked(): Observable<Bookmarked[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 
      })
    };
    return this.http.get(this.bookmarkUrl, httpOptions)
    .pipe(
      map(this.extractData)
    )
  }

  searchData(data: SearchSlug): Observable<SearchResult[]> {
    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this.http.post(this.searchUrl, data , httpOptions)
    .pipe(
      map(this.extractData)
    )
  }
}
