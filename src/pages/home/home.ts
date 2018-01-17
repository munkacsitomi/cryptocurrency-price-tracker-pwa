import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    public defaultRefreshRate: number = 5000; // Default refresh rate is 5 seconds
    public refreshRateOptions = [{
        name: 'Do not refresh',
        code: 0
      },
      {
        name: '2 sec',
        code: 2000
      },
      {
        name: '5 sec',
        code: 5000
      },
      {
        name: '1 min',
        code: 60000
      },
      {
        name: '5 min',
        code: 300000
      }];

    constructor(private navCtrl: NavController, private holdingsProvider: HoldingsProvider) {
    }

    ionViewDidLoad(): void {
        this.holdingsProvider.loadHoldings();
        this.holdingsProvider.refreshPrices(this.defaultRefreshRate);
    }

    addHolding(): void {
        this.navCtrl.push('AddHoldingPage');
    }

    goToCryptonator(): void {
        window.open('https://www.cryptonator.com/api', '_system');
    }

    refreshPrices(refresher): void {
        this.holdingsProvider.fetchPrices(refresher);
    }

    overallPosition() {
      this.navCtrl.push('OverallPositionPage');
    }

    changeRefreshRate(newRefreshRate) {
        this.holdingsProvider.refreshPrices(newRefreshRate);
        return newRefreshRate;
    }
}