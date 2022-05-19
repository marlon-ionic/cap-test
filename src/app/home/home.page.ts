import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private iab: InAppBrowser) { }

  ionViewDidEnter(){
    this.launch();
  }

  launch() {
    const browser = this.iab.create('https://ionicframework.com/', '_blank', {
      hideurlbar:'yes',
      hidenavigationbuttons: 'yes'
    });
  }

}
