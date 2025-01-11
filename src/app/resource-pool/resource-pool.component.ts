import { Component } from '@angular/core';
import { pResources } from '../game-state-data/pResources';
//import { turnOrderState } from '../game-state-data/turnOrder';

@Component({
  selector: 'app-resource-pool',
  imports: [],
  templateUrl: './resource-pool.component.html',
  styleUrl: './resource-pool.component.css'
})
export class ResourcePoolComponent {
  goldAvailable = pResources.p1.currency.goldAmount;
  //why does this not cause issues? vs trying to have p1 be dynamically decided?
}
