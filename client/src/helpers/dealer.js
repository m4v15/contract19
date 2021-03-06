import Card from "./card";

export default class Dealer {
  constructor(scene) {
    this.dealCards = (hand) => {
      console.log(hand);
      hand.forEach((card, i) => {
        console.log(card);
        let playerCard = new Card(scene);
        playerCard.render(175 + i * 75, 650, card);
      });
    };
  }
}
