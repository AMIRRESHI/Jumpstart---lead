import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Lead } from './models/lead';
import { State } from '@ngrx/store';

@Component({
  selector: 'cm-app-component',
  templateUrl: './app.component.html'
})
export class AppComponent {
  //leads: Observable<Lead[]>

  constructor(){
    //this.leads = this.store.select(State => State.lead)
  }

}
