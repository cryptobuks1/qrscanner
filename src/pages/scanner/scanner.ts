import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {SettingsPage} from "../settings/settings";
import {HomePage} from "../home/home";

/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {

  qrData = null;
  createdCode = null;
  scannedCode = null;
  
  constructor(public navCtrl: NavController, public platform:Platform, private iab: InAppBrowser, private qrScanner: QRScanner, public navParams: NavParams) {
    platform.ready().then(()=>{
      // this.qrscanner();
    })

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ScannerPage');
    // this.scanCode();
    //this.qrscanner();
    
      // Optionally request the permission early
      
  }

  testscan(){
    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted

          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            // window.open(text, '_system');
            //this.iab.create(text);
            this.iab.create(text, '_system', 'location=yes,hardwareback=yes');
            //const browser =  this.iab.create(text, '_system', 'location=yes,hardwareback=yes');
            // browser.show();
            this.navCtrl.setRoot(HomePage);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            
          });

          // show camera preview
          this.qrScanner.show().then(data => {
            console.log(data)
          },
          (err) => {
              console.log('Error: ', err);
          });

          // wait for user to scan something, then the observable callback will be called
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));

  }

  ionViewWillEnter(){
    this.showCamera();
    this.testscan();
 }
 ionViewWillLeave(){
    this.hideCamera(); 
 }

 showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }

  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
  }


  scanCode() {
    this.testscan();
    /* this.barcodeScanner.scan().then(barcodeData => {
      console.log(barcodeData.format == 'CODE_128');
      if(barcodeData.format == 'CODE_128'){
        window.open(barcodeData.text, '_system');
      }
      this.scannedCode = barcodeData.text;
      console.log('Barcode data', barcodeData);
    }, (err) => {
        console.log('Error: ', err);
    }); */
  }

  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

}
