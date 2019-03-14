import { Component, OnInit, AfterContentInit,ViewChild } from '@angular/core';
import { HeroService } from '../hero.service';
import { Car } from '../car';
import { Observable } from 'rxjs';
import { Util } from '../util';
import {GridOptions} from "ag-grid-community";
import { HttpClient } from "@angular/common/http";
//import "ag-grid-enterprise";

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
  providers: [HeroService]
})
export class ThirdComponent implements AfterContentInit,OnInit {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData: any;
  private gridOptions;
  ngAfterContentInit() {
    console.log("Inside ThirdComponent ngAfterContentInit ");
  }
  ngOnInit(){
    console.log("Inside ThirdComponent ngOnInit ");
    this.heroService.getCarDetails(Util.inputVal).subscribe(data => {this.rowData = data; });
    this.gridOptions = {
      rowData: this.rowData,
      columnDefs: this.columnDefs,
      //onGridReady: this.onGridReady,
      //onColumnMoved: this.onColumnMoved,
   }
  }
  constructor(private http: HttpClient, public heroService:HeroService) {
    console.log("Inside ThirdComponent constructor method");
    this.columnDefs = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price', 
      unSortIcon: true, filter: "agNumberColumnFilter"}
    ];

    this.defaultColDef = {
      sortable: true,
      filter: true
    };

    
  }
  

 applyFilter(){
   this.above7K();
 }
  above7K() {
    console.log("Inside ThirdComponent above7K method");
    var ageFilterComponent = this.gridApi.getFilterInstance("price");
    ageFilterComponent.setModel({
      type: "greaterThan",
      filter: 70000,
      filterTo: null
    });
    this.gridApi.onFilterChanged();
  }

  clearFilter() {
    console.log("Inside ThirdComponent clearFilter method");
    var ageFilterComponent = this.gridApi.getFilterInstance("price");
    ageFilterComponent.setModel(null);
    this.gridApi.onFilterChanged();
  }

  onGridReady(params) {
    console.log("Inside ThirdComponent onGridReady method");
    console.log("Inside ThirdComponent onGridReady counter"+Util.counter);
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    //this.heroService.getCarDetails(Util.inputVal).subscribe(data => {this.rowData = data; });
    //this.gridApi.sizeColumnsToFit();
      Util.counter++;
      console.log("Inside ThirdComponent onGridReady counter"+Util.counter);
      
  }
 
  onModelUpdated(){
    console.log("Inside ThirdComponent onModelUpdated method");
    if(Util.counter==2){
      this.saveState();
    }
    
  }
 

  colState ;
  groupState ;
  sortState;
  filterState ;
  saveState() {
    console.log("Inside save state");
    this.colState = this.gridColumnApi.getColumnState();
    this.groupState = this.gridColumnApi.getColumnGroupState();
    this.sortState = this.gridApi.getSortModel();
    this.filterState = this.gridApi.getFilterModel();
    console.log("column state saved");
  }

  restoreState() {
    this.gridColumnApi.setColumnState(this.colState);
    this.gridColumnApi.setColumnGroupState(this.groupState);
    this.gridApi.setSortModel(this.sortState);
    this.gridApi.setFilterModel(this.filterState);
    console.log("column state restored");
  }

}

/*
    this.columnDefs = [
      {
        headerName: "Athlete",
        field: "athlete",
        width: 150,
        //filter: "agSetColumnFilter"
      },
      {
        headerName: "Age",
        field: "age",
        width: 90,
        filter: "agNumberColumnFilter"
      },
      {
        headerName: "Country",
        field: "country",
        width: 120
      },
      {
        headerName: "Year",
        field: "year",
        width: 90
      },
      {
        headerName: "Date",
        field: "date",
        width: 145,
        //filter: "agDateColumnFilter",
        
      },
      {
        headerName: "Sport",
        field: "sport",
        width: 110,
        //filter: "agTextColumnFilter"
      },
      {
        headerName: "Gold",
        field: "gold",
        width: 100,
        //filter: "agNumberColumnFilter"
      },
      {
        headerName: "Silver",
        field: "silver",
        width: 100,
        //filter: "agNumberColumnFilter"
      },
      {
        headerName: "Bronze",
        field: "bronze",
        width: 100,
        //filter: "agNumberColumnFilter"
      },
      {
        headerName: "Total",
        field: "total",
        width: 100,
        filter: false
      }
    ];
*/
