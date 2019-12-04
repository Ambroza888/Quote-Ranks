import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-editauthor',
  templateUrl: './editauthor.component.html',
  styleUrls: ['./editauthor.component.css']
})
export class EditauthorComponent implements OnInit {
  id:any;
  author:any;
  constructor(
    private httpService:HttpService,
    private _route: ActivatedRoute,
    private _router: Router,

  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.id = params['id']
    }),
    this.OneAuthor();
  }
  OneAuthor(){
    const obs = this.httpService.OneAuthor(this.id)
    obs.subscribe(data=>{
      this.author = data;
    })
  }
  update(){
    const obs = this.httpService.updateOne(this.id,this.author)
    obs.subscribe(data=>{
      this._router.navigate(['/'])
    })
  }
}
