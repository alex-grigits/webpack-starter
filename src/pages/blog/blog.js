import createMenu from '../../components/menu/menu';
import './blog.scss';


var menu = createMenu([
	{
		name: 'Main',
		link: 'index.html'
	},
	{
		name: 'Blog',
		link: 'blog.html',
		active: true
	},
	{
		name: 'About',
		link: 'about.html'
	}
	], 'menu');

document.body.appendChild(menu);

console.log('in index.js');
