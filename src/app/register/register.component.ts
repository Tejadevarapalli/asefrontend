import { Component, OnInit } from '@angular/core';
import { FireauthService} from '../fireauth.service';
// import { Popup} from 'ng2-opd-popup';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public fullname;
  public email;
  public password;
  public errorMessage;
  public successMessage;
  constructor(public auth: FireauthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.auth.fireRegister(this.email, this.password).then(res => {
      console.log(res)
      this.successMessage = 'Account got Created';
      alert(this.successMessage);
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      // this.popup.options = {
      //   header: 'Alert',
      //   color: 'red', // red, blue....
      //   widthProsentage: 40, // The with of the popou measured by browser width
      //   animationDuration: 1, // in seconds, 0 = no animation
      //   showButtons: true, // You can hide this in case you want to use custom buttons
      //   confirmBtnContent: 'OK', // The text on your confirm button
      //   cancleBtnContent: 'Cancel', // the text on your cancel button
      //   confirmBtnClass: 'btn btn-default', // your class for styling the confirm button
      //   cancleBtnClass: 'btn btn-default', // you class for styling the cancel button
      //   animation: 'fadeInDown' // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
      // };
      // this.popup.show(this.popup.options);
    });
  }
}
