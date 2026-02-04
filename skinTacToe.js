let guessCounter = 0;
let gameActive = true;
const conditionTiles = ["tileA", "tileB", "tileC","tile1","tile2", "tile3"];
let gameType = 1;
let multiplayerBoard = [0,0,0,0,0,0,0,0,0]
let activePlayer = 0;
function start(){
    const raw = location.search.slice(1);
    const mode = raw === "2" ? 2 : 1;
    loadBoard()
    const title = document.getElementById("title");
    if(mode == 1){
        //skin grid
        title.innerHTML ="Skin grid!";
        gameType = 1
        hideElement("scoreboard");
    } else if (mode == 2){
        //skin tac toe
        title.innerHTML ="Skin-Tac-Toe!";
        gameType = 2;
        activePlayer = 1;
        updateScoreboard()
        //legg in tids evt tidsbegrensning
    }
}

function loadBoard(){
    hideElement("celebrationDiv");
    setColoredText(false);
    createSkins();
    sortList()
    changePage(0);
    setConditions();
    for(let i = 0; i < boardConditions.length; i++){
        document.getElementById(conditionTiles[i]).innerHTML = boardConditions[i].conditionText;
    }
}
function restart(){
    console.log("seier!");
    //TODO add restart functionality
    loadBoard()
    for(let i = 0; i <multiplayerBoard.length; i++){
        multiplayerBoard[i] = 0;
    }

    const elements = document.getElementsByClassName("skinGridButtons");
    for (let i = 0; i < elements.length; i++) {
        elements[i].closest("td").style.backgroundColor = "white";
    }
}

class Condition {
    constructor(conditionText,skinAttribute, skinAttributeName){
        this.conditionText = conditionText;
        this.skinAttribute = skinAttribute;
        this.skinAttributeName = skinAttributeName;
    }

    checkSkin(skinToCheck){
        switch(this.skinAttributeName){
            case "collectionOrCase":
                if(this.skinAttribute == "case" && skinToCheck.collection.toLowerCase().includes("case")){
                    return true;
                }else if(this.skinAttribute == "collection" && skinToCheck.collection.toLowerCase().includes("collection")){
                    return true;
                } else {
                    return false;
                }
            case "year":
                if(this.skinAttribute == 2017 && skinToCheck.year < 2018){
                    return true;
                } else if(this.skinAttribute == 2018 && skinToCheck.year > 2017 && skinToCheck.year < 2022){
                    return true;
                } else if(this.skinAttribute == 2022 && skinToCheck.year > 2021){
                    return true;
                } else {
                    return false;
                }
            case "class":
                return skinToCheck.class == this.skinAttribute;
            case "rarity":
                return skinToCheck.rarity == this.skinAttribute;
            case "collection":
                return skinToCheck.collection.toLowerCase().includes(this.skinAttribute.toLowerCase()); //TODO noe kødd her
            case "gun":
                return skinToCheck.gun == this.skinAttribute;

            default:
                return false;
        }
    }
}

function pickCondition(array){
    const index = randomNumBetween(0, array.length);
    return array.splice(index, 1)[0];
}
let fails = 0;
let boardConditions = [];
function setConditions(){
    const numbers = [0,1,2,3,4,5];
    boardConditions = [];

    for (let i = 0; i<6; i++){
        boardConditions.push(getRandomCondition(pickCondition(numbers)));
    }

    if(!checkPossibilities()){
        setConditions();
    }
}

function getRandomCondition(conditionSeed){
    let conditionText = "";
    let skinAttributeName = "";
    let skinAttribute = "";
    if(conditionSeed === 0){
        let number = randomNumBetween(0, 3);
        skinAttributeName = "year";
        if(number == 0){
            skinAttribute = 2017;
            conditionText = "Skin was released before 2018";
        } else if(number == 1) {
            skinAttribute = 2022;
            conditionText = "Skin was released in 2022 or later";
        } else {
            skinAttribute = 2018;
            conditionText = "Skin was released between 2018 and 2021"
        }
    } else if(conditionSeed === 1) {
        let number = randomNumBetween(0, 2);
        skinAttributeName = "collectionOrCase";
        if(number == 0){
            skinAttribute = "case";
            conditionText = "Skin comes from a case";
        } else {
            skinAttribute = "collection";
            conditionText = "Skin comes from a collection";
        }
    } else if(conditionSeed === 2) {
        let classes = ["Sniper Rifle", "Pistol", "Assault Rifle", "Shotgun", "SMG"];
        skinAttributeName = "class";
        skinAttribute = classes[randomNumBetween(0, classes.length)]
        conditionText = "Needs to be a " + skinAttribute;
    } else if(conditionSeed === 3){
        let rarities = ["Covert", "Classified", "Restricted", "Mil-Spec"];
        skinAttributeName = "rarity";
        skinAttribute = rarities[randomNumBetween(0, rarities.length)];
        conditionText = "Skin with " + skinAttribute + " rarity";
    } else if(conditionSeed === 4){
        let weapons = ["AWP", "Desert Eagle", "AK-47", "M4A1-S", "M4A4"]
        skinAttributeName = "gun";
        skinAttribute = weapons[randomNumBetween(0, weapons.length)]
        conditionText = "Skin for " + skinAttribute;
    } else if(conditionSeed === 5){
        let collections = ["Train", "Mirage", "Dust", "Inferno", "Nuke", "Vertigo"];
        skinAttributeName = "collection";
        let num = randomNumBetween(0,3);
        if(num < 2){
            skinAttribute = collections[randomNumBetween(0, collections.length)]
            conditionText = "Skin from any " + skinAttribute + " collection";
        } else {
            skinAttribute = "Operation";
            conditionText = "Skin from any " + skinAttribute + " case";
        }
        
        
    }
    return new Condition(conditionText, skinAttribute, skinAttributeName);
}

function checkPossibilities(){
    let boardPossible= [];
    for(let top = 0; top<3; top++){
        for(let side = 3; side<6; side++){
            let counter = 0;
            let conditionTop = boardConditions[top];
            let conditionSide = boardConditions[side];
            for(let i = 0; i < activeSkinList.length; i++){
                if(conditionTop.checkSkin(activeSkinList[i]) && conditionSide.checkSkin(activeSkinList[i])){
                    counter++;
                    if(counter>=5) {
                        boardPossible.push(true);
                        break;
                    }
                }
            }
        }
    }

    if(boardPossible.length == 9){
        return true;
    } else {
        return false;
    }  
}

let skinGuess;
function guess(input){
    skinGuess = searchList[input];
    let validGuess = false;
    for(let top = 0; top<3; top++){
        for(let side = 3; side<6; side++){
            let conditionTop = boardConditions[top];
            let letter="";
            let number=side-2;
            if(top==0){
                letter="A";
            }else if(top == 1){
                letter = "B";
            } else {
                letter = "C"
            }
            let conditionSide = boardConditions[side];
            let squareID="tile"+number+letter;
            if(conditionTop.checkSkin(skinGuess) && conditionSide.checkSkin(skinGuess) && document.getElementById(squareID)){
                document.getElementById(squareID).style.display = "block";
                validGuess = true;
            }
        }
    }

    if(validGuess == false){
        clearBoard();
    }
}

const player1color = "red";
const player2color = "blue";
function choose(input){
    const td = input.closest("td")
    input.style.display = "none";
    input.parentElement.innerHTML = skinGuess.gun + " " + skinGuess.name;
    if(gameType == 2){
        //TODO finn bedre farger 
        if(activePlayer == 1){
            td.style.backgroundColor = "red";
            multiplayerBoard[tileIdToIndex(input.id)] = 1;
            activePlayer = 2;
        } else if(activePlayer == 2){
            td.style.backgroundColor = "blue";
            multiplayerBoard[tileIdToIndex(input.id)] = 2;
            activePlayer = 1;
        }
    }
    
    for(let i = 0; i < activeSkinList.length; i++){
        if(activeSkinList[i].gun == skinGuess.gun && activeSkinList[i].name == skinGuess.name){
            activeSkinList.splice(i, 1);
        }
    }

    document.getElementById("searchBar").value = "";
    search()
    changePage(-2);
    
    clearBoard();
    checkBoard();
}

function tileIdToIndex(input){
    let index = 0;
    let letter = input[input.length - 1];
    let number = input[input.length - 2]-1;
    index+=number;
    if(letter === 'B'){
        index+=3
    }else if(letter === 'C'){
        index+=6
    }
    return index;
}

function clearBoard(){
    for(let top = 0; top<3; top++){
        for(let side = 3; side<6; side++){
            let letter="";
            let number=side-2;
            if(top==0){
                letter="A";
            }else if(top == 1){
                letter = "B";
            } else {
                letter = "C"
            }
            let squareID="tile"+number+letter;
            if(document.getElementById(squareID)){
                document.getElementById(squareID).style.display = "none";
            }
        }
    }
}

function checkBoard(){
    let filledTiles = 0;
    if(gameType === 1){
        for(let top = 0; top<3; top++){
            for(let side = 3; side<6; side++){
                let letter="";
                let number=side-2;
                if(top==0){
                    letter="A";
                }else if(top == 1){
                    letter = "B";
                } else {
                    letter = "C"
                }
                let squareID="tile"+number+letter;
                if(!document.getElementById(squareID)){
                    filledTiles++;
                } 
            }
        }

        if(filledTiles === 9){
            document.getElementById("WinOrLossText").innerHTML = "Congratulations you managed to fill the grid🎉"
        }
    } else {
        const waysToWin = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]       
        ];

        for (const [a, b, c] of waysToWin) {
            const player = multiplayerBoard[a];
            if (player !== 0 && player === multiplayerBoard[b] && player === multiplayerBoard[c]) {
                //TODO visually show which boxes won
                showElement("celebrationDiv");
                if(player == 1){
                    document.getElementById("WinOrLossText").innerHTML = "Player 1 won!";
                    player1score++;
                } else if(player == 2) {
                    document.getElementById("WinOrLossText").innerHTML = "Player 2 won!";
                    player2score++;
                }
                updateScoreboard();
            }
        }
    }
}

let player1score = 0;
let player2score = 0;
function updateScoreboard(){
    document.getElementById("player1score").parentElement.style.backgroundColor = player1color;
    document.getElementById("player1score").innerHTML = player1score
    document.getElementById("player2score").parentElement.style.backgroundColor = player2color;
    document.getElementById("player2score").innerHTML = player2score
}

let searchList=[];
let page = 0;
let activeSkinList=[];
function sortList(){
    activeSkinList=[];
    for(let i = 0; i<skinList.length;i++){
        activeSkinList.push(skinList[i]);
    }
    changePage(0);
}