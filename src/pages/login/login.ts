import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { NavController, AlertController, ToastController, MenuController, LoadingController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import { DataService } from '../../services/data-service';

declare var SMS:any;
declare var document:any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
    public otp = null;
    public user = {otp:null};
    public alertPresented: any;
    public otpPopup: any;
    loading: any;
  public myForm = new FormGroup({
    mobile: new FormControl('', Validators.required)
  });

  public userToken = localStorage.getItem('userToken');
  constructor(
      public nav: NavController,
      public alertCtrl: AlertController,
      public menu: MenuController,
      public toastCtrl: ToastController,
      private dataService : DataService,
      private androidPermissions: AndroidPermissions,
      public loadingController:LoadingController
  ) {
    this.menu.swipeEnable(false);
    this.alertPresented = false;

    if (this.userToken) {
        let userData = JSON.parse(atob(this.userToken));
        if (userData.id) {
            this.dataService.post('isuser', {'id' : userData.id}).subscribe((user : any)=>{
                if (user.status == 'success') {
                    this.nav.setRoot(HomePage);
                }
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
            });
        }
    }
  }
  
  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
    login() {
        this.loading = this.loadingController.create({ content: "Logging in ,please wait..." });
        this.loading.present();
        let user = this.myForm.value;
        this.dataService.user(user).subscribe((user : any)=>{
            this.user = user.data;
            let toast = this.toastCtrl.create({
                message: user.msg,
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
            });
            toast.present();
            this.readOTP();
            // this.otpVerify(user.data);
            
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
        });
    }
    
    stopSMS(){
        if(SMS) SMS.stopWatch(function(){
            console.log('watching stopped');
        }, function(){
            console.log('failed to stop watching');
        });
    }

    smsArived = (e: any) => {
        var sms = e.data;
        console.log("received sms "+JSON.stringify( sms ) );
        
        if(sms.address.indexOf('MSGIND') > -1 && sms.body.substr(0,4) != this.otp) //look for your message address
        {
            this.otp=sms.body.substr(0,4);
            this.otpVerify();
            this.stopSMS();
        }
        document.removeEventListener('onSMSArrive');
    };

    receiveSMS()
    {
      if(SMS) SMS.startWatch(function(){
        console.log('watching started');
      }, function(){
        this.otpVerify();
        console.log('failed to start watching');
      });
    }

    checkPermission()
    {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
        success => {
          //if permission granted
          console.log("permission granted", success.hasPermission)
          this.receiveSMS();
            // if(!success.hasPermission) {
                this.otpVerify();
            // }
        },
        err =>{
            this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).
            then(success=>{
                this.receiveSMS();
                this.otpVerify();
            },
            err=>{
                this.otpVerify();
                console.log("cancelled")
            });
        });
        this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
      
    }

    readOTP(){
        this.otp = null;
        this.checkPermission();
        document.addEventListener('onSMSArrive', this.smsArived);
    }

    otpVerify(){
        // this.appCtrl.getRootNav().dismissOverlays();
        console.log('this.otp', this.otp, this.alertPresented);
        // this.alertCtrl onDidDismiss();
        if(this.otpPopup)
            this.otpPopup.dismiss();

        // if(!this.alertPresented) {
            this.alertPresented = true
            this.loading.dismissAll();
        
            this.otpPopup = this.alertCtrl.create({
                title: 'Enter One Time Password',
                message: "One Time Password (OTP) has been sent to your mobile, please enter the same here to login.",
                inputs: [{
                        name: 'otp',
                        placeholder: 'OTP',
                        type: 'tel',
                        value : this.otp
                    }
                ],
                enableBackdropDismiss: false,
                buttons: [
                    {
                        text: 'Verify',
                        handler: data => {
                            // console.log(data, user);
                            if(this.user.otp == data.otp) {
                                this.loginSuccess();
                            } else {
                                this.alertPresented = false;
                                this.otpVerify();
                                let toast = this.toastCtrl.create({
                                    message: 'Please enter correct OTP',
                                    duration: 3000,
                                    position: 'top',
                                    cssClass: 'dark-trans',
                                    closeButtonText: 'OK',
                                    showCloseButton: true
                                });
                                toast.present();
                            }
                        }
                    },
                    {
                        text: 'Cancel',
                        handler: data => {
                            this.alertPresented = false;
                        }
                    }
                ]
            });
            this.otpPopup.present();
            this.otpPopup.onDidDismiss(() => {
                // console.log('dismiss');
                this.alertPresented = false;
            });
        //}
    }

    loginSuccess(){
        let user = this.user;
        let userToken = btoa(JSON.stringify(user));
        localStorage.setItem('userToken', userToken);
        this.nav.setRoot(HomePage);
        let toast = this.toastCtrl.create({
            message: 'Login successfully',
            duration: 3000,
            position: 'top',
            cssClass: 'dark-trans',
            closeButtonText: 'OK',
            showCloseButton: true
        });
        toast.present();
    }

  forgotPass() {
    let forgot = this.alertCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
