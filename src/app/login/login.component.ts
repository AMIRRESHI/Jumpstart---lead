import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 

@Component({
    selector: 'cm-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                 ) { 
                    
                        console.log('inside LoginComponent');
                       
                }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        
    }

     

}
