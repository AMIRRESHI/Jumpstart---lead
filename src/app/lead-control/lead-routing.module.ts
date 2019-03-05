import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeadControlComponent } from './lead-control.component';

const routes: Routes = [
  { path: '', component: LeadControlComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LeadContolRoutingModule {
  static components = [ LeadControlComponent ];
}
