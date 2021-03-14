import {NgModule, Optional, SkipSelf, ErrorHandler} from '@angular/core';

// modules
import {SharedModule} from '../shared/shared.module';





// components

//import {NavComponent} from './nav/nav.component';

//import {ReportReaderComponent} from '../report-reader/report-reader.component';


import {NavComponent} from './nav/nav.component';




// factories

import {HttpClient} from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [    
  //  ReportReaderComponent,
	 NavComponent
    
  ],
  declarations: [
    
    //ReportReaderComponent,
	 NavComponent
    
  ],
  providers: [
    
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
   // throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}