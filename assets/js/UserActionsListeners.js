import{GetNewQuote} from "./QuotesManager.js";

function GenerateRandomQuote(){

    let newQuoteGenerator = document.querySelector("button.newQuote");


    newQuoteGenerator.addEventListener('click', async function () {

        await GetNewQuote();
    })
}

export {GenerateRandomQuote};

