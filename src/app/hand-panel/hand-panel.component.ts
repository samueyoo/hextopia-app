import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DUMMY_CARDS } from '../dummy-cards';

const randomIndex = Math.floor(Math.random() * DUMMY_CARDS.length);

@Component({
  selector: 'app-hand-panel',
  imports: [CardComponent],
  templateUrl: './hand-panel.component.html',
  styleUrl: './hand-panel.component.css'
})
export class HandPanelComponent {
  cardsInHand = //creating new property contained in the HandPanelComponent
}
