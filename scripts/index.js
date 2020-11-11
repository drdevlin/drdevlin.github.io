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
const github = document.querySelector('div.contact.github');
const linkedin = document.querySelector('div.contact.linkedin'); //Bind elements of logos

function toggleVisibility(...elements) { //Function for toggling any number of any elements
  for (element of elements) {
    if (element.style.visibility === 'hidden' || !element.style.visibility) { //Swap visibility between visible and hidden
      element.style.visibility = 'visible';
      element.style.opacity = 1;
    } else {
      element.style.visibility = 'hidden';
      element.style.opacity = 0;
    }
  }
}

function toggleContact() { toggleVisibility(email, github, linkedin); } //Specifically toggles the contact logos

const contactButton = document.querySelector('nav.contact button'); //Bind the contact button
contactButton.addEventListener('click', toggleContact); //Toggle the contact logos when clicked

/* Functionality for skills button */
const html5 = document.querySelector('div.skills.html');
const css3 = document.querySelector('div.skills.css');
const js = document.querySelector('div.skills.js');
const git = document.querySelector('div.skills.git');
const nodejs = document.querySelector('div.skills.node'); //Bind elements of logos

function toggleSkills() { toggleVisibility(html5, css3, js, git, nodejs); } //Specifically toggles the skills logos

const skillsButton = document.querySelector('nav.skills button'); //Bind the skills button
skillsButton.addEventListener('click', toggleSkills); //Toggle the skills logos when clicked




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