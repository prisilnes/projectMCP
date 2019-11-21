import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, observable, BehaviorSubject } from 'rxjs';
import { Panti, DetailPanti } from 'src/app/model/data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  allPantiUrl = 'http://localhost:3000/panti/';
  detailPantilUrl = 'http://localhost:3000/detail_panti/';
  bookmarkUrl = 'http://localhost:3000/bookmarked_panti';
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
}
