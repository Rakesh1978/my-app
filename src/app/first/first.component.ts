import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../hero.service';
import { UserResponse } from '../user-response';
import { Observable } from 'rxjs';
import { Util } from '../util';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [HeroService]
})
export class FirstComponent implements OnInit {

  @Input("inVal") firstVal:string;
  private data : Observable<UserResponse[]> ; 

  constructor(private heroService:HeroService) { 
    console.log("Inside first constructor");
    //this.data = this.getData();
    //console.log("Data---->"+this.data.subscribe(value=>{
      /*console.log("User Login: " + value.login);
      console.log("Bio: " + value.bio); 
      console.log("Company: " + value.company);
      */
     //console.log("Values: " + value);
    //}));
    //console.log("#############"+this.data);
  }
  message:string;
  ngOnInit() {    
    console.log("Inside first ngOnInit");
    console.log("^^^^^^^"+this.firstVal);
    //this.heroService.currentMessage.subscribe(message => this.message = message)
    //console.log("@@@@@@@ "+this.message);
    this.data = this.getData();
    
  }

  getData(){
    console.log("Inside getData  Util.inputVal-->"+ Util.inputVal);
    return this.heroService.getData(Util.inputVal);
  }

}
