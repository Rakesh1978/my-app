import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { ThirdComponent } from './third/third.component';
import { BulkReviewComponent } from './bulk-review/bulk-review.component';
import { ButtonRendererComponent } from './render/button-renderer-component';
import { TesterComponent } from './test/tester.component';
//import { DatePickerModule } from 'ng2-datepicker-bootstrap';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    BulkReviewComponent,
    ButtonRendererComponent,
    TesterComponent,
    
    
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FormsModule ,
    AgGridModule.withComponents([ButtonRendererComponent]),
    MaterialModule
  ],
  providers: [HttpErrorHandler,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }