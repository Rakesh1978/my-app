import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Car } from '../car';
import { Observable } from 'rxjs';
import { Util } from '../util';
import {RoutingState } from '../routing-state';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers: [HeroService]
})
export class SecondComponent implements OnInit {

  private defaultColDef;
  constructor(private heroService:HeroService, public  routingState: RoutingState) { 
    console.log("Inside SecondComponent constructor");
    this.defaultColDef = { sortable: true };

  }

  private carList : Observable<Car[]> ; 
  previousRoute: string;
  ngOnInit(){
    console.log("Inside SecondComponent ngOnInit  Util.inputVal-->"+ Util.inputVal);
    this.previousRoute = this.routingState.getPreviousUrl();
    Util.prevPath = this.previousRoute;
    console.log("this.previousRoute-->"+this.previousRoute);
     this.carList = this.heroService.getCarDetails(Util.inputVal);
    
  }

  
  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price', unSortIcon: true}
];

}
