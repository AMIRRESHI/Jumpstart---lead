import { NgModule } from '@angular/core';

import { LeadContolRoutingModule } from './lead-routing.module';

@NgModule({
  imports:      [ LeadContolRoutingModule ],
  declarations: [ LeadContolRoutingModule.components ]
})
export class LeadContolModule {
  

  constructor(){
    console.log('inside LeadContolModule');
  }
 }
