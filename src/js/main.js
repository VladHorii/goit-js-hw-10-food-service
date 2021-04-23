import '../menu.json';
import ThemeSwitcher from './themeSwitcher';
import './cardsetRender';

const themeSwitchedRef = document.querySelector('#theme-switch-toggle');
new ThemeSwitcher(themeSwitchedRef);
