
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListChatPage } from '../pages/list-chat/list-chat';
import { SignUpPage } from '../pages/signup/signup';
import {LoginPage} from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { from } from 'rxjs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }

  launchPage(page: String){
    if(page == 'ListChatPage') this.nav.setRoot(ListChatPage);
    if(page == 'HomePage') this.nav.setRoot(HomePage);
    if(page == 'Register') this.nav.setRoot(SignUpPage);
    if(page == 'Login') this.nav.setRoot(LoginPage);
  }
}


  