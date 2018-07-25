import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {UsersPage} from "../users/users";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public nav: NavController) {
  }

  updateProfile() {
    this.nav.setRoot(UsersPage);
  }

  // logout
  logout() {
    localStorage.removeItem('userToken');
    this.nav.setRoot(LoginPage);
  }
}
