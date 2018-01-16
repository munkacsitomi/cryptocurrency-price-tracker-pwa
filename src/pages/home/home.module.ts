import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { PercentageIncreaseCalcPipe } from '../../pipes/percentageIncreaseCalc.pipe';

@NgModule({
  declarations: [
    HomePage,
    PercentageIncreaseCalcPipe
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
