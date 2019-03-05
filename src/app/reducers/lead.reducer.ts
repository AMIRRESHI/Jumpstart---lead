
import { Action } from '@ngrx/store'
import { Lead } from '../models/lead';
import * as LeadActions from './../actions/lead.actions'

export function leadReducer(state: Lead[] = [], action: LeadActions.Actions ){
    switch(action.type){
        case LeadActions.ADD_LEAD:
            return [...state, action.payload]
        //case LeadActions.REMOVE_LEAD:
            //return [...state, action]
        default:
            return state;    
    }
}
