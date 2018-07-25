import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {NavController, ToastController} from "ionic-angular";
import {LoginPage} from "../login/login";
import { DataService } from '../../services/data-service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
    public user = {};
    public myForm = new FormGroup({
        name: new FormControl('', Validators.required),
        // email: new FormControl('', Validators.email),
        email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            //Validators.pattern("/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/")
        ])),
        mobile: new FormControl('', Validators.required),
        gender: new FormControl('')
    });

    constructor(
        public nav: NavController,
        private dataService : DataService,
        public toastCtrl: ToastController,
    ) {
    }

  register(): void {
    console.log(this.myForm.value);  // {first: 'Nancy', last: 'Drew'}
    // this.nav.setRoot(HomePage);
    let user = this.myForm.value;
    console.log('user', user);
    this.dataService.registerUser(user).subscribe((data : any)=>{
        console.log('data', data);
        let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
        this.nav.setRoot(LoginPage);
    },
    (err : HttpErrorResponse)=>{
        let error = JSON.parse(err.error);
        if (error.status == 'fail') {
            let toast = this.toastCtrl.create({
                message: error.msg,
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
        }
        // this.isLoginError = true;
    });
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
