# Crypto PWA
### How to start the project:
```
npm i
npm run ionic:build
npm run ionic:serve
```
### Tasks:
- [x] Please read through and complete the tutorial at: https://www.joshmorony.com/building-a-cryptocurrency-price-tracker-pwa-in-ionic/ (only part 1 of the tutorial is required)
- [x] Extend the holding object and add holding page (and other relevant code) to also enter a date and initial buying price.
- [x] Add a new screen to calculate your overall position using the combined current price, total holdings and buying price
- [x] (Optional) Make HoldingsProvider return an observable, and add a configurable interval timer (e.g. every 5 seconds) which makes the service periodically call the API again for the new price. The UI should reflect the updated prices.
- [x] (Optional) Visualize your profit/loss per holding using a visualisation of your choice.