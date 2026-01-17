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

    //fungerer bare av og til
    checkSkin(skinToCheck){
        switch(this.skinAttributeName){
            case "collection":
                if(this.skinAttribute == "case" && skinToCheck.collection.toLowerCase().includes("case")){
                    return true;
                }else if(this.skinAttribute == "collection" && skinToCheck.collection.toLowerCase().includes("collection")){
                    return true;
                } else {
                    return false;
                }
            case "year":
                if(this.skinAttribute == 2018 && skinToCheck.year < 2019){
                    return true;
                } else if(this.skinAttribute == 2019 && skinToCheck.year > 2018){
                    return true;
                } else {
                    return false;
                }
            case "class":
                if(skinToCheck.class == this.skinAttribute){
                    return true;
                } else {
                    return false;
                }
            case "rarity":
                if(skinToCheck.rarity == this.skinAttribute){
                    return true;
                } else {
                    return false;
                }
            default:
                return false;
        }
    }
}

let topBoardType1;
let topBoardType2;
let sideBoardType1;
let sideBoardType2;
let boardConditions = [];
function setConditions(){
    const numbers = [0,1,2,3];
    boardConditions = [];
    let condition;
    topBoardType1 = Math.floor(Math.random() * 4);
    let index = numbers.indexOf(topBoardType1);
    if (index !== -1) {
        numbers.splice(index, 1);
    }

    do {
        topBoardType2 = Math.floor(Math.random() * 4);
    } while (topBoardType2 === topBoardType1);

    index = numbers.indexOf(topBoardType2);
    if (index !== -1) {
        numbers.splice(index, 1);
    }
    sideBoardType1 = numbers[0];
    sideBoardType2 = numbers[1];

    for(let i = 0; i <6; i++){
        let number = Math.floor(Math.random()*2);
            
        if(i<3){
            if(number == 0){
                condition = getRandomCondition(topBoardType1);
            } else {
                condition = getRandomCondition(topBoardType2);
            }
        } else {
            if(number == 0){
                condition = getRandomCondition(sideBoardType1);
            } else {
                condition = getRandomCondition(sideBoardType2);
            }
        }
        boardConditions.push(condition);
    }

    if(!checkPossibilities()){
        setConditions();
    }

    //newer/older than 0
    //case or collection 1
    //specific class 2
    //rarity 3
}

function getRandomCondition(conditionSeed){
    let conditionText = "";
    let skinAttributeName = "";
    let skinAttribute = "";
    if(conditionSeed === 0){
        let number = Math.floor(Math.random()*2);
        skinAttributeName = "year";
        if(number == 0){
            skinAttribute = 2018;
            conditionText = "Skin was released before 2019";
        } else {
            skinAttribute = 2019;
            conditionText = "Skin was released in 2019 or later";
        }
    } else if(conditionSeed === 1) {
        let number = Math.floor(Math.random()*2);
        skinAttributeName = "collection";
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
        skinAttribute = classes[Math.floor(Math.random()*classes.length)]
        conditionText = "Needs to be a " + skinAttribute;
    } else if(conditionSeed === 3){
        let rarities = ["Covert", "Classified", "Restricted", "Mil-Spec"];
        skinAttributeName = "rarity";
        skinAttribute = rarities[Math.floor(Math.random() * 4)];
        conditionText = "Skin with " + skinAttribute + " rarity";
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

function guess(input){
    let skinGuess = searchList[input];
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
            if(conditionTop.checkSkin(skinGuess) && conditionSide.checkSkin(skinGuess)){
                document.getElementById(squareID).style.display = "block";
            } else {
                document.getElementById(squareID).style.display = "none";
            }
            console.log(" ");
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