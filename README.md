# Portfolio Website
> A simple website to display some of my projects

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
The primary purpose of this website is to display projects. It's secondary purpose is to be a portfolio project itself. Thus, it is built using HTML5, CSS3, and some simple client-side javascript. It is also version controlled with git.

[Deployed Here](devlinrussell.net)

## Screenshots
![Example screenshot](./images/screenshot.png)

## Technologies
* HTML5
* CSS3
* Javascript ES6

## Code Examples
Accessible HTML:
```html
  <button class="contact colorblock">CONTACT</button>
  <div class="contact github">
    <a href="https://github.com/drdevlin" aria-label="contact on github"><img src="images/github.svg" alt="a github icon" /></a>
  </div>
  <div class="colorblock github" role="presentation"></div>
```

Responsive Grid:
```css
body {
  display: grid;
  grid-template: repeat(4, 25vh) / repeat(6, calc(100vw / 6));
}
.colorblock, .photo {
  overflow: hidden;
}
@media only screen and (min-aspect-ratio: 100/115) and (max-aspect-ratio: 135/100) { /* Medium aspect ratio */
  body {
    grid-template: repeat(4, 25vh) / repeat(4, calc(100vw / 4));
  }
}
@media only screen and (max-aspect-ratio: 100/115) { /* Narrow aspect ratio */
  body {
    grid-template: repeat(5, 20vh) / repeat(3, calc(100vw / 3));
  }
}
```

Fun Styling with JS:
```js
/* Randomly color the colorblocks */
const colorBlocksNL = document.querySelectorAll('.colorblock'); //Bind all colorblocks to a NodeList
const colorBlocks = [];
colorBlocksNL.forEach(node => colorBlocks.push(node)); //Push all colorblocks into an array
const colorBlocksShuffled = shuffle(colorBlocks); //Shuffle the colorblocks array
colorBlocksShuffled.forEach((block, i) => {
  block.style.backgroundColor = 'hsl(215, 70%, ' + (i + 25) * 1.7 + '%)'; //Color, but increment the lightness each time
});
```

## Features
Complete
* CSS Grid
* Responsive
* Random color assignment for different look everytime
* Semantic HTML and ARIA (as much as possible)
* Screen reader friendly

To-do list:
* Even better accessibility
* Distinquish links from non-links

## Status
Project is: _in progress_.

## Inspiration
Inspired by [Codecademy](codecademy.com) portfolio project.

## Contact
Created by [@drdevlin](mailto:devlinrussell@fastmail.com) Devlin Russell  - feel free to contact me!