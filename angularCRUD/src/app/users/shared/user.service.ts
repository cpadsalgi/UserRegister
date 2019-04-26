import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/oprator/map';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/toPromise';


import {User} from'./user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  selectedUser : User;
  userList : User[];
  showvar:boolean = false;
  selectedImageFile: File = null;
  imageUrl: string = "/assets/img/unnamed.png"
  
  constructor(private http : Http) { }

  //postUserImage(user_id: number, ImageFile :File)
  //{
  //  const formData: FormData = new FormData();
  //  formData.append('Image', ImageFile , ImageFile.name);
  //  formData.append('User_ID', String(user_id));
   // return this.http 
  //  .post('http://localhost:57702/api/Users',formData).pipe(map(x => x.json()));

  //}

  postUser(usr : User){
    var body = JSON.stringify(usr);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions})
    return this.http.post('http://localhost:57702/api/Users',body,requestOptions).pipe(map(x => x.json()));

  }
  putUser(id  : number, usr : User){
    var body = JSON.stringify(usr);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Put,headers : headerOptions})
    return this.http.put('http://localhost:57702/api/Users/'+id,body,requestOptions).pipe(map(res => res.json()));

  }

  deleteUser(id : number){
    return this.http.delete('http://localhost:57702/api/Users/'+id).pipe(map(res => res.json()));
    //this.getUserList();

  }

  getUserList(){
    this.http.get('http://localhost:57702/api/Users')
    .pipe(map((data : Response) =>{
      return data.json() as User[];
    })).toPromise().then(x => {
      this.userList =x;
    })
  }

}
