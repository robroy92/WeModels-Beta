import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  ViewController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    this.title = "My Profile";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
