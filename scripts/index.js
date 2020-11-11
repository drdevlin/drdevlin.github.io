/* Function for shuffling colorblocks */
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* Randomly color the colorblocks */
const colorBlocksNL = document.querySelectorAll('.colorblock'); //Bind all colorblocks to a NodeList
const colorBlocks = [];
colorBlocksNL.forEach(node => colorBlocks.push(node)); //Push all colorblocks into an array
const colorBlocksShuffled = shuffle(colorBlocks); //Shuffle the colorblocks array
colorBlocksShuffled.forEach((block, i) => {
  block.style.backgroundColor = 'hsl(215, 70%, ' + (i + 25) * 1.7 + '%)'; //Color, but increment the lightness each time
});

/* Functionality for contact button */
const email = document.querySelector('div.contact.email');
const github = document.querySelector('div.contact.github'); //Bind elements of logos

function toggleVisibility(element) { //Function for toggling any element
  element.style.visibility = (element.style.visibility === 'hidden') ? 'visible' : 'hidden'; //Swap visibility between visible and hidden
}

function toggleContact() { //Specifically toggles the contact logos
  toggleVisibility(email);
  toggleVisibility(github);
}

const contactButton = document.querySelector('nav.contact button'); //Bind the contact button
contactButton.addEventListener('click', toggleContact); //Toggle the contact logos when clicked



/* Disabling this for now
/* Show clickable elements when attempting to scroll
const contact = document.querySelector('nav.contact');
const skills = document.querySelector('nav.skills');
const weather = document.querySelector('nav.weather img');

function flashButtons() {
  contact.style.opacity = '0.9';
  skills.style.opacity = '0.9';
  weather.style.width = '380px';
  setTimeout(() => {
    contact.style.opacity = 'initial';
    skills.style.opacity = 'initial';
    weather.style.width = '400px';
    document.removeEventListener('scroll', flashButtons);
  }, 250);
}

document.addEventListener('scroll', flashButtons);
*/