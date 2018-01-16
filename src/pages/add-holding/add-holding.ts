import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';

@IonicPage({
    defaultHistory: ['HomePage']
})
@Component({
    selector: 'page-add-holding',
    templateUrl: 'add-holding.html'
})
export class AddHoldingPage {
    readonly allCryptoCodes = [{
      name: 'Bitcoin',
      code: 'BTC'
    },
    {
      name: 'Litecoin',
      code: 'LTC'
    },
    {
      name: 'Ethereum',
      code: 'ETH'
    }];
    readonly allDisplayCurrencies = ['EUR'];

    private cryptoUnavailable: boolean = false;
    private checkingValidity: boolean = false;
    private cryptoCode: string;
    private displayCurrency: string;
    private amountHolding;
    private buyingDate: Date;
    private initialBuyingPrice: number;

    constructor(private navCtrl: NavController, private holdingsProvider: HoldingsProvider) {
    }

    addHolding(): void {

        this.cryptoUnavailable = false;
        this.checkingValidity = true;

        let holding = {
            crypto: this.cryptoCode,
            currency: this.displayCurrency,
            amount: this.amountHolding || 0,
            buyingDate: this.buyingDate,
            initialBuyingPrice: this.initialBuyingPrice
        };

        this.holdingsProvider.verifyHolding(holding).subscribe((result) => {

            this.checkingValidity = false;

            if(result.success){
                this.holdingsProvider.addHolding(holding);
                this.navCtrl.pop();
            } else {
                this.cryptoUnavailable = true;
            }

        }, (err) => {

            this.checkingValidity = false;

        });

    }

    // This is a workaround because the ion-input converts numbers to string
    // ref.: https://github.com/ionic-team/ionic/issues/7121
    convertToNumber(event):number { return +event; }

}
