import './menu.scss';

export default function (array, className) {
	var menu = document.createElement('ul');
	menu.className = className;

	array.forEach(function(item) {
		var listItem = document.createElement('li');
		var listLink = document.createElement('a');

		listLink.setAttribute('href', item.link);
		listLink.innerHTML = item.name;
		listItem.appendChild(listLink);

		if(item.active){
			listItem.setAttribute('class', 'active');
		}
		menu.appendChild(listItem);
	});


	return menu;
}
