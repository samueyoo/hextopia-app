import { Component, Input, input, computed } from '@angular/core';
import { DUMMY_CARDS_DATABASE } from '../../dummy-data/dummy-cards-database';
import { findCardDbEntryByCardId, errorHandler } from '../../common-functions/common-functions';

const randomIndex = Math.floor(Math.random() * DUMMY_CARDS_DATABASE.length)

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  //@Input({required: true}) cardId!: string; //use ! since TS will complain we haven't initialized a value; ! reassures TS we will be setting a value
  //required:true is needed since with just ! we are lying to typescript; we are reassuring TS there will be a cardId input, but if we left it out in the parent component, this will not get set to a value
    //once we do this, when we use the app-card tag and forget to include a cardId, it will throw an error in the IDE
  cardId = input.required<string>(); //input() can also be used to make this a signal! we can also pass in an argument to set a default value to initialize to, unless add the .required method
  //we've made cardId into a signal incase we ever want the ability to change a card into a different card? 
  cardProperties = computed(()=> {
    return findCardDbEntryByCardId(this.cardId(), DUMMY_CARDS_DATABASE)
  });

  cardArtPath = computed(() => "assets/card/" + this.cardProperties().cardArt);

  // get cardProperties() {
  //   return findCardDbEntryByCardId(this.cardId, DUMMY_CARDS_DATABASE);
  // }
  //cardProperties = findCardDbEntryByCardId(this.cardId, DUMMY_CARDS_DATABASE); //if not a getter, will fail as it will try to get this.cardId before the Input is initialized
  // get cardArtPath() { //created a getter; can be used like a property
  //   return "assets/card/" + this.cardProperties().cardArt;
  // }
}
