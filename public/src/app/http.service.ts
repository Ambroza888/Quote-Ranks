import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})


export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllAuthors(){
    return this._http.get('/api/author')
  }
  createAuthor(author){
    return this._http.post('api/author',author)
  }
  OneAuthor(id){  
    return this._http.get(`/api/author/${id}`)
  }
  updateOne(id,author){
    return this._http.put(`/api/author/author/${id}`,author)
  }
  voteUP(aID,cID,nothing){
    return this._http.put(`/api/voteUP/${aID}/${cID}`,nothing)
  }
  voteDown(aID,cID,nothing){
    return this._http.put(`/api/voteDown/${aID}/${cID}`,nothing)
  }
  deleteQ(aID,qID,nothing){
    return this._http.put(`/api/deleteQ/${aID}/${qID}`,nothing)
  }
}
