import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  authorID:any;
  author:any;
  nothing:any;
  authorName:any;
  constructor(
    private _httpService:HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      // console.log(params['id'])
      this.authorID = params['id']
    })
    this.OneAuthor()
    this.nothing = null;
  }
  OneAuthor(){
    const obs = this._httpService.OneAuthor(this.authorID)
    obs.subscribe(data=>{
      this.author = data['quotes']
      this.authorName = data['name'];
    })
  }
  voteUP(cID){
    const obs = this._httpService.voteUP(this.authorID,cID,this.nothing)
    obs.subscribe(data=>{
      this.OneAuthor()
    })
  }
  voteDown(cID){
    const obs = this._httpService.voteDown(this.authorID,cID,this.nothing)
    obs.subscribe(data=>{
      this.OneAuthor()
    })
  }
  deleteQ(idQ){
    const obs = this._httpService.deleteQ(this.authorID,idQ,this.nothing)
    obs.subscribe(data=>{
      console.log(data)
      this.OneAuthor()
    })
  }

}
