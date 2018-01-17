import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';

@IonicPage()
@Component({
  selector: 'page-overall-position',
  templateUrl: 'overall-position.html',
})
export class OverallPositionPage {
  public combinedCurrentPrice: number = 0;
  public totalBuyingPrice: number = 0;
  public displayCurrency: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private holdingsProvider: HoldingsProvider) {
  }

  ionViewDidLoad() {
    this.holdingsProvider.loadHoldings(() => {
      this.sumPricesAndSetCurrency();
    });
  }

  addHolding(): void {
    this.navCtrl.push('AddHoldingPage');
  }

  private sumPricesAndSetCurrency() {
    for (const holding of this.holdingsProvider.holdings) {
      this.combinedCurrentPrice += (holding.value * holding.amount);
      this.totalBuyingPrice += holding.initialBuyingPrice;
      this.displayCurrency = holding.currency;
    }
  }
}
