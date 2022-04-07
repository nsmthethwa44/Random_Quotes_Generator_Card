//quote objects to be generated
const quoteBank = [
  {
  quote: "If you walk away, it's for you because I know what I want. Stefan, I love you.",
  authorName: "Bonnie Bennet"
},
{
  quote: "And honestly when I'm with her, I completely forget what I am.",
  authorName: "Stephan Salvatore"
},
{
  quote: "He's your first love. I intend to be your last, however, long it takes.",
  authorName: "Klaus"
},
{
  quote: "You want a love that consumes you. You want passion and adventure and even a little danger.",
  authorName: "Damon Salvatore"
},
{
  quote: "By breaking every bone in my body a hundred times for the girl I love.",
  authorName: "Elijah"
}
];


//when windows loaded generate new quote
window.onload = () =>{
  generateQuote();
}

//when button clicked generate new quote
function generateQuote(){
  let quoteSize = quoteBank.length;
  let randomQuoteIndex = Math.floor(Math.random() * quoteSize);
  let randomQuote = quoteBank[randomQuoteIndex];

  let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

  //add quote here
  let quoteFormat = randomQuote.quote.replace(/ /g, "%20");
  twitterLink += quoteFormat;
  //add author here
  let authorFormat = randomQuote.authorName.replace(/ /g, "%20");
  twitterLink += " - " + authorFormat;


  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuote.quote;
  document.getElementById("author").innerText = randomQuote.authorName;
}