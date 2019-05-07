import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {mongoService} from "../mongo.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form: FormGroup;
  constructor(public formDetails: mongoService,private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup(
      {
        EmailID: new FormControl(),
        Password: new FormControl()
      });
  }
  onSubmit() {
    this.formDetails.signinDetails(this.form.value).subscribe(result => {
      if (result === 'Success') {
        this.router.navigateByUrl('/home/' + this.form.value.EmailID);
      } else {
        console.log('login check point result - ', result);
      }
    });
  }
}
