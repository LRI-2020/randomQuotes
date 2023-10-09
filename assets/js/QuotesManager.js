import {Quote} from "./Quote.js";


function GetNewQuote(){
    
    fetch("https://thatsthespir.it/api")
        .then((response) => response.json())
        .then((jsonData) => DisplayQuote(jsonData))
        .catch((e) => alert(e.message));
}

function ParseToQuote(jsonData) {
    
    let text = jsonData.quote;
    let authorName = jsonData.author;
    let authorPhoto  =jsonData.photo;
    let id = jsonData.id;
    let numberOfQuotes = jsonData.total_quotes;
    return new Quote(text,authorName,authorPhoto,id, numberOfQuotes);
}

function FulFillQuoteHtml(currentQuote) {

    let quoteContainer = document.querySelector(".quoteText");
    quoteContainer.innerText = currentQuote.text;

    let authorPhoto = document.querySelector(".authorPhoto");
    authorPhoto.setAttribute("src", currentQuote.authorPhoto);

    let authorName = document.querySelector(".authorName");
    authorName.innerHTML = currentQuote.authorName;

    let numberOfQuotes = document.querySelector(".numberOfQuotes");
    numberOfQuotes.innerText = currentQuote.numberOfQuotes + "quotes";
}

function DisplayQuote(jsonData) {

    let currentQuote = ParseToQuote(jsonData);

    FulFillQuoteHtml(currentQuote);

}

export {GetNewQuote}
