import { Component, signal } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DUMMY_CARDS_DATABASE } from '../dummy-data/dummy-cards-database';
import { pResources } from '../game-state-data/pResources';

@Component({
  selector: 'app-hand-panel',
  imports: [CardComponent],
  templateUrl: './hand-panel.component.html',
  styleUrl: './hand-panel.component.css'
})
export class HandPanelComponent {
  cardIdsInHand = pResources.p1.cardsInHandById; //creating new property contained in the HandPanelComponent
  cardIdSample = this.cardIdsInHand[2];
  //This property can now be accessed in the html template file
  // we could mark this as private (private cardsInHand) which would make it inaccessible by the html file
}


/*
  There is a variable to keeps track of the max amount of cards in hand
  Start with 7 cards
  Different actions can cause you to draw if you aren't at 7
    cap helps maintain no player ever gets too insanely ahead
  


  Need to have an option to muster an army (draw from the muster deck)
  Draw 7 cards from the muster pool (another 7 is drawn from the other player's muster pool)
  Pick one, pass it to the opp's draft queue
    If no pick has been passed from opp, display "WAITING ON PICK"
    If picks are in main player's queue, display cards remaining
    Repeat until:
      No cards are in either player's queue
      No cards are in either player's pickable pool
*/