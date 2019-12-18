import { FetchDataService } from 'src/app/service/fetch-data.service';
import { SearchSlug, SearchResult } from './../../model/data';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchForm: FormGroup;
  searchInput : SearchSlug;
  data : SearchResult[];
  constructor(
    private searchSvc : FetchDataService,
  ) {}

  ngOnInit() {
    this.data = [];
    this.searchForm = new FormGroup ({
      searchBox : new FormControl(null, {
        updateOn: 'change',
      }),
    });
    this.searchData();
  }
  
  ionViewWillEnter(){
  }

  searchData(): void {
    this.searchForm.get('searchBox').valueChanges.subscribe( val => {
      this.searchInput = {
        search : val,
      }
    this.searchSvc.searchData(this.searchInput).subscribe(data => {
      this.data = data;
    })
    })
  }

}
