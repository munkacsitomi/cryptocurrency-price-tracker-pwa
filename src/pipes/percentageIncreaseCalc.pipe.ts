import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentageIncreaseCalc'
})
export class PercentageIncreaseCalcPipe implements PipeTransform {

  transform(originalNumber: number, newNumber: number, newNumberMultiplier = 1): string {
    const counter = Math.abs(100 * ((newNumber * newNumberMultiplier) - originalNumber) / originalNumber).toFixed(2);
    return `${counter}%`;
  }
}
