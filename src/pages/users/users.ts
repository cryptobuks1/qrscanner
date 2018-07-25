import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import {SettingsPage} from "../settings/settings";
import {LoginPage} from "../login/login";
import { DataService } from '../../services/data-service';
import { HomePage } from "../home/home";

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  public userData = JSON.parse(atob(localStorage.getItem('userToken')));
  public user = {};
  public myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern("[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,5}")
    ]))
  });

  constructor(
    public navCtrl: NavController,
    public nav: NavController,
    public toastCtrl: ToastController,
    private dataService : DataService
  ) {
    if (this.userData.id) {
      this.dataService.post('userprofile', {'id' : this.userData.id}).subscribe((user : any)=>{
        console.log('user', user);
        this.myForm.get('name').setValue(user.data.name);
        this.myForm.get('email').setValue(user.data.email);
      },
      (err : HttpErrorResponse)=>{
        this.nav.setRoot(LoginPage);          
      });
    }  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  save(): void {
    let user = this.myForm.value;
    console.log('user', user);
    user.id = this.userData.id;
    this.dataService.post('updateprofile', user).subscribe((data : any)=>{
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
        this.nav.setRoot(HomePage);
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
        localStorage.removeItem('us   erToken');
        this.nav.setRoot(LoginPage);
    });
  }
}
