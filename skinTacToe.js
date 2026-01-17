let guessCounter = 0;
let gameActive = true;
const conditionTiles = ["tileA", "tileB", "tileC","tile1","tile2", "tile3"];
function loadBoard(){
    createSkins();
    sortList()
    changePage(0);
    setConditions();
    for(let i = 0; i < boardConditions.length; i++){
        document.getElementById(conditionTiles[i]).innerHTML = boardConditions[i].conditionText;
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
                return skinToCheck.collection.toLowerCase().includes(this.skinAttribute.toLowerCase());
            case "gun":
                return skinToCheck.gun == this.skinAttribute;

            default:
                return false;
        }
    }
}

function pickCondition(array){
    const index = randomNumBetween(array.length);
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
        let number = randomNumBetween(3);
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
        let number = randomNumBetween(2);
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
        skinAttribute = classes[randomNumBetween(classes.length)]
        conditionText = "Needs to be a " + skinAttribute;
    } else if(conditionSeed === 3){
        let rarities = ["Covert", "Classified", "Restricted", "Mil-Spec"];
        skinAttributeName = "rarity";
        skinAttribute = rarities[randomNumBetween(rarities.length)];
        conditionText = "Skin with " + skinAttribute + " rarity";
    } else if(conditionSeed === 4){
        let weapons = ["AWP", "Desert Eagle", "AK-47", "M4A1-S", "M4A4"]
        skinAttributeName = "gun";
        skinAttribute = weapons[randomNumBetween(weapons.length)]
        conditionText = "Skin for " + skinAttribute;
    } else if(conditionSeed === 5){
        let collections = ["Train", "Mirage", "Dust", "Inferno", "Nuke", "Vertigo"];
        skinAttributeName = "collection";
        let num = randomNumBetween(3);
        if(num < 2){
            skinAttribute = collections[randomNumBetween(collections.length)]
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
            let counter = 1;
            let conditionTop = boardConditions[top];
            let conditionSide = boardConditions[side];
            for(let i = 0; i < activeSkinList.length; i++){
                if(conditionTop.checkSkin(activeSkinList[i]) && conditionSide.checkSkin(activeSkinList[i])){
                    counter++;
                    if(counter>5) {
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
            //legg inn sjekk for å vite om en tile allered har et element
            if(conditionTop.checkSkin(skinGuess) && conditionSide.checkSkin(skinGuess)){
                document.getElementById(squareID).style.display = "block";
                validGuess = true;
            } else {
                document.getElementById(squareID).style.display = "none";
            }
        }
    }

    if(validGuess == false){
        clearBoard();
    }
}

function choose(input){
    input.style.display = "none";
    input.parentElement.innerHTML = skinGuess.gun + " " + skinGuess.name;
    clearBoard();
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
            document.getElementById(squareID).style.display = "none";
        }
    }
}

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
            }
        }
        changePage(-2)
    }
}

let activeSkinList=[];
function sortList(){
    activeSkinList=[];
    for(let i = 0; i<skinList.length;i++){
        activeSkinList.push(skinList[i]);
    }
    changePage(0);
}

function changePage(input){
    let maxPage = 0;
    if(searchList.length > 1){
        maxPage = Math.ceil(searchList.length/10);
    } else {
        maxPage = Math.ceil(activeSkinList.length/10);
    }
    
    if(page+input > -1 && page+input <= maxPage && input>-2) {
        page += input;
        search();
    }
    document.getElementById("pageNumber").innerHTML = page+1 + "/" + maxPage;
}

function randomNumBetween(input){
    return Math.floor(Math.random() * input);
}