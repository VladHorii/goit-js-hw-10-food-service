import menuCardTpl from '../templates/menu-card.hbs';
import menu from '../menu.json';

const menuListRef = document.querySelector('.js-menu');
menuListRef.insertAdjacentHTML('beforeend', menuCardTpl(menu));
