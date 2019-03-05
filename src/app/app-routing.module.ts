import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';
 
const app_routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: '/about' },
  { path: 'lead', loadChildren: 'app/lead-control/lead-control.module#LeadContolModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  //{ path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
