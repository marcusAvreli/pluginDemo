import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { reducer } from "app/ngrx/reducers";
import { StoreModule } from '@ngrx/store';
//import { reducer } from './reducers/myReport.reducer';
//import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
//import {ReportReaderComponent} from './report-reader/report-reader.component';
import {ReportReaderModule} from './report-reader/report-reader.module';
//import { ReportReaderComponent } from './report-reader/report-reader.component';
//import {GoogleBooksService} from './services/idmReports';

@NgModule({
  declarations: [
    AppComponent,
   // ReportReaderComponent
  ],
   imports: [
   BrowserModule,
	FormsModule,
	CoreModule,
    SharedModule,
	//ReportReaderComponent,
	ReportReaderModule,
  //  AppRoutingModule,
	StoreModule.provideStore(reducer),

  ],
  providers: [/*GoogleBooksService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
