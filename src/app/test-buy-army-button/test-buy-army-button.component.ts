import { Component, signal, computed, EventEmitter, Output } from '@angular/core';
import { pResources } from '../game-state-data/pResources';

@Component({
  selector: 'app-test-buy-army-button',
  imports: [],
  templateUrl: './test-buy-army-button.component.html',
  styleUrl: './test-buy-army-button.component.css'
})
export class TestBuyArmyButtonComponent {
  goldAvailableRef = signal(pResources.p1.currency.goldAmount); 
  maxArmiesAllowedRef = signal(pResources.p1.armies.maxArmiesAllowed);
  howManyArmiesToDeploy = signal(pResources.p1.armies.availableToDeploy.length);
  howManyArmiesDeployed = signal(pResources.p1.armies.deployed.length);
  howManyArmiesTotal = computed(() => this.howManyArmiesToDeploy() + this.howManyArmiesDeployed());
  clickFeedbackMsg = signal("") //these are properties stored under a Class
  
  @Output() buyArmyEmitter = new EventEmitter();
  //EventEmitter allows us to emit data out to any other parent components
  
  buyArmyOnClick() {
    console.log("Clicked!"); 
    if (this.goldAvailableRef() < 50 && this.howManyArmiesTotal() <= this.maxArmiesAllowedRef()) {
      this.clickFeedbackMsg.set("Not enough gold! (50 gold required)"); //not getting updated in the UI
      console.log("not enough gold error triggered")
    } else if (this.goldAvailableRef() < 50 && this.howManyArmiesTotal() > this.maxArmiesAllowedRef()) {
      this.clickFeedbackMsg.set("Not enough gold! (50 gold required) & You've reached the maximum number of available armies!"); //not getting updated in the UI
      console.log("not enough gold + too many armies error triggered")
    } else if (this.goldAvailableRef() >= 50 && this.howManyArmiesTotal() > this.maxArmiesAllowedRef()) {
      this.clickFeedbackMsg.set("You've reached the maximum number of available armies!");
      console.log("too many armies error triggered")
    } else {
      this.goldAvailableRef.set(this.goldAvailableRef() - 50); //not getting updated in the UI
      const purchaseInfoToEmit = {
        amountSpent: 50,
        goldRemaining: this.goldAvailableRef,
        armyPurchased: {}
      }
      this.buyArmyEmitter.emit(purchaseInfoToEmit); //temporarily just passing the amount of gold remaining
      this.clickFeedbackMsg.set("Army purchased! (-50 gold)");
      console.log("gold now left:" + this.goldAvailableRef);
    }
  }
  //only updating this component's state, but it's not displaying anything with data within the component
  //this. is probably only within this component instance and not updating anything in the stored object data
  //not tracking across components, if this was all within the resource pool component i think it would work

  //GAMENOTE*: when armies fight, instead of rolling damage or win/lose outcomes, roll on a battle event table
    //you are basically "weathering" different events until each combatant decides to retreat or duke it out to the end
    //e.g., higher values start to become worse and worse events (armies could have a "resiliency" with a subtracting modifier to the table)
      //20 = forced retreat, roller automatically fallse back and suffers withdrawal casualties (maybe a detrimental event?)
      //each combatant rolls simultaneously and if not destroyed, decides to continue or not
      //instead of tracking health or remaining units or w/e like risk, could just continue to wrack negative modifiers
      //"crippled, cannot be issued an order the next turn"
      //"rear ambush", when withdrawing, direction of withdrawal is chosen by one of the opposing combatants
      //maybe there's a casualty counter, that just ticks up with certain event ranges
        //upon reaching 5, army is destroyed
        //regenerates back to 0 end of every turn so long as within friendly borders (makes defending too strong?)
  }
