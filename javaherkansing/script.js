// bron: hulp van een vriendin gevraagd hoe ik de toppings op elkaar kan layeren (highestindex). ik begrijp dat ik met behulp van deze code de toppings op de pizza kan layeren door ze een hogere index te geven. //

var cheeseButton = document.getElementById("addCheese");
var cheeseImg = document.getElementById("cheese");
var highestIndex = 0;

// Bron: https://chatgpt.com/ Prompt: how do i connect this audio file to my javascript code so that if i push any of the toppings buttons, this sound plays? Ik begrijp dat ik bij de eventlisteners van de cheese, pepperoni en olive toppings nog een functie moest toevoegen, want niet alleen de toppings moeten verschijnen, maar de audio ook moet afspelen. Dus heb ik met behulp van mijn bron de functies "cheesePlaySound, PepperoniPlaySound en olivePlaySound" toegevoegd bij de eventlisteners van de toppings. //
// Ik had eerst 1 audio bij elke topping, waardoor ik dus dezelfde function had gekoppeld bij de eventlistener van elke topping. vervolgens heb ik dit aangepast naar de verschillende functions die ik later had aangemaakt zodat ze allemaal een andere audio afspelen wanneer er op geklikt wordt (playsoundcheese, playsoundpepperoni en playsoundolive). //

cheeseButton.addEventListener("click", function () {
    addCheese();
    playSoundCheese();
});

function addCheese() {
    highestIndex = highestIndex + 1;
    cheeseImg.style.zIndex = highestIndex;
    cheeseImg.style.display = "block";
}

var pepperoniButton = document.getElementById("addPepperoni");
var pepperoniImg = document.getElementById("pepperoni");

pepperoniButton.addEventListener("click", function () {
    addPepperoni();
    playSoundPepperoni();
})

function addPepperoni() {
    highestIndex = highestIndex + 1;
    pepperoniImg.style.zIndex = highestIndex;
    pepperoniImg.style.display = "block";
}

var oliveButton = document.getElementById("addOlive");
var oliveImg = document.getElementById("olive");

oliveButton.addEventListener("click", function () {
    addOlive();
    playSoundOlive();
});

function addOlive() {
    highestIndex = highestIndex + 1;
    oliveImg.style.zIndex = highestIndex;
    oliveImg.style.display = "block";
}

// Bron: https://chatgpt.com/ Prompt: how can i add a reset button to this code? Ik begrijp dat ik met deze code de toppings ongedaan kan maken door de z-index op -1 te zetten zodat de toppings niet meer zichtbaar zijn. //

var resetButton = document.getElementById("resetToppings");

resetButton.addEventListener("click", resetToppings);

function resetToppings() {
    cheeseImg.style.display = "none";
    cheeseImg.style.zIndex = -1;
    pepperoniImg.style.display = "none";
    pepperoniImg.style.zIndex = -1;
    oliveImg.style.display = "none";
    oliveImg.style.zIndex = -1;
    highestIndex = 0;
}

// Bron: https://chatgpt.com/ Prompt: how do i connect this audio file to my javascript code so that if i push any of the toppings buttons, this sound plays? Ik begrijp dat ik in deze code verschillende vars heb aangemaakt waarbij ik de mp3 files "cheesesound", "pepperonisound" en "olivesound" met behulp van de ID's uit de HTML code haal. Ik begrijp ook dat ik met de "playSoundCheese", "playSoundPepperoni" en "playSoundOlive" functions ervoor zorg dat als er op een button geklikt wordt, een audio (audio is afhankelijk van button) wordt afgespeeld. //
//  De bron (https://chatgpt.com/) had mij alleen een voorbeeld gegeven van hoe ik 1 audio kon toevoegen aan alle toppings (zie prompt). Vervolgens heb ik zelf geexperimenteerd door verschillende audio's aan elke button toe te voegen. Daarvoor heb ik dus nog 2 vars en functions toegevoegd en ze aangepast zodat ze de "pepperonisound" en "olivesound" afspelen.//

var cheeseSound = document.getElementById("cheeseSound");

function playSoundCheese() {
    cheeseSound.play();
}

var pepperoniSound = document.getElementById("pepperoniSound");

function playSoundPepperoni() {
    pepperoniSound.play();
}

var oliveSound = document.getElementById("oliveSound");

function playSoundOlive() {
    oliveSound.play();
}
