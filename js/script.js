/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * array with quotes
***/

const quotes = [
  {
    quote: "One's destination is never a place, but a new way of seeing things.",
    source: "Henry Miller"
  },
  {
    quote: "I saw that my life was a vast glowing empty page and I could do anything I wanted.",
    source: "Jack Keroauc",
    citation: "The Dharma Bums",
    year: 1958
  },
  {
    quote: "A poet makes himself a visionary through a long, boundless, and systematized disorganization of all the senses. All forms of love, of suffering, of madness; he searches himself, he exhausts within himself all poisons, and preserves their quintessences. Unspeakable torment, where he will need the greatest faith, a superhuman strength, where he becomes all men the great invalid, the great criminal, the great accursed--and the Supreme Scientist! For he attains the unknown! Because he has cultivated his soul, already rich, more than anyone! He attains the unknown, and if, demented, he finally loses the understanding of his visions, he will at least have seen them! So what if he is destroyed in his ecstatic flight through things unheard of, unnameable: other horrible workers will come; they will begin at the horizons where the first one has fallen!",
    source: "Arthur Rimbaud"
  },
  {
    quote: "Nothing endures but change.",
    source: "Heraclitus",
    category: "Philosophy"

  },
  {
    quote: "Underneath all reason lies delirium and drift.",
    source: "Gilles Deleuze",
    category: "Philosophy"

    
  },
  {
    quote: "What does your conscience say?- 'You should become who you are.'",
    source: "Friedrich Nietzsche",
    citation: "The Gay Science",
    category: "Philosophy",
    year: 1882
  },
  {
    quote: "All paths are the same: they lead nowhere. ... Does this path have a heart? If it does, the path is good; if it doesn't, it is of no use. Both paths lead nowhere; but one has a heart, the other doesn't. One makes for a joyful journey; as long as you follow it, you are one with it. The other will make you curse your life. One makes you strong; the other weakens you.",
    source: "Carlos Castaneda",
    citation: "The Teachings of Don Juan: A Yaqui Way of Knowledge",
    year: 1968
  },
];


/***
 * function that generates a randomnumber that is used to select a random quote-object from the quotes array
***/
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}

/**
 * Array of colors and a function that generates a randomcolor that is then applied as a backgroundcolor style attribute to the body
 */
const randomColor = ["LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "MediumAquamarine", "ForestGreen", "Sienna"];

 function getRandomColor() {
  const randomNumber = Math.floor(Math.random() * (randomColor.length));
  document.querySelector('body').style.backgroundColor = randomColor[randomNumber];
 }



/***
 * function that generates the HTML including the quote and additional information (if availaible) to display on the webpage. Also calls the getRandomColor function so that a new background color is applied. 
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let quoteHTML = '';
  quoteHTML += 
    `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;
  if (randomQuote.citation) {
    quoteHTML += `<span class="citation">${(randomQuote.citation)}</span>`
  }
  if (randomQuote.year) {
    quoteHTML += `<span class="year">${(randomQuote.year)}</span>`
  }
  if (randomQuote.category) {
    quoteHTML += `<span class="year">${(randomQuote.category)}</span>`
  }
  quoteHTML += `</p>`;
  document.getElementById('quote-box').innerHTML = quoteHTML; 
  getRandomColor();
}

/**
 * call of printQuote function to generate a quote to show when the page is first loaded
 */

printQuote();


/***
 * click event listener that listens for clicks on the 'show another quote' button, so that when the button is clicked the printQuote function is called and another random quote is displayed (or possibly the same is shown again)
 * ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


// The setInterval method below calls the printQuote function every 20 seconds so that a different quote is shown every 20 seconds
setInterval(printQuote, 20000);