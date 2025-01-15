// import { Injectable, signal } from '@angular/core';
// import { pResources } from '../game-state-data/pResources';

// interface pResourcesInterface {
//     p1: {
//         currency: {
//             goldAmount: number,
//         },
//         armies: {
//             availableToDeploy: object[],
//             deployed: object[],
//             maxArmiesAllowed: number,
//         },
//         cardsInHandById: string[],
//     },
//     p2: {
//         currency: {
//             goldAmount: number,
//         },
//         armies: {
//             availableToDeploy: object[],
//             deployed: object[],
//             maxArmiesAllowed: number,
//         },
//         cardsInHandById: string[],
//     }
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class SharedGameStateService {
//   sharedObject = signal(pResources);

//   updateCurrency(playerNumber: object, newGoldAmount) {
//     this.sharedObject.update((obj) => {
//       //obj[key] = value;
//       obj.p1.currency.goldAmount = 100;
//     });
//   }
// }

//need to return to this as services we need a better understanding of other topics
