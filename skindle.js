let guessCounter = 0;
let gameActive = true;
let dailyChallengeActive = false;
let dailyAlreadyPlayed = false;


// Function for checking the player's guess
function guess(input) {
    if (dailyChallengeActive && dailyAlreadyPlayed) return;
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
            document.getElementById("WinOrLossText").innerHTML = "You got it the skin was: " + answerSkin.gun + " " + answerSkin.name + " 🎉";
            if (dailyChallengeActive) {
                markDailyCompleted();
            }
        }

        if (guessCounter == 10 && skinGuess != answerSkin) {
            gameActive = false;
            document.getElementById("WinOrLossDiv").style.display = "block";
            document.getElementById("WinOrLossText").innerHTML = "You lost😂 the correct skin was: " + answerSkin.gun + " " + answerSkin.name + "!";
            if (dailyChallengeActive) {
                markDailyCompleted();
            }
        }
    }
}

function start(){
    setColoredText(true);
    createSkins();
    const raw = location.search.slice(1);
    const mode = raw === "2" ? 2 : 1;
    document.getElementById("restartButton").style.display = "inline-block";
    document.getElementById("DifficultyPicker").style.display = "block";
    if(mode == 1){
        sortList();
        setAnswerSkin();
    }else if(mode == 2){
        document.getElementById("restartButton").style.display = "none";
        document.getElementById("DifficultyPicker").style.display = "none";
        dailyChallenge();
    }
    changePage(0);
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

    clearSearchList()
    document.getElementById("WinOrLossDiv").style.display = "none";
    if(input != "daily"){
        sortList();
        setAnswerSkin();
    }
    changePage(0);
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
    localStorage.setItem("dailyProgressDate", getLocalISODate());
}

function markDailyCompleted() {
  localStorage.setItem('guessDate', getLocalISODate());
  localStorage.removeItem("dailyProgressDate");
}

function getLocalISODate() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
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

let answerSkin
function setAnswerSkin(){
    answerSkin=activeSkinList[randomNumBetween(0,activeSkinList.length)]
}

let searchList=[];
let page = 0;

let activeSkinList=[];
function sortList(){
    activeSkinList=[];
    let difficulty=document.querySelector('input[name="difficulty"]:checked').value;

    for(let i = 0; i<skinList.length;i++){
        if(skinList[i].rawRarity <= difficulty){
            activeSkinList.push(skinList[i]);
        }
    }
    changePage(0);
}

function dailyChallenge(){
    dailyChallengeActive = true; 
        
    const today = getLocalISODate();
    const savedDate = localStorage.getItem('guessDate');  
    const progressDate  = localStorage.getItem("dailyProgressDate"); 

    if (savedDate === today) {
        loadGuesses();
        gameActive = false; 
    }else if (progressDate === today) {
        loadGuesses();
        gameActive = true;
    } else {
        localStorage.removeItem("guesses");
        localStorage.removeItem("dailyProgressDate");
        restart("daily");
        gameActive = true;
    }
    
    const startDate = new Date('2025-01-01');
    const timeDifference = new Date() - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    activeSkinList = [];
    for (const skin of skinList){
        if (skin.rawRarity < 5){
            activeSkinList.push(skin);
        }
    }
    answerSkin = activeSkinList[daysDifference];
    gameActive = true;

    changePage(0);
}

