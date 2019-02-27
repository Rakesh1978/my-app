import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Hero } from './hero';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { UserResponse } from './user-response';
import { Car } from './car';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroesUrl = 'api/heroes';  // URL to web api
  private handleError: HandleError;
  heroes: Hero[];
  restItemsUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';

  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroService');
  }

  baseUrl:string = "http://localhost:4200";
  //private data : Observable<UserResponse> ; 
  getData(val:string){
    console.log("Inside HeroService getData  Util.inputVal-->"+ val);
    //return this.http.get<UserResponse>('https://api.github.com/users/seeschweiler');
    return this.http.get<UserResponse[]>('https://jsonplaceholder.typicode.com/posts');
     //console.log("Data**********-> "+this.data);
    /*this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log("User Login: " + data.login);
      console.log("Bio: " + data.bio);
      console.log("Company: " + data.company);
    });*/
  }

  get_products(){
    return this.http.get(this.baseUrl + '/products');
  }  
  
  getCarDetails(val:string){
    console.log("Inside HeroService getCarDetails Util.inputVal-->"+ val);
    return this.http.get<Car[]>('https://api.myjson.com/bins/ly7d1');
    //.subscribe(data=>{console.log(data)})
  }
/*
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    console.log("In changeMessage-->"+message);
    this.messageSource.next(message);
    console.log("In changeMessage currentMessage-->"+this.messageSource.getValue());
  }
*/
}
