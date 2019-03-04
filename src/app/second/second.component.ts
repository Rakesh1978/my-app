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

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData;
  private statusBar;
  private domLayout;

  constructor(private heroService:HeroService, public  routingState: RoutingState) { 
    console.log("Inside SecondComponent constructor");
    this.defaultColDef = {
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      filter: true,
      resizable: true
    };
    this.columnDefs = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price', unSortIcon: true, filter:true}
    ];

  }

  private carList : Observable<Car[]> ; 
  previousRoute: string;
  ngOnInit(){
    console.log("Inside SecondComponent ngOnInit  Util.inputVal-->"+ Util.inputVal);
    this.previousRoute = this.routingState.getPreviousUrl();
    Util.prevPath = this.previousRoute;
    console.log("this.previousRoute-->"+this.previousRoute);
     this.carList = this.heroService.getCarDetails(Util.inputVal)
     //this.heroService.getCarDetails(Util.inputVal).subscribe(data=>{console.log(data)})
    
  }

  

}
