import { Component, OnInit } from '@angular/core';
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
export class ThirdComponent {

  private gridApi;
  private gridColumnApi;

  private columnDefs;
  private defaultColDef;
  private rowData: any;

  constructor(private http: HttpClient, public heroService:HeroService) {
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

 
  above7K() {
    var ageFilterComponent = this.gridApi.getFilterInstance("price");
    ageFilterComponent.setModel({
      type: "greaterThan",
      filter: 70000,
      filterTo: null
    });
    this.gridApi.onFilterChanged();
  }

  clearFilter() {
    var ageFilterComponent = this.gridApi.getFilterInstance("price");
    ageFilterComponent.setModel(null);
    this.gridApi.onFilterChanged();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    /*this.http
    .get("https://api.myjson.com/bins/ly7d1")
      //.get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json")
      .subscribe(data => {
        this.rowData = data;
      });
      */

      this.heroService.getCarDetails(Util.inputVal).subscribe(data => {
        this.rowData = data;
      });
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
