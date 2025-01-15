import { Component } from '@angular/core';
import { HandPanelComponent } from './hand-panel/hand-panel.component';
import { ResourcePoolComponent } from './resource-pool/resource-pool.component';
import { TestBuyArmyButtonComponent } from './test-buy-army-button/test-buy-army-button.component';

interface PurchaseInfoInterface {
  amountSpent: number,
  goldRemaining: number
  armyPurchased: {}
}

@Component({
  selector: 'app-root',
  imports: [HandPanelComponent, ResourcePoolComponent, TestBuyArmyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hextopia-app';
  onBuyArmy(purchaseInfo: PurchaseInfoInterface) {
    console.log('We bought an army and this is the purchase info: ' + purchaseInfo.goldRemaining)
  }
}
