import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import {ActivatedRoute, Params, Router } from '@angular/router'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author:any;
  constructor(
    private _httpService:HttpService,
    private _router: Router
    ) { }

  ngOnInit() {
    this.author = {name:''}
  }
  createAuthor(){
    const obs = this._httpService.createAuthor(this.author)
    obs.subscribe(data=>{
      this.author = {name:''},
      this._router.navigate(['/'])

    })
  }
}
