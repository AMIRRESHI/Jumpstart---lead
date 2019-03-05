import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

 
import { LeadControlComponent } from './lead-control/lead-control.component';
import { leadReducer } from './reducers/lead.reducer';
import { StoreModule } from '@ngrx/store';
 

@NgModule({
  imports: [
    BrowserModule,
    LeadControlComponent,          // Eager loaded since we may need to go here right away as browser loads based on route user enters
    AppRoutingModule,
    StoreModule.forRoot({
      lead: leadReducer
    })
             
  ],
  declarations: [ AppComponent,
                  LeadControlComponent, 
                  //LeadComponent
                ],
  bootstrap: [AppComponent]
})
export class AppModule { }
