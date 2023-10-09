
function GetAge(jsonData) {
    return jsonData.age;
}

function GetAuthorAge(authorName){
    return fetch("https://api.agify.io?name="+authorName)
        .then((response) => response.json())
        .then((jsonData) => GetAge(jsonData))
        .catch((e) => alert(e.message));
}

export{GetAuthorAge}