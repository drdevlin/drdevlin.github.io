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
  block.style.backgroundColor = 'hsl(215, 70%, ' + (i + 18) * 2 + '%)'; //Color, but increment the lightness each time
});



