import {GenerateQuote} from "./QuotesManager.js";
import {startLoading, stopLoading} from "./loader.js";

async function GenerateRandomQuote() {

    startLoading();
    await GenerateQuote();
    stopLoading();

}

function GenerateQuoteListener() {

    let newQuoteGenerator = document.querySelector("button.newQuote");

    newQuoteGenerator.addEventListener('click', function () {
        GenerateRandomQuote();
    });
}

function GenerateQuoteOnLoad() {
    addEventListener("load", async function () {
        GenerateRandomQuote();

    });
}

export {GenerateQuoteOnLoad, GenerateQuoteListener};

