import { Component } from '@angular/core';
// import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { InAppBrowser } from '@ionic-enterprise/inappbrowser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
url = 'https://ionicframework.com';

  constructor(private iab: InAppBrowser) { }

  ionViewDidEnter(){
    this.launch();
  }

  launch() {
    // const browser = this.iab.create(this.url, '_blank', `hideurlbar=yes,hidenavigationbuttons=yes`);
    // const browser = this.iab.create(this.url, '_blank', {
    //   hideurlbar:'yes',
    //   hidenavigationbuttons: 'yes'
    // });
    const browser = this.iab.create(this.url, '_blank', {
      closebuttoncolor: '#000000',
      hidenavigationbuttons: 'yes',
      hideurlbar: 'yes',
      lefttoright: 'yes',
      closebuttoncaption: 'Close',
      location: 'yes',
      shouldPauseOnSuspend: 'yes',
      toolbarcolor: '#ffffff',
      usewkwebview: 'yes',
      zoom: 'no'
    });
  }

}
