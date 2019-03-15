import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import {HeroService } from './hero.service';
import { Util } from './util';
import {FirstComponent} from './first/first.component';
import {RoutingState } from './routing-state';
import {ThirdComponent} from './third/third.component';
import { ButtonRendererComponent } from './render/button-renderer-component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService, FirstComponent,ThirdComponent]

})

export class AppComponent implements OnInit {


/** Simple method to toggle element visibility */
public toggle(): void { 
  console.log("Inside toggle");
  this.isViewable = !this.isViewable; 
}

    info: string = "";
    routeLinks: any[];
    activeLinkIndex = -1;

    listOptions = [
      { id: 0, name: "Perfect" },
      { id: 1, name: "Low" },
      { id: 2, name: "Minor" },
      { id: 3, name: "High" },
    ];
    private gridApi;
    above7K() {
      this.thirdComponent.applyFilter();
    }
  
    clearFilter() {
      this.thirdComponent.clearFilter();
    }
  
    clickFun(){
      console.log("Inside clickFun *************888");
      console.log("Inside clickFun Before Util.prevPath-->"+Util.prevPath);
       console.log("Inside clickFun Before Util.currPath-->"+Util.currPath);
      if(Util.inputVal != Util.oldVal || Util.oldVal == "ABC"){
        console.log("Inside clickFun if loop");
        Util.oldVal = Util.inputVal;
      }else{
        console.log("Inside clickFun ELSE loop");
        //this.router.navigate(['/product1']);
      }
      console.log("Inside clickFun after Util.prevPath-->"+Util.prevPath);
       console.log("Inside clickFun after Util.currPath-->"+Util.currPath);
    }
    reload:boolean;
    onNavigate(value: string){ 
      console.log("Inside onNavigate &&&&&&&&&&&&&&7");
      console.log("Inside onNavigate onNavigate-->"+value);
      console.log("Inside onNavigate before Util.inputVal-->"+Util.inputVal);
      console.log("Inside onNavigate before Util.oldVal-->"+Util.oldVal);
      if(Util.inputVal == "ABC" &&  Util.oldVal == "ABC"){
        console.log("IF 1111");
        Util.inputVal=value;
        //Util.oldVal=value;
        this.router.navigate(['/product1']);
      }else if(Util.inputVal != value){
        console.log("IF 222"+this.router.url);
        Util.inputVal=value;
        this.router.navigated = false;
        //this.router.navigateByUrl('/product2', { skipLocationChange: true });
        if(this.router.url == "/product11"){
          this.router.navigate(['/product1']);
        }else{
          this.router.navigate(['/product11']);
        }
        
      }
      console.log("Inside AppComponent onNavigate After Util.inputVal-->"+Util.inputVal);
      console.log("Inside AppComponent onNavigate After Util.oldVal-->"+Util.oldVal);
      //this.reload = !this.reload;
      //this.router.navigated = false;
      
      //this.ngOnInit();
    }

    inVal:string;
    previousRoute: string;
    ngOnInit(): void {
      console.log("Inside AppComponent ngOnInit");  
      this.previousRoute = this.routingState.getPreviousUrl();
      console.log("this.previousRoute-->"+this.previousRoute);   
    /*  this.router.events.subscribe((res) => {
            this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
            console.log("&&&&&&&&&->"+this.activeLinkIndex);
        });
     */   
    //this.isViewable = true; 
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
    constructor( private  router: Router, public firstComponent:FirstComponent, public heroService:HeroService, 
      public routingState: RoutingState, public thirdComponent:ThirdComponent) {
        console.log("Inside AppComponent constructor");  
        routingState.loadRouting();

        this.routeLinks = [
            {
                label: 'Product 1',
                link: './product1',
                index: 0
            }, {
                label: 'Product 2',
                link: './product2',
                index: 1
            } ,{
                label: 'Product 3',
                link: './product3',
                index: 2
            }/*, {
                label: 'Product 4',
                link: './product4',
                index: 3
            }, {
                label: 'Product 5',
                link: './product5',
                index: 4
            }*/
        ];

        this.frameworkComponents = {
          buttonRenderer: ButtonRendererComponent,
        }
        this.columnDefs = [
          {
            headerName: 'Button Col 1',
            cellRenderer: 'buttonRenderer',
            cellRendererParams: {
              onClick: this.onBtnClick1.bind(this),
              label: 'Click 1'
            }
          },
          { headerName: 'Model', field: 'model' },
          { headerName: 'Price', field: 'price' }
        ];
    
        this.defaultColDef = {
          enableRowGroup: true,
          enablePivot: true,
          enableValue: true,
          sortable: true,
          filter: true,
          resizable: true
        };
      
        this.rowData = [
          { make: 'Toyota', model: 'Celica', price: 35000 },
          { make: 'Ford', model: 'Mondeo', price: 32000 },
          { make: 'Porsche', model: 'Boxter', price: 72000 }
        ];
    }
    columnDefs;
    rowData:any;
    defaultColDef;

    frameworkComponents: any;
    rowDataClicked1 = {};
    rowDataClicked2 = {};

    
  // Class variables
    public isViewable: boolean;
    public isGridViewable: boolean=true;
    onBtnClick1(e) {
      console.log("**********INSIDE onBtnClick1******"+e.rowData.price );
      // Class variables
     this.isViewable=true;
     this.isGridViewable=false;
      this.rowDataClicked1 = e.rowData;
      Util.model=e.rowData.model;
    }
    
    onBtnClick2(e) { 
      console.log("##########INSIDE onBtnClick2#########"+ e.rowData.model);
      this.rowDataClicked2 = e.rowData;
    }
    onClick(){
      console.log("##########INSIDE onClick #########" );
      this.isGridViewable=true;
      this.isViewable=false;
    }
}