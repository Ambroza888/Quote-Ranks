import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-create-q',
  templateUrl: './create-q.component.html',
  styleUrls: ['./create-q.component.css']
})
export class CreateQComponent implements OnInit {

  constructor(
    private _httpService:HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.authorID()
  }
  authorID(){
    this._route.params.subscribe((params:Params)=>{
      console.log(params['id'])
    })
  }
}
