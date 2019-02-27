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
    console.log("Inside FirstComponent constructor");
   
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
    console.log("Inside FirstComponent ngOnInit");
    console.log("Inside FirstComponent  Before Util.inputVal-->"+Util.inputVal);
    console.log("Inside FirstComponent Before Util.oldVal-->"+Util.oldVal);
    if(Util.inputVal != Util.oldVal || Util.oldVal == "ABC"){
      console.log("Inside FirstComponent if loop");
      Util.oldVal = Util.inputVal;
      this.data = this.getData();
    }else{
      console.log("Inside FirstComponent ELSE loop");
    }
    console.log("Inside FirstComponent  After Util.inputVal-->"+Util.inputVal);
    console.log("Inside FirstComponent After Util.oldVal-->"+Util.oldVal);
    //console.log("^^^^^^^"+this.firstVal);
    //this.heroService.currentMessage.subscribe(message => this.message = message)
    //console.log("@@@@@@@ "+this.message);
    
    
  }

  getData(){
    console.log("Inside FirstComponent getData  Util.inputVal-->"+ Util.inputVal);
    return this.heroService.getData(Util.inputVal);
  }

}
