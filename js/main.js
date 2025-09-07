import { cards } from './hw_card.js';
import { Card } from './Card.js';

const homeworks = document.querySelector('.homeworks');
const arrCards = [];

cards.map(el => {
    let homeworkCard = new Card(el.url, el.title, el.image, el.alt)
    homeworkCard.render(homeworks)
    arrCards.push(homeworkCard)
})

