import createMenu from '../../components/menu/menu';
import './blog.scss';

var menu = createMenu(['Main', 'About', 'Contact'], 'menu');

document.body.appendChild(menu);

console.log('in blog.js');
