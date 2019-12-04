import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors:any
  quats:any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
  }
  getAllAuthors(){
    const obs = this._httpService.getAllAuthors()
    obs.subscribe(data=>{
      this.authors = data;
    })
  }

}