import createMenu from '../../components/menu/menu';
import './index.scss';

var menu = createMenu(['Main', 'About', 'Contact'], 'menu');

document.body.appendChild(menu);

console.log('in index.js');
