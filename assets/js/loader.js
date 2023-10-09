let spinner = document.querySelector(".spinner-border");
let card = document.querySelector(".card");

function startLoading() {
    
    spinner.classList.remove("d-none");
}

function stopLoading(){
    spinner.classList.add("d-none");
    card.classList.remove("d-none");

}

export{stopLoading, startLoading}