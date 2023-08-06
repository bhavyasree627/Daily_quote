const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://type.fit/api/quotes";
//  async function getquote(url){
async function getquote(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // Choose a random quote from the array
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedQuote = data[randomIndex];

    quote.innerHTML = selectedQuote.text;
    author.innerHTML = "- " + selectedQuote.author;
}
function getNewQuote() {
    getquote(api_url)
}
getNewQuote();
function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by" + author.innerHTML, "Tweet Window", "width=600,height=300");
}