import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import {HeroService } from './hero.service';
import { Util } from './util';
import {FirstComponent} from './first/first.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService, FirstComponent]

})

export class AppComponent implements OnInit {

    info: string = "";
    routeLinks: any[];
    activeLinkIndex = -1;

    listOptions = [
      { id: 0, name: "Perfect" },
      { id: 1, name: "Low" },
      { id: 2, name: "Minor" },
      { id: 3, name: "High" },
    ];
    constructor( private  router: Router, firstComponent:FirstComponent, heroService:HeroService) {
        this.routeLinks = [
            {
                label: 'Product 1',
                link: './product1',
                index: 0
            }, {
                label: 'Product 2',
                link: './product2',
                index: 1
            }/*, {
                label: 'Product 3',
                link: './product3',
                index: 2
            }, {
                label: 'Product 4',
                link: './product4',
                index: 3
            }, {
                label: 'Product 5',
                link: './product5',
                index: 4
            }*/
        ];

      
    }

 

    reload:boolean;
    onNavigate(value: string){ 
      console.log("Inside AppComponent onNavigate-->"+value);
      console.log("Inside AppComponent before Util.inputVal-->"+Util.inputVal);
      console.log("Inside AppComponent before Util.oldVal-->"+Util.oldVal);
      if(Util.inputVal == "ABC" &&  Util.oldVal == "ABC"){
        console.log("IF 1111");
        Util.inputVal=value;
        //Util.oldVal=value;
        this.router.navigate(['/product1']);
      }else if(Util.inputVal != value){
        console.log("IF 222");
        Util.inputVal=value;
        //this.router.navigated = false;
        //this.router.navigateByUrl('/product2', { skipLocationChange: true });
        this.router.navigate(['/product11']);
      }
      console.log("Inside AppComponent onNavigate After Util.inputVal-->"+Util.inputVal);
      console.log("Inside AppComponent onNavigate After Util.oldVal-->"+Util.oldVal);
      //this.reload = !this.reload;
      //this.router.navigated = false;
      
      //this.ngOnInit();
    }

    inVal:string;
    ngOnInit(): void {
      console.log("Inside AppComponent ngOnInit");     
    /*  this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
            console.log("&&&&&&&&&->"+this.activeLinkIndex);
        });
     */   
    }
    
    getData(value:string){
      this.inVal=value;
      console.log("Incoming value-->"+this.inVal);
    }

    callGetData(){
      console.log("Inside callGetData"+this.info);
    }

    /* 
    newMessage(value:string) {
      console.log("In newMessage-->"+value);
      Util.inputVal=value;
      console.log("In newMessage Util.inputVal-->"+Util.inputVal);
      //this.firstComponent.ngOnInit();
      //this.heroService.getData(value);
      
    }*/ 
}