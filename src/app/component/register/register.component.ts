import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 users = ['Driver', 'Customer'];
 signupForm: FormGroup;
 signupFormDriver: FormGroup;

 carsList = ['Alfa Romeo', 'Aston Martin', 'BMW', 'Bentley', 'Cadillac', 'Chevrolet'];
 modelList = ['147', '159', '3 series', '5 series', 'Aveo', 'Escalade'];
 listOfColors = ['white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'black', 'gray'];


 submitted = false;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.signupForm = new FormGroup({
      // tslint:disable-next-line:object-literal-key-quotes
      'firstname': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      // tslint:disable-next-line:object-literal-key-quotes
      'lastname': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      // tslint:disable-next-line:object-literal-key-quotes
      'email': new FormControl(null, [Validators.required, Validators.email]),
      // tslint:disable-next-line:object-literal-key-quotes
      'password': new FormControl(null,
      [Validators.required, Validators.minLength(8), Validators.maxLength(20),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ] ),
      // tslint:disable-next-line:object-literal-key-quotes
      'password2': new FormControl(null,
        [Validators.required, Validators.minLength(8), Validators.maxLength(20),
         Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      // tslint:disable-next-line:object-literal-key-quotes
      'userrole': new FormControl('Customer', Validators.required, this.userroleSelector),
      // tslint:disable-next-line:object-literal-key-quotes
      'conditions': new FormControl(null, Validators.required)
    },
    );
    {
       MustMatch('password', 'password2');
      }

    this.signupFormDriver = new FormGroup({
      // tslint:disable-next-line:object-literal-key-quotes
      'car': new FormControl('Alfa Romeo', Validators.required),
      // tslint:disable-next-line:object-literal-key-quotes
      'model': new FormControl('147', Validators.required),
      // tslint:disable-next-line:object-literal-key-quotes
      'color': new FormControl('white', Validators.required),
      // tslint:disable-next-line:object-literal-key-quotes
      'selectfile': new FormControl('white', Validators.required),
      // tslint:disable-next-line:object-literal-key-quotes
      'licence': new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      // tslint:disable-next-line:object-literal-key-quotes
      'plate': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)] )
    },
);
  }
    userroleSelector(control: FormControl): Promise<any> | Observable <any> {
      const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Customer') {
            resolve({ showDriverfrom: true });
          } else {
            resolve(null);
          }
        }, 1);
      });
      return promise;
    }
   // convenience getter for easy access to form fields
   get f() { return this.signupForm.controls; }
  onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.signupForm.invalid) {
          return;
        }

        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value));
      }
    // console.log(this.signupForm);
  }
