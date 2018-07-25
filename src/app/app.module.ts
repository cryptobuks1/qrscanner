import {NgModule} from "@angular/core";
import {IonicApp, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';
import {Contacts} from '@ionic-native/contacts';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Device } from '@ionic-native/device';
import { QRScanner } from '@ionic-native/qr-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { OneSignal } from '@ionic-native/onesignal';

import {DataService} from "../services/data-service";
import {BackgroundImage} from "../services/background-image";


import {MyApp} from "./app.component";

import {SettingsPage} from "../pages/settings/settings";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import { UsersPage } from '../pages/users/users';
import { ScannerPage } from '../pages/scanner/scanner';

import { BackgroundImageDirective } from '../directives/background-image/background-image';

// import services
// end import services
// end import services

// import pages
// end import pages

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    HomePage,
    LoginPage,
    RegisterPage,
    UsersPage,
    ScannerPage,
    BackgroundImageDirective,
    BackgroundImage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
    }),
    IonicStorageModule.forRoot({
      name: '__ionic3_start_theme',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    HomePage,
    LoginPage,
    RegisterPage,
    UsersPage,
    ScannerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    Contacts,
    AndroidPermissions,
    Device,
    QRScanner,
    InAppBrowser,
    OneSignal,
    DataService,
    BackgroundImage
  ]
})

export class AppModule {
}
