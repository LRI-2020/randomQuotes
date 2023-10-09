export class Quote {
    constructor(text, authorName, authorPhoto, id, numberOfQuotes, authorAge = null) {
        this.text = text;
        this.authorName = authorName;
        this.authorPhoto = authorPhoto;
        this.id = id;
        this.numberOfQuotes = numberOfQuotes;
        this.authorAge = authorAge;
    }
}