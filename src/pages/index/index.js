import createMenu from '../../components/menu/menu';
import './index.scss';


var menu = createMenu([
	{
		name: 'Main',
		link: 'index.html',
		active: true
	},
	{
		name: 'Blog',
		link: 'blog.html'
	},
	{
		name: 'About',
		link: 'about.html'
	}
	], 'menu');

document.body.appendChild(menu);

console.log('in index.js');
