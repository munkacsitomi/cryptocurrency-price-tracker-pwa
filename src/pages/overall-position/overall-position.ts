import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';

@IonicPage()
@Component({
  selector: 'page-overall-position',
  templateUrl: 'overall-position.html',
})
export class OverallPositionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private holdingsProvider: HoldingsProvider) {
  }

  ionViewDidLoad() {
    this.holdingsProvider.loadHoldings();
  }
}
