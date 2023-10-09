import {Quote} from "./Quote.js";
import {GetAuthorAge} from "./Age.js";

async function GenerateQuote() {
    let newQuote = ParseToQuote(await GetRawQuote());
    let authorAge = await GetAuthorAge();
    DisplayQuote(newQuote, authorAge);
}
function GetRawQuote(){
    
    return fetch("https://thatsthespir.it/api")
        .then((response) => response.json())
        .catch((e) => alert(e.message));
}

function ParseToQuote(rawQuote, authorAge) {

    return new Quote(rawQuote.quote,rawQuote.author,rawQuote.photo,rawQuote.id, rawQuote.total_quotes, authorAge);
}

function DisplayQuote(quote) {
    
    let quoteContainer = document.querySelector(".quoteText");
    quoteContainer.innerText = quote.text;

    let authorPhoto = document.querySelector(".authorPhoto");
    authorPhoto.setAttribute("src", quote.authorPhoto);

    let authorName = document.querySelector(".authorName");
    authorName.innerHTML = quote.authorName;

    let numberOfQuotes = document.querySelector(".numberOfQuotes");
    numberOfQuotes.innerText = quote.numberOfQuotes + " quotes";
    
    let quoteId = document.querySelector(".quoteId");
    quoteId.innerText = "#"+quote.id;
}


export {GenerateQuote}
