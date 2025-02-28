class Skin {
    constructor(name, weaponClass,gun, rarity, collection) { 
      this.rarity = rarity;
      this.name = name;
      this.gun = gun;
      this.collection = collection;

      switch (this.rarity){
        case "Covert":
            this.rawRarity = 1;
            this.color = "#EB4B4B"
            break;
        case "Classified":
            this.rawRarity = 2;
            this.color = "#D32CE6"
            break;
        case "Restricted":
            this.rawRarity = 3;
            this.color = "#8847FF"
            break;
        case "Mil-Spec":
            this.rawRarity = 4;
            this.color = "#4B69FF"
            break;
        case "Industrial Grade":
            this.rawRarity = 5;
            this.color = "#5E98D9"
            break;
        case "Consumer Grade":
            this.rawRarity = 6;
            this.color = "#B0C3D9"
            break;
      }

      switch (weaponClass){
        case "Pistol":
            this.class = weaponClass;
            break;
        case "Rifle":
            if(this.gun == "AWP" || this.gun == "SSG 08" || this.gun == "SCAR-20" || this.gun == "G3SG1"){
                this.class = "Sniper Rifle";
            }else{
                this.class = "Assault Rifle";
            }
            break;
        case "Mid-Tier":
            if(this.gun == "Negev" || this.gun == "M249"){
                this.class = "Machine Gun";
            }else if(this.gun == "XM1014" || this.gun == "MAG-7" || this.gun == "Nova" || this.gun == "Sawed-Off"){
                this.class = "Shotgun";
            }else {
                this.class = "SMG";
            }
            break;
      }

      switch (this.collection) {
        case "eSports 2013 Case":
        case "CS:GO Weapon Case 2":
        case "CS:GO Weapon Case":
        case "Operation Bravo Case":
        case "eSports 2013 Winter Case":
        case "Winter Offensive Weapon Case":
        case "The Assault Collection":
        case "The Aztec Collection":
        case "The Dust Collection":
        case "The Dust 2 Collection":
        case "The Inferno Collection":
        case "The Italy Collection":
        case "The Lake Collection":
        case "The Mirage Collection":
        case "The Nuke Collection":
        case "The Office Collection":
        case "The Train Collection":
        case "The Vertigo Collection":
        case "The Safehouse Collection":
        case "The Militia Collection":
        case "The Alpha Collection":
            this.year = 2013;
            break;
    
        case "CS:GO Weapon Case 3":
        case "Operation Breakout Weapon Case":
        case "eSports 2014 Summer Case":
        case "Operation Phoenix Weapon Case":
        case "Operation Vanguard Weapon Case":
        case "Huntsman Weapon Case":
        case "The Huntsman Collection":
        case "The Bank Collection":
        case "The Baggage Collection":
        case "The Cobblestone Collection":
        case "The Overpass Collection":
        case "The Cache Collection":
            this.year = 2014;
            break;
    
        case "Chroma Case":
        case "Chroma 2 Case":
        case "Falchion Case":
        case "Shadow Case":
        case "Revolver Case":
        case "The Rising Sun Collection":
        case "The Chop Shop Collection":
        case "The Gods and Monsters Collection":
            this.year = 2015;
            break;
    
        case "Operation Wildfire Case":
        case "Chroma 3 Case":
        case "Gamma Case":
        case "Gamma 2 Case":
        case "Glove Case":
            this.year = 2016;
            break;
    
        case "Operation Hydra Case":
        case "Spectrum Case":
        case "Spectrum 2 Case":
            this.year = 2017;
            break;
    
        case "Clutch Case":
        case "Horizon Case":
        case "Danger Zone Case":
        case "The 2018 Nuke Collection":
        case "The 2018 Inferno Collection":
        case "The Blacksite Collection":
            this.year = 2018;
            break;
    
        case "Prisma Case":
        case "CS20 Case":
        case "Shattered Web Case":
        case "The Canals Collection":
        case "The Norse Collection":
        case "The St. Marc Collection":
        case "X-Ray P250 Package":
            this.year = 2019;
            break;
    
        case "Operation Broken Fang Case":
        case "Fracture Case":
        case "Prisma 2 Case":
        case "The Ancient Collection":
        case "The Control Collection":
        case "The Havoc Collection":
            this.year = 2020;
            break;
    
        case "Snakebite Case":
        case "Operation Riptide Case":
        case "The 2021 Vertigo Collection":
        case "The 2021 Mirage Collection":
        case "The 2021 Dust 2 Collection":
        case "The 2021 Train Collection":
            this.year = 2021;
            break;
    
        case "Dreams & Nightmares Case":
        case "Recoil Case":
            this.year = 2022;
            break;
    
        case "Revolution Case":
        case "Anubis Collection Package":
            this.year = 2023;
            break;
    
        case "Kilowatt Case":
        case "Gallery Case":
        case "The Graphic Design Collection":
        case "The Sport & Field Collection":
        case "The Overpass 2024 Collection":
        case "Limited Edition Item":
            this.year = 2024;
            break;
    }

    }  
}

let guessCounter = 0;
let gameActive = true;
let dailyChallengeActive = false; // Flag to indicate if daily challenge mode is active

//function for checking the players guess
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

//Function that restarts the game
function restart() {
    guessCounter = 0;
    gameActive = true;
    dailyChallengeActive = false; // Reset the daily challenge flag
    sortList();
    for (let i = 1; i < 11; i++) {
        guessRow = document.getElementById(i);
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
    setAnswerSkin();
    input.value = "";
    localStorage.removeItem('guesses');
    localStorage.removeItem('guessDate');
}

//Function that returns the color of the square based on the input
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

//Sets the skin that the player is supposed to guess
let answerSkin
function setAnswerSkin(){
    answerSkin=activeSkinList[randomInt(0,activeSkinList.length)]
}

//Search function that updates the list of skins based on the search input
input=document.getElementById("searchBar");
input.addEventListener('input', search);
let searchList=[];
function search() {
    searchList = [];
    let searchInput = input.value.toLowerCase().replace(/-|\s/g, "");
    let searchWords = input.value.toLowerCase().split(/-|\s/g);
    results = 0;
    if (gameActive == true) {
        for (let i = 0; i < activeSkinList.length && results < 10; i++) {
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
            if (searchList[k - 15]) {
                element.innerHTML = searchList[k - 15].name + " " + searchList[k - 15].gun;
                element.style.color = searchList[k - 15].color;
            }
        }
    }
}

//Sorts the list of skins based on the difficulty the player chooses
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
    //get skin based on the date
    const date = new Date();
    const startDate = new Date('2025-01-01');
    const timeDifference = date - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    for(skin of skinList){
        if(skin.rawRarity<5){
            activeSkinList.push(skin);
        }
    }
    answerSkin = activeSkinList[daysDifference]
    loadGuesses();
}

//Creates a list with all the skins in the game
let skinList =[];
function createSkins(input){
skinList.push(new Skin("Oxide Blaze","Mid-Tier","XM1014","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Necropos","Rifle","SSG 08","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("Ironwork","Pistol","Glock-18","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Zombie Offensive","Mid-Tier","XM1014","Restricted","Dreams & Nightmares Case")) 
skinList.push(new Skin("Welcome to the Jungle","Rifle","M4A1-S","Covert","The Ancient Collection")) 
skinList.push(new Skin("Rat Rod","Rifle","AK-47","Restricted","Shattered Web Case")) 
skinList.push(new Skin("Wild Lotus","Rifle","AK-47","Covert","The St. Marc Collection")) 
skinList.push(new Skin("Macabre","Rifle","FAMAS","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Cirrus","Mid-Tier","MP7","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Orange Peel","Mid-Tier","MP9","Industrial Grade","The Safehouse Collection")) 
skinList.push(new Skin("Anodized Navy","Rifle","SG 553","Mil-Spec","The Lake Collection")) 
skinList.push(new Skin("Lapis Gator","Mid-Tier","MAC-10","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("Granite Marbleized","Pistol","P2000","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Cocoa Rampage","Mid-Tier","P90","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("CaliCamo","Mid-Tier","Negev","Industrial Grade Machine","The Mirage Collection")) 
skinList.push(new Skin("Off World","Mid-Tier","P90","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Dualing Dragons","Pistol","Dual Berettas","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Handgun","Pistol","P2000","Restricted","Falchion Case")) 
skinList.push(new Skin("The Empress","Rifle","AK-47","Covert","Spectrum 2 Case")) 
skinList.push(new Skin("Dark Water","Rifle","FAMAS","Mil-Spec","The Ancient Collection")) 
skinList.push(new Skin("Chainmail","Pistol","P2000","Mil-Spec","The Cobblestone Collection")) 
skinList.push(new Skin("Facility Sketch","Mid-Tier","PP-Bizon","Consumer Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Stone Cold","Rifle","Galil AR","Restricted","Shadow Case")) 
skinList.push(new Skin("Muertos","Pistol","P250","Classified","Chroma Case")) 
skinList.push(new Skin("Violent Daimyo","Pistol","Five-SeveN","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Olive Plaid","Mid-Tier","MP7","Consumer Grade","The Baggage Collection")) 
skinList.push(new Skin("Irradiated Alert","Mid-Tier","MAG-7","Consumer Grade","The Nuke Collection")) 
skinList.push(new Skin("Heat","Mid-Tier","MAC-10","Restricted","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Full Stop","Mid-Tier","MP9","Mil-Spec","The Italy Collection")) 
skinList.push(new Skin("Midnight Paintover","Pistol","Five-SeveN","Industrial Grade","The Overpass 2024 Collection")) 
skinList.push(new Skin("Carved Jade","Rifle","AUG","Mil-Spec","The Ancient Collection")) 
skinList.push(new Skin("Blood Tiger","Pistol","USP-S","Mil-Spec","eSports 2014 Summer Case")) 
skinList.push(new Skin("Metallic DDPAT","Mid-Tier","MAG-7","Industrial Grade","The Train Collection")) 
skinList.push(new Skin("Limelight","Mid-Tier","Sawed-Off","Restricted","Gamma Case")) 
skinList.push(new Skin("Capillary","Mid-Tier","MP9","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Snake Pit","Rifle","AUG","Consumer Grade","Anubis Collection Package")) 
skinList.push(new Skin("Day Lily","Mid-Tier","UMP-45","Mil-Spec","The St. Marc Collection")) 
skinList.push(new Skin("Wild Six","Mid-Tier","Nova","Restricted","Clutch Case")) 
skinList.push(new Skin("Neoqueen","Mid-Tier","P90","Restricted","Revolution Case")) 
skinList.push(new Skin("Cyber Shell","Pistol","P250","Restricted","Snakebite Case")) 
skinList.push(new Skin("Torque","Pistol","USP-S","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Pathfinder","Pistol","P2000","Industrial Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Neo-Noir","Rifle","AWP","Covert","Danger Zone Case")) 
skinList.push(new Skin("Grand Prix","Mid-Tier","UMP-45","Restricted","Chroma 2 Case")) 
skinList.push(new Skin("Framework","Pistol","CZ75-Auto","Consumer Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Baroque Red","Mid-Tier","P90","Mil-Spec","The Canals Collection")) 
skinList.push(new Skin("Pyre","Pistol","Dual Berettas","Industrial Grade","The Norse Collection")) 
skinList.push(new Skin("Kami","Pistol","Five-SeveN","Mil-Spec","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Boost Protocol","Pistol","Five-SeveN","Restricted","Operation Riptide Case")) 
skinList.push(new Skin("Blue Tire","Mid-Tier","XM1014","Consumer Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Jungle Dashed","Pistol","CZ75-Auto","Consumer Grade","The Control Collection")) 
skinList.push(new Skin("Mecha Industries","Rifle","FAMAS","Classified","Glove Case")) 
skinList.push(new Skin("Drought","Pistol","P250","Consumer Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Neon Kimono","Pistol","Five-SeveN","Restricted","The Rising Sun Collection")) 
skinList.push(new Skin("CAUTION!","Rifle","Galil AR","Restricted","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Sage Spray","Rifle","Galil AR","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("Sacrifice","Pistol","Glock-18","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Toybox","Mid-Tier","MAC-10","Classified","Operation Riptide Case")) 
skinList.push(new Skin("Condemned","Rifle","AUG","Industrial Grade","The Safehouse Collection")) 
skinList.push(new Skin("Scaffold","Mid-Tier","UMP-45","Restricted","Spectrum Case")) 
skinList.push(new Skin("Prey","Mid-Tier","MP7","Consumer Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Bamboo Forest","Pistol","Tec-9","Consumer Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Blue Titanium","Pistol","Tec-9","Mil-Spec","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Kitbash","Mid-Tier","MP5-SD","Restricted","Fracture Case")) 
skinList.push(new Skin("SWAG-7","Mid-Tier","MAG-7","Restricted","Clutch Case")) 
skinList.push(new Skin("Silver","Mid-Tier","MAC-10","Industrial Grade","The Bank Collection")) 
skinList.push(new Skin("Skull Crusher","Pistol","R8 Revolver","Classified","Prisma Case")) 
skinList.push(new Skin("Arctic Camo","Rifle","G3SG1","Industrial Grade","The Office Collection")) 
skinList.push(new Skin("Last Dive","Mid-Tier","MAC-10","Restricted","Spectrum Case")) 
skinList.push(new Skin("Vulcan","Rifle","AK-47","Covert","Huntsman Weapon Case")) 
skinList.push(new Skin("Run and Hide","Mid-Tier","P90","Classified","The Ancient Collection")) 
skinList.push(new Skin("Fade","Rifle","AWP","Covert","The Control Collection")) 
skinList.push(new Skin("VariCamo Blue","Mid-Tier","XM1014","Mil-Spec","The Overpass Collection")) 
skinList.push(new Skin("Starlight Protector","Mid-Tier","MP9","Covert","Dreams & Nightmares Case")) 
skinList.push(new Skin("Bunsen Burner","Pistol","Glock-18","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Decommissioned","Rifle","FAMAS","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Copper Galaxy","Pistol","Five-SeveN","Restricted","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Scorpion","Pistol","P2000","Restricted","The Dust Collection")) 
skinList.push(new Skin("Motherboard","Mid-Tier","MP7","Industrial Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Tornado","Rifle","M4A4","Industrial Grade","The Inferno Collection")) 
skinList.push(new Skin("Triarch","Rifle","SG 553","Restricted","Gamma 2 Case")) 
skinList.push(new Skin("Fade","Mid-Tier","UMP-45","Classified","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Ancient Ritual","Rifle","G3SG1","Industrial Grade","The Ancient Collection")) 
skinList.push(new Skin("Steel Disruption","Pistol","Glock-18","Restricted","eSports 2014 Summer Case")) 
skinList.push(new Skin("Sand Scale","Mid-Tier","MP9","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Melondrama","Pistol","Dual Berettas","Classified","Dreams & Nightmares Case")) 
skinList.push(new Skin("X-Ray","Pistol","P250","Restricted","X-Ray P250 Package")) 
skinList.push(new Skin("Supernova","Pistol","P250","Restricted","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Blaze","Pistol","Desert Eagle","Restricted","The Dust Collection")) 
skinList.push(new Skin("Featherweight","Mid-Tier","MP9","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("龍王 (Dragon King)","Rifle","M4A4","Classified","Chroma Case")) 
skinList.push(new Skin("Tilted","Pistol","Desert Eagle","Industrial Grade","The Overpass 2024 Collection")) 
skinList.push(new Skin("Boreal Forest","Rifle","M4A1-S","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Wurst Hölle","Mid-Tier","Nova","Mil-Spec","The Overpass 2024 Collection")) 
skinList.push(new Skin("Asiimov","Pistol","P250","Classified","Chroma 3 Case")) 
skinList.push(new Skin("Houndstooth","Mid-Tier","UMP-45","Industrial Grade","The Havoc Collection")) 
skinList.push(new Skin("Crypsis","Rifle","FAMAS","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Modern Hunter","Pistol","P250","Mil-Spec","The Militia Collection")) 
skinList.push(new Skin("Elite Build","Rifle","AWP","Classified","Operation Wildfire Case")) 
skinList.push(new Skin("Candy Apple","Rifle","SG 553","Industrial Grade","The Canals Collection")) 
skinList.push(new Skin("Epicenter","Pistol","P250","Classified","Gallery Case")) 
skinList.push(new Skin("Colony","Pistol","Dual Berettas","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Meow 36","Rifle","FAMAS","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Oceanic","Mid-Tier","MAC-10","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Cartel","Pistol","Dual Berettas","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("Crakow!","Rifle","AWP","Classified","The Overpass 2024 Collection")) 
skinList.push(new Skin("Autumn Twilly","Mid-Tier","MP5-SD","Restricted","The 2021 Train Collection")) 
skinList.push(new Skin("Safari Mesh","Rifle","AWP","Industrial Grade","The Lake Collection")) 
skinList.push(new Skin("High Beam","Pistol","Glock-18","Industrial Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Fever Dream","Rifle","SSG 08","Restricted","Prisma 2 Case")) 
skinList.push(new Skin("Highwayman","Mid-Tier","Sawed-Off","Restricted","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Orion","Pistol","USP-S","Classified","The Huntsman Collection")) 
skinList.push(new Skin("Directive","Pistol","Desert Eagle","Restricted","Gamma 2 Case")) 
skinList.push(new Skin("Warbird","Mid-Tier","M249","Mil-Spec Machine","Shattered Web Case")) 
skinList.push(new Skin("Panther Camo","Pistol","P2000","Industrial Grade","The Ancient Collection")) 
skinList.push(new Skin("Balance","Pistol","Dual Berettas","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Special Delivery","Mid-Tier","MP7","Restricted","Shadow Case")) 
skinList.push(new Skin("Saibā Oni","Mid-Tier","MAC-10","Restricted","Gallery Case")) 
skinList.push(new Skin("X-Ray","Rifle","M4A4","Covert","eSports 2013 Winter Case")) 
skinList.push(new Skin("Predator","Mid-Tier","M249","Consumer Grade Machine","The Havoc Collection")) 
skinList.push(new Skin("Ancient Visions","Pistol","USP-S","Restricted","The Ancient Collection")) 
skinList.push(new Skin("Keeping Tabs","Rifle","G3SG1","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Wingshot","Pistol","P250","Restricted","Shadow Case")) 
skinList.push(new Skin("Legion of Anubis","Rifle","AK-47","Covert","Fracture Case")) 
skinList.push(new Skin("Chromatic Aberration","Rifle","AWP","Covert","Recoil Case")) 
skinList.push(new Skin("Carbon Fiber","Mid-Tier","PP-Bizon","Industrial Grade","The Vertigo Collection")) 
skinList.push(new Skin("Cold Fusion","Rifle","Galil AR","Industrial Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("High Seas","Rifle","G3SG1","Restricted","Horizon Case")) 
skinList.push(new Skin("Lionfish","Mid-Tier","Negev","Restricted Machine","Clutch Case")) 
skinList.push(new Skin("Ventilator","Rifle","G3SG1","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Moonrise","Pistol","Glock-18","Restricted","Clutch Case")) 
skinList.push(new Skin("CMYK","Rifle","AWP","Covert","The Graphic Design Collection")) 
skinList.push(new Skin("Abyss","Rifle","SSG 08","Mil-Spec","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Visions","Pistol","P250","Classified","Recoil Case")) 
skinList.push(new Skin("Urban DDPAT","Mid-Tier","UMP-45","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Entombed","Mid-Tier","XM1014","Classified","Fracture Case")) 
skinList.push(new Skin("Corticera","Pistol","P2000","Classified","eSports 2014 Summer Case")) 
skinList.push(new Skin("Griffin","Rifle","M4A4","Restricted","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Nightshade","Pistol","Five-SeveN","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Rangeen","Mid-Tier","MAC-10","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Royal Legion","Pistol","Glock-18","Restricted","Operation Wildfire Case")) 
skinList.push(new Skin("Slashed","Rifle","SSG 08","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Storm","Rifle","AUG","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("Red Quartz","Pistol","Tec-9","Restricted","The Train Collection")) 
skinList.push(new Skin("Ancient Lore","Mid-Tier","XM1014","Restricted","The Ancient Collection")) 
skinList.push(new Skin("Memento","Mid-Tier","MAG-7","Mil-Spec","eSports 2013 Case")) 
skinList.push(new Skin("Halftone Shift","Mid-Tier","XM1014","Mil-Spec","The Graphic Design Collection")) 
skinList.push(new Skin("Mosaico","Mid-Tier","Sawed-Off","Industrial Grade","The Alpha Collection")) 
skinList.push(new Skin("Tranquility","Mid-Tier","XM1014","Classified","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Emerald Pinstripe","Rifle","AK-47","Restricted","The Bank Collection")) 
skinList.push(new Skin("Moss Quartz","Rifle","M4A1-S","Industrial Grade","The Norse Collection")) 
skinList.push(new Skin("Ocean Drive","Pistol","Desert Eagle","Covert","Operation Riptide Case")) 
skinList.push(new Skin("Oxide Oasis","Mid-Tier","MP5-SD","Classified","The 2021 Mirage Collection")) 
skinList.push(new Skin("Jambiya","Pistol","Tec-9","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("The Prince","Rifle","AWP","Covert","The Canals Collection")) 
skinList.push(new Skin("Fallout Warning","Rifle","SG 553","Industrial Grade","The Cache Collection")) 
skinList.push(new Skin("Sand Dune","Rifle","SSG 08","Consumer Grade","The Baggage Collection")) 
skinList.push(new Skin("Ultraviolet","Rifle","SG 553","Mil-Spec","CS:GO Weapon Case")) 
skinList.push(new Skin("Black Lotus","Rifle","M4A1-S","Classified","Kilowatt Case")) 
skinList.push(new Skin("Dezastre","Pistol","Dual Berettas","Restricted","Operation Broken Fang Case")) 
skinList.push(new Skin("Minotaur's Labyrinth","Mid-Tier","UMP-45","Mil-Spec","The Gods and Monsters Collection")) 
skinList.push(new Skin("Torn","Rifle","SCAR-20","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Amber Fade","Rifle","Galil AR","Mil-Spec","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Harvester","Mid-Tier","PP-Bizon","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Reactor","Pistol","Glock-18","Mil-Spec","The Cache Collection")) 
skinList.push(new Skin("Chemical Green","Mid-Tier","PP-Bizon","Industrial Grade","The Cache Collection")) 
skinList.push(new Skin("Riot","Mid-Tier","UMP-45","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Desert Warfare","Mid-Tier","P90","Mil-Spec","The Huntsman Collection")) 
skinList.push(new Skin("Master Piece","Rifle","M4A1-S","Classified","The Overpass Collection")) 
skinList.push(new Skin("Grassland","Mid-Tier","XM1014","Consumer Grade","The Militia Collection")) 
skinList.push(new Skin("Silver Quartz","Pistol","Five-SeveN","Mil-Spec","The Safehouse Collection")) 
skinList.push(new Skin("Hive","Pistol","P250","Mil-Spec","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Banana Leaf","Mid-Tier","XM1014","Industrial Grade","The St. Marc Collection")) 
skinList.push(new Skin("Poultrygeist","Rifle","SCAR-20","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Inheritance","Rifle","AK-47","Covert","Kilowatt Case")) 
skinList.push(new Skin("Bulldozer","Mid-Tier","MAG-7","Restricted","The Mirage Collection")) 
skinList.push(new Skin("Asterion","Mid-Tier","MP7","Consumer Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Vent Rush","Mid-Tier","P90","Restricted","Recoil Case")) 
skinList.push(new Skin("Seabird","Mid-Tier","MAG-7","Consumer Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Turf","Pistol","P2000","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Sunset Storm 弐","Pistol","Desert Eagle","Restricted","The Rising Sun Collection")) 
skinList.push(new Skin("Clear Polymer","Mid-Tier","Nova","Restricted","Operation Broken Fang Case")) 
skinList.push(new Skin("Catacombs","Pistol","Glock-18","Mil-Spec","Chroma Case")) 
skinList.push(new Skin("Indigo","Pistol","CZ75-Auto","Consumer Grade","The Canals Collection")) 
skinList.push(new Skin("Corporal","Mid-Tier","UMP-45","Mil-Spec","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Gunsmoke","Mid-Tier","UMP-45","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Sweeper","Rifle","AUG","Consumer Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Phantom Disruptor","Rifle","AK-47","Classified","Prisma 2 Case")) 
skinList.push(new Skin("Jungle Dashed","Rifle","G3SG1","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("Sunbaked","Mid-Tier","MP7","Consumer Grade","Anubis Collection Package")) 
skinList.push(new Skin("Sienna Damask","Mid-Tier","MAC-10","Consumer Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Glacier Mesh","Mid-Tier","P90","Mil-Spec","The Vertigo Collection")) 
skinList.push(new Skin("Scorched","Mid-Tier","MP7","Consumer Grade","The Norse Collection")) 
skinList.push(new Skin("Cartel","Rifle","AK-47","Classified","Chroma Case")) 
skinList.push(new Skin("Scorched","Mid-Tier","UMP-45","Consumer Grade","The Overpass Collection")) 
skinList.push(new Skin("Grassland Leaves","Pistol","P2000","Industrial Grade","The Militia Collection"))
skinList.push(new Skin("Death by Kitty","Mid-Tier","P90","Covert","eSports 2013 Case")) 
skinList.push(new Skin("Aloha","Mid-Tier","MAC-10","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Infrastructure","Mid-Tier","Negev","Mil-Spec Machine","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Elegant Vines","Mid-Tier","XM1014","Restricted","The 2021 Mirage Collection")) 
skinList.push(new Skin("Cobalt Halftone","Mid-Tier","PP-Bizon","Mil-Spec","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Dark Water","Rifle","M4A1-S","Restricted","CS:GO Weapon Case")) 
skinList.push(new Skin("Exposure","Mid-Tier","UMP-45","Restricted","Spectrum 2 Case")) 
skinList.push(new Skin("Coach Class","Pistol","P2000","Industrial Grade","The Baggage Collection")) 
skinList.push(new Skin("Murky","Rifle","G3SG1","Mil-Spec","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Old Roots","Mid-Tier","MP9","Industrial Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Azure Zebra","Rifle","G3SG1","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Sobek's Bite","Mid-Tier","Nova","Restricted","Anubis Collection Package")) 
skinList.push(new Skin("Spitfire","Rifle","FAMAS","Restricted","The Alpha Collection")) 
skinList.push(new Skin("Amber Fade","Pistol","R8 Revolver","Classified","The Dust 2 Collection")) 
skinList.push(new Skin("Orange Crash","Rifle","G3SG1","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("VariCamo","Rifle","G3SG1","Industrial Grade","The Safehouse Collection")) 
skinList.push(new Skin("Threat Detected","Rifle","SSG 08","Mil-Spec","The Control Collection")) 
skinList.push(new Skin("Strats","Mid-Tier","MAC-10","Consumer Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Pulse","Rifle","SG 553","Restricted","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Pathfinder","Pistol","USP-S","Industrial Grade","The Norse Collection")) 
skinList.push(new Skin("Dazzle","Mid-Tier","Negev","Mil-Spec Machine","Gamma 2 Case")) 
skinList.push(new Skin("Outbreak","Rifle","SCAR-20","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Fuel Injector","Pistol","Tec-9","Classified","Gamma 2 Case")) 
skinList.push(new Skin("Triqua","Rifle","AUG","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Winterized","Pistol","Glock-18","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Whiteout","Pistol","USP-S","Classified","The 2021 Train Collection")) 
skinList.push(new Skin("Seabird","Mid-Tier","PP-Bizon","Consumer Grade","The St. Marc Collection")) 
skinList.push(new Skin("Black Nile","Rifle","AWP","Mil-Spec","Anubis Collection Package")) 
skinList.push(new Skin("Eco","Rifle","Galil AR","Classified","Chroma 2 Case")) 
skinList.push(new Skin("Triumvirate","Pistol","Five-SeveN","Restricted","Operation Wildfire Case")) 
skinList.push(new Skin("Phoenix Chalk","Pistol","Tec-9","Consumer Grade","The Havoc Collection")) 
skinList.push(new Skin("Facets","Pistol","P250","Industrial Grade","The Alpha Collection")) 
skinList.push(new Skin("Panther","Pistol","Dual Berettas","Mil-Spec","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Nebula Crusader","Mid-Tier","M249","Restricted Machine","Shadow Case")) 
skinList.push(new Skin("Imprint","Pistol","CZ75-Auto","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Magna Carta","Rifle","SCAR-20","Mil-Spec","The Control Collection")) 
skinList.push(new Skin("Verdigris","Pistol","P250","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Zirka","Rifle","M4A4","Restricted","Operation Bravo Case")) 
skinList.push(new Skin("Forest DDPAT","Mid-Tier","MP7","Consumer Grade","The Bank Collection")) 
skinList.push(new Skin("Crimson Kimono","Pistol","P250","Industrial Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Dragon Tech","Rifle","SG 553","Restricted","Recoil Case")) 
skinList.push(new Skin("Space Race","Pistol","P2000","Restricted","The 2021 Train Collection")) 
skinList.push(new Skin("Calf Skin","Mid-Tier","MAC-10","Industrial Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Vogue","Pistol","Glock-18","Classified","Fracture Case")) 
skinList.push(new Skin("Dispatch","Pistol","P2000","Mil-Spec","The Control Collection")) 
skinList.push(new Skin("Snake Camo","Mid-Tier","Sawed-Off","Industrial Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Slipstream","Mid-Tier","XM1014","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Digital Mesh","Rifle","G3SG1","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("Cold Blooded","Mid-Tier","P90","Classified","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Army Sheen","Pistol","CZ75-Auto","Consumer Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Quick Sand","Mid-Tier","Nova","Mil-Spec","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Weasel","Pistol","Glock-18","Restricted","Gamma 2 Case")) 
skinList.push(new Skin("Kiss♥Love","Mid-Tier","Sawed-Off","Classified","Recoil Case")) 
skinList.push(new Skin("dev_texture","Mid-Tier","Negev","Restricted Machine","Snakebite Case")) 
skinList.push(new Skin("Oni Taiji","Rifle","AWP","Covert","Operation Hydra Case")) 
skinList.push(new Skin("Ice Cap","Pistol","Tec-9","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Pilot","Pistol","Desert Eagle","Restricted","The Baggage Collection")) 
skinList.push(new Skin("Death's Head","Rifle","SSG 08","Restricted","Operation Hydra Case")) 
skinList.push(new Skin("Fade","Pistol","R8 Revolver","Covert","Revolver Case")) 
skinList.push(new Skin("Bone Forged","Pistol","R8 Revolver","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Acid Wash","Mid-Tier","MP5-SD","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Storm","Mid-Tier","MP9","Consumer Grade","The Overpass Collection")) 
skinList.push(new Skin("Bengal Tiger","Pistol","P250","Mil-Spec","The Havoc Collection")) 
skinList.push(new Skin("Starcade","Pistol","Desert Eagle","Classified","The Graphic Design Collection")) 
skinList.push(new Skin("The Bronze","Pistol","Desert Eagle","Industrial Grade","The Control Collection")) 
skinList.push(new Skin("Roadblock","Mid-Tier","UMP-45","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Titanium Bit","Pistol","Tec-9","Restricted","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Survivor Z","Rifle","FAMAS","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Red Laminate","Rifle","AK-47","Classified","eSports 2013 Case")) 
skinList.push(new Skin("Winter Forest","Rifle","Galil AR","Industrial Grade","The Office Collection")) 
skinList.push(new Skin("Chrome Cannon","Rifle","AWP","Covert","Kilowatt Case")) 
skinList.push(new Skin("Global Offensive","Rifle","M4A4","Mil-Spec","The Control Collection")) 
skinList.push(new Skin("Sand Mesh","Rifle","SCAR-20","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Bloodsport","Mid-Tier","MP7","Covert","Clutch Case")) 
skinList.push(new Skin("Half Sleeve","Rifle","FAMAS","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("Gungnir","Rifle","AWP","Covert","The Norse Collection")) 
skinList.push(new Skin("Switch Board","Pistol","Dual Berettas","Industrial Grade","The Control Collection")) 
skinList.push(new Skin("Green Plaid","Mid-Tier","MP9","Consumer Grade","The Baggage Collection")) 
skinList.push(new Skin("Seasons","Mid-Tier","XM1014","Restricted","Spectrum Case")) 
skinList.push(new Skin("Ash Wood","Mid-Tier","P90","Industrial Grade","The Train Collection")) 
skinList.push(new Skin("Candy Apple","Mid-Tier","PP-Bizon","Industrial Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Mandrel","Mid-Tier","Nova","Consumer Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("B the Monster","Rifle","AK-47","Covert","The Overpass 2024 Collection")) 
skinList.push(new Skin("Chalice","Pistol","CZ75-Auto","Restricted","The Cobblestone Collection")) 
skinList.push(new Skin("Primal Saber","Mid-Tier","UMP-45","Classified","Chroma 3 Case")) 
skinList.push(new Skin("Printstream","Pistol","Desert Eagle","Covert","Fracture Case")) 
skinList.push(new Skin("Fubar","Mid-Tier","Sawed-Off","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("Night","Pistol","Desert Eagle","Industrial Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Night Terror","Rifle","M4A1-S","Restricted","Dreams & Nightmares Case")) 
skinList.push(new Skin("Withered Vine","Pistol","Five-SeveN","Industrial Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Wash me plz","Rifle","M4A1-S","Industrial Grade","The Overpass 2024 Collection")) 
skinList.push(new Skin("Blizzard Marbleized","Mid-Tier","M249","Industrial Grade Machine","The Office Collection")) 
skinList.push(new Skin("Zander","Mid-Tier","Sawed-Off","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Torque","Rifle","AUG","Restricted","Huntsman Weapon Case")) 
skinList.push(new Skin("Pipsqueak","Mid-Tier","MAC-10","Mil-Spec","The Overpass 2024 Collection")) 
skinList.push(new Skin("Whiteout","Pistol","P250","Mil-Spec","The Chop Shop Collection")) 
skinList.push(new Skin("Business Class","Pistol","USP-S","Mil-Spec","The Baggage Collection")) 
skinList.push(new Skin("Buddy","Pistol","Five-SeveN","Restricted","CS20 Case")) 
skinList.push(new Skin("Containment Breach","Rifle","AWP","Covert","Shattered Web Case")) 
skinList.push(new Skin("Facility Negative","Mid-Tier","P90","Mil-Spec","The 2018 Nuke Collection")) 
skinList.push(new Skin("Wave Spray","Rifle","SG 553","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("Contaminant","Pistol","P250","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("Acid Etched","Pistol","P2000","Restricted","Prisma 2 Case")) 
skinList.push(new Skin("Tuxedo","Rifle","Galil AR","Mil-Spec","The Bank Collection")) 
skinList.push(new Skin("Darkwing","Rifle","SG 553","Restricted","Prisma 2 Case")) 
skinList.push(new Skin("Red Filigree","Mid-Tier","MAC-10","Restricted","The Canals Collection")) 
skinList.push(new Skin("Grip","Pistol","R8 Revolver","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("CaliCamo","Rifle","FAMAS","Industrial Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Poly Mag","Rifle","M4A4","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Chromatic Aberration","Rifle","Galil AR","Classified","Snakebite Case")) 
skinList.push(new Skin("Whitefish","Mid-Tier","MAC-10","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Olympus","Pistol","Zeus x27","Classified","Kilowatt Case")) 
skinList.push(new Skin("Cobra Strike","Pistol","Dual Berettas","Classified","Operation Hydra Case")) 
skinList.push(new Skin("Grotto","Rifle","SCAR-20","Mil-Spec","Chroma Case")) 
skinList.push(new Skin("Eye of Zapems","Rifle","AUG","Restricted","The Overpass 2024 Collection")) 
skinList.push(new Skin("Origami","Mid-Tier","Sawed-Off","Mil-Spec","Chroma 2 Case")) 
skinList.push(new Skin("Army Recon","Mid-Tier","MP7","Consumer Grade","The Safehouse Collection")) 
skinList.push(new Skin("Desert Storm","Rifle","M4A4","Industrial Grade","The Dust Collection")) 
skinList.push(new Skin("Gila","Mid-Tier","Nova","Restricted","Glove Case")) 
skinList.push(new Skin("Chopper","Mid-Tier","P90","Restricted","Gamma Case")) 
skinList.push(new Skin("Orange Filigree","Rifle","SSG 08","Mil-Spec","The Canals Collection")) 
skinList.push(new Skin("Parallax","Rifle","SSG 08","Restricted","Operation Broken Fang Case")) 
skinList.push(new Skin("Watchdog","Mid-Tier","XM1014","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Aerial","Rifle","SG 553","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("ZX Spectron","Rifle","FAMAS","Restricted","Operation Riptide Case")) 
skinList.push(new Skin("Urban Dashed","Mid-Tier","PP-Bizon","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Lab Rats","Mid-Tier","MP5-SD","Restricted","The Blacksite Collection")) 
skinList.push(new Skin("VariCamo","Pistol","Tec-9","Industrial Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Phoenix Stencil","Mid-Tier","Negev","Mil-Spec Machine","The Havoc Collection")) 
skinList.push(new Skin("Trigger Discipline","Pistol","Desert Eagle","Restricted","Snakebite Case")) 
skinList.push(new Skin("Allure","Mid-Tier","MAC-10","Restricted","Fracture Case")) 
skinList.push(new Skin("Jungle DDPAT","Mid-Tier","M249","Consumer Grade Machine","The Alpha Collection")) 
skinList.push(new Skin("Caged Steel","Mid-Tier","Nova","Industrial Grade","The Bank Collection")) 
skinList.push(new Skin("Death Rattle","Pistol","Glock-18","Industrial Grade","The Bank Collection")) 
skinList.push(new Skin("Knight","Rifle","M4A1-S","Classified","The Cobblestone Collection")) 
skinList.push(new Skin("Halftone Whorl","Rifle","SSG 08","Industrial Grade","The Graphic Design Collection")) 
skinList.push(new Skin("The Outsiders","Rifle","AK-47","Classified","Gallery Case")) 
skinList.push(new Skin("Blast From the Past","Pistol","Tec-9","Mil-Spec","The Ancient Collection")) 
skinList.push(new Skin("Desert Storm","Rifle","G3SG1","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Teal Blossom","Mid-Tier","MP7","Mil-Spec","The St. Marc Collection")) 
skinList.push(new Skin("Sand Dune","Mid-Tier","MAG-7","Consumer Grade","The Inferno Collection")) 
skinList.push(new Skin("Angry Mob","Pistol","Five-SeveN","Covert","Prisma Case")) 
skinList.push(new Skin("Scorched","Mid-Tier","P90","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Lumen","Mid-Tier","PP-Bizon","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Ranger","Mid-Tier","Nova","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Anodized Navy","Pistol","Dual Berettas","Mil-Spec","The Inferno Collection")) 
skinList.push(new Skin("Flame Jörmungandr","Rifle","AUG","Restricted","The Norse Collection")) 
skinList.push(new Skin("PAW","Rifle","AWP","Restricted","Horizon Case")) 
skinList.push(new Skin("Turbine","Rifle","M4A4","Restricted","Gallery Case")) 
skinList.push(new Skin("Plague","Rifle","AUG","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Cinquedea","Mid-Tier","MAG-7","Classified","The Canals Collection")) 
skinList.push(new Skin("Anodized Navy","Rifle","AUG","Mil-Spec","The Alpha Collection")) 
skinList.push(new Skin("Emphorosaur-S","Rifle","M4A1-S","Restricted","Revolution Case")) 
skinList.push(new Skin("Kami","Rifle","Galil AR","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Submerged","Mid-Tier","M249","Consumer Grade Machine","Anubis Collection Package")) 
skinList.push(new Skin("Rebel","Pistol","Tec-9","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Neo-Noir","Pistol","USP-S","Covert","Spectrum Case")) 
skinList.push(new Skin("Tornado","Rifle","SG 553","Consumer Grade","The Assault Collection")) 
skinList.push(new Skin("Jungle Dashed","Rifle","SSG 08","Consumer Grade","The Ancient Collection")) 
skinList.push(new Skin("Blue Ply","Pistol","Desert Eagle","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Arctic Wolf","Rifle","AUG","Restricted","Shattered Web Case")) 
skinList.push(new Skin("Mainframe","Rifle","M4A4","Industrial Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Space Cat","Mid-Tier","PP-Bizon","Restricted","Dreams & Nightmares Case")) 
skinList.push(new Skin("Dusk Ruins","Rifle","Galil AR","Mil-Spec","The Ancient Collection")) 
skinList.push(new Skin("Dark Water","Pistol","USP-S","Restricted","CS:GO Weapon Case")) 
skinList.push(new Skin("Mischief","Mid-Tier","MP7","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Stymphalian","Rifle","AUG","Classified","Clutch Case")) 
skinList.push(new Skin("Integrale","Rifle","SG 553","Classified","The 2018 Inferno Collection")) 
skinList.push(new Skin("The Executioner","Rifle","G3SG1","Classified","Revolver Case")) 
skinList.push(new Skin("Mainframe 001","Rifle","SSG 08","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Random Access","Rifle","AUG","Restricted","The 2018 Nuke Collection")) 
skinList.push(new Skin("Golden Koi","Pistol","Desert Eagle","Covert","Operation Bravo Case")) 
skinList.push(new Skin("Fade","Mid-Tier","MAC-10","Mil-Spec","The Chop Shop Collection")) 
skinList.push(new Skin("O.S.I.P.R.","Mid-Tier","M249","Mil-Spec Machine","Snakebite Case")) 
skinList.push(new Skin("Decimator","Rifle","M4A1-S","Classified","Spectrum Case")) 
skinList.push(new Skin("The Fuschia Is Now","Pistol","CZ75-Auto","Classified","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Army Sheen","Mid-Tier","MP9","Consumer Grade","The Control Collection")) 
skinList.push(new Skin("Amber Slipstream","Rifle","AUG","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Guardian","Pistol","USP-S","Restricted","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Midnight Palm","Mid-Tier","M249","Industrial Grade Machine","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Hand Cannon","Pistol","Desert Eagle","Restricted","The Cobblestone Collection")) 
skinList.push(new Skin("Fallout Warning","Mid-Tier","P90","Industrial Grade","The Nuke Collection")) 
skinList.push(new Skin("Cobalt Quartz","Pistol","Dual Berettas","Restricted","The Lake Collection")) 
skinList.push(new Skin("Ripple","Pistol","P250","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Deadly Poison","Mid-Tier","MP9","Mil-Spec","Chroma Case")) 
skinList.push(new Skin("Sunset Storm 壱","Pistol","Desert Eagle","Restricted","The Rising Sun Collection")) 
skinList.push(new Skin("Wild Child","Mid-Tier","UMP-45","Classified","Revolution Case")) 
skinList.push(new Skin("Drop Me","Mid-Tier","Negev","Mil-Spec Machine","Recoil Case")) 
skinList.push(new Skin("Waves Perforated","Rifle","SG 553","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("Duelist","Pistol","Dual Berettas","Restricted","The Chop Shop Collection")) 
skinList.push(new Skin("Hyper Beast","Mid-Tier","Nova","Classified","Operation Wildfire Case")) 
skinList.push(new Skin("Inferno","Pistol","P250","Restricted","CS20 Case")) 
skinList.push(new Skin("Snek-9","Pistol","Tec-9","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Jungle","Pistol","Five-SeveN","Consumer Grade","The Aztec Collection")) 
skinList.push(new Skin("Styx","Rifle","FAMAS","Restricted","The Cache Collection")) 
skinList.push(new Skin("Fallout Warning","Mid-Tier","UMP-45","Industrial Grade","The Nuke Collection")) 
skinList.push(new Skin("Antique","Mid-Tier","Nova","Classified","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Wraiths","Pistol","Glock-18","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Black Sand","Mid-Tier","MP9","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Twin Turbo","Pistol","Dual Berettas","Classified","The 2018 Inferno Collection")) 
skinList.push(new Skin("Anolis","Mid-Tier","PP-Bizon","Consumer Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Orange Peel","Pistol","Five-SeveN","Industrial Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Roll Cage","Rifle","FAMAS","Covert","Gamma 2 Case")) 
skinList.push(new Skin("Predator","Rifle","AK-47","Industrial Grade","The Dust Collection"))
skinList.push(new Skin("Spectre","Mid-Tier","M249","Mil-Spec Machine","Chroma 3 Case")) 
skinList.push(new Skin("Polymer","Pistol","CZ75-Auto","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Converter","Rifle","M4A4","Mil-Spec","The 2018 Inferno Collection")) 
skinList.push(new Skin("Crimson Foil","Mid-Tier","UMP-45","Restricted","The Sport & Field Collection")) 
skinList.push(new Skin("Teclu Burner","Mid-Tier","XM1014","Restricted","Revolver Case")) 
skinList.push(new Skin("Metallic DDPAT","Pistol","P250","Industrial Grade","The Train Collection")) 
skinList.push(new Skin("Black Laminate","Rifle","AK-47","Mil-Spec","The Vertigo Collection")) 
skinList.push(new Skin("Wash me","Mid-Tier","P90","Industrial Grade","The Overpass 2024 Collection")) 
skinList.push(new Skin("Fuel Rod","Mid-Tier","PP-Bizon","Restricted","Revolver Case")) 
skinList.push(new Skin("Eco","Pistol","CZ75-Auto","Restricted","Horizon Case")) 
skinList.push(new Skin("Delusion","Mid-Tier","UMP-45","Mil-Spec","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Devourer","Mid-Tier","Sawed-Off","Classified","Horizon Case")) 
skinList.push(new Skin("Rose Iron","Mid-Tier","MP9","Restricted","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Asiimov","Rifle","AWP","Covert","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Powercore","Mid-Tier","MP7","Restricted","Horizon Case")) 
skinList.push(new Skin("Prime Conspiracy","Rifle","FAMAS","Restricted","The Control Collection")) 
skinList.push(new Skin("Splash","Pistol","P250","Restricted","eSports 2013 Case")) 
skinList.push(new Skin("Army Mesh","Pistol","Tec-9","Consumer Grade","The Safehouse Collection")) 
skinList.push(new Skin("Naga","Pistol","Desert Eagle","Restricted","Chroma Case")) 
skinList.push(new Skin("Slide","Mid-Tier","MP9","Consumer Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Exchanger","Pistol","P250","Mil-Spec","The 2018 Nuke Collection")) 
skinList.push(new Skin("Bullet Rain","Rifle","M4A4","Covert","eSports 2014 Summer Case")) 
skinList.push(new Skin("Urban DDPAT","Mid-Tier","MAC-10","Consumer Grade","The Vertigo Collection")) 
skinList.push(new Skin("Flux","Rifle","G3SG1","Classified","Shadow Case")) 
skinList.push(new Skin("Orange Murano","Pistol","Tec-9","Industrial Grade","The Canals Collection")) 
skinList.push(new Skin("Case Hardened","Mid-Tier","MAC-10","Restricted","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Jungle Slipstream","Rifle","SCAR-20","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Carbon Fiber","Rifle","SCAR-20","Industrial Grade","The Train Collection")) 
skinList.push(new Skin("Hot Rod","Mid-Tier","MP9","Mil-Spec","The Mirage Collection")) 
skinList.push(new Skin("Colony IV","Rifle","SG 553","Classified","Shattered Web Case")) 
skinList.push(new Skin("Mayan Dreams","Rifle","SSG 08","Industrial Grade","The Alpha Collection")) 
skinList.push(new Skin("Mecha Industries","Pistol","Desert Eagle","Classified","Danger Zone Case")) 
skinList.push(new Skin("Banana Cannon","Pistol","R8 Revolver","Restricted","Revolution Case")) 
skinList.push(new Skin("Metal Flowers","Mid-Tier","UMP-45","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("In Living Color","Rifle","M4A4","Covert","Snakebite Case")) 
skinList.push(new Skin("Attack Vector","Mid-Tier","P90","Restricted","The Graphic Design Collection")) 
skinList.push(new Skin("Walnut","Mid-Tier","Nova","Consumer Grade","The Inferno Collection")) 
skinList.push(new Skin("Desert Tactical","Pistol","USP-S","Industrial Grade","Anubis Collection Package")) 
skinList.push(new Skin("Full Stop","Mid-Tier","MP7","Mil-Spec","The Chop Shop Collection")) 
skinList.push(new Skin("Tornado","Pistol","Tec-9","Consumer Grade","The Alpha Collection")) 
skinList.push(new Skin("Emerald","Pistol","CZ75-Auto","Mil-Spec","The Chop Shop Collection")) 
skinList.push(new Skin("Chameleon","Rifle","AUG","Covert","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Green Apple","Mid-Tier","Nova","Industrial Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Turbo Peek","Rifle","SSG 08","Classified","Operation Riptide Case")) 
skinList.push(new Skin("Army Sheen","Rifle","SG 553","Consumer Grade","The Bank Collection")) 
skinList.push(new Skin("Storm","Mid-Tier","P90","Consumer Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Cerberus","Rifle","Galil AR","Restricted","The Cache Collection")) 
skinList.push(new Skin("Red Tire","Pistol","Glock-18","Industrial Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Night Ops","Mid-Tier","PP-Bizon","Industrial Grade","The Lake Collection")) 
skinList.push(new Skin("Dark Water","Rifle","SSG 08","Mil-Spec","eSports 2014 Summer Case")) 
skinList.push(new Skin("Fubar","Pistol","Tec-9","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Bright Water","Rifle","M4A1-S","Restricted","Operation Bravo Case")) 
skinList.push(new Skin("Hydro Strike","Pistol","Dual Berettas","Restricted","Gallery Case")) 
skinList.push(new Skin("Mortis","Rifle","AWP","Classified","Clutch Case")) 
skinList.push(new Skin("Sandstorm","Pistol","Tec-9","Mil-Spec","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Sputnik","Pistol","Desert Eagle","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("Warhawk","Pistol","Glock-18","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Night Heist","Pistol","Desert Eagle","Mil-Spec","The Havoc Collection")) 
skinList.push(new Skin("Incinegator","Mid-Tier","XM1014","Classified","Prisma Case")) 
skinList.push(new Skin("Tread","Pistol","Dual Berettas","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("ScaraB Rush","Mid-Tier","P90","Restricted","Anubis Collection Package")) 
skinList.push(new Skin("Off World","Pistol","Glock-18","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Bulldozer","Mid-Tier","MP9","Restricted","The Assault Collection")) 
skinList.push(new Skin("Isaac","Pistol","Tec-9","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Modern Hunter","Rifle","M4A4","Restricted","The Militia Collection")) 
skinList.push(new Skin("Emerald","Pistol","Dual Berettas","Mil-Spec","The Canals Collection")) 
skinList.push(new Skin("Desert Blossom","Rifle","SG 553","Mil-Spec","The 2021 Mirage Collection")) 
skinList.push(new Skin("Cold Cell","Mid-Tier","PP-Bizon","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("Akoben","Rifle","Galil AR","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Ivory","Pistol","P2000","Mil-Spec","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Copper Coated","Mid-Tier","MAG-7","Mil-Spec","Anubis Collection Package")) 
skinList.push(new Skin("Rust Leaf","Pistol","Tec-9","Industrial Grade","The St. Marc Collection")) 
skinList.push(new Skin("Hyper Beast","Rifle","AWP","Covert","Falchion Case")) 
skinList.push(new Skin("Sand Dashed","Mid-Tier","PP-Bizon","Consumer Grade","The Italy Collection")) 
skinList.push(new Skin("Printstream","Pistol","USP-S","Covert","Recoil Case")) 
skinList.push(new Skin("Heavy Metal","Rifle","SG 553","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Vino Primo","Pistol","P250","Restricted","The 2018 Inferno Collection")) 
skinList.push(new Skin("Wasteland Rebel","Rifle","AK-47","Covert","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Point Disarray","Rifle","AK-47","Classified","Revolver Case")) 
skinList.push(new Skin("Apocalypto","Mid-Tier","Sawed-Off","Restricted","Prisma 2 Case")) 
skinList.push(new Skin("Koi","Mid-Tier","Nova","Restricted","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Uncharted","Rifle","AK-47","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Tiger Stencil","Pistol","Tec-9","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("Moon in Libra","Pistol","Dual Berettas","Consumer Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("First Class","Mid-Tier","Sawed-Off","Mil-Spec","The Baggage Collection")) 
skinList.push(new Skin("Amber Fade","Mid-Tier","MAC-10","Mil-Spec","The Mirage Collection")) 
skinList.push(new Skin("Wall Bang","Mid-Tier","Negev","Industrial Grade Machine","The Overpass 2024 Collection")) 
skinList.push(new Skin("Medusa","Rifle","AWP","Covert","The Gods and Monsters Collection")) 
skinList.push(new Skin("Sunset Lily","Mid-Tier","P90","Industrial Grade","The St. Marc Collection")) 
skinList.push(new Skin("Pandora's Box","Mid-Tier","MP9","Mil-Spec","The Gods and Monsters Collection")) 
skinList.push(new Skin("Crimson Tsunami","Rifle","Galil AR","Restricted","Spectrum Case")) 
skinList.push(new Skin("Exo","Mid-Tier","Nova","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Panthera onca","Rifle","AK-47","Classified","The Ancient Collection")) 
skinList.push(new Skin("Schematic","Mid-Tier","P90","Mil-Spec","The 2021 Vertigo Collection")) 
skinList.push(new Skin("AXIA","Pistol","Glock-18","Classified","The Sport & Field Collection")) 
skinList.push(new Skin("New Roots","Rifle","G3SG1","Mil-Spec","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Desert Brush","Pistol","R8 Revolver","Consumer Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Cyanospatter","Rifle","FAMAS","Industrial Grade","The Lake Collection")) 
skinList.push(new Skin("Para Green","Pistol","USP-S","Industrial Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Fleet Flock","Rifle","AUG","Classified","Chroma 3 Case")) 
skinList.push(new Skin("Water Sigil","Mid-Tier","PP-Bizon","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Midnight Storm","Pistol","Desert Eagle","Industrial Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Tornado","Mid-Tier","MAC-10","Consumer Grade","The Militia Collection")) 
skinList.push(new Skin("Cobalt Disruption","Pistol","Desert Eagle","Classified","eSports 2013 Winter Case")) 
skinList.push(new Skin("Whiteout","Mid-Tier","MP7","Mil-Spec","The Office Collection")) 
skinList.push(new Skin("Colony","Rifle","AUG","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Snack Attack","Pistol","Glock-18","Classified","Operation Riptide Case")) 
skinList.push(new Skin("Brass","Rifle","SCAR-20","Mil-Spec","The Norse Collection")) 
skinList.push(new Skin("Frontside Misty","Rifle","AK-47","Classified","Shadow Case")) 
skinList.push(new Skin("Death Strike","Rifle","SSG 08","Classified","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("BI83 Spectrum","Mid-Tier","MAG-7","Restricted","Operation Riptide Case")) 
skinList.push(new Skin("Capillary","Pistol","Five-SeveN","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Impire","Mid-Tier","MP7","Restricted","Operation Wildfire Case")) 
skinList.push(new Skin("CaliCamo","Mid-Tier","XM1014","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Brake Light","Mid-Tier","Sawed-Off","Mil-Spec","The 2018 Inferno Collection")) 
skinList.push(new Skin("Petroglyph","Mid-Tier","MAG-7","Restricted","Gamma 2 Case")) 
skinList.push(new Skin("Bamboo Shadow","Mid-Tier","Sawed-Off","Consumer Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Lightning Strike","Rifle","AWP","Covert","CS:GO Weapon Case")) 
skinList.push(new Skin("Scavenger","Rifle","G3SG1","Restricted","Danger Zone Case")) 
skinList.push(new Skin("Redline","Rifle","AK-47","Classified","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Cyrex","Rifle","M4A1-S","Covert","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Zeno","Rifle","SSG 08","Mil-Spec","The Sport & Field Collection")) 
skinList.push(new Skin("Interlock","Mid-Tier","Nova","Mil-Spec","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Forest Leaves","Mid-Tier","Nova","Consumer Grade","The Aztec Collection")) 
skinList.push(new Skin("Blue Spruce","Mid-Tier","XM1014","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("Fire Serpent","Rifle","AK-47","Covert","Operation Bravo Case")) 
skinList.push(new Skin("Metallic Squeezer","Rifle","Galil AR","Mil-Spec","The Overpass 2024 Collection")) 
skinList.push(new Skin("Wild Berry","Rifle","SCAR-20","Mil-Spec","The Graphic Design Collection")) 
skinList.push(new Skin("Gold Arabesque","Rifle","AK-47","Covert","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Safety Net","Pistol","Tec-9","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("Groundwater","Mid-Tier","MP7","Consumer Grade","The Alpha Collection")) 
skinList.push(new Skin("Urban Hazard","Pistol","P2000","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Bone Pile","Mid-Tier","UMP-45","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("Dirt Drop","Mid-Tier","MP5-SD","Consumer Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Dart","Mid-Tier","MP9","Mil-Spec","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Hunting Blind","Rifle","Galil AR","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Hybrid","Pistol","Five-SeveN","Restricted","Kilowatt Case")) 
skinList.push(new Skin("Pole Position","Pistol","CZ75-Auto","Restricted","Chroma 2 Case")) 
skinList.push(new Skin("Cobalt Core","Mid-Tier","MAG-7","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Redline","Rifle","AWP","Classified","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Airlock","Mid-Tier","MP9","Classified","Gamma 2 Case")) 
skinList.push(new Skin("Grim","Mid-Tier","P90","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Bronze Deco","Pistol","Desert Eagle","Mil-Spec","Chroma 2 Case")) 
skinList.push(new Skin("Surveillance","Rifle","AUG","Consumer Grade","The Control Collection")) 
skinList.push(new Skin("Bloodsport","Rifle","SCAR-20","Classified","Gamma Case")) 
skinList.push(new Skin("Hot Snakes","Mid-Tier","MAC-10","Classified","The Havoc Collection")) 
skinList.push(new Skin("Emerald Poison Dart","Mid-Tier","M249","Restricted Machine","Spectrum Case")) 
skinList.push(new Skin("Neo-Noir","Pistol","Glock-18","Covert","Operation Broken Fang Case")) 
skinList.push(new Skin("Nitro","Pistol","Five-SeveN","Mil-Spec","The Chop Shop Collection")) 
skinList.push(new Skin("Jungle Spray","Rifle","AK-47","Industrial Grade","The Aztec Collection")) 
skinList.push(new Skin("Nitro","Pistol","R8 Revolver","Industrial Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Propaganda","Mid-Tier","MAC-10","Classified","The 2021 Train Collection")) 
skinList.push(new Skin("Copper","Mid-Tier","Sawed-Off","Mil-Spec","The Dust Collection")) 
skinList.push(new Skin("Shattered","Rifle","Galil AR","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("Night Riot","Mid-Tier","PP-Bizon","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Modest Threat","Mid-Tier","MP9","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Twist","Pistol","CZ75-Auto","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Chainmail","Mid-Tier","MAG-7","Industrial Grade","The Norse Collection")) 
skinList.push(new Skin("Abyssal Apparition","Mid-Tier","MP7","Classified","Dreams & Nightmares Case")) 
skinList.push(new Skin("Shallow Grave","Mid-Tier","P90","Classified","Glove Case")) 
skinList.push(new Skin("Tempest","Mid-Tier","Nova","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("Red Astor","Pistol","CZ75-Auto","Restricted","Chroma 3 Case")) 
skinList.push(new Skin("Mud-Spec","Rifle","M4A1-S","Industrial Grade","Anubis Collection Package")) 
skinList.push(new Skin("Green Marine","Rifle","SCAR-20","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Control Panel","Rifle","M4A1-S","Classified","The 2018 Nuke Collection")) 
skinList.push(new Skin("Victoria","Pistol","CZ75-Auto","Covert","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Enforcer","Rifle","SCAR-20","Restricted","Prisma 2 Case")) 
skinList.push(new Skin("Red Python","Mid-Tier","XM1014","Mil-Spec","eSports 2014 Summer Case")) 
skinList.push(new Skin("Amber Fade","Mid-Tier","Sawed-Off","Mil-Spec","The Train Collection")) 
skinList.push(new Skin("Man-o'-war","Rifle","AWP","Covert","Chroma Case")) 
skinList.push(new Skin("Forest Leaves","Pistol","USP-S","Industrial Grade","The Safehouse Collection")) 
skinList.push(new Skin("Boreal Forest","Pistol","P250","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("027","Pistol","USP-S","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Briefing","Rifle","M4A1-S","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Nuclear Garden","Pistol","Glock-18","Restricted","The 2018 Nuke Collection")) 
skinList.push(new Skin("Silk Tiger","Rifle","AWP","Classified","The Havoc Collection")) 
skinList.push(new Skin("The Emperor","Rifle","M4A4","Covert","Prisma Case")) 
skinList.push(new Skin("Hellfire","Rifle","M4A4","Classified","Operation Hydra Case")) 
skinList.push(new Skin("Splash Jam","Rifle","SCAR-20","Classified","The Militia Collection")) 
skinList.push(new Skin("Cassette","Pistol","P250","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Jungle Tiger","Rifle","M4A4","Industrial Grade","The Aztec Collection")) 
skinList.push(new Skin("Teardown","Mid-Tier","P90","Mil-Spec","The Lake Collection")) 
skinList.push(new Skin("Urban DDPAT","Rifle","M4A4","Industrial Grade","The Train Collection")) 
skinList.push(new Skin("Iron Clad","Pistol","P250","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Irradiated Alert","Mid-Tier","PP-Bizon","Consumer Grade","The Nuke Collection")) 
skinList.push(new Skin("Contrast Spray","Rifle","FAMAS","Consumer Grade","The Office Collection")) 
skinList.push(new Skin("Judgement of Anubis","Mid-Tier","PP-Bizon","Covert","Chroma 3 Case")) 
skinList.push(new Skin("Osiris","Mid-Tier","PP-Bizon","Restricted","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Imminent Danger","Rifle","M4A1-S","Covert","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Chronos","Rifle","G3SG1","Restricted","The Gods and Monsters Collection")) 
skinList.push(new Skin("Stone Mosaico","Rifle","SCAR-20","Consumer Grade","The Canals Collection")) 
skinList.push(new Skin("Neon Squeezer","Mid-Tier","MP5-SD","Industrial Grade","The Overpass 2024 Collection")) 
skinList.push(new Skin("Elite 1.6","Pistol","Dual Berettas","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Bleached","Rifle","SG 553","Consumer Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Jawbreaker","Pistol","USP-S","Classified","Kilowatt Case")) 
skinList.push(new Skin("Danger Close","Rifle","SG 553","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Case Hardened","Rifle","AK-47","Classified","CS:GO Weapon Case")) 
skinList.push(new Skin("Brother","Pistol","Tec-9","Restricted","Fracture Case")) 
skinList.push(new Skin("Lichen Dashed","Rifle","SSG 08","Consumer Grade","The Aztec Collection")) 
skinList.push(new Skin("Labyrinth","Mid-Tier","UMP-45","Mil-Spec","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Marina","Pistol","Dual Berettas","Restricted","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Polysoup","Rifle","M4A4","Restricted","The Graphic Design Collection")) 
skinList.push(new Skin("Cut Out","Pistol","Tec-9","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Syndicate","Pistol","CZ75-Auto","Restricted","The 2021 Train Collection")) 
skinList.push(new Skin("Crimson Web","Pistol","R8 Revolver","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Aztec","Mid-Tier","M249","Restricted Machine","CS20 Case")) 
skinList.push(new Skin("Chatterbox","Rifle","Galil AR","Covert","Chroma Case")) 
skinList.push(new Skin("Jungle","Mid-Tier","M249","Consumer Grade Machine","The St. Marc Collection")) 
skinList.push(new Skin("Corticera","Rifle","AWP","Classified","eSports 2014 Summer Case")) 
skinList.push(new Skin("Tornado","Rifle","Galil AR","Consumer Grade","The Norse Collection")) 
skinList.push(new Skin("Franklin","Pistol","Glock-18","Restricted","The Havoc Collection")) 
skinList.push(new Skin("Fragments","Rifle","SCAR-20","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Motorized","Mid-Tier","UMP-45","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Skulls","Mid-Tier","MP7","Mil-Spec","CS:GO Weapon Case")) 
skinList.push(new Skin("Leaded Glass","Rifle","M4A1-S","Classified","Spectrum 2 Case")) 
skinList.push(new Skin("Waters of Nephthys","Rifle","FAMAS","Classified","Anubis Collection Package")) 
skinList.push(new Skin("Mummy's Rot","Pistol","Tec-9","Mil-Spec","Anubis Collection Package")) 
skinList.push(new Skin("Bloodsport","Rifle","AK-47","Covert","Spectrum Case")) 
skinList.push(new Skin("Inlay","Pistol","R8 Revolver","Consumer Grade","Anubis Collection Package")) 
skinList.push(new Skin("Ice Coaled","Rifle","AK-47","Classified","Recoil Case")) 
skinList.push(new Skin("Leet Museo","Rifle","AK-47","Covert","Operation Riptide Case")) 
skinList.push(new Skin("Nevermore","Pistol","P250","Restricted","Danger Zone Case")) 
skinList.push(new Skin("Stinger","Rifle","SSG 08","Restricted","Glove Case")) 
skinList.push(new Skin("Momentum","Rifle","AUG","Classified","Prisma Case")) 
skinList.push(new Skin("Wildfire","Rifle","AWP","Covert","CS20 Case")) 
skinList.push(new Skin("Damascus Steel","Rifle","SG 553","Mil-Spec","The Dust 2 Collection")) 
skinList.push(new Skin("Player Two","Rifle","M4A1-S","Covert","Prisma 2 Case")) 
skinList.push(new Skin("Valence","Pistol","P250","Mil-Spec","Chroma 2 Case")) 
skinList.push(new Skin("Carbon Fiber","Mid-Tier","MAG-7","Industrial Grade","The Control Collection")) 
skinList.push(new Skin("Crimson Blossom","Pistol","Five-SeveN","Mil-Spec","The St. Marc Collection")) 
skinList.push(new Skin("Fall Hazard","Pistol","Five-SeveN","Classified","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Jungle","Mid-Tier","XM1014","Consumer Grade","The Alpha Collection")) 
skinList.push(new Skin("Hypnotic","Pistol","Desert Eagle","Classified","CS:GO Weapon Case")) 
skinList.push(new Skin("Crimson Web","Pistol","CZ75-Auto","Mil-Spec","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Mechanism","Mid-Tier","UMP-45","Industrial Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Polar Mesh","Mid-Tier","Nova","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Bullet Queen","Pistol","Glock-18","Covert","Prisma 2 Case")) 
skinList.push(new Skin("Justice","Mid-Tier","MAG-7","Classified","Prisma 2 Case")) 
skinList.push(new Skin("Lush Ruins","Rifle","SG 553","Consumer Grade","The Ancient Collection")) 
skinList.push(new Skin("Fade","Mid-Tier","MP7","Restricted","The 2018 Inferno Collection")) 
skinList.push(new Skin("Wood Fired","Mid-Tier","Nova","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Contractor","Rifle","G3SG1","Consumer Grade","The Baggage Collection")) 
skinList.push(new Skin("Connexion","Rifle","Galil AR","Restricted","Fracture Case")) 
skinList.push(new Skin("Palm","Mid-Tier","MAC-10","Industrial Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Oil Change","Pistol","Dual Berettas","Consumer Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Downtown","Mid-Tier","M249","Restricted Machine","Recoil Case")) 
skinList.push(new Skin("Sage Spray","Mid-Tier","Sawed-Off","Consumer Grade","The Overpass Collection")) 
skinList.push(new Skin("Blaze Orange","Mid-Tier","XM1014","Mil-Spec","The Militia Collection")) 
skinList.push(new Skin("Cartel","Pistol","P250","Classified","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Royal Blue","Pistol","USP-S","Industrial Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Signal","Rifle","Galil AR","Restricted","Danger Zone Case")) 
skinList.push(new Skin("Nuclear Threat","Pistol","Tec-9","Restricted","The Nuke Collection")) 
skinList.push(new Skin("The Battlestar","Rifle","M4A4","Covert","Operation Wildfire Case")) 
skinList.push(new Skin("Akihabara Accept","Rifle","AUG","Covert","The Rising Sun Collection")) 
skinList.push(new Skin("Anodized Navy","Mid-Tier","Negev","Mil-Spec Machine","The Assault Collection")) 
skinList.push(new Skin("Bone Mask","Pistol","R8 Revolver","Consumer Grade","The Bank Collection")) 
skinList.push(new Skin("Ghost Camo","Mid-Tier","Nova","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Berries And Cherries","Pistol","Five-SeveN","Restricted","The Control Collection")) 
skinList.push(new Skin("Guerrilla","Mid-Tier","MP7","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Carbon Fiber","Rifle","SSG 08","Industrial Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Syd Mead","Rifle","AUG","Classified","Gamma 2 Case")) 
skinList.push(new Skin("Mount Fuji","Mid-Tier","MP9","Restricted","Operation Riptide Case")) 
skinList.push(new Skin("Bamboo Garden","Mid-Tier","MP5-SD","Consumer Grade","The St. Marc Collection")) 
skinList.push(new Skin("Scumbria","Mid-Tier","XM1014","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Black & Tan","Pistol","P250","Mil-Spec","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Urban Perforated","Mid-Tier","XM1014","Consumer Grade","The Vertigo Collection")) 
skinList.push(new Skin("Ziggy","Mid-Tier","XM1014","Restricted","Spectrum 2 Case")) 
skinList.push(new Skin("Caramel","Mid-Tier","UMP-45","Consumer Grade","The Assault Collection")) 
skinList.push(new Skin("Hideout","Pistol","Dual Berettas","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Chantico's Fire","Rifle","M4A1-S","Covert","Chroma 3 Case")) 
skinList.push(new Skin("Graphite","Mid-Tier","Nova","Restricted","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Terrace","Pistol","Tec-9","Mil-Spec","The Rising Sun Collection")) 
skinList.push(new Skin("Magnesium","Rifle","M4A4","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Sand Spray","Mid-Tier","P90","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Overgrowth","Pistol","USP-S","Restricted","Operation Bravo Case")) 
skinList.push(new Skin("Radiation Hazard","Rifle","M4A4","Mil-Spec","The Nuke Collection")) 
skinList.push(new Skin("Pink DDPAT","Rifle","AWP","Restricted","The Overpass Collection")) 
skinList.push(new Skin("Midnight Palm","Pistol","CZ75-Auto","Industrial Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Emerald Quartz","Pistol","CZ75-Auto","Mil-Spec","The Norse Collection")) 
skinList.push(new Skin("Gold Toof","Pistol","Glock-18","Covert","Gallery Case")) 
skinList.push(new Skin("Irezumi","Mid-Tier","XM1014","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Astrolabe","Mid-Tier","MP7","Industrial Grade","The Graphic Design Collection")) 
skinList.push(new Skin("BOOM","Rifle","AWP","Classified","eSports 2013 Case")) 
skinList.push(new Skin("Faulty Wiring","Rifle","FAMAS","Consumer Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Plastique","Mid-Tier","UMP-45","Restricted","CS20 Case")) 
skinList.push(new Skin("Memento","Pistol","R8 Revolver","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Brass","Pistol","Glock-18","Restricted","The Dust Collection")) 
skinList.push(new Skin("Ramese's Reach","Pistol","Glock-18","Restricted","Anubis Collection Package")) 
skinList.push(new Skin("Baroque Orange","Mid-Tier","Nova","Restricted","The Canals Collection")) 
skinList.push(new Skin("Obsidian","Pistol","P2000","Restricted","Shattered Web Case")) 
skinList.push(new Skin("Orange Kimono","Rifle","G3SG1","Consumer Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Desert-Strike","Mid-Tier","Negev","Mil-Spec Machine","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Sand Dashed","Mid-Tier","MP9","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Hypnosis","Mid-Tier","M249","Mil-Spec Machine","Gallery Case")) 
skinList.push(new Skin("Twilight Galaxy","Pistol","Glock-18","Classified","The Chop Shop Collection")) 
skinList.push(new Skin("Reboot","Pistol","R8 Revolver","Restricted","Gamma Case")) 
skinList.push(new Skin("Acheron","Rifle","AWP","Mil-Spec","The 2018 Nuke Collection")) 
skinList.push(new Skin("Fennec Fox","Pistol","Desert Eagle","Classified","The 2021 Mirage Collection")) 
skinList.push(new Skin("First Class","Rifle","AK-47","Restricted","The Baggage Collection")) 
skinList.push(new Skin("Jaguar","Rifle","AK-47","Covert","eSports 2014 Summer Case")) 
skinList.push(new Skin("Stained Glass","Mid-Tier","MP9","Restricted","The Canals Collection")) 
skinList.push(new Skin("Rising Skull","Mid-Tier","Nova","Restricted","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Oxide Blaze","Pistol","Desert Eagle","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Hazard Pay","Rifle","SG 553","Classified","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Armor Core","Mid-Tier","MP7","Mil-Spec","Chroma 2 Case")) 
skinList.push(new Skin("Guardian","Rifle","M4A1-S","Classified","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Condition Zero","Mid-Tier","MP5-SD","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("Silver","Mid-Tier","MAG-7","Industrial Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Candy Apple","Mid-Tier","Nova","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Humidor","Mid-Tier","M249","Mil-Spec Machine","The 2021 Mirage Collection")) 
skinList.push(new Skin("Evil Daimyo","Rifle","M4A4","Restricted","Falchion Case")) 
skinList.push(new Skin("Eye of Horus","Rifle","M4A4","Covert","Anubis Collection Package")) 
skinList.push(new Skin("Contamination","Pistol","P250","Industrial Grade","The Cache Collection")) 
skinList.push(new Skin("Orange DDPAT","Mid-Tier","Sawed-Off","Restricted","eSports 2013 Case")) 
skinList.push(new Skin("Crossfade","Rifle","AK-47","Mil-Spec","The Graphic Design Collection")) 
skinList.push(new Skin("Gnarled","Pistol","P2000","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Red Stone","Rifle","SSG 08","Consumer Grade","The Norse Collection")) 
skinList.push(new Skin("Phoenix Blacklight","Rifle","Galil AR","Restricted","The Havoc Collection")) 
skinList.push(new Skin("Ghost Crusader","Rifle","SSG 08","Restricted","Chroma 3 Case")) 
skinList.push(new Skin("Blood in the Water","Rifle","SSG 08","Covert","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Bloomstick","Mid-Tier","Nova","Classified","eSports 2014 Summer Case")) 
skinList.push(new Skin("X-Ray","Rifle","AK-47","Covert","The Havoc Collection")) 
skinList.push(new Skin("Crimson Web","Rifle","SCAR-20","Mil-Spec","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Amber Fade","Rifle","AUG","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("Prey","Rifle","SSG 08","Consumer Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Wicked Sick","Pistol","P2000","Classified","Revolution Case")) 
skinList.push(new Skin("Light Box","Mid-Tier","MAC-10","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Storm","Mid-Tier","MAG-7","Consumer Grade","The Overpass Collection")) 
skinList.push(new Skin("Asiimov","Mid-Tier","P90","Covert","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Embargo","Mid-Tier","PP-Bizon","Restricted","Shattered Web Case")) 
skinList.push(new Skin("Aqua Terrace","Rifle","Galil AR","Mil-Spec","The Rising Sun Collection")) 
skinList.push(new Skin("Lifted Spirits","Pistol","P2000","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Capillary","Rifle","AWP","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Coral Halftone","Pistol","P2000","Industrial Grade","The Graphic Design Collection")) 
skinList.push(new Skin("Graven","Mid-Tier","MAC-10","Restricted","Operation Bravo Case")) 
skinList.push(new Skin("Moon in Libra","Mid-Tier","Nova","Consumer Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Night Borre","Rifle","FAMAS","Consumer Grade","The Norse Collection")) 
skinList.push(new Skin("Mecha Industries","Rifle","M4A1-S","Covert","Gamma Case")) 
skinList.push(new Skin("Urban Rubble","Pistol","Desert Eagle","Mil-Spec","The Train Collection")) 
skinList.push(new Skin("Rust Coat","Mid-Tier","PP-Bizon","Mil-Spec","The Alpha Collection")) 
skinList.push(new Skin("Fairy Tale","Pistol","Five-SeveN","Classified","Operation Broken Fang Case")) 
skinList.push(new Skin("Sand Dune","Mid-Tier","Nova","Consumer Grade","The Italy Collection")) 
skinList.push(new Skin("Cyberforce","Rifle","SG 553","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Ricochet","Rifle","AUG","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Atlas","Rifle","SG 553","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("Boroque Sand","Mid-Tier","Negev","Consumer Grade Machine","The Canals Collection")) 
skinList.push(new Skin("Army Sheen","Mid-Tier","Nova","Consumer Grade","The Ancient Collection")) 
skinList.push(new Skin("Anodized Navy","Mid-Tier","MP7","Mil-Spec","The Italy Collection")) 
skinList.push(new Skin("Blue Fissure","Pistol","Glock-18","Mil-Spec","CS:GO Weapon Case 3")) 
skinList.push(new Skin("VariCamo","Rifle","M4A1-S","Mil-Spec","The Dust 2 Collection")) 
skinList.push(new Skin("Plume","Mid-Tier","Nova","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Deep Relief","Mid-Tier","M249","Mil-Spec Machine","Operation Broken Fang Case")) 
skinList.push(new Skin("Gator Mesh","Rifle","SG 553","Industrial Grade","The Mirage Collection")) 
skinList.push(new Skin("Yorick","Mid-Tier","Sawed-Off","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Elite Build","Rifle","AK-47","Mil-Spec","Chroma 2 Case")) 
skinList.push(new Skin("Sea Calico","Rifle","SSG 08","Restricted","The St. Marc Collection")) 
skinList.push(new Skin("Hot Rod","Rifle","AUG","Mil-Spec","The Assault Collection")) 
skinList.push(new Skin("Shred","Pistol","Dual Berettas","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Kill Confirmed","Pistol","USP-S","Covert","Shadow Case")) 
skinList.push(new Skin("Co-Processor","Mid-Tier","MP5-SD","Mil-Spec","The 2018 Nuke Collection")) 
skinList.push(new Skin("Sergeant","Rifle","FAMAS","Restricted","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Neon Rider","Rifle","AK-47","Covert","Horizon Case")) 
skinList.push(new Skin("Black Tie","Mid-Tier","XM1014","Restricted","Chroma 3 Case")) 
skinList.push(new Skin("Dragon Tattoo","Pistol","Glock-18","Restricted","CS:GO Weapon Case")) 
skinList.push(new Skin("Blue Titanium","Rifle","Galil AR","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Desert Hydra","Rifle","AWP","Covert","The 2021 Mirage Collection")) 
skinList.push(new Skin("Wild Lily","Mid-Tier","MP9","Classified","The St. Marc Collection")) 
skinList.push(new Skin("Black Sand","Rifle","G3SG1","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Red Leather","Mid-Tier","XM1014","Mil-Spec","The Baggage Collection")) 
skinList.push(new Skin("Orbit Mk01","Rifle","AK-47","Restricted","Operation Hydra Case")) 
skinList.push(new Skin("Ultraviolet","Mid-Tier","MAC-10","Mil-Spec","eSports 2014 Summer Case")) 
skinList.push(new Skin("Steel Delta","Rifle","AK-47","Mil-Spec","Anubis Collection Package")) 
skinList.push(new Skin("Bloodshot","Rifle","SSG 08","Classified","Shattered Web Case")) 
skinList.push(new Skin("Berry Gel Coat","Rifle","SG 553","Mil-Spec","The Graphic Design Collection")) 
skinList.push(new Skin("Nitro","Pistol","CZ75-Auto","Mil-Spec","The Overpass Collection")) 
skinList.push(new Skin("Groundwater","Pistol","Glock-18","Industrial Grade","The Mirage Collection")) 
skinList.push(new Skin("Daybreak","Rifle","M4A4","Restricted","The Rising Sun Collection")) 
skinList.push(new Skin("Printstream","Rifle","M4A1-S","Covert","Operation Broken Fang Case")) 
skinList.push(new Skin("Night Ops","Pistol","USP-S","Mil-Spec","The Lake Collection")) 
skinList.push(new Skin("Rocket Pop","Rifle","Galil AR","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Detour","Rifle","SSG 08","Mil-Spec","The Overpass Collection")) 
skinList.push(new Skin("Tigris","Pistol","CZ75-Auto","Restricted","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Core Breach","Mid-Tier","MAG-7","Restricted","The 2018 Nuke Collection")) 
skinList.push(new Skin("Safety Net","Rifle","AK-47","Restricted","The 2018 Inferno Collection")) 
skinList.push(new Skin("Firestarter","Mid-Tier","MAG-7","Mil-Spec","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Nostalgia","Mid-Tier","P90","Classified","CS20 Case")) 
skinList.push(new Skin("Prototype","Mid-Tier","Negev","Mil-Spec Machine","Prisma 2 Case")) 
skinList.push(new Skin("Impact Drill","Mid-Tier","M249","Consumer Grade Machine","The Chop Shop Collection")) 
skinList.push(new Skin("Baroque Purple","Rifle","AK-47","Industrial Grade","The Canals Collection")) 
skinList.push(new Skin("Water Elemental","Pistol","Glock-18","Classified","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Urban Hazard","Mid-Tier","MP7","Mil-Spec","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Monkey Business","Pistol","Five-SeveN","Classified","Chroma 2 Case")) 
skinList.push(new Skin("Asiimov","Rifle","AK-47","Covert","Danger Zone Case")) 
skinList.push(new Skin("Serum","Pistol","USP-S","Classified","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Cortex","Pistol","USP-S","Classified","Clutch Case")) 
skinList.push(new Skin("Llama Cannon","Pistol","R8 Revolver","Classified","Spectrum 2 Case")) 
skinList.push(new Skin("Blue Phosphor","Rifle","M4A1-S","Classified","The Control Collection")) 
skinList.push(new Skin("Atheris","Rifle","AWP","Restricted","Prisma Case")) 
skinList.push(new Skin("Desolate Space","Rifle","M4A4","Classified","Gamma Case")) 
skinList.push(new Skin("Digital Architect","Pistol","P250","Restricted","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Button Masher","Mid-Tier","MAC-10","Restricted","Snakebite Case")) 
skinList.push(new Skin("Gunsmoke","Mid-Tier","MP7","Industrial Grade","The Overpass Collection")) 
skinList.push(new Skin("Hypnotic","Rifle","SG 553","Restricted","The Havoc Collection")) 
skinList.push(new Skin("Hot Shot","Pistol","Five-SeveN","Industrial Grade","The Cache Collection")) 
skinList.push(new Skin("Rapid Transit","Rifle","SSG 08","Restricted","Gallery Case")) 
skinList.push(new Skin("Foresight","Mid-Tier","MAG-7","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Urban DDPAT","Pistol","Desert Eagle","Industrial Grade","The Overpass Collection")) 
skinList.push(new Skin("Navy Murano","Rifle","AUG","Consumer Grade","The Canals Collection")) 
skinList.push(new Skin("Red Quartz","Mid-Tier","Nova","Restricted","The 2021 Train Collection")) 
skinList.push(new Skin("Royal Consorts","Pistol","Dual Berettas","Restricted","Glove Case")) 
skinList.push(new Skin("Graphite","Rifle","AWP","Classified","Operation Bravo Case")) 
skinList.push(new Skin("Rainbow Spoon","Rifle","Galil AR","Classified","The Sport & Field Collection")) 
skinList.push(new Skin("Navy Sheen","Mid-Tier","MAG-7","Consumer Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Meltdown","Rifle","FAMAS","Classified","The 2021 Train Collection")) 
skinList.push(new Skin("Lil' Pig","Rifle","AUG","Classified","The Graphic Design Collection")) 
skinList.push(new Skin("Grinder","Pistol","Glock-18","Restricted","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Undertow","Pistol","P250","Classified","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Death Rattle","Mid-Tier","PP-Bizon","Consumer Grade","The Havoc Collection")) 
skinList.push(new Skin("Frost Borre","Mid-Tier","XM1014","Mil-Spec","The Norse Collection")) 
skinList.push(new Skin("Tropical Storm","Rifle","SSG 08","Industrial Grade","The Mirage Collection")) 
skinList.push(new Skin("Head Shot","Rifle","AK-47","Covert","Revolution Case")) 
skinList.push(new Skin("Akoben","Mid-Tier","MP7","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Commemoration","Rifle","FAMAS","Covert","CS20 Case")) 
skinList.push(new Skin("Scrawl","Pistol","Five-SeveN","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Vaporwave","Rifle","M4A1-S","Covert","Gallery Case")) 
skinList.push(new Skin("Candy Apple","Pistol","Glock-18","Mil-Spec","The Italy Collection")) 
skinList.push(new Skin("Circaetus","Pistol","CZ75-Auto","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Briefing","Mid-Tier","UMP-45","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Blaze","Mid-Tier","UMP-45","Mil-Spec","The Mirage Collection")) 
skinList.push(new Skin("Neo-Noir","Rifle","M4A4","Covert","Clutch Case")) 
skinList.push(new Skin("Cracked Opal","Pistol","Tec-9","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Blood Tiger","Rifle","M4A1-S","Mil-Spec","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Stainless","Pistol","USP-S","Mil-Spec","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Umbral Rabbit","Pistol","Glock-18","Restricted","Revolution Case")) 
skinList.push(new Skin("Setting Sun","Mid-Tier","MP9","Mil-Spec","The Cache Collection")) 
skinList.push(new Skin("Pulse","Pistol","P2000","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Hard Water","Mid-Tier","MAG-7","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Blaze Orange","Mid-Tier","Nova","Mil-Spec","The Militia Collection")) 
skinList.push(new Skin("Flora Carnivora","Pistol","Dual Berettas","Restricted","Recoil Case")) 
skinList.push(new Skin("Commuter","Mid-Tier","MAC-10","Industrial Grade","The Baggage Collection")) 
skinList.push(new Skin("Mudder","Pistol","Desert Eagle","Industrial Grade","The Lake Collection")) 
skinList.push(new Skin("Bulldozer","Rifle","SG 553","Restricted","The Chop Shop Collection")) 
skinList.push(new Skin("Full Stop","Mid-Tier","UMP-45","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("Bratatat","Mid-Tier","Negev","Mil-Spec Machine","eSports 2014 Summer Case")) 
skinList.push(new Skin("Safari Mesh","Rifle","AK-47","Industrial Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Spider Lily","Rifle","M4A4","Restricted","Operation Riptide Case")) 
skinList.push(new Skin("Faded Zebra","Rifle","M4A4","Mil-Spec","eSports 2013 Case")) 
skinList.push(new Skin("Neon Rider","Mid-Tier","MAC-10","Covert","Chroma 2 Case")) 
skinList.push(new Skin("Ultralight","Mid-Tier","Negev","Mil-Spec Machine","Fracture Case")) 
skinList.push(new Skin("Gold Brick","Mid-Tier","MAC-10","Restricted","The Ancient Collection")) 
skinList.push(new Skin("Buzz Kill","Rifle","M4A4","Covert","Glove Case")) 
skinList.push(new Skin("Neural Net","Rifle","FAMAS","Restricted","Falchion Case")) 
skinList.push(new Skin("Violet Murano","Rifle","G3SG1","Mil-Spec","The Canals Collection")) 
skinList.push(new Skin("Target Acquired","Pistol","USP-S","Classified","The Control Collection")) 
skinList.push(new Skin("Phantom","Rifle","SG 553","Restricted","Spectrum 2 Case")) 
skinList.push(new Skin("Snake Camo","Rifle","AWP","Mil-Spec","The Dust Collection")) 
skinList.push(new Skin("Afterimage","Rifle","FAMAS","Classified","eSports 2013 Winter Case")) 
skinList.push(new Skin("Ticket to Hell","Pistol","USP-S","Restricted","Dreams & Nightmares Case")) 
skinList.push(new Skin("Sandstorm","Rifle","Galil AR","Mil-Spec","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Contractor","Pistol","Dual Berettas","Consumer Grade","The Safehouse Collection")) 
skinList.push(new Skin("Music Box","Mid-Tier","MP9","Mil-Spec","The 2021 Mirage Collection")) 
skinList.push(new Skin("The Coalition","Rifle","M4A4","Covert","The 2021 Train Collection")) 
skinList.push(new Skin("Hazard","Mid-Tier","MAG-7","Mil-Spec","The Alpha Collection")) 
skinList.push(new Skin("Clay Ambush","Mid-Tier","Sawed-Off","Consumer Grade","The Havoc Collection")) 
skinList.push(new Skin("Calligraffiti","Pistol","Desert Eagle","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Jungle Thicket","Mid-Tier","Sawed-Off","Consumer Grade","The St. Marc Collection")) 
skinList.push(new Skin("Colony","Rifle","FAMAS","Consumer Grade","The Italy Collection")) 
skinList.push(new Skin("Code Red","Pistol","Desert Eagle","Covert","Horizon Case")) 
skinList.push(new Skin("Ensnared","Mid-Tier","MAC-10","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Curse","Mid-Tier","MAC-10","Restricted","The Huntsman Collection")) 
skinList.push(new Skin("Gamma Doppler","Pistol","Glock-18","Covert","The 2021 Train Collection")) 
skinList.push(new Skin("Elite Build","Mid-Tier","P90","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Bone Mask","Pistol","P250","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Oxide Blaze","Pistol","Glock-18","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Carnivore","Mid-Tier","MAC-10","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Dark Age","Mid-Tier","MP9","Mil-Spec","The Cobblestone Collection")) 
skinList.push(new Skin("Predator","Mid-Tier","Nova","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Gauss","Mid-Tier","MP5-SD","Restricted","Prisma Case")) 
skinList.push(new Skin("VariCamo","Rifle","Galil AR","Industrial Grade","The Safehouse Collection")) 
skinList.push(new Skin("Nemesis","Mid-Tier","MP7","Classified","Falchion Case")) 
skinList.push(new Skin("Destroyer","Rifle","Galil AR","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Apep's Curse","Pistol","P250","Classified","Anubis Collection Package")) 
skinList.push(new Skin("Tacticat","Pistol","CZ75-Auto","Restricted","Spectrum 2 Case")) 
skinList.push(new Skin("Tom Cat","Rifle","AUG","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Gold Bismuth","Mid-Tier","UMP-45","Restricted","Operation Broken Fang Case")) 
skinList.push(new Skin("Radiation Hazard","Rifle","AUG","Industrial Grade","The Cache Collection")) 
skinList.push(new Skin("Cyrex","Rifle","SG 553","Classified","Falchion Case")) 
skinList.push(new Skin("Dragon Lore","Rifle","AWP","Covert","The Cobblestone Collection")) 
skinList.push(new Skin("Hades","Pistol","Tec-9","Industrial Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Cyrex","Rifle","SCAR-20","Classified","Huntsman Weapon Case")) 
skinList.push(new Skin("Freight","Mid-Tier","P90","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Insomnia","Mid-Tier","MAG-7","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Palm","Rifle","SCAR-20","Industrial Grade","The Dust Collection")) 
skinList.push(new Skin("Safari Mesh","Rifle","G3SG1","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Heat Treated","Pistol","Five-SeveN","Restricted","The Sport & Field Collection")) 
skinList.push(new Skin("Cyber Security","Rifle","M4A4","Classified","Operation Broken Fang Case")) 
skinList.push(new Skin("Nitro","Mid-Tier","MP5-SD","Industrial Grade","The Control Collection")) 
skinList.push(new Skin("Copperhead","Rifle","AUG","Mil-Spec","The Dust Collection")) 
skinList.push(new Skin("Monkeyflage","Mid-Tier","MAC-10","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Flashback","Rifle","M4A1-S","Restricted","Glove Case")) 
skinList.push(new Skin("Hunter","Rifle","G3SG1","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Hexane","Rifle","FAMAS","Mil-Spec","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Red DDPAT","Rifle","M4A4","Restricted","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Sand Storm","Rifle","AUG","Restricted","The 2021 Mirage Collection")) 
skinList.push(new Skin("Contrast Spray","Mid-Tier","M249","Consumer Grade Machine","The Overpass Collection")) 
skinList.push(new Skin("Liquidation","Mid-Tier","MP5-SD","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Anodized Gunmetal","Pistol","Five-SeveN","Consumer Grade","The Alpha Collection")) 
skinList.push(new Skin("Kumicho Dragon","Pistol","Desert Eagle","Classified","Operation Wildfire Case")) 
skinList.push(new Skin("Crazy 8","Pistol","R8 Revolver","Restricted","Recoil Case")) 
skinList.push(new Skin("Electric Hive","Rifle","AWP","Classified","eSports 2013 Winter Case")) 
skinList.push(new Skin("Phosphor","Mid-Tier","MP5-SD","Classified","Danger Zone Case")) 
skinList.push(new Skin("NV","Rifle","Galil AR","Industrial Grade","The Graphic Design Collection")) 
skinList.push(new Skin("Blueprint","Rifle","SCAR-20","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Verdant Growth","Mid-Tier","P90","Industrial Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Traction","Mid-Tier","P90","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Black Sand","Rifle","Galil AR","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Decimator","Pistol","Tec-9","Classified","Shattered Web Case")) 
skinList.push(new Skin("Tread Plate","Pistol","CZ75-Auto","Restricted","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Disco Tech","Mid-Tier","MAC-10","Classified","Prisma 2 Case")) 
skinList.push(new Skin("Oceanic","Pistol","P2000","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("Re.built","Pistol","P250","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Vandal","Rifle","Galil AR","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("Sugar Rush","Rifle","Galil AR","Classified","Operation Hydra Case")) 
skinList.push(new Skin("Fade","Rifle","M4A1-S","Covert","The Sport & Field Collection")) 
skinList.push(new Skin("Yellow Jacket","Pistol","CZ75-Auto","Classified","Falchion Case")) 
skinList.push(new Skin("Poseidon","Rifle","M4A4","Classified","The Gods and Monsters Collection")) 
skinList.push(new Skin("Magma","Mid-Tier","M249","Mil-Spec Machine","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Breaker Box","Mid-Tier","PP-Bizon","Industrial Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Red Rock","Pistol","P250","Restricted","Operation Hydra Case")) 
skinList.push(new Skin("Re-Entry","Pistol","Tec-9","Restricted","Chroma 3 Case")) 
skinList.push(new Skin("Facility Draft","Pistol","P250","Consumer Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Tango","Pistol","R8 Revolver","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Pulse","Rifle","FAMAS","Restricted","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Army Sheen","Rifle","SCAR-20","Consumer Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Firefight","Rifle","Galil AR","Restricted","Chroma 3 Case")) 
skinList.push(new Skin("Orange Peel","Mid-Tier","MP7","Industrial Grade","The Mirage Collection")) 
skinList.push(new Skin("Xiangliu","Pistol","CZ75-Auto","Classified","Spectrum Case")) 
skinList.push(new Skin("Runic","Mid-Tier","PP-Bizon","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Basilisk","Rifle","M4A1-S","Restricted","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Spring Twilly","Rifle","SSG 08","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("The Kraken","Mid-Tier","Sawed-Off","Covert","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Quicksilver","Mid-Tier","XM1014","Mil-Spec","Chroma Case")) 
skinList.push(new Skin("Rust Coat","Mid-Tier","Sawed-Off","Industrial Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Indigo","Mid-Tier","MAC-10","Consumer Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Royal Paladin","Rifle","M4A4","Covert","Revolver Case")) 
skinList.push(new Skin("Ocean Foam","Pistol","P2000","Classified","Operation Bravo Case")) 
skinList.push(new Skin("Green Plaid","Pistol","CZ75-Auto","Consumer Grade","The Baggage Collection")) 
skinList.push(new Skin("Dark Blossom","Rifle","M4A4","Industrial Grade","The St. Marc Collection")) 
skinList.push(new Skin("Steel Disruption","Pistol","P250","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Blind Spot","Mid-Tier","P90","Restricted","eSports 2013 Winter Case")) 
skinList.push(new Skin("Aquamarine Revenge","Rifle","AK-47","Covert","Falchion Case")) 
skinList.push(new Skin("Indigo","Mid-Tier","UMP-45","Consumer Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Night","Pistol","R8 Revolver","Consumer Grade","The Ancient Collection")) 
skinList.push(new Skin("Windblown","Mid-Tier","Nova","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Tooth Fairy","Rifle","M4A4","Classified","Fracture Case")) 
skinList.push(new Skin("Temukau","Rifle","M4A4","Covert","Revolution Case")) 
skinList.push(new Skin("Momentum","Mid-Tier","UMP-45","Classified","Danger Zone Case")) 
skinList.push(new Skin("Distressed","Pistol","CZ75-Auto","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Fever Dream","Rifle","AWP","Classified","Spectrum Case")) 
skinList.push(new Skin("Black Sand","Mid-Tier","Sawed-Off","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Heat Treated","Pistol","Desert Eagle","Classified","Limited Edition Item")) 
skinList.push(new Skin("Trigon","Mid-Tier","P90","Classified","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Alpine Camo","Pistol","USP-S","Mil-Spec","The Sport & Field Collection")) 
skinList.push(new Skin("Storm","Rifle","SCAR-20","Consumer Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Death by Puppy","Rifle","AUG","Classified","CS20 Case")) 
skinList.push(new Skin("Blue Streak","Mid-Tier","PP-Bizon","Restricted","eSports 2014 Summer Case")) 
skinList.push(new Skin("Demolition","Pistol","Dual Berettas","Restricted","The Vertigo Collection")) 
skinList.push(new Skin("Valence","Rifle","FAMAS","Restricted","Operation Wildfire Case")) 
skinList.push(new Skin("Toy Soldier","Mid-Tier","Nova","Restricted","Horizon Case")) 
skinList.push(new Skin("Hemoglobin","Pistol","Dual Berettas","Restricted","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Bone Machine","Mid-Tier","XM1014","Mil-Spec","The Cache Collection")) 
skinList.push(new Skin("Emerald","Rifle","SCAR-20","Restricted","The Alpha Collection")) 
skinList.push(new Skin("Phobos","Rifle","AWP","Restricted","Gamma Case")) 
skinList.push(new Skin("Heaven Guard","Mid-Tier","XM1014","Restricted","Huntsman Weapon Case")) 
skinList.push(new Skin("Brass","Mid-Tier","PP-Bizon","Mil-Spec","The Dust 2 Collection")) 
skinList.push(new Skin("Parched","Mid-Tier","Sawed-Off","Consumer Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Loudmouth","Mid-Tier","Negev","Restricted Machine","Falchion Case")) 
skinList.push(new Skin("Sakkaku","Mid-Tier","MAC-10","Restricted","Revolution Case")) 
skinList.push(new Skin("Survivalist","Pistol","R8 Revolver","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Bamboo Print","Mid-Tier","PP-Bizon","Consumer Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Polar Camo","Rifle","G3SG1","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Aloha","Rifle","SG 553","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Fowl Play","Pistol","Five-SeveN","Classified","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Urban DDPAT","Pistol","Tec-9","Consumer Grade","The Bank Collection")) 
skinList.push(new Skin("Fade","Pistol","Glock-18","Restricted","The Assault Collection")) 
skinList.push(new Skin("Worm God","Rifle","AWP","Restricted","Chroma 2 Case")) 
skinList.push(new Skin("Neo-Noir","Mid-Tier","UMP-45","Classified","Gallery Case")) 
skinList.push(new Skin("Savannah Halftone","Mid-Tier","MP5-SD","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("Briar","Pistol","Dual Berettas","Consumer Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Necro Jr.","Mid-Tier","MP5-SD","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Statics","Mid-Tier","MP5-SD","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Sweet Little Angels","Pistol","Dual Berettas","Restricted","The Overpass 2024 Collection")) 
skinList.push(new Skin("Cardiac","Rifle","SCAR-20","Classified","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Dream Glade","Rifle","G3SG1","Restricted","Dreams & Nightmares Case")) 
skinList.push(new Skin("Poison Dart","Pistol","CZ75-Auto","Mil-Spec","The Huntsman Collection")) 
skinList.push(new Skin("Module","Mid-Tier","P90","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Man-o'-war","Mid-Tier","Negev","Mil-Spec Machine","Chroma 2 Case")) 
skinList.push(new Skin("Carbon Fiber","Mid-Tier","UMP-45","Industrial Grade","The Bank Collection")) 
skinList.push(new Skin("Classic Crate","Mid-Tier","MAC-10","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Check Engine","Pistol","USP-S","Mil-Spec","The 2018 Inferno Collection")) 
skinList.push(new Skin("Eye of Athena","Rifle","FAMAS","Classified","Horizon Case")) 
skinList.push(new Skin("Surfwood","Mid-Tier","MAC-10","Consumer Grade","The St. Marc Collection")) 
skinList.push(new Skin("Urban Rubble","Rifle","Galil AR","Industrial Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Morris","Mid-Tier","Sawed-Off","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Bioleak","Mid-Tier","MP9","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("Copper Borre","Mid-Tier","MAC-10","Mil-Spec","The Norse Collection")) 
skinList.push(new Skin("Red FragCam","Pistol","P2000","Mil-Spec","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Wildwood","Mid-Tier","MAG-7","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("Hyper Beast","Pistol","Five-SeveN","Covert","Operation Hydra Case")) 
skinList.push(new Skin("Rust Coat","Mid-Tier","Nova","Industrial Grade","The Havoc Collection")) 
skinList.push(new Skin("Bengal Tiger","Rifle","AUG","Classified","eSports 2014 Summer Case")) 
skinList.push(new Skin("Retrobution","Pistol","Five-SeveN","Restricted","Revolver Case")) 
skinList.push(new Skin("Dry Season","Mid-Tier","MP9","Consumer Grade","The Alpha Collection")) 
skinList.push(new Skin("Hydroponic","Rifle","AK-47","Classified","The Rising Sun Collection")) 
skinList.push(new Skin("Brass","Pistol","Tec-9","Mil-Spec","The Inferno Collection")) 
skinList.push(new Skin("Bamboozle","Pistol","Tec-9","Restricted","Prisma Case")) 
skinList.push(new Skin("Black Lotus","Pistol","USP-S","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Hydra","Mid-Tier","MP9","Classified","CS20 Case")) 
skinList.push(new Skin("Woodsman","Pistol","P2000","Restricted","Operation Hydra Case")) 
skinList.push(new Skin("Rapid Eye Movement","Rifle","FAMAS","Classified","Dreams & Nightmares Case")) 
skinList.push(new Skin("Phoenix Marker","Pistol","R8 Revolver","Industrial Grade","The Havoc Collection")) 
skinList.push(new Skin("Ancient Earth","Mid-Tier","P90","Consumer Grade","The Ancient Collection")) 
skinList.push(new Skin("Dark Filigree","Pistol","P250","Industrial Grade","The Canals Collection")) 
skinList.push(new Skin("Grassland","Pistol","P2000","Industrial Grade","The Overpass Collection")) 
skinList.push(new Skin("Power Loader","Mid-Tier","Negev","Restricted Machine","Revolver Case")) 
skinList.push(new Skin("Demeter","Rifle","G3SG1","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("Hypnotic","Mid-Tier","MP9","Restricted","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Nightmare","Rifle","M4A1-S","Classified","Horizon Case")) 
skinList.push(new Skin("Astral Jörmungandr","Mid-Tier","P90","Restricted","The Norse Collection")) 
skinList.push(new Skin("Stained","Pistol","Dual Berettas","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Randy Rush","Mid-Tier","P90","Restricted","Gallery Case")) 
skinList.push(new Skin("Scumbria","Pistol","Five-SeveN","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Tall Grass","Mid-Tier","MP7","Industrial Grade","The Ancient Collection")) 
skinList.push(new Skin("Case Hardened","Pistol","Five-SeveN","Restricted","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Imperial Dragon","Pistol","P2000","Classified","Gamma Case")) 
skinList.push(new Skin("Fuel Injector","Rifle","AK-47","Covert","Operation Wildfire Case")) 
skinList.push(new Skin("Neon Revolution","Rifle","AK-47","Covert","Gamma 2 Case")) 
skinList.push(new Skin("Olive Polycam","Rifle","AK-47","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("High Roller","Mid-Tier","PP-Bizon","Classified","Spectrum 2 Case")) 
skinList.push(new Skin("Powercore","Rifle","SCAR-20","Restricted","Gamma 2 Case")) 
skinList.push(new Skin("Fire Elemental","Pistol","P2000","Covert","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Etch Lord","Rifle","M4A4","Restricted","Kilowatt Case")) 
skinList.push(new Skin("Spalted Wood","Rifle","AUG","Industrial Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("See Ya Later","Pistol","P250","Covert","Spectrum 2 Case")) 
skinList.push(new Skin("Road Rash","Pistol","USP-S","Restricted","The Overpass Collection")) 
skinList.push(new Skin("Flashback","Pistol","USP-S","Restricted","Danger Zone Case")) 
skinList.push(new Skin("Fallout Warning","Mid-Tier","XM1014","Industrial Grade","The Nuke Collection")) 
skinList.push(new Skin("Slate","Rifle","AK-47","Restricted","Snakebite Case")) 
skinList.push(new Skin("Tatter","Mid-Tier","MAC-10","Restricted","Huntsman Weapon Case")) 
skinList.push(new Skin("Crimson Web","Pistol","Desert Eagle","Restricted","eSports 2014 Summer Case")) 
skinList.push(new Skin("Food Chain","Mid-Tier","MP9","Classified","Snakebite Case")) 
skinList.push(new Skin("Urban Shock","Pistol","Dual Berettas","Restricted","Chroma Case")) 
skinList.push(new Skin("Daedalus","Rifle","AUG","Consumer Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Prism Terrace","Mid-Tier","MAG-7","Restricted","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Black Limba","Pistol","Dual Berettas","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("Desert-Strike","Rifle","M4A4","Covert","Huntsman Weapon Case")) 
skinList.push(new Skin("Facility Dark","Mid-Tier","UMP-45","Consumer Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Nuclear Garden","Mid-Tier","MAC-10","Mil-Spec","The Cache Collection")) 
skinList.push(new Skin("Mudder","Mid-Tier","UMP-45","Consumer Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Urban Hazard","Pistol","Five-SeveN","Mil-Spec","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("System Lock","Mid-Tier","M249","Mil-Spec Machine","Chroma Case")) 
skinList.push(new Skin("Assault","Rifle","SCAR-20","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Arctic Tri-Tone","Mid-Tier","MP9","Restricted","The Sport & Field Collection")) 
skinList.push(new Skin("Contractor","Pistol","Five-SeveN","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Forest Leaves","Mid-Tier","PP-Bizon","Consumer Grade","The Militia Collection")) 
skinList.push(new Skin("Monster Melt","Mid-Tier","XM1014","Restricted","The Overpass 2024 Collection")) 
skinList.push(new Skin("Acid Fade","Rifle","SSG 08","Mil-Spec","The Safehouse Collection")) 
skinList.push(new Skin("Antique","Mid-Tier","PP-Bizon","Restricted","Huntsman Weapon Case")) 
skinList.push(new Skin("Nightwish","Rifle","AK-47","Covert","Dreams & Nightmares Case")) 
skinList.push(new Skin("Shipping Forecast","Mid-Tier","M249","Industrial Grade Machine","The Gods and Monsters Collection")) 
skinList.push(new Skin("Tuxedo","Pistol","CZ75-Auto","Mil-Spec","The Bank Collection")) 
skinList.push(new Skin("Monster Call","Mid-Tier","MAG-7","Restricted","Fracture Case")) 
skinList.push(new Skin("Terrain","Mid-Tier","Negev","Mil-Spec Machine","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Green Apple","Rifle","G3SG1","Industrial Grade","The Bank Collection")) 
skinList.push(new Skin("Leather","Mid-Tier","P90","Industrial Grade","The Baggage Collection")) 
skinList.push(new Skin("Flame Test","Pistol","Five-SeveN","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Golden Coil","Rifle","M4A1-S","Covert","Shadow Case")) 
skinList.push(new Skin("Just Smile","Mid-Tier","MP7","Restricted","Kilowatt Case")) 
skinList.push(new Skin("Sonar","Mid-Tier","MAG-7","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Silver","Pistol","CZ75-Auto","Industrial Grade","The Ancient Collection")) 
skinList.push(new Skin("Hand Brake","Rifle","SSG 08","Mil-Spec","The 2018 Inferno Collection")) 
skinList.push(new Skin("Candy Apple","Mid-Tier","MAC-10","Industrial Grade","The Train Collection")) 
skinList.push(new Skin("Orange DDPAT","Rifle","Galil AR","Restricted","eSports 2013 Case")) 
skinList.push(new Skin("Remote Control","Pistol","Tec-9","Classified","The 2018 Nuke Collection")) 
skinList.push(new Skin("Asiimov","Rifle","M4A4","Covert","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Spectrogram","Mid-Tier","M249","Industrial Grade Machine","The Graphic Design Collection")) 
skinList.push(new Skin("Franklin","Pistol","P250","Classified","The Bank Collection")) 
skinList.push(new Skin("Purple DDPAT","Pistol","USP-S","Mil-Spec","The 2021 Mirage Collection")) 
skinList.push(new Skin("Mjölnir","Mid-Tier","Negev","Classified Machine","The Norse Collection")) 
skinList.push(new Skin("Retribution","Pistol","Dual Berettas","Mil-Spec","The Huntsman Collection")) 
skinList.push(new Skin("Monster Mashup","Pistol","USP-S","Classified","Operation Broken Fang Case")) 
skinList.push(new Skin("Duality","Rifle","AWP","Classified","Revolution Case")) 
skinList.push(new Skin("Teal Graf","Pistol","Glock-18","Mil-Spec","The Overpass 2024 Collection")) 
skinList.push(new Skin("Gunsmoke","Pistol","P250","Industrial Grade","The Inferno Collection")) 
skinList.push(new Skin("Flash Out","Pistol","Tec-9","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Moonrise","Mid-Tier","UMP-45","Restricted","Prisma Case")) 
skinList.push(new Skin("Analog Input","Mid-Tier","Sawed-Off","Restricted","Kilowatt Case")) 
skinList.push(new Skin("Rust Coat","Mid-Tier","MAG-7","Consumer Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Wasteland Princess","Mid-Tier","Sawed-Off","Classified","Glove Case")) 
skinList.push(new Skin("Heirloom","Pistol","Desert Eagle","Restricted","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Avalanche","Pistol","Tec-9","Restricted","Revolver Case")) 
skinList.push(new Skin("Nuclear Waste","Mid-Tier","Negev","Industrial Grade Machine","The Cache Collection")) 
skinList.push(new Skin("Blue Steel","Mid-Tier","XM1014","Industrial Grade","The Lake Collection")) 
skinList.push(new Skin("Spirit Board","Mid-Tier","Sawed-Off","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Agent","Mid-Tier","MP5-SD","Restricted","CS20 Case")) 
skinList.push(new Skin("Mehndi","Pistol","P250","Classified","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Pit Viper","Rifle","AWP","Restricted","The Italy Collection")) 
skinList.push(new Skin("Tiger Moth","Rifle","SG 553","Restricted","Revolver Case")) 
skinList.push(new Skin("Light Rail","Pistol","Desert Eagle","Restricted","Prisma Case")) 
skinList.push(new Skin("Corinthian","Pistol","Desert Eagle","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Hyper Beast","Rifle","M4A1-S","Covert","Chroma 2 Case")) 
skinList.push(new Skin("Block-18","Pistol","Glock-18","Restricted","Kilowatt Case")) 
skinList.push(new Skin("Small Game","Pistol","P250","Mil-Spec","The Sport & Field Collection")) 
skinList.push(new Skin("Night","Pistol","Glock-18","Industrial Grade","The Overpass Collection")) 
skinList.push(new Skin("Synth Leaf","Pistol","Glock-18","Restricted","The St. Marc Collection")) 
skinList.push(new Skin("Drift Wood","Pistol","Dual Berettas","Industrial Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Djinn","Rifle","FAMAS","Classified","Chroma 2 Case")) 
skinList.push(new Skin("Fizzy POP","Rifle","M4A1-S","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("Contractor","Rifle","SCAR-20","Consumer Grade","The Safehouse Collection")) 
skinList.push(new Skin("Heist","Pistol","Dual Berettas","Consumer Grade","The Havoc Collection")) 
skinList.push(new Skin("XOXO","Mid-Tier","XM1014","Classified","Snakebite Case")) 
skinList.push(new Skin("Junk Yard","Pistol","R8 Revolver","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Ol' Rusty","Rifle","SG 553","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Wings","Rifle","AUG","Mil-Spec","CS:GO Weapon Case")) 
skinList.push(new Skin("Counter Terrace","Mid-Tier","MAG-7","Mil-Spec","The Rising Sun Collection")) 
skinList.push(new Skin("Meteorite","Pistol","Desert Eagle","Mil-Spec","The Bank Collection")) 
skinList.push(new Skin("Icarus Fell","Rifle","M4A1-S","Restricted","The Gods and Monsters Collection")) 
skinList.push(new Skin("Bulkhead","Mid-Tier","Negev","Industrial Grade Machine","The 2018 Nuke Collection")) 
skinList.push(new Skin("Tiger Pit","Mid-Tier","P90","Mil-Spec","The Havoc Collection")) 
skinList.push(new Skin("Silver","Pistol","P2000","Mil-Spec","The Office Collection")) 
skinList.push(new Skin("Heat","Mid-Tier","MAG-7","Restricted","Chroma 2 Case")) 
skinList.push(new Skin("Nuclear Threat","Pistol","P250","Restricted","The Nuke Collection")) 
skinList.push(new Skin("Imperial","Pistol","P2000","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Serenity","Mid-Tier","Sawed-Off","Restricted","Chroma Case")) 
skinList.push(new Skin("Coolant","Pistol","Five-SeveN","Consumer Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Green Laminate","Rifle","AK-47","Mil-Spec","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Clear Polymer","Pistol","Glock-18","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Contractor","Rifle","AUG","Consumer Grade","The Italy Collection")) 
skinList.push(new Skin("Big Iron","Rifle","SSG 08","Classified","Shadow Case")) 
skinList.push(new Skin("Barricade","Rifle","SG 553","Consumer Grade","The Norse Collection")) 
skinList.push(new Skin("Ocean Foam","Mid-Tier","MP7","Restricted","eSports 2014 Summer Case")) 
skinList.push(new Skin("Cyrex","Pistol","USP-S","Restricted","Glove Case")) 
skinList.push(new Skin("Exoskeleton","Rifle","AWP","Restricted","Operation Broken Fang Case")) 
skinList.push(new Skin("Groundwater","Pistol","Tec-9","Consumer Grade","The Italy Collection")) 
skinList.push(new Skin("Pink DDPAT","Pistol","Glock-18","Restricted","The 2021 Mirage Collection")) 
skinList.push(new Skin("Goo","Mid-Tier","MP9","Restricted","Spectrum 2 Case")) 
skinList.push(new Skin("Forest Night","Pistol","P250","Consumer Grade","The Control Collection")) 
skinList.push(new Skin("Blueprint","Pistol","USP-S","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Modern Hunter","Mid-Tier","PP-Bizon","Mil-Spec","The Militia Collection")) 
skinList.push(new Skin("Stalker","Mid-Tier","MAC-10","Covert","Shattered Web Case")) 
skinList.push(new Skin("Crime Scene","Mid-Tier","UMP-45","Restricted","The Control Collection")) 
skinList.push(new Skin("Ventilators","Pistol","Dual Berettas","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("Irradiated Alert","Mid-Tier","Sawed-Off","Consumer Grade","The Nuke Collection")) 
skinList.push(new Skin("Vault Heist","Mid-Tier","MP7","Industrial Grade","The Havoc Collection")) 
skinList.push(new Skin("Lead Conduit","Pistol","USP-S","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("The Traitor","Pistol","USP-S","Covert","Snakebite Case")) 
skinList.push(new Skin("Vendetta","Pistol","CZ75-Auto","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("Modern Hunter","Mid-Tier","Nova","Mil-Spec","The Militia Collection")) 
skinList.push(new Skin("Ruby Poison Dart","Mid-Tier","MP9","Restricted","Falchion Case")) 
skinList.push(new Skin("Teardown","Rifle","FAMAS","Mil-Spec","The Safehouse Collection")) 
skinList.push(new Skin("Nitro","Rifle","M4A1-S","Restricted","The Safehouse Collection")) 
skinList.push(new Skin("Wasteland Rebel","Pistol","Glock-18","Covert","Gamma Case")) 
skinList.push(new Skin("Malachite","Mid-Tier","MAC-10","Restricted","Chroma Case")) 
skinList.push(new Skin("Atomic Alloy","Rifle","M4A1-S","Classified","Huntsman Weapon Case")) 
skinList.push(new Skin("Army Sheen","Mid-Tier","Negev","Consumer Grade Machine","The Bank Collection")) 
skinList.push(new Skin("Sand Dune","Pistol","Glock-18","Industrial Grade","The Alpha Collection")) 
skinList.push(new Skin("Halftone Wash","Rifle","FAMAS","Industrial Grade","The Graphic Design Collection")) 
skinList.push(new Skin("Amber Fade","Pistol","P2000","Restricted","The Dust 2 Collection")) 
skinList.push(new Skin("POP AWP","Rifle","AWP","Restricted","The 2021 Train Collection")) 
skinList.push(new Skin("Gator Mesh","Mid-Tier","M249","Industrial Grade Machine","The Safehouse Collection")) 
skinList.push(new Skin("Forest Night","Pistol","Five-SeveN","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Jungle Slipstream","Mid-Tier","PP-Bizon","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Doomkitty","Rifle","FAMAS","Mil-Spec","eSports 2013 Case")) 
skinList.push(new Skin("Blue Laminate","Rifle","AK-47","Restricted","eSports 2013 Winter Case")) 
skinList.push(new Skin("Death Grip","Mid-Tier","P90","Restricted","Operation Hydra Case")) 
skinList.push(new Skin("Popdog","Mid-Tier","MAG-7","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Sand Dune","Pistol","P250","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Luxe Trim","Rifle","AUG","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Trail Blazer","Rifle","SCAR-20","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Neon Ply","Mid-Tier","MP7","Restricted","Shattered Web Case")) 
skinList.push(new Skin("Hot Rod","Rifle","M4A1-S","Classified","The Chop Shop Collection")) 
skinList.push(new Skin("Blue Spruce","Rifle","SSG 08","Consumer Grade","The Safehouse Collection")) 
skinList.push(new Skin("Conspiracy","Pistol","Desert Eagle","Classified","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Dragonfire","Rifle","SSG 08","Covert","Glove Case")) 
skinList.push(new Skin("Dark Sigil","Mid-Tier","Nova","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Ossified","Pistol","Tec-9","Mil-Spec","The Aztec Collection")) 
skinList.push(new Skin("Praetorian","Mid-Tier","MAG-7","Restricted","Operation Wildfire Case")) 
skinList.push(new Skin("Slalom","Pistol","CZ75-Auto","Restricted","The Graphic Design Collection")) 
skinList.push(new Skin("Palm","Mid-Tier","Negev","Industrial Grade Machine","The Alpha Collection")) 
skinList.push(new Skin("Midnight Lily","Rifle","AUG","Restricted","The St. Marc Collection")) 
skinList.push(new Skin("Desert DDPAT","Mid-Tier","P90","Consumer Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Toxic","Pistol","Tec-9","Mil-Spec","The Cache Collection")) 
skinList.push(new Skin("Oscillator","Mid-Tier","UMP-45","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Photic Zone","Mid-Tier","PP-Bizon","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("Heaven Guard","Mid-Tier","MAG-7","Mil-Spec","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Desert Strike","Mid-Tier","MP5-SD","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Yorkshire","Mid-Tier","Nova","Mil-Spec","The Sport & Field Collection")) 
skinList.push(new Skin("Echoing Sands","Mid-Tier","MAC-10","Industrial Grade","Anubis Collection Package")) 
skinList.push(new Skin("Arctic Wolf","Mid-Tier","UMP-45","Restricted","Clutch Case")) 
skinList.push(new Skin("Traveler","Rifle","SG 553","Industrial Grade","The Baggage Collection")) 
skinList.push(new Skin("Virus","Mid-Tier","P90","Restricted","eSports 2014 Summer Case")) 
skinList.push(new Skin("Slag","Pistol","Tec-9","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Emerald Jörmungandr","Pistol","Desert Eagle","Restricted","The Norse Collection")) 
skinList.push(new Skin("Hexane","Pistol","CZ75-Auto","Mil-Spec","eSports 2014 Summer Case")) 
skinList.push(new Skin("Caiman","Pistol","USP-S","Classified","Huntsman Weapon Case")) 
skinList.push(new Skin("Dezastre","Rifle","SSG 08","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Candy Apple","Pistol","Five-SeveN","Industrial Grade","The Assault Collection")) 
skinList.push(new Skin("Emerald Dragon","Mid-Tier","P90","Classified","Operation Bravo Case")) 
skinList.push(new Skin("Forest DDPAT","Mid-Tier","Sawed-Off","Consumer Grade","The Bank Collection")) 
skinList.push(new Skin("Canal Spray","Pistol","R8 Revolver","Consumer Grade","The Canals Collection")) 
skinList.push(new Skin("Pipe Down","Mid-Tier","MAC-10","Restricted","Danger Zone Case")) 
skinList.push(new Skin("Orange Anolis","Pistol","USP-S","Restricted","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Charter","Mid-Tier","XM1014","Consumer Grade","The Control Collection")) 
skinList.push(new Skin("Azure Glyph","Rifle","SSG 08","Industrial Grade","Anubis Collection Package")) 
skinList.push(new Skin("Sun in Leo","Rifle","AWP","Industrial Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Sundown","Rifle","FAMAS","Mil-Spec","The St. Marc Collection")) 
skinList.push(new Skin("Aristocrat","Rifle","AUG","Restricted","Gamma Case")) 
skinList.push(new Skin("Shapewood","Mid-Tier","P90","Classified","Revolver Case")) 
skinList.push(new Skin("Dragon Snore","Pistol","Zeus x27","Classified","The Overpass 2024 Collection")) 
skinList.push(new Skin("Jet Set","Rifle","AK-47","Classified","The Baggage Collection")) 
skinList.push(new Skin("Mint Kimono","Pistol","P250","Consumer Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Hieroglyph","Mid-Tier","XM1014","Consumer Grade","Anubis Collection Package")) 
skinList.push(new Skin("Blaze","Pistol","R8 Revolver","Mil-Spec","The 2021 Train Collection")) 

if(input == 1){
    restart();
}else if(input == 2){
    dailyChallenge();
}
}

function loadGuesses() {
    const savedGuesses = JSON.parse(localStorage.getItem('guesses'));
    const savedDate = localStorage.getItem('guessDate');
    const today = new Date().toISOString().split('T')[0];

    if (savedGuesses && savedDate === today && dailyChallengeActive) {
        guessCounter = savedGuesses.length;
        for (let i = 0; i < savedGuesses.length; i++) {
            const guess = savedGuesses[i];
            const guessRow = document.getElementById(i + 1);
            guessRow.getElementsByClassName("Class")[0].innerHTML = guess.class;
            guessRow.getElementsByClassName("Class")[0].style.backgroundColor = guess.classColor;
            guessRow.getElementsByClassName("Gun")[0].innerHTML = guess.gun;
            guessRow.getElementsByClassName("Gun")[0].style.backgroundColor = guess.gunColor;
            guessRow.getElementsByClassName("Rarity")[0].innerHTML = guess.rarity;
            guessRow.getElementsByClassName("Rarity")[0].style.backgroundColor = guess.rarityColor;
            guessRow.getElementsByClassName("Name")[0].innerHTML = guess.name;
            guessRow.getElementsByClassName("Name")[0].style.backgroundColor = guess.nameColor;
            guessRow.getElementsByClassName("Collection")[0].innerHTML = guess.collection;
            guessRow.getElementsByClassName("Collection")[0].style.backgroundColor = guess.collectionColor;
            guessRow.getElementsByClassName("Year")[0].innerHTML = guess.year;
            guessRow.getElementsByClassName("Year")[0].style.backgroundColor = guess.yearColor;
        }
    } else {
        localStorage.removeItem('guesses');
        localStorage.removeItem('guessDate');
    }
}

function saveGuesses() {
    if (dailyChallengeActive) {
        // Save the guesses only if daily challenge mode is active
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
                name: guessRow.getElementsByClassName("Name")[0].innerHTML,
                nameColor: guessRow.getElementsByClassName("Name")[0].style.backgroundColor,
                collection: guessRow.getElementsByClassName("Collection")[0].innerHTML,
                collectionColor: guessRow.getElementsByClassName("Collection")[0].style.backgroundColor,
                year: guessRow.getElementsByClassName("Year")[0].innerHTML,
                yearColor: guessRow.getElementsByClassName("Year")[0].style.backgroundColor
            };
            guesses.push(guess);
        }
        const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        localStorage.setItem('guesses', JSON.stringify(guesses));
        localStorage.setItem('guessDate', today);
    }
}

