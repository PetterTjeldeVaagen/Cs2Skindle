let guessCounter = 0;
let gameActive = true;
let dailyChallengeActive = false; // Flag to indicate if daily challenge mode is active

// Function for checking the player's guess
function guess(input) {
    if (gameActive && searchList[input].innerHTML != " ") {
        let skinGuess = searchList[input];
        guessCounter++;
        var guessRow = document.getElementById(guessCounter);
        guessRow.getElementsByClassName("Class")[0].innerHTML = skinGuess.class;
        guessRow.getElementsByClassName("Class")[0].style.backgroundColor = getColorOfSquare(skinGuess.class, answerSkin.class);
        guessRow.getElementsByClassName("Gun")[0].innerHTML = skinGuess.gun;
        guessRow.getElementsByClassName("Gun")[0].style.backgroundColor = getColorOfSquare(skinGuess.gun, answerSkin.gun);
        guessRow.getElementsByClassName("Rarity")[0].innerHTML = skinGuess.rarity;
        guessRow.getElementsByClassName("Rarity")[0].style.backgroundColor = getColorOfSquare(skinGuess.rarity, answerSkin.rarity);
        guessRow.getElementsByClassName("Rarity")[0].style.color = getRarityColor(skinGuess.rarity); 
        guessRow.getElementsByClassName("Name")[0].innerHTML = skinGuess.name;
        guessRow.getElementsByClassName("Name")[0].style.backgroundColor = getColorOfSquare(skinGuess.name, answerSkin.name);
        guessRow.getElementsByClassName("Collection")[0].innerHTML = skinGuess.collection;
        guessRow.getElementsByClassName("Collection")[0].style.backgroundColor = getColorOfSquare(skinGuess.collection, answerSkin.collection);

        guessRow.getElementsByClassName("Year")[0].style.backgroundColor = getColorOfSquare(skinGuess.year, answerSkin.year);
        if (skinGuess.year < answerSkin.year) {
            guessRow.getElementsByClassName("Year")[0].innerHTML = skinGuess.year + '🔼';
        } else if (skinGuess.year > answerSkin.year) {
            guessRow.getElementsByClassName("Year")[0].innerHTML = skinGuess.year + '🔽';
        } else {
            guessRow.getElementsByClassName("Year")[0].innerHTML = skinGuess.year;
        }

        if (dailyChallengeActive) {
            saveGuesses();
        }

        if (skinGuess == answerSkin) {
            gameActive = false;
            document.getElementById("WinOrLossDiv").style.display = "block";
            document.getElementById("WinOrLossText").innerHTML = "You got it the skin was: " + answerSkin.gun + " " + answerSkin.name + "!";
        }

        if (guessCounter == 10 && skinGuess != answerSkin) {
            gameActive = false;
            document.getElementById("WinOrLossDiv").style.display = "block";
            document.getElementById("WinOrLossText").innerHTML = "You lost😂 the correct skin was: " + answerSkin.gun + " " + answerSkin.name + "!";
        }
    }
}

// Function to get the color based on rarity
function getRarityColor(rarity) {
    switch (rarity) {
        case "Covert":
            return "#eb4b4b"; 
        case "Classified":
            return "#d32ce6"; 
        case "Restricted":
            return "#8847ff"; 
        case "Mil-Spec":
            return "#4b69ff";
        case "Industrial Grade":
            return "#5e98d9";
        case "Consumer Grade":
            return "#b0c3d9"; 
        default:
            return "#000000"; 
    }
}

function start(input){
    createSkins(); // Ensure skins are created
    if(input == 1){
        sortList();
        setAnswerSkin();
    }else if(input == 2){
        dailyChallenge();
    }
    changePage(0); //update pagecount
}

function restart(input) {
    guessCounter = 0;
    gameActive = true;
    for (let i = 1; i < 11; i++) {
        let guessRow = document.getElementById(i);
        guessRow.getElementsByClassName("Class")[0].innerHTML = " ";
        guessRow.getElementsByClassName("Gun")[0].innerHTML = " ";
        guessRow.getElementsByClassName("Rarity")[0].innerHTML = " ";
        guessRow.getElementsByClassName("Name")[0].innerHTML = " ";
        guessRow.getElementsByClassName("Collection")[0].innerHTML = " ";
        guessRow.getElementsByClassName("Year")[0].innerHTML = " ";
        guessRow.getElementsByClassName("Class")[0].style.backgroundColor = "white";
        guessRow.getElementsByClassName("Gun")[0].style.backgroundColor = "white";
        guessRow.getElementsByClassName("Rarity")[0].style.backgroundColor = "white";
        guessRow.getElementsByClassName("Name")[0].style.backgroundColor = "white";
        guessRow.getElementsByClassName("Collection")[0].style.backgroundColor = "white";
        guessRow.getElementsByClassName("Year")[0].style.backgroundColor = "white";
    }
    for (let k = 15; k < 25; k++) {
        let element = document.getElementById(k);
        element.innerHTML = " ";
    }
    document.getElementById("WinOrLossDiv").style.display = "none";
    if(input != "daily"){
        sortList();
        setAnswerSkin();
    }
    input.value = "";
}

function saveGuesses() {
    const guesses = [];
    for (let i = 1; i <= guessCounter; i++) {
        const guessRow = document.getElementById(i);
        const guess = {
            class: guessRow.getElementsByClassName("Class")[0].innerHTML,
            classColor: guessRow.getElementsByClassName("Class")[0].style.backgroundColor,
            gun: guessRow.getElementsByClassName("Gun")[0].innerHTML,
            gunColor: guessRow.getElementsByClassName("Gun")[0].style.backgroundColor,
            rarity: guessRow.getElementsByClassName("Rarity")[0].innerHTML,
            rarityColor: guessRow.getElementsByClassName("Rarity")[0].style.backgroundColor,
            rarityTextColor: guessRow.getElementsByClassName("Rarity")[0].style.color,
            name: guessRow.getElementsByClassName("Name")[0].innerHTML,
            nameColor: guessRow.getElementsByClassName("Name")[0].style.backgroundColor,
            collection: guessRow.getElementsByClassName("Collection")[0].innerHTML,
            collectionColor: guessRow.getElementsByClassName("Collection")[0].style.backgroundColor,
            year: guessRow.getElementsByClassName("Year")[0].innerHTML,
            yearColor: guessRow.getElementsByClassName("Year")[0].style.backgroundColor
        };
        guesses.push(guess);
    }
    localStorage.setItem('guesses', JSON.stringify(guesses));
    localStorage.setItem('guessDate', new Date().toISOString().split('T')[0]);
}

function loadGuesses() {
    const savedGuesses = JSON.parse(localStorage.getItem('guesses'));
    if (savedGuesses) {
        guessCounter = savedGuesses.length;
        for (let i = 0; i < savedGuesses.length; i++) {
            const guessRow = document.getElementById(i + 1);
            guessRow.getElementsByClassName("Class")[0].innerHTML = savedGuesses[i].class;
            guessRow.getElementsByClassName("Class")[0].style.backgroundColor = savedGuesses[i].classColor;
            guessRow.getElementsByClassName("Gun")[0].innerHTML = savedGuesses[i].gun;
            guessRow.getElementsByClassName("Gun")[0].style.backgroundColor = savedGuesses[i].gunColor;
            guessRow.getElementsByClassName("Rarity")[0].innerHTML = savedGuesses[i].rarity;
            guessRow.getElementsByClassName("Rarity")[0].style.backgroundColor = savedGuesses[i].rarityColor;
            guessRow.getElementsByClassName("Rarity")[0].style.color = savedGuesses[i].rarityTextColor;
            guessRow.getElementsByClassName("Name")[0].innerHTML = savedGuesses[i].name;
            guessRow.getElementsByClassName("Name")[0].style.backgroundColor = savedGuesses[i].nameColor;
            guessRow.getElementsByClassName("Collection")[0].innerHTML = savedGuesses[i].collection;
            guessRow.getElementsByClassName("Collection")[0].style.backgroundColor = savedGuesses[i].collectionColor;
            guessRow.getElementsByClassName("Year")[0].innerHTML = savedGuesses[i].year;
            guessRow.getElementsByClassName("Year")[0].style.backgroundColor = savedGuesses[i].yearColor;
        }
    }
}

// Function that returns the color of the square based on the input
function getColorOfSquare(guessInput, answerInput){
    var squareColor;
    if(guessInput == answerInput){
        squareColor = "#3f9923";
    }else if(typeof guessInput === 'number'){
        if(Math.abs(guessInput - answerInput) == 1){
            squareColor="#fcd80d"
        }
    }else{
        squareColor="#ffffff"
    }
    return squareColor;
}

function randomInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

// Sets the skin that the player is supposed to guess
let answerSkin
function setAnswerSkin(){
    answerSkin=activeSkinList[randomInt(0,activeSkinList.length)]
}

// Search function that updates the list of skins based on the search input
let input = document.getElementById("searchBar");
input.addEventListener('input', search);
let searchList=[];
let page = 0;
function search() {
    searchList = [];
    let searchWords = input.value.toLowerCase().split(/-|\s/g);
    let results = 0;
    if (gameActive == true) {
        for (let i = 0; i < activeSkinList.length; i++) {
            let skinName = activeSkinList[i].name.toLowerCase().replace(/-|\s/g, "");
            let gunName = activeSkinList[i].gun.toLowerCase().replace(/-|\s/g, "");
            let combinedName = skinName + gunName;
            let combinedNameReversed = gunName + skinName;

            let match = searchWords.every(word => combinedName.includes(word) || combinedNameReversed.includes(word));

            if (match) {
                searchList.push(activeSkinList[i]);
                results++;
            }
        }
        for (let b = 15; b < 25; b++) {
            document.getElementById(b).innerHTML = " ";
        }
        for (let k = 15; k < 25; k++) {
            let element = document.getElementById(k);
            element.innerHTML = " ";
            let index = (k+10*page) - 15;
            if (searchList[index]) {
                element.innerHTML = searchList[index].name + " " + searchList[index].gun;
                element.style.color = getRarityColor(searchList[index].rarity);
            }
        }
        changePage(-2)
    }
}

function changePage(input){
    let maxPage = 0;
    if(searchList.length > 1){
        maxPage = Math.ceil(searchList.length/10);
    } else {
        maxPage = Math.ceil(activeSkinList.length/10);
    }
    
    if(page > -1 && page < maxPage+1 && input>-2) {
        page += input;
        document.getElementById("pageNumber").innerHTML = page+1 + "/" + maxPage;
        
    }

    if(input>-2){
        search();
    }
}

// Sorts the list of skins based on the difficulty the player chooses
let activeSkinList=[];
function sortList(){
    activeSkinList=[];
    let difficulty=document.querySelector('input[name="difficulty"]:checked').value;

    for(let i = 0; i<skinList.length;i++){ //legger til alle skins som er så sjelden som spilleren bestemmer
        if(skinList[i].rawRarity <= difficulty){
            activeSkinList.push(skinList[i]);
        }
    }
}

function dailyChallenge(){
    dailyChallengeActive = true; // Set the daily challenge flag
    const date = new Date().toISOString().split('T')[0];
    const savedDate = localStorage.getItem('guessDate');

    if (savedDate !== date) {
        restart("daily")
    } else {
        loadGuesses(); // Load previous guesses if the player has already played the daily challenge
        gameActive = true; // Ensure game is active for searching
    }

    //get skin based on the date
    const startDate = new Date('2025-01-01');
    const timeDifference = new Date() - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    for(skin of skinList){
        if(skin.rawRarity<5){
            activeSkinList.push(skin);
        }
    }
    answerSkin = activeSkinList[daysDifference];
    gameActive = savedDate !== date; // Ensure game is not active if already played
}

