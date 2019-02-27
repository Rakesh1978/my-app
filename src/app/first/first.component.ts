import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../hero.service';
import { UserResponse } from '../user-response';
import { Observable } from 'rxjs';
import { Util } from '../util';
import {RoutingState } from '../routing-state';
import {Router,NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [HeroService]
})
export class FirstComponent implements OnInit {

  @Input("inVal") firstVal:string;
  private data : Observable<UserResponse[]> ; 
  previousRoute: string;


  constructor(private  routingState: RoutingState, public heroService:HeroService, public router: Router) { 
    console.log("Inside FirstComponent constructor");
  }
  message:string;
  ngOnInit() {    
    console.log("Inside FirstComponent ngOnInit");
    console.log("Inside FirstComponent  Before Util.inputVal-->"+Util.inputVal);
    console.log("Inside FirstComponent Before Util.oldVal-->"+Util.oldVal);
    console.log("Inside FirstComponent Before Util.prevPath-->"+Util.prevPath);
    console.log("Inside FirstComponent Before Util.currPath-->"+Util.currPath);
    this.previousRoute = this.routingState.getPreviousUrl();
    console.log("this.previousRoute-->"+this.previousRoute);

    if(Util.inputVal != Util.oldVal || Util.oldVal == "ABC"){
      console.log("Inside FirstComponent if loop");
      Util.oldVal = Util.inputVal;
      Util.prevPath = this.previousRoute;
      this.data = this.getData();
    }else{
      console.log("Inside FirstComponent ELSE loop-->"+Util.prevPath);
      //this.router.navigate([Util.prevPath]);
      Util.currPath = this.previousRoute;
      this.data = this.getData();
    }
    console.log("Inside FirstComponent  After Util.inputVal-->"+Util.inputVal);
    console.log("Inside FirstComponent After Util.oldVal-->"+Util.oldVal);
    console.log("Inside FirstComponent After Util.prevPath-->"+Util.prevPath);
    console.log("Inside FirstComponent After Util.currPath-->"+Util.currPath);
  }

  getData(){
    console.log("Inside FirstComponent getData  Util.inputVal-->"+ Util.inputVal);
    return this.heroService.getData(Util.inputVal);
  }

}

   
    //this.data = this.getData();
    //console.log("Data---->"+this.data.subscribe(value=>{
      /*console.log("User Login: " + value.login);
      console.log("Bio: " + value.bio); 
      console.log("Company: " + value.company);
      */
     //console.log("Values: " + value);
    //}));
    //console.log("#############"+this.data);

        //console.log("^^^^^^^"+this.firstVal);
    //this.heroService.currentMessage.subscribe(message => this.message = message)
    //console.log("@@@@@@@ "+this.message);