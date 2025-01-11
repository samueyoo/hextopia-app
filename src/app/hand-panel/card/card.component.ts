import { Component } from '@angular/core';
import { DUMMY_CARDS } from '../../dummy-data/dummy-cards';

const randomIndex = Math.floor(Math.random() * DUMMY_CARDS.length)

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cardProperties = DUMMY_CARDS[randomIndex];
  get cardArtPath() { //created a getter; can be used like a property
    return "assets/card/" + this.cardProperties.cardArt;
  }
}
