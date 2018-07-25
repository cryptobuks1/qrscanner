import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
// import {Storage} from '@ionic/storage';
import { ScannerPage } from '../scanner/scanner';
import {SettingsPage} from "../settings/settings";
import { LoginPage } from "../login/login";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public random = Math.floor((Math.random()* 9)+1);
  
  public thumbs: Array<any> = [
    '../www/assets/img/1.jpg',
    '../www/assets/img/2.jpg',
    '../www/assets/img/3.jpg',
    '../www/assets/img/4.jpg',
    '../www/assets/img/6.jpg',
    '../www/assets/img/7.jpg',
    '../www/assets/img/8.jpg',
    '../www/assets/img/9.jpg',
    '../www/assets/img/10.jpg',
    '../www/assets/img/11.jpg',
    '../www/assets/img/12.jpg'

    // 'http://desktop-screens.com/data/out/74/3164427-mirror-wallpapers.jpg',
    // 'http://desktop-screens.com/data/out/74/3155513-miami-vice-wallpapers.jpg',
    // 'http://www.desktop-screens.com/data/out/74/3155721-michael-jackson-wallpapers.jpg',
    // 'http://desktop-screens.com/data/out/74/3155774-miami-vice-wallpapers.jpg',
    // 'http://www.desktop-screens.com/data/out/74/3155818-miami-vice-wallpapers.jpg',
    // 'http://desktop-screens.com/data/out/74/3155837-miami-vice-wallpapers.jpg',
    // 'http://www.desktop-screens.com/data/out/74/3155854-mickey-mouse-wallpapers.jpg',
    // 'http://desktop-screens.com/data/out/74/3155867-mickey-mouse-wallpapers.jpg',
    // 'http://www.desktop-screens.com/data/out/74/3155881-mickey-and-minnie-wallpapers.jpg',
    // 'http://www.desktop-screens.com/data/out/74/3155896-mickey-and-minnie-wallpapers.jpg',
    // 'http://desktop-screens.com/data/out/74/3155920-mickey-and-minnie-wallpapers.jpg'
  ];

  public thumb = this.thumbs[this.random];
  background: string;

  constructor(public nav: NavController, public popoverCtrl: PopoverController) {
    console.log(this.random, this.thumb);
    this.background = this.thumb;
    let userToken = localStorage.getItem('userToken');
    console.log('userToken ---------------',userToken);
    if (!userToken) {
        this.nav.setRoot(LoginPage);
    }
    
  }

  initializeApp() {
    
  }

  // to go account page
  goToAccount() {
    this.nav.push(SettingsPage);
  }

  payNow() {
    this.nav.push(ScannerPage);
  }

}

//
