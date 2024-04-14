function addList(className, tag) {
	// Get the div element with the specified class name
	var part = document.getElementsByClassName(className)[0];

	// Create a new list item
	var listItem = document.createElement("li");

	// Create a new anchor element
	var anchor = document.createElement("a");
	anchor.setAttribute("href", "");

	// Create a new image element
	var image = document.createElement("img");
	// Set the src attribute of the image element based on the tag parameter
	image.setAttribute("src", "img/" + tag + ".svg");
	image.classList.add("li_icon"); // Add the CSS class to set the color

	// Create a text node for the anchor element
	var textNode = document.createTextNode(tag.charAt(0).toUpperCase() + tag.slice(1));

	// Append the image and text node to the anchor element
	anchor.appendChild(image);
	anchor.appendChild(textNode);

	// Append the anchor element to the list item
	listItem.appendChild(anchor);

	// Append the list item to the div element
	part.getElementsByTagName("ul")[0].appendChild(listItem);
}

// Call the addList function for each item in the sections div
addList('sections', 'home');
addList('sections', 'person');
addList('sections', 'message');
addList('sections', 'history');
addList('sections', 'tasks');
addList('sections', 'communities');

// Call the addList function for each item in the settings div
addList('settings', 'settings');
addList('settings', 'support');
addList('settings', 'privacy');

function addCard(newTitle) {
	var cardHolder = document.getElementById('cardHolder');

	// Create a new card element
	var cardDiv = document.createElement('div');
	cardDiv.classList.add('card');

	// Create title and description elements
	var title = document.createElement('h4');
	title.textContent = newTitle;
	var description = document.createElement('p');
	description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

	// Create action buttons div
	var actionBtns = document.createElement('div');
	actionBtns.classList.add('action-btns');

	// Create action button images
	var starImg = document.createElement('img');
	starImg.src = './img/star-plus-outline.svg';
	starImg.alt = 'star-plus-outline';
	var eyeImg = document.createElement('img');
	eyeImg.src = './img/eye-plus.svg';
	eyeImg.alt = 'eye-plus';
	var shareImg = document.createElement('img');
	shareImg.src = './img/share-variant.svg';
	shareImg.alt = 'share-variant';

	// Append images to action buttons div
	actionBtns.appendChild(starImg);
	actionBtns.appendChild(eyeImg);
	actionBtns.appendChild(shareImg);

	// Append title, description, and action buttons to card div
	cardDiv.appendChild(title);
	cardDiv.appendChild(description);
	cardDiv.appendChild(actionBtns);

	// Append the card to the card holder
	cardHolder.appendChild(cardDiv);
}

addCard('Are warlocks OP?');
addCard('Check out this epic build');
addCard('New gold farming method!');
addCard('Looking for 3v3 arena team');
addCard('Super Hardcore Raiding guild drama');
addCard('NERF WARLOCK! >:(');
addCard('Ninjalooter about');
addCard('Population pvp server');
addCard('Cool new raid tactics');

function addAnnouncement(newTitle) {
	var announcementContainer = document.querySelector('.announcement-container');

	// Create a new announcement element
	var announcementDiv = document.createElement('div');
	announcementDiv.classList.add('announcement');

	// Create title and description elements
	var title = document.createElement('h4');
	title.textContent = newTitle;
	var description = document.createElement('p');
	description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

	// Append title and description to announcement div
	announcementDiv.appendChild(title);
	announcementDiv.appendChild(description);

	// Append the announcement to the announcement container
	announcementContainer.appendChild(announcementDiv);
}

addAnnouncement('New Raid Release');
addAnnouncement('Pvp season reset');
addAnnouncement('Bug fixes');
addAnnouncement('Q&A with Developers');
addAnnouncement('Warlocks are buffed');
