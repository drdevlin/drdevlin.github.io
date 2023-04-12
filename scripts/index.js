// Randomly colour the colour blocks.

// First, make a function to shuffle the blocks.
const shuffle = (array) => {
  let currentIndex = array.length;

  // While there remain elements to shuffle,
  while (0 !== currentIndex) {

    // pick a remaining element,
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // and swap it with the current element.
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}

// Then, shuffle the blocks.
const colourBlocks = Array.from(document.querySelectorAll('.colorblock'));
const shuffledColourBlocks = shuffle(colourBlocks);

// And colour them.
shuffledColourBlocks.forEach((block, i) => {
  // Increment the lightness for each block.
  block.style.backgroundColor = `hsl(215, 70%, ${(i + 25) * 1.7}%)`; 
});


// Create toggle buttons.

// First, make a function to toggle visibility.
const toggle = (...elements) => {
  elements.forEach((element) => {
    if (element.style.visibility === 'hidden' || !element.style.visibility) {
      element.style.visibility = 'visible';
      element.style.opacity = 1;
    } else {
      element.style.visibility = 'hidden';
      element.style.opacity = 0;
    }
  });
}

// Get contact elements.
const email = document.querySelector('div.contact.email');
const github = document.querySelector('div.contact.github');
const linkedin = document.querySelector('div.contact.linkedin');

// Add toggle to contact button.
const contactButton = document.querySelector('button.contact');
contactButton.addEventListener('click', () => toggle(email, github, linkedin));

// Get skills elements.
const html5 = document.querySelector('div.skills.html');
const css3 = document.querySelector('div.skills.css');
const js = document.querySelector('div.skills.js');
const git = document.querySelector('div.skills.git');
const nodejs = document.querySelector('div.skills.node');

// Add toggle to skills button.
const skillsButton = document.querySelector('button.skills');
skillsButton.addEventListener('click', () => toggle(html5, css3, js, git, nodejs));
