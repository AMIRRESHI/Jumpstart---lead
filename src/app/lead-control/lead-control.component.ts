import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Lead } from '../models/lead';
import { AppState } from '../models/app.state';
import * as LeadActions from './../actions/lead.actions';


@Component({
    selector: 'app-lead-control',
    templateUrl: './lead-control.component.html'
  })
  export class LeadControlComponent {
    lead = {} as Lead;

    constructor(private store: Store<AppState>){
        console.log('inside LeadControlComponent')
    }

    addLead(id, businessName) {
        this.store.dispatch(new LeadActions.AddLead({id: id, businessName: businessName}))
    }
  }