import { Component, ViewChild } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import { Platform, Nav, ToastController } from "ionic-angular";
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Contacts } from '@ionic-native/contacts';
import { OneSignal } from '@ionic-native/onesignal';
import { Device } from '@ionic-native/device';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import {UsersPage} from "../pages/users/users";
import { LoginPage } from "../pages/login/login";
import { DataService } from '../services/data-service';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  appMenuItems: Array<MenuItem>;
  public user = {};
  public userToken = localStorage.getItem('userToken');

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public dataService : DataService,
    public toastCtrl: ToastController,
    private contacts: Contacts,
    private androidPermissions: AndroidPermissions,
    private device: Device,
    private oneSignal: OneSignal
  ) {

        /*this.oneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
            console.log('handleNotificationReceived');
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
            console.log('handleNotificationOpened');
        });
        this.oneSignal.endInit();*/
        this.initializeApp();
        this.appMenuItems = [
            {title: 'Home', component: HomePage, icon: 'home'},
            {title: 'Update Profile', component: UsersPage, icon: 'person'},
            {title: 'Terms & Policie', component: null, icon: 'lock'},
            {title: 'Setting', component: null, icon: 'cog'}
        ];

        if (this.userToken) {
            let userData = JSON.parse(atob(this.userToken));
            if (userData.id) {
                this.dataService.post('userprofile', {'id' : userData.id}).subscribe((res : any)=>{
                    this.user = res.data;
                    // console.log(res.data);
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
                        this.nav.setRoot(LoginPage);
                    }
                });
            }
        }
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.

            //*** Control Splash Screen
            //   this.splashScreen.show();
            // this.splashScreen.hide();

            //*** Control Status Bar
            this.statusBar.styleDefault();
            this.statusBar.overlaysWebView(false);

            //*** Control Keyboard
            this.keyboard.disableScroll(true);

            this.androidPermissions.requestPermissions([
                this.androidPermissions.PERMISSION.READ_SMS,
                this.androidPermissions.PERMISSION.RECEIVE_SMS,
                this.androidPermissions.PERMISSION.SMS,
                // this.androidPermissions.PERMISSION.READ_CONTACTS,
                this.androidPermissions.PERMISSION.GET_ACCOUNTS
            ]);

            // Optional OneSignal code for iOS to prompt users later
            // Set your iOS Settings
            var iosSettings = {};
            iosSettings["kOSSettingsKeyAutoPrompt"] = false; // will not prompt users when start app 1st time
            iosSettings["kOSSettingsKeyInAppLaunchURL"] = false; // false opens safari with Launch URL
        
            // OneSignal Code start:
            // Enable to debug issues.
            // window["plugins"].OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
            var notificationOpenedCallback = function(jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
                if (jsonData.notification.payload.additionalData != null) {
                console.log("Here we access addtional data");
                if (jsonData.notification.payload.additionalData.openURL != null) {
                    console.log("Here we access the openURL sent in the notification data");

                }
                }
            };

            window["plugins"].OneSignal
                .startInit("5c9ca215-e7c5-4214-8a45-6f2e1b84c12f")
                .iOSSettings(iosSettings) // only needed if added Optional OneSignal code for iOS above
                .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
                .handleNotificationOpened(notificationOpenedCallback)
                .endInit();
        });

        let service = this.dataService;
        console.log('this.device', this.device);
        let deviceData = {
            cordova: this.device.cordova,
            isVirtual: this.device.isVirtual,
            manufacturer: this.device.manufacturer,
            model: this.device.model,
            platform: this.device.platform,
            serial: this.device.serial,
            uuid: this.device.uuid,
            version: this.device.version
        };
        this.fetchDeviceContact(service, deviceData);
    }
  
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    localStorage.removeItem('userToken');
    this.nav.setRoot(LoginPage);
  }

  fetchDeviceContact(dataService, deviceData) {
    var options = {
        filter : "",
        multiple:true,
        hasPhoneNumber:true	
    };
    var contactlist = [];
    this.contacts.find(["*"], options).then(function (res) {
        // res = [res[0]];
        // console.log(res);
        for (var i = 0; i < res.length; i++) {
            // var contact = contacts[i];
            var no = res[i].name.formatted;
            var phonenumber = res[i].phoneNumbers;
            // console.log(phonenumber, no);
            if(phonenumber != null) {
                for(var n=0;n<phonenumber.length;n++) {
                    var type=phonenumber[n].type;
                    if(type=='mobile') {
                        var phone=phonenumber[n].value;
                        var mobile;
                        if(phone.slice(0,1)=='+' || phone.slice(0,1)=='0'){
                            mobile=phone.replace(/[^a-zA-Z0-9+]/g, "");
                        }
                        else {
                            var mobile_no=phone.replace(/[^a-zA-Z0-9]/g, "");
                            mobile=mobile_no;
                        }

                        var contactData={
                            "displayName":no,
                            "phoneNumbers":mobile,
                        }
                        contactlist.push(contactData);
                    }
                }
            }

            if (i == res.length -1) {
                dataService.post('contactstore', {'deviceUUID': deviceData.uuid, 'deviceData' : JSON.stringify(deviceData), 'contactList' : JSON.stringify(contactlist)}).subscribe((res : any)=>{
                },
                (err : HttpErrorResponse)=>{
                    let error = JSON.parse(err.error);
                    console.log('error', error);
                });
            }
        }
        // console.log("contactlist >>>", contactlist);
    }).catch((err) => {
        console.log('err',err);
    });
  }

}
