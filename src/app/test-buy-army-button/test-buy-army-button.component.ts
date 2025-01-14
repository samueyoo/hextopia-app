import { Component } from '@angular/core';
import { pResources } from '../game-state-data/pResources';

@Component({
  selector: 'app-test-buy-army-button',
  imports: [],
  templateUrl: './test-buy-army-button.component.html',
  styleUrl: './test-buy-army-button.component.css'
})
export class TestBuyArmyButtonComponent {
  goldAvailableRef = pResources.p1.currency.goldAmount;
  notEnoughGoldError = ""
  buyArmyOnClick() {
    console.log("Clicked!"); 
    if (this.goldAvailableRef < 50) {
      this.notEnoughGoldError = "Not enough gold! (50 gold required)" //not getting updated in the UI
      console.log("not enough gold error triggered")
    } else {
      this.goldAvailableRef = this.goldAvailableRef - 50; //not getting updated in the UI
      this.notEnoughGoldError = "";
      console.log("gold now left:" + this.goldAvailableRef);
    }
  }
  //only updating this component's state, but it's not displaying anything with data within the component
  //this. is probably only within this component instance and not updating anything in the stored object data
  //not tracking across components, if this was all within the resource pool component i think it would work
}
