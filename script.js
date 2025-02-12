class Skin {
    constructor(name, weaponClass,gun, rarity, collection) { 
      this.rarity = rarity;
      this.name = name;
      this.class = weaponClass;
      this.gun = gun;
      this.collection = collection;

      switch (rarity){
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


    }  
}

let guessCounter = 0;
let elementList=["Class", "Gun", "Rarity", "Name"]

let gameActive=true;
function guess(input){
    if(gameActive==true){
        let skinGuess = searchList[input];
        guessCounter++;
        var guessRow=document.getElementById(guessCounter);
        guessRow.getElementsByClassName("Class")[0].innerHTML=skinGuess.class;
        guessRow.getElementsByClassName("Class")[0].style.backgroundColor =getColorOfSquare(skinGuess.class, answerSkin.class);
        guessRow.getElementsByClassName("Gun")[0].innerHTML=skinGuess.gun;
        guessRow.getElementsByClassName("Gun")[0].style.backgroundColor =getColorOfSquare(skinGuess.gun, answerSkin.gun);
        guessRow.getElementsByClassName("Rarity")[0].innerHTML=skinGuess.rarity;
        guessRow.getElementsByClassName("Rarity")[0].style.backgroundColor =getColorOfSquare(skinGuess.rarity, answerSkin.rarity);
        guessRow.getElementsByClassName("Name")[0].innerHTML=skinGuess.name;
        guessRow.getElementsByClassName("Name")[0].style.backgroundColor =getColorOfSquare(skinGuess.name, answerSkin.name);

        if(skinGuess == answerSkin ){
            gameActive = false;
            document.getElementById("WinOrLossDiv").style.display="block";
            document.getElementById("WinOrLossText").innerHTML = "You got it the skin was:" + answerSkin.gun + " " + answerSkin.name + "!";
        }

        if(guessCounter == 10 && skinGuess != answerSkin){
            gameActive = false;
            document.getElementById("WinOrLossDiv").style.display="block";
            document.getElementById("WinOrLossText").innerHTML = "You lost😂 the correct skin was:" + answerSkin.gun + " " + answerSkin.name + "!";
        }
    }
}

function Restart(){
    guessCounter=0;
    gameActive=true;
    for(let i =1; i<11; i++){
        guessRow=document.getElementById(i);
        guessRow.getElementsByClassName("Name")[0].innerHTML=" ";
        guessRow.getElementsByClassName("Gun")[0].innerHTML=" ";
        guessRow.getElementsByClassName("Rarity")[0].innerHTML=" ";
        guessRow.getElementsByClassName("Class")[0].innerHTML=" ";
        guessRow.getElementsByClassName("Name")[0].style.backgroundColor="white";
        guessRow.getElementsByClassName("Gun")[0].style.backgroundColor="white";
        guessRow.getElementsByClassName("Rarity")[0].style.backgroundColor="white";
        guessRow.getElementsByClassName("Class")[0].style.backgroundColor="white";
    }
    for(let k= 15; k<21; k++){
        let element =document.getElementById(k);
        element.innerHTML=" ";
    }  
    document.getElementById("WinOrLossDiv").style.display="none";
    setAnswerSkin();
    input.value="";
}

function getColorOfSquare(guessInput, answerInput){
    var squareColor;
    if(guessInput == answerInput){
        squareColor = "#3f9923";
    }else{
        squareColor="#ffffff"
    }
    return squareColor;
}

function randomInt(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
}

let answerSkin
function setAnswerSkin(){
    answerSkin=activeSkinList[randomInt(0,activeSkinList.length)]
    console.log(answerSkin.name);
}

input=document.getElementById("searchBar");
input.addEventListener('input', search);
let searchList=[];
function search(){
    searchList=[];
    search = input.value.toLowerCase();
    search = search.replace(/-|\s/g,"");
    results=0;
    if(gameActive==true){
        for(let i =0; i<activeSkinList.length && results<6;i++){
            var skinName =activeSkinList[i].name.toLowerCase()
            skinName=skinName.replace(/-|\s/g,"");
            if(skinName.includes(search)){
                searchList.push(activeSkinList[i]);
                results++;
            }
        }
        for(let b=15; b<21; b++){
            document.getElementById(b).innerHTML=" ";         
        }
        for(let k= 15; k<21; k++){
            let element =document.getElementById(k);
            element.innerHTML=" ";
            element.innerHTML=searchList[k-15].name + " " + searchList[k-15].gun;
            element.style.color=searchList[k-15].color;
        }
    }    
}

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

let skinList =[];
function createSkins(){
<<<<<<< HEAD
skinList.push(new Skin("Victoria","Pistol","CZ75-Auto","Covert","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Xiangliu","Pistol","CZ75-Auto","Classified","Spectrum Case")) 
skinList.push(new Skin("Yellow Jacket","Pistol","CZ75-Auto","Classified","Falchion Case")) 
skinList.push(new Skin("The Fuschia Is Now","Pistol","CZ75-Auto","Classified","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Eco","Pistol","CZ75-Auto","Restricted","Horizon Case")) 
skinList.push(new Skin("Tacticat","Pistol","CZ75-Auto","Restricted","Spectrum 2 Case")) 
skinList.push(new Skin("Red Astor","Pistol","CZ75-Auto","Restricted","Chroma 3 Case")) 
skinList.push(new Skin("Pole Position","Pistol","CZ75-Auto","Restricted","Chroma 2 Case")) 
skinList.push(new Skin("Tigris","Pistol","CZ75-Auto","Restricted","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Tread Plate","Pistol","CZ75-Auto","Restricted","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Slalom","Pistol","CZ75-Auto","Restricted","The Graphic Design Collection")) 
skinList.push(new Skin("Syndicate","Pistol","CZ75-Auto","Restricted","The 2021 Train Collection")) 
skinList.push(new Skin("Chalice","Pistol","CZ75-Auto","Restricted","The Cobblestone Collection")) 
skinList.push(new Skin("Circaetus","Pistol","CZ75-Auto","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Vendetta","Pistol","CZ75-Auto","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("Distressed","Pistol","CZ75-Auto","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Polymer","Pistol","CZ75-Auto","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Imprint","Pistol","CZ75-Auto","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Hexane","Pistol","CZ75-Auto","Mil-Spec","eSports 2014 Summer Case")) 
skinList.push(new Skin("Twist","Pistol","CZ75-Auto","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Poison Dart","Pistol","CZ75-Auto","Mil-Spec","The Huntsman Collection")) 
skinList.push(new Skin("Crimson Web","Pistol","CZ75-Auto","Mil-Spec","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Emerald Quartz","Pistol","CZ75-Auto","Mil-Spec","The Norse Collection")) 
skinList.push(new Skin("Emerald","Pistol","CZ75-Auto","Mil-Spec","The Chop Shop Collection")) 
skinList.push(new Skin("Nitro","Pistol","CZ75-Auto","Mil-Spec","The Overpass Collection")) 
skinList.push(new Skin("Tuxedo","Pistol","CZ75-Auto","Mil-Spec","The Bank Collection")) 
skinList.push(new Skin("Midnight Palm","Pistol","CZ75-Auto","Industrial Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Silver","Pistol","CZ75-Auto","Industrial Grade","The Ancient Collection")) 
skinList.push(new Skin("Framework","Pistol","CZ75-Auto","Consumer Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Jungle Dashed","Pistol","CZ75-Auto","Consumer Grade","The Control Collection")) 
skinList.push(new Skin("Indigo","Pistol","CZ75-Auto","Consumer Grade","The Canals Collection")) 
skinList.push(new Skin("Army Sheen","Pistol","CZ75-Auto","Consumer Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Green Plaid","Pistol","CZ75-Auto","Consumer Grade","The Baggage Collection")) 
skinList.push(new Skin("Olympus","Pistol","Zeus x27","Classified","Kilowatt Case")) 
skinList.push(new Skin("Dragon Snore","Pistol","Zeus x27","Classified","The Overpass 2024 Collection")) 
skinList.push(new Skin("Ocean Drive","Pistol","Desert Eagle","Covert","Operation Riptide Case")) 
skinList.push(new Skin("Printstream","Pistol","Desert Eagle","Covert","Fracture Case")) 
skinList.push(new Skin("Code Red","Pistol","Desert Eagle","Covert","Horizon Case")) 
skinList.push(new Skin("Golden Koi","Pistol","Desert Eagle","Covert","Operation Bravo Case")) 
skinList.push(new Skin("Mecha Industries","Pistol","Desert Eagle","Classified","Danger Zone Case")) 
skinList.push(new Skin("Kumicho Dragon","Pistol","Desert Eagle","Classified","Operation Wildfire Case")) 
skinList.push(new Skin("Conspiracy","Pistol","Desert Eagle","Classified","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Cobalt Disruption","Pistol","Desert Eagle","Classified","eSports 2013 Winter Case")) 
skinList.push(new Skin("Hypnotic","Pistol","Desert Eagle","Classified","CS:GO Weapon Case")) 
skinList.push(new Skin("Starcade","Pistol","Desert Eagle","Classified","The Graphic Design Collection")) 
skinList.push(new Skin("Heat Treated","Pistol","Desert Eagle","Classified","Limited Edition Item")) 
skinList.push(new Skin("Fennec Fox","Pistol","Desert Eagle","Classified","The 2021 Mirage Collection")) 
skinList.push(new Skin("Trigger Discipline","Pistol","Desert Eagle","Restricted","Snakebite Case")) 
skinList.push(new Skin("Light Rail","Pistol","Desert Eagle","Restricted","Prisma Case")) 
skinList.push(new Skin("Directive","Pistol","Desert Eagle","Restricted","Gamma 2 Case")) 
skinList.push(new Skin("Naga","Pistol","Desert Eagle","Restricted","Chroma Case")) 
skinList.push(new Skin("Crimson Web","Pistol","Desert Eagle","Restricted","eSports 2014 Summer Case")) 
skinList.push(new Skin("Heirloom","Pistol","Desert Eagle","Restricted","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Emerald Jörmungandr","Pistol","Desert Eagle","Restricted","The Norse Collection")) 
skinList.push(new Skin("Sunset Storm 弐","Pistol","Desert Eagle","Restricted","The Rising Sun Collection")) 
skinList.push(new Skin("Sunset Storm 壱","Pistol","Desert Eagle","Restricted","The Rising Sun Collection")) 
skinList.push(new Skin("Hand Cannon","Pistol","Desert Eagle","Restricted","The Cobblestone Collection")) 
skinList.push(new Skin("Pilot","Pistol","Desert Eagle","Restricted","The Baggage Collection")) 
skinList.push(new Skin("Blaze","Pistol","Desert Eagle","Restricted","The Dust Collection")) 
skinList.push(new Skin("Calligraffiti","Pistol","Desert Eagle","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Blue Ply","Pistol","Desert Eagle","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Oxide Blaze","Pistol","Desert Eagle","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Corinthian","Pistol","Desert Eagle","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Bronze Deco","Pistol","Desert Eagle","Mil-Spec","Chroma 2 Case")) 
skinList.push(new Skin("Sputnik","Pistol","Desert Eagle","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("Night Heist","Pistol","Desert Eagle","Mil-Spec","The Havoc Collection")) 
skinList.push(new Skin("Meteorite","Pistol","Desert Eagle","Mil-Spec","The Bank Collection")) 
skinList.push(new Skin("Urban Rubble","Pistol","Desert Eagle","Mil-Spec","The Train Collection")) 
skinList.push(new Skin("Tilted","Pistol","Desert Eagle","Industrial Grade","The Overpass 2024 Collection")) 
skinList.push(new Skin("The Bronze","Pistol","Desert Eagle","Industrial Grade","The Control Collection")) 
skinList.push(new Skin("Midnight Storm","Pistol","Desert Eagle","Industrial Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Night","Pistol","Desert Eagle","Industrial Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Urban DDPAT","Pistol","Desert Eagle","Industrial Grade","The Overpass Collection")) 
skinList.push(new Skin("Mudder","Pistol","Desert Eagle","Industrial Grade","The Lake Collection")) 
skinList.push(new Skin("Melondrama","Pistol","Dual Berettas","Classified","Dreams & Nightmares Case")) 
skinList.push(new Skin("Cobra Strike","Pistol","Dual Berettas","Classified","Operation Hydra Case")) 
skinList.push(new Skin("Twin Turbo","Pistol","Dual Berettas","Classified","The 2018 Inferno Collection")) 
skinList.push(new Skin("Hydro Strike","Pistol","Dual Berettas","Restricted","Gallery Case")) 
skinList.push(new Skin("Flora Carnivora","Pistol","Dual Berettas","Restricted","Recoil Case")) 
skinList.push(new Skin("Dezastre","Pistol","Dual Berettas","Restricted","Operation Broken Fang Case")) 
skinList.push(new Skin("Royal Consorts","Pistol","Dual Berettas","Restricted","Glove Case")) 
skinList.push(new Skin("Urban Shock","Pistol","Dual Berettas","Restricted","Chroma Case")) 
skinList.push(new Skin("Marina","Pistol","Dual Berettas","Restricted","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Hemoglobin","Pistol","Dual Berettas","Restricted","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Sweet Little Angels","Pistol","Dual Berettas","Restricted","The Overpass 2024 Collection")) 
skinList.push(new Skin("Duelist","Pistol","Dual Berettas","Restricted","The Chop Shop Collection")) 
skinList.push(new Skin("Cobalt Quartz","Pistol","Dual Berettas","Restricted","The Lake Collection")) 
skinList.push(new Skin("Demolition","Pistol","Dual Berettas","Restricted","The Vertigo Collection")) 
skinList.push(new Skin("Hideout","Pistol","Dual Berettas","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Tread","Pistol","Dual Berettas","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Balance","Pistol","Dual Berettas","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Elite 1.6","Pistol","Dual Berettas","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Shred","Pistol","Dual Berettas","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Ventilators","Pistol","Dual Berettas","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("Cartel","Pistol","Dual Berettas","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("Dualing Dragons","Pistol","Dual Berettas","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Retribution","Pistol","Dual Berettas","Mil-Spec","The Huntsman Collection")) 
skinList.push(new Skin("Panther","Pistol","Dual Berettas","Mil-Spec","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Black Limba","Pistol","Dual Berettas","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("Emerald","Pistol","Dual Berettas","Mil-Spec","The Canals Collection")) 
skinList.push(new Skin("Anodized Navy","Pistol","Dual Berettas","Mil-Spec","The Inferno Collection")) 
skinList.push(new Skin("Drift Wood","Pistol","Dual Berettas","Industrial Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Switch Board","Pistol","Dual Berettas","Industrial Grade","The Control Collection")) 
skinList.push(new Skin("Pyre","Pistol","Dual Berettas","Industrial Grade","The Norse Collection")) 
skinList.push(new Skin("Stained","Pistol","Dual Berettas","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Oil Change","Pistol","Dual Berettas","Consumer Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Heist","Pistol","Dual Berettas","Consumer Grade","The Havoc Collection")) 
skinList.push(new Skin("Moon in Libra","Pistol","Dual Berettas","Consumer Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Briar","Pistol","Dual Berettas","Consumer Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Contractor","Pistol","Dual Berettas","Consumer Grade","The Safehouse Collection")) 
skinList.push(new Skin("Colony","Pistol","Dual Berettas","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Angry Mob","Pistol","Five-SeveN","Covert","Prisma Case")) 
skinList.push(new Skin("Hyper Beast","Pistol","Five-SeveN","Covert","Operation Hydra Case")) 
skinList.push(new Skin("Fairy Tale","Pistol","Five-SeveN","Classified","Operation Broken Fang Case")) 
skinList.push(new Skin("Monkey Business","Pistol","Five-SeveN","Classified","Chroma 2 Case")) 
skinList.push(new Skin("Fowl Play","Pistol","Five-SeveN","Classified","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Fall Hazard","Pistol","Five-SeveN","Classified","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Hybrid","Pistol","Five-SeveN","Restricted","Kilowatt Case")) 
skinList.push(new Skin("Boost Protocol","Pistol","Five-SeveN","Restricted","Operation Riptide Case")) 
skinList.push(new Skin("Buddy","Pistol","Five-SeveN","Restricted","CS20 Case")) 
skinList.push(new Skin("Triumvirate","Pistol","Five-SeveN","Restricted","Operation Wildfire Case")) 
skinList.push(new Skin("Retrobution","Pistol","Five-SeveN","Restricted","Revolver Case")) 
skinList.push(new Skin("Copper Galaxy","Pistol","Five-SeveN","Restricted","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Case Hardened","Pistol","Five-SeveN","Restricted","Case Hardened")) 
skinList.push(new Skin("Heat Treated","Pistol","Five-SeveN","Restricted","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Berries And Cherries","Pistol","Five-SeveN","Restricted","Five-SeveN Case Hardened Skin & Price Details")) 
skinList.push(new Skin("Neon Kimono","Pistol","Five-SeveN","Restricted","The Sport & Field Collection")) 
skinList.push(new Skin("Scrawl","Pistol","Five-SeveN","Mil-Spec","The Control Collection")) 
skinList.push(new Skin("Flame Test","Pistol","Five-SeveN","Mil-Spec","The Rising Sun Collection")) 
skinList.push(new Skin("Capillary","Pistol","Five-SeveN","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Scumbria","Pistol","Five-SeveN","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Violent Daimyo","Pistol","Five-SeveN","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Urban Hazard","Pistol","Five-SeveN","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Nightshade","Pistol","Five-SeveN","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Kami","Pistol","Five-SeveN","Mil-Spec","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Crimson Blossom","Pistol","Five-SeveN","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Nitro","Pistol","Five-SeveN","Mil-Spec","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Silver Quartz","Pistol","Five-SeveN","Mil-Spec","The St. Marc Collection")) 
skinList.push(new Skin("Midnight Paintover","Pistol","Five-SeveN","Industrial Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Withered Vine","Pistol","Five-SeveN","Industrial Grade","The Safehouse Collection")) 
skinList.push(new Skin("Hot Shot","Pistol","Five-SeveN","Industrial Grade","The Overpass 2024 Collection")) 
skinList.push(new Skin("Orange Peel","Pistol","Five-SeveN","Industrial Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Candy Apple","Pistol","Five-SeveN","Industrial Grade","The Cache Collection")) 
skinList.push(new Skin("Coolant","Pistol","Five-SeveN","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Contractor","Pistol","Five-SeveN","Consumer Grade","The Assault Collection")) 
skinList.push(new Skin("Forest Night","Pistol","Five-SeveN","Consumer Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Anodized Gunmetal","Pistol","Five-SeveN","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Jungle","Pistol","Five-SeveN","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Gold Toof","Pistol","Glock-18","Covert","Gallery Case")) 
skinList.push(new Skin("Neo-Noir","Pistol","Glock-18","Covert","Operation Broken Fang Case")) 
skinList.push(new Skin("Bullet Queen","Pistol","Glock-18","Covert","Prisma 2 Case")) 
skinList.push(new Skin("Wasteland Rebel","Pistol","Glock-18","Covert","Gamma Case")) 
skinList.push(new Skin("Gamma Doppler","Pistol","Glock-18","Covert","The 2021 Train Collection")) 
skinList.push(new Skin("Snack Attack","Pistol","Glock-18","Classified","Operation Riptide Case")) 
skinList.push(new Skin("Vogue","Pistol","Glock-18","Classified","Fracture Case")) 
skinList.push(new Skin("Water Elemental","Pistol","Glock-18","Classified","Operation Breakout Weapon Case")) 
skinList.push(new Skin("AXIA","Pistol","Glock-18","Classified","The Sport & Field Collection")) 
skinList.push(new Skin("Twilight Galaxy","Pistol","Glock-18","Classified","The Chop Shop Collection")) 
skinList.push(new Skin("Block-18","Pistol","Glock-18","Restricted","Kilowatt Case")) 
skinList.push(new Skin("Umbral Rabbit","Pistol","Glock-18","Restricted","Revolution Case")) 
skinList.push(new Skin("Moonrise","Pistol","Glock-18","Restricted","Clutch Case")) 
skinList.push(new Skin("Weasel","Pistol","Glock-18","Restricted","Gamma 2 Case")) 
skinList.push(new Skin("Royal Legion","Pistol","Glock-18","Restricted","Operation Wildfire Case")) 
skinList.push(new Skin("Grinder","Pistol","Glock-18","Restricted","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Steel Disruption","Pistol","Glock-18","Restricted","eSports 2014 Summer Case")) 
skinList.push(new Skin("Dragon Tattoo","Pistol","Glock-18","Restricted","CS:GO Weapon Case")) 
skinList.push(new Skin("Ramese's Reach","Pistol","Glock-18","Restricted","Anubis Collection Package")) 
skinList.push(new Skin("Pink DDPAT","Pistol","Glock-18","Restricted","The 2021 Mirage Collection")) 
skinList.push(new Skin("Franklin","Pistol","Glock-18","Restricted","The Havoc Collection")) 
skinList.push(new Skin("Synth Leaf","Pistol","Glock-18","Restricted","The St. Marc Collection")) 
skinList.push(new Skin("Nuclear Garden","Pistol","Glock-18","Restricted","The 2018 Nuke Collection")) 
skinList.push(new Skin("Brass","Pistol","Glock-18","Restricted","The Dust Collection")) 
skinList.push(new Skin("Fade","Pistol","Glock-18","Restricted","The Assault Collection")) 
skinList.push(new Skin("Winterized","Pistol","Glock-18","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Clear Polymer","Pistol","Glock-18","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Sacrifice","Pistol","Glock-18","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Oxide Blaze","Pistol","Glock-18","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Warhawk","Pistol","Glock-18","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Off World","Pistol","Glock-18","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Ironwork","Pistol","Glock-18","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Wraiths","Pistol","Glock-18","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Bunsen Burner","Pistol","Glock-18","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Catacombs","Pistol","Glock-18","Mil-Spec","Chroma Case")) 
skinList.push(new Skin("Blue Fissure","Pistol","Glock-18","Mil-Spec","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Teal Graf","Pistol","Glock-18","Mil-Spec","The Overpass 2024 Collection")) 
skinList.push(new Skin("Reactor","Pistol","Glock-18","Mil-Spec","The Cache Collection")) 
skinList.push(new Skin("Candy Apple","Pistol","Glock-18","Mil-Spec","The Italy Collection")) 
skinList.push(new Skin("Red Tire","Pistol","Glock-18","Industrial Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("High Beam","Pistol","Glock-18","Industrial Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Night","Pistol","Glock-18","Industrial Grade","The Overpass Collection")) 
skinList.push(new Skin("Death Rattle","Pistol","Glock-18","Industrial Grade","The Bank Collection")) 
skinList.push(new Skin("Groundwater","Pistol","Glock-18","Industrial Grade","The Mirage Collection")) 
skinList.push(new Skin("Sand Dune","Pistol","Glock-18","Industrial Grade","The Alpha Collection")) 
skinList.push(new Skin("Fire Elemental","Pistol","P2000","Covert","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Wicked Sick","Pistol","P2000","Classified","Revolution Case")) 
skinList.push(new Skin("Imperial Dragon","Pistol","P2000","Classified","Gamma Case")) 
skinList.push(new Skin("Corticera","Pistol","P2000","Classified","eSports 2014 Summer Case")) 
skinList.push(new Skin("Ocean Foam","Pistol","P2000","Classified","Operation Bravo Case")) 
skinList.push(new Skin("Acid Etched","Pistol","P2000","Restricted","Prisma 2 Case")) 
skinList.push(new Skin("Obsidian","Pistol","P2000","Restricted","Shattered Web Case")) 
skinList.push(new Skin("Woodsman","Pistol","P2000","Restricted","Operation Hydra Case")) 
skinList.push(new Skin("Handgun","Pistol","P2000","Restricted","Falchion Case")) 
skinList.push(new Skin("Space Race","Pistol","P2000","Restricted","The 2021 Train Collection")) 
skinList.push(new Skin("Amber Fade","Pistol","P2000","Restricted","The Dust 2 Collection")) 
skinList.push(new Skin("Scorpion","Pistol","P2000","Restricted","The Dust Collection")) 
skinList.push(new Skin("Lifted Spirits","Pistol","P2000","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Gnarled","Pistol","P2000","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Urban Hazard","Pistol","P2000","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Turf","Pistol","P2000","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Oceanic","Pistol","P2000","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("Imperial","Pistol","P2000","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Ivory","Pistol","P2000","Mil-Spec","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Pulse","Pistol","P2000","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Red FragCam","Pistol","P2000","Mil-Spec","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Dispatch","Pistol","P2000","Mil-Spec","The Control Collection")) 
skinList.push(new Skin("Chainmail","Pistol","P2000","Mil-Spec","The Cobblestone Collection")) 
skinList.push(new Skin("Silver","Pistol","P2000","Mil-Spec","The Office Collection")) 
skinList.push(new Skin("Coral Halftone","Pistol","P2000","Industrial Grade","The Graphic Design Collection")) 
skinList.push(new Skin("Panther Camo","Pistol","P2000","Industrial Grade","The Ancient Collection")) 
skinList.push(new Skin("Pathfinder","Pistol","P2000","Industrial Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Grassland","Pistol","P2000","Industrial Grade","The Overpass Collection")) 
skinList.push(new Skin("Coach Class","Pistol","P2000","Industrial Grade","The Baggage Collection")) 
skinList.push(new Skin("Granite Marbleized","Pistol","P2000","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Grassland Leaves","Pistol","P2000","Industrial Grade","The Militia Collection")) 
skinList.push(new Skin("See Ya Later","Pistol","P250","Covert","Spectrum 2 Case")) 
skinList.push(new Skin("Epicenter","Pistol","P250","Classified","Gallery Case")) 
skinList.push(new Skin("Visions","Pistol","P250","Classified","Recoil Case")) 
skinList.push(new Skin("Asiimov","Pistol","P250","Classified","Chroma 3 Case")) 
skinList.push(new Skin("Muertos","Pistol","P250","Classified","Chroma Case")) 
skinList.push(new Skin("Cartel","Pistol","P250","Classified","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Undertow","Pistol","P250","Classified","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Mehndi","Pistol","P250","Classified","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Apep's Curse","Pistol","P250","Classified","Anubis Collection Package")) 
skinList.push(new Skin("Franklin","Pistol","P250","Classified","The Bank Collection")) 
skinList.push(new Skin("Cyber Shell","Pistol","P250","Restricted","Snakebite Case")) 
skinList.push(new Skin("Inferno","Pistol","P250","Restricted","CS20 Case")) 
skinList.push(new Skin("X-Ray","Pistol","P250","Restricted","Danger Zone Case")) 
skinList.push(new Skin("Nevermore","Pistol","P250","Restricted","Operation Hydra Case")) 
skinList.push(new Skin("Red Rock","Pistol","P250","Restricted","Shadow Case")) 
skinList.push(new Skin("Wingshot","Pistol","P250","Restricted","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Supernova","Pistol","P250","Restricted","eSports 2013 Case")) 
skinList.push(new Skin("Splash","Pistol","P250","Restricted","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Digital Architect","Pistol","P250","Restricted","The 2018 Inferno Collection")) 
skinList.push(new Skin("Vino Primo","Pistol","P250","Restricted","The Nuke Collection")) 
skinList.push(new Skin("Nuclear Threat","Pistol","P250","Restricted","Revolution Case")) 
skinList.push(new Skin("Re.built","Pistol","P250","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("Contaminant","Pistol","P250","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Cassette","Pistol","P250","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Verdigris","Pistol","P250","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Ripple","Pistol","P250","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Iron Clad","Pistol","P250","Mil-Spec","Chroma 2 Case")) 
skinList.push(new Skin("Valence","Pistol","P250","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Steel Disruption","Pistol","P250","Mil-Spec","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Hive","Pistol","P250","Mil-Spec","The Sport & Field Collection")) 
skinList.push(new Skin("Small Game","Pistol","P250","Mil-Spec","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Black & Tan","Pistol","P250","Mil-Spec","The Havoc Collection")) 
skinList.push(new Skin("Bengal Tiger","Pistol","P250","Mil-Spec","The 2018 Nuke Collection")) 
skinList.push(new Skin("Exchanger","Pistol","P250","Mil-Spec","The Chop Shop Collection")) 
skinList.push(new Skin("Whiteout","Pistol","P250","Mil-Spec","The Militia Collection")) 
skinList.push(new Skin("Modern Hunter","Pistol","P250","Mil-Spec","The Canals Collection")) 
skinList.push(new Skin("Dark Filigree","Pistol","P250","Industrial Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Crimson Kimono","Pistol","P250","Industrial Grade","The Cache Collection")) 
skinList.push(new Skin("Contamination","Pistol","P250","Industrial Grade","The Train Collection")) 
skinList.push(new Skin("Metallic DDPAT","Pistol","P250","Industrial Grade","The Alpha Collection")) 
skinList.push(new Skin("Facets","Pistol","P250","Industrial Grade","The Inferno Collection")) 
skinList.push(new Skin("Gunsmoke","Pistol","P250","Industrial Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Drought","Pistol","P250","Consumer Grade","The Control Collection")) 
skinList.push(new Skin("Forest Night","Pistol","P250","Consumer Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Facility Draft","Pistol","P250","Consumer Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Mint Kimono","Pistol","P250","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("Boreal Forest","Pistol","P250","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Bone Mask","Pistol","P250","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Sand Dune","Pistol","P250","Consumer Grade","CSGO Case Battles")) 
skinList.push(new Skin("Fade","Pistol","R8 Revolver","Covert","Revolver Case")) 
skinList.push(new Skin("Skull Crusher","Pistol","R8 Revolver","Classified","Prisma Case")) 
skinList.push(new Skin("Llama Cannon","Pistol","R8 Revolver","Classified","Spectrum 2 Case")) 
skinList.push(new Skin("Amber Fade","Pistol","R8 Revolver","Classified","The Dust 2 Collection")) 
skinList.push(new Skin("Banana Cannon","Pistol","R8 Revolver","Restricted","Revolution Case")) 
skinList.push(new Skin("Crazy 8","Pistol","R8 Revolver","Restricted","Recoil Case")) 
skinList.push(new Skin("Reboot","Pistol","R8 Revolver","Restricted","Gamma Case")) 
skinList.push(new Skin("Tango","Pistol","R8 Revolver","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Junk Yard","Pistol","R8 Revolver","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Bone Forged","Pistol","R8 Revolver","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Memento","Pistol","R8 Revolver","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Survivalist","Pistol","R8 Revolver","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Grip","Pistol","R8 Revolver","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Crimson Web","Pistol","R8 Revolver","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Blaze","Pistol","R8 Revolver","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("Phoenix Marker","Pistol","R8 Revolver","Industrial Grade","The Havoc Collection")) 
skinList.push(new Skin("Nitro","Pistol","R8 Revolver","Industrial Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Inlay","Pistol","R8 Revolver","Consumer Grade","Anubis Collection Package")) 
skinList.push(new Skin("Desert Brush","Pistol","R8 Revolver","Consumer Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Night","Pistol","R8 Revolver","Consumer Grade","The Ancient Collection")) 
skinList.push(new Skin("Canal Spray","Pistol","R8 Revolver","Consumer Grade","The Canals Collection")) 
skinList.push(new Skin("Bone Mask","Pistol","R8 Revolver","Consumer Grade","The Bank Collection")) 
skinList.push(new Skin("Decimator","Pistol","Tec-9","Classified","Shattered Web Case")) 
skinList.push(new Skin("Fuel Injector","Pistol","Tec-9","Classified","Gamma 2 Case")) 
skinList.push(new Skin("Remote Control","Pistol","Tec-9","Classified","The 2018 Nuke Collection")) 
skinList.push(new Skin("Brother","Pistol","Tec-9","Restricted","Fracture Case")) 
skinList.push(new Skin("Bamboozle","Pistol","Tec-9","Restricted","Prisma Case")) 
skinList.push(new Skin("Re-Entry","Pistol","Tec-9","Restricted","Chroma 3 Case")) 
skinList.push(new Skin("Avalanche","Pistol","Tec-9","Restricted","Revolver Case")) 
skinList.push(new Skin("Titanium Bit","Pistol","Tec-9","Restricted","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Red Quartz","Pistol","Tec-9","Restricted","The Train Collection")) 
skinList.push(new Skin("Nuclear Threat","Pistol","Tec-9","Restricted","The Nuke Collection")) 
skinList.push(new Skin("Slag","Pistol","Tec-9","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Rebel","Pistol","Tec-9","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Flash Out","Pistol","Tec-9","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Fubar","Pistol","Tec-9","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Snek-9","Pistol","Tec-9","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Cracked Opal","Pistol","Tec-9","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Cut Out","Pistol","Tec-9","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Ice Cap","Pistol","Tec-9","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Jambiya","Pistol","Tec-9","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("Isaac","Pistol","Tec-9","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Sandstorm","Pistol","Tec-9","Mil-Spec","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Blue Titanium","Pistol","Tec-9","Mil-Spec","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Mummy's Rot","Pistol","Tec-9","Mil-Spec","Anubis Collection Package")) 
skinList.push(new Skin("Safety Net","Pistol","Tec-9","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("Blast From the Past","Pistol","Tec-9","Mil-Spec","The Ancient Collection")) 
skinList.push(new Skin("Terrace","Pistol","Tec-9","Mil-Spec","The Rising Sun Collection")) 
skinList.push(new Skin("Toxic","Pistol","Tec-9","Mil-Spec","The Cache Collection")) 
skinList.push(new Skin("Brass","Pistol","Tec-9","Mil-Spec","The Inferno Collection")) 
skinList.push(new Skin("Ossified","Pistol","Tec-9","Mil-Spec","The Aztec Collection")) 
skinList.push(new Skin("Tiger Stencil","Pistol","Tec-9","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("Rust Leaf","Pistol","Tec-9","Industrial Grade","The St. Marc Collection")) 
skinList.push(new Skin("Orange Murano","Pistol","Tec-9","Industrial Grade","The Canals Collection")) 
skinList.push(new Skin("Hades","Pistol","Tec-9","Industrial Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("VariCamo","Pistol","Tec-9","Industrial Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Phoenix Chalk","Pistol","Tec-9","Consumer Grade","The Havoc Collection")) 
skinList.push(new Skin("Bamboo Forest","Pistol","Tec-9","Consumer Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Urban DDPAT","Pistol","Tec-9","Consumer Grade","The Bank Collection")) 
skinList.push(new Skin("Groundwater","Pistol","Tec-9","Consumer Grade","The Italy Collection")) 
skinList.push(new Skin("Army Mesh","Pistol","Tec-9","Consumer Grade","The Safehouse Collection")) 
skinList.push(new Skin("Tornado","Pistol","Tec-9","Consumer Grade","The Alpha Collection")) 
skinList.push(new Skin("Printstream","Pistol","USP-S","Covert","Recoil Case")) 
skinList.push(new Skin("The Traitor","Pistol","USP-S","Covert","Snakebite Case")) 
skinList.push(new Skin("Neo-Noir","Pistol","USP-S","Covert","Spectrum Case")) 
skinList.push(new Skin("Kill Confirmed","Pistol","USP-S","Covert","Shadow Case")) 
skinList.push(new Skin("Jawbreaker","Pistol","USP-S","Classified","Kilowatt Case")) 
skinList.push(new Skin("Monster Mashup","Pistol","USP-S","Classified","Operation Broken Fang Case")) 
skinList.push(new Skin("Cortex","Pistol","USP-S","Classified","Clutch Case")) 
skinList.push(new Skin("Caiman","Pistol","USP-S","Classified","Huntsman Weapon Case")) 
skinList.push(new Skin("Orion","Pistol","USP-S","Classified","The Huntsman Collection")) 
skinList.push(new Skin("Serum","Pistol","USP-S","Classified","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Whiteout","Pistol","USP-S","Classified","The 2021 Train Collection")) 
skinList.push(new Skin("Target Acquired","Pistol","USP-S","Classified","The Control Collection")) 
skinList.push(new Skin("Ticket to Hell","Pistol","USP-S","Restricted","Dreams & Nightmares Case")) 
skinList.push(new Skin("Flashback","Pistol","USP-S","Restricted","Danger Zone Case")) 
skinList.push(new Skin("Cyrex","Pistol","USP-S","Restricted","Glove Case")) 
skinList.push(new Skin("Guardian","Pistol","USP-S","Restricted","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Overgrowth","Pistol","USP-S","Restricted","Operation Bravo Case")) 
skinList.push(new Skin("Dark Water","Pistol","USP-S","Restricted","CS:GO Weapon Case")) 
skinList.push(new Skin("Orange Anolis","Pistol","USP-S","Restricted","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Ancient Visions","Pistol","USP-S","Restricted","The Ancient Collection")) 
skinList.push(new Skin("Road Rash","Pistol","USP-S","Restricted","The Overpass Collection")) 
skinList.push(new Skin("027","Pistol","USP-S","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Black Lotus","Pistol","USP-S","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Blueprint","Pistol","USP-S","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Lead Conduit","Pistol","USP-S","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("Torque","Pistol","USP-S","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Blood Tiger","Pistol","USP-S","Mil-Spec","eSports 2014 Summer Case")) 
skinList.push(new Skin("Stainless","Pistol","USP-S","Mil-Spec","CS:GO Weapon Case 3")) 
skinList.push(new Skin("Alpine Camo","Pistol","USP-S","Mil-Spec","The Sport & Field Collection")) 
skinList.push(new Skin("Purple DDPAT","Pistol","USP-S","Mil-Spec","The 2021 Mirage Collection")) 
skinList.push(new Skin("Check Engine","Pistol","USP-S","Mil-Spec","The 2018 Inferno Collection")) 
skinList.push(new Skin("Business Class","Pistol","USP-S","Mil-Spec","The Baggage Collection")) 
skinList.push(new Skin("Night Ops","Pistol","USP-S","Mil-Spec","The Lake Collection")) 
skinList.push(new Skin("Desert Tactical","Pistol","USP-S","Industrial Grade","Anubis Collection Package")) 
skinList.push(new Skin("Pathfinder","Pistol","USP-S","Industrial Grade","The Norse Collection")) 
skinList.push(new Skin("Para Green","Pistol","USP-S","Industrial Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Royal Blue","Pistol","USP-S","Industrial Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Forest Leaves","Pistol","USP-S","Industrial Grade","The Safehouse Collection")) 
skinList.push(new Skin("Stalker","Mid-Tier","MAC-10","Covert","Shattered Web Case")) 
skinList.push(new Skin("Neon Rider","Mid-Tier","MAC-10","Covert","Chroma 2 Case")) 
skinList.push(new Skin("Toybox","Mid-Tier","MAC-10","Classified","Operation Riptide Case")) 
skinList.push(new Skin("Disco Tech","Mid-Tier","MAC-10","Classified","Prisma 2 Case")) 
skinList.push(new Skin("Propaganda","Mid-Tier","MAC-10","Classified","The 2021 Train Collection")) 
skinList.push(new Skin("Hot Snakes","Mid-Tier","MAC-10","Classified","The Havoc Collection")) 
skinList.push(new Skin("Saibā Oni","Mid-Tier","MAC-10","Restricted","Gallery Case")) 
skinList.push(new Skin("Sakkaku","Mid-Tier","MAC-10","Restricted","Revolution Case")) 
skinList.push(new Skin("Button Masher","Mid-Tier","MAC-10","Restricted","Snakebite Case")) 
skinList.push(new Skin("Allure","Mid-Tier","MAC-10","Restricted","Fracture Case")) 
skinList.push(new Skin("Pipe Down","Mid-Tier","MAC-10","Restricted","Danger Zone Case")) 
skinList.push(new Skin("Last Dive","Mid-Tier","MAC-10","Restricted","Spectrum Case")) 
skinList.push(new Skin("Malachite","Mid-Tier","MAC-10","Restricted","Chroma Case")) 
skinList.push(new Skin("Tatter","Mid-Tier","MAC-10","Restricted","Huntsman Weapon Case")) 
skinList.push(new Skin("Curse","Mid-Tier","MAC-10","Restricted","The Huntsman Collection")) 
skinList.push(new Skin("Heat","Mid-Tier","MAC-10","Restricted","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Graven","Mid-Tier","MAC-10","Restricted","Operation Bravo Case")) 
skinList.push(new Skin("Case Hardened","Mid-Tier","MAC-10","Restricted","Case Hardened")) 
skinList.push(new Skin("Gold Brick","Mid-Tier","MAC-10","Restricted","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Red Filigree","Mid-Tier","MAC-10","Restricted","MAC-10 Case Hardened Skin & Price Details")) 
skinList.push(new Skin("Light Box","Mid-Tier","MAC-10","Mil-Spec","The Ancient Collection")) 
skinList.push(new Skin("Monkeyflage","Mid-Tier","MAC-10","Mil-Spec","The Canals Collection")) 
skinList.push(new Skin("Ensnared","Mid-Tier","MAC-10","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Classic Crate","Mid-Tier","MAC-10","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Whitefish","Mid-Tier","MAC-10","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Oceanic","Mid-Tier","MAC-10","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Aloha","Mid-Tier","MAC-10","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Carnivore","Mid-Tier","MAC-10","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Lapis Gator","Mid-Tier","MAC-10","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Rangeen","Mid-Tier","MAC-10","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Ultraviolet","Mid-Tier","MAC-10","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("Pipsqueak","Mid-Tier","MAC-10","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Copper Borre","Mid-Tier","MAC-10","Mil-Spec","eSports 2014 Summer Case")) 
skinList.push(new Skin("Fade","Mid-Tier","MAC-10","Mil-Spec","The Overpass 2024 Collection")) 
skinList.push(new Skin("Nuclear Garden","Mid-Tier","MAC-10","Mil-Spec","The Norse Collection")) 
skinList.push(new Skin("Amber Fade","Mid-Tier","MAC-10","Mil-Spec","The Chop Shop Collection")) 
skinList.push(new Skin("Echoing Sands","Mid-Tier","MAC-10","Industrial Grade","The Cache Collection")) 
skinList.push(new Skin("Calf Skin","Mid-Tier","MAC-10","Industrial Grade","The Mirage Collection")) 
skinList.push(new Skin("Commuter","Mid-Tier","MAC-10","Industrial Grade","Anubis Collection Package")) 
skinList.push(new Skin("Silver","Mid-Tier","MAC-10","Industrial Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Palm","Mid-Tier","MAC-10","Industrial Grade","The Baggage Collection")) 
skinList.push(new Skin("Candy Apple","Mid-Tier","MAC-10","Industrial Grade","The Bank Collection")) 
skinList.push(new Skin("Strats","Mid-Tier","MAC-10","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Sienna Damask","Mid-Tier","MAC-10","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Surfwood","Mid-Tier","MAC-10","Consumer Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Indigo","Mid-Tier","MAC-10","Consumer Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Tornado","Mid-Tier","MAC-10","Consumer Grade","The St. Marc Collection")) 
skinList.push(new Skin("Urban DDPAT","Mid-Tier","MAC-10","Consumer Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Phosphor","Mid-Tier","MP5-SD","Classified","Danger Zone Case")) 
skinList.push(new Skin("Oxide Oasis","Mid-Tier","MP5-SD","Classified","The 2021 Mirage Collection")) 
skinList.push(new Skin("Kitbash","Mid-Tier","MP5-SD","Restricted","Fracture Case")) 
skinList.push(new Skin("Agent","Mid-Tier","MP5-SD","Restricted","CS20 Case")) 
skinList.push(new Skin("Gauss","Mid-Tier","MP5-SD","Restricted","Prisma Case")) 
skinList.push(new Skin("Autumn Twilly","Mid-Tier","MP5-SD","Restricted","The 2021 Train Collection")) 
skinList.push(new Skin("Lab Rats","Mid-Tier","MP5-SD","Restricted","The Blacksite Collection")) 
skinList.push(new Skin("Statics","Mid-Tier","MP5-SD","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Liquidation","Mid-Tier","MP5-SD","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Necro Jr.","Mid-Tier","MP5-SD","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Condition Zero","Mid-Tier","MP5-SD","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("Desert Strike","Mid-Tier","MP5-SD","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Acid Wash","Mid-Tier","MP5-SD","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Co-Processor","Mid-Tier","MP5-SD","Mil-Spec","The 2018 Nuke Collection")) 
skinList.push(new Skin("Savannah Halftone","Mid-Tier","MP5-SD","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("Neon Squeezer","Mid-Tier","MP5-SD","Industrial Grade","The Overpass 2024 Collection")) 
skinList.push(new Skin("Nitro","Mid-Tier","MP5-SD","Industrial Grade","The Control Collection")) 
skinList.push(new Skin("Bamboo Garden","Mid-Tier","MP5-SD","Consumer Grade","The St. Marc Collection")) 
skinList.push(new Skin("Dirt Drop","Mid-Tier","MP5-SD","Consumer Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Bloodsport","Mid-Tier","MP7","Covert","Clutch Case")) 
skinList.push(new Skin("Abyssal Apparition","Mid-Tier","MP7","Classified","Dreams & Nightmares Case")) 
skinList.push(new Skin("Nemesis","Mid-Tier","MP7","Classified","Falchion Case")) 
skinList.push(new Skin("Just Smile","Mid-Tier","MP7","Restricted","Kilowatt Case")) 
skinList.push(new Skin("Neon Ply","Mid-Tier","MP7","Restricted","Shattered Web Case")) 
skinList.push(new Skin("Powercore","Mid-Tier","MP7","Restricted","Horizon Case")) 
skinList.push(new Skin("Impire","Mid-Tier","MP7","Restricted","Operation Wildfire Case")) 
skinList.push(new Skin("Special Delivery","Mid-Tier","MP7","Restricted","Shadow Case")) 
skinList.push(new Skin("Ocean Foam","Mid-Tier","MP7","Restricted","eSports 2014 Summer Case")) 
skinList.push(new Skin("Fade","Mid-Tier","MP7","Restricted","The 2018 Inferno Collection")) 
skinList.push(new Skin("Guerrilla","Mid-Tier","MP7","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Mischief","Mid-Tier","MP7","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Akoben","Mid-Tier","MP7","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Cirrus","Mid-Tier","MP7","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Armor Core","Mid-Tier","MP7","Mil-Spec","Chroma 2 Case")) 
skinList.push(new Skin("Urban Hazard","Mid-Tier","MP7","Mil-Spec","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Skulls","Mid-Tier","MP7","Mil-Spec","CS:GO Weapon Case")) 
skinList.push(new Skin("Teal Blossom","Mid-Tier","MP7","Mil-Spec","The St. Marc Collection")) 
skinList.push(new Skin("Full Stop","Mid-Tier","MP7","Mil-Spec","The Chop Shop Collection")) 
skinList.push(new Skin("Anodized Navy","Mid-Tier","MP7","Mil-Spec","The Italy Collection")) 
skinList.push(new Skin("Whiteout","Mid-Tier","MP7","Mil-Spec","The Office Collection")) 
skinList.push(new Skin("Astrolabe","Mid-Tier","MP7","Industrial Grade","The Graphic Design Collection")) 
skinList.push(new Skin("Vault Heist","Mid-Tier","MP7","Industrial Grade","The Havoc Collection")) 
skinList.push(new Skin("Tall Grass","Mid-Tier","MP7","Industrial Grade","The Ancient Collection")) 
skinList.push(new Skin("Motherboard","Mid-Tier","MP7","Industrial Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Gunsmoke","Mid-Tier","MP7","Industrial Grade","The Overpass Collection")) 
skinList.push(new Skin("Orange Peel","Mid-Tier","MP7","Industrial Grade","The Mirage Collection")) 
skinList.push(new Skin("Sunbaked","Mid-Tier","MP7","Consumer Grade","Anubis Collection Package")) 
skinList.push(new Skin("Prey","Mid-Tier","MP7","Consumer Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Scorched","Mid-Tier","MP7","Consumer Grade","The Norse Collection")) 
skinList.push(new Skin("Asterion","Mid-Tier","MP7","Consumer Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Olive Plaid","Mid-Tier","MP7","Consumer Grade","The Baggage Collection")) 
skinList.push(new Skin("Forest DDPAT","Mid-Tier","MP7","Consumer Grade","The Bank Collection")) 
skinList.push(new Skin("Army Recon","Mid-Tier","MP7","Consumer Grade","The Safehouse Collection")) 
skinList.push(new Skin("Groundwater","Mid-Tier","MP7","Consumer Grade","The Alpha Collection")) 
skinList.push(new Skin("Starlight Protector","Mid-Tier","MP9","Covert","Dreams & Nightmares Case")) 
skinList.push(new Skin("Food Chain","Mid-Tier","MP9","Classified","Snakebite Case")) 
skinList.push(new Skin("Hydra","Mid-Tier","MP9","Classified","CS20 Case")) 
skinList.push(new Skin("Airlock","Mid-Tier","MP9","Classified","Gamma 2 Case")) 
skinList.push(new Skin("Wild Lily","Mid-Tier","MP9","Classified","The St. Marc Collection")) 
skinList.push(new Skin("Mount Fuji","Mid-Tier","MP9","Restricted","Operation Riptide Case")) 
skinList.push(new Skin("Goo","Mid-Tier","MP9","Restricted","Spectrum 2 Case")) 
skinList.push(new Skin("Ruby Poison Dart","Mid-Tier","MP9","Restricted","Falchion Case")) 
skinList.push(new Skin("Rose Iron","Mid-Tier","MP9","Restricted","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Hypnotic","Mid-Tier","MP9","Restricted","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Arctic Tri-Tone","Mid-Tier","MP9","Restricted","The Sport & Field Collection")) 
skinList.push(new Skin("Stained Glass","Mid-Tier","MP9","Restricted","The Canals Collection")) 
skinList.push(new Skin("Bulldozer","Mid-Tier","MP9","Restricted","The Assault Collection")) 
skinList.push(new Skin("Featherweight","Mid-Tier","MP9","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Modest Threat","Mid-Tier","MP9","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Capillary","Mid-Tier","MP9","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Black Sand","Mid-Tier","MP9","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Sand Scale","Mid-Tier","MP9","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Bioleak","Mid-Tier","MP9","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("Deadly Poison","Mid-Tier","MP9","Mil-Spec","Chroma Case")) 
skinList.push(new Skin("Dart","Mid-Tier","MP9","Mil-Spec","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Music Box","Mid-Tier","MP9","Mil-Spec","The 2021 Mirage Collection")) 
skinList.push(new Skin("Pandora's Box","Mid-Tier","MP9","Mil-Spec","The Gods and Monsters Collection")) 
skinList.push(new Skin("Setting Sun","Mid-Tier","MP9","Mil-Spec","The Cache Collection")) 
skinList.push(new Skin("Dark Age","Mid-Tier","MP9","Mil-Spec","The Cobblestone Collection")) 
skinList.push(new Skin("Hot Rod","Mid-Tier","MP9","Mil-Spec","The Mirage Collection")) 
skinList.push(new Skin("Old Roots","Mid-Tier","MP9","Industrial Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Orange Peel","Mid-Tier","MP9","Industrial Grade","The Safehouse Collection")) 
skinList.push(new Skin("Army Sheen","Mid-Tier","MP9","Consumer Grade","The Control Collection")) 
skinList.push(new Skin("Slide","Mid-Tier","MP9","Consumer Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Green Plaid","Mid-Tier","MP9","Consumer Grade","The Baggage Collection")) 
skinList.push(new Skin("Storm","Mid-Tier","MP9","Consumer Grade","The Overpass Collection")) 
skinList.push(new Skin("Sand Dashed","Mid-Tier","MP9","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Dry Season","Mid-Tier","MP9","Consumer Grade","The Alpha Collection")) 
skinList.push(new Skin("Judgement of Anubis","Mid-Tier","PP-Bizon","Covert","Chroma 3 Case")) 
skinList.push(new Skin("High Roller","Mid-Tier","PP-Bizon","Classified","Spectrum 2 Case")) 
skinList.push(new Skin("Space Cat","Mid-Tier","PP-Bizon","Restricted","Dreams & Nightmares Case")) 
skinList.push(new Skin("Embargo","Mid-Tier","PP-Bizon","Restricted","Shattered Web Case")) 
skinList.push(new Skin("Fuel Rod","Mid-Tier","PP-Bizon","Restricted","Revolver Case")) 
skinList.push(new Skin("Blue Streak","Mid-Tier","PP-Bizon","Restricted","eSports 2014 Summer Case")) 
skinList.push(new Skin("Osiris","Mid-Tier","PP-Bizon","Restricted","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Antique","Mid-Tier","PP-Bizon","Restricted","Huntsman Weapon Case")) 
skinList.push(new Skin("Lumen","Mid-Tier","PP-Bizon","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Runic","Mid-Tier","PP-Bizon","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Night Riot","Mid-Tier","PP-Bizon","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Jungle Slipstream","Mid-Tier","PP-Bizon","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Harvester","Mid-Tier","PP-Bizon","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Photic Zone","Mid-Tier","PP-Bizon","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("Cobalt Halftone","Mid-Tier","PP-Bizon","Mil-Spec","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Water Sigil","Mid-Tier","PP-Bizon","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Brass","Mid-Tier","PP-Bizon","Mil-Spec","The Dust 2 Collection")) 
skinList.push(new Skin("Rust Coat","Mid-Tier","PP-Bizon","Mil-Spec","The Alpha Collection")) 
skinList.push(new Skin("Modern Hunter","Mid-Tier","PP-Bizon","Mil-Spec","The Militia Collection")) 
skinList.push(new Skin("Cold Cell","Mid-Tier","PP-Bizon","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("Breaker Box","Mid-Tier","PP-Bizon","Industrial Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Candy Apple","Mid-Tier","PP-Bizon","Industrial Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Chemical Green","Mid-Tier","PP-Bizon","Industrial Grade","The Cache Collection")) 
skinList.push(new Skin("Night Ops","Mid-Tier","PP-Bizon","Industrial Grade","The Lake Collection")) 
skinList.push(new Skin("Carbon Fiber","Mid-Tier","PP-Bizon","Industrial Grade","The Vertigo Collection")) 
skinList.push(new Skin("Anolis","Mid-Tier","PP-Bizon","Consumer Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Death Rattle","Mid-Tier","PP-Bizon","Consumer Grade","The Havoc Collection")) 
skinList.push(new Skin("Seabird","Mid-Tier","PP-Bizon","Consumer Grade","The St. Marc Collection")) 
skinList.push(new Skin("Facility Sketch","Mid-Tier","PP-Bizon","Consumer Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Bamboo Print","Mid-Tier","PP-Bizon","Consumer Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Sand Dashed","Mid-Tier","PP-Bizon","Consumer Grade","The Italy Collection")) 
skinList.push(new Skin("Urban Dashed","Mid-Tier","PP-Bizon","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Irradiated Alert","Mid-Tier","PP-Bizon","Consumer Grade","The Nuke Collection")) 
skinList.push(new Skin("Forest Leaves","Mid-Tier","PP-Bizon","Consumer Grade","The Militia Collection")) 
skinList.push(new Skin("Asiimov","Mid-Tier","P90","Covert","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Death by Kitty","Mid-Tier","P90","Covert","eSports 2013 Case")) 
skinList.push(new Skin("Nostalgia","Mid-Tier","P90","Classified","CS20 Case")) 
skinList.push(new Skin("Shallow Grave","Mid-Tier","P90","Classified","Glove Case")) 
skinList.push(new Skin("Shapewood","Mid-Tier","P90","Classified","Revolver Case")) 
skinList.push(new Skin("Trigon","Mid-Tier","P90","Classified","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Cold Blooded","Mid-Tier","P90","Classified","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Emerald Dragon","Mid-Tier","P90","Classified","Operation Bravo Case")) 
skinList.push(new Skin("Run and Hide","Mid-Tier","P90","Classified","The Ancient Collection")) 
skinList.push(new Skin("Randy Rush","Mid-Tier","P90","Restricted","Gallery Case")) 
skinList.push(new Skin("Neoqueen","Mid-Tier","P90","Restricted","Revolution Case")) 
skinList.push(new Skin("Vent Rush","Mid-Tier","P90","Restricted","Recoil Case")) 
skinList.push(new Skin("Death Grip","Mid-Tier","P90","Restricted","Operation Hydra Case")) 
skinList.push(new Skin("Chopper","Mid-Tier","P90","Restricted","Gamma Case")) 
skinList.push(new Skin("Virus","Mid-Tier","P90","Restricted","eSports 2014 Summer Case")) 
skinList.push(new Skin("Blind Spot","Mid-Tier","P90","Restricted","eSports 2013 Winter Case")) 
skinList.push(new Skin("Attack Vector","Mid-Tier","P90","Restricted","The Graphic Design Collection")) 
skinList.push(new Skin("ScaraB Rush","Mid-Tier","P90","Restricted","Anubis Collection Package")) 
skinList.push(new Skin("Astral Jörmungandr","Mid-Tier","P90","Restricted","The Norse Collection")) 
skinList.push(new Skin("Cocoa Rampage","Mid-Tier","P90","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("Freight","Mid-Tier","P90","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Off World","Mid-Tier","P90","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Traction","Mid-Tier","P90","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Grim","Mid-Tier","P90","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Elite Build","Mid-Tier","P90","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Module","Mid-Tier","P90","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Desert Warfare","Mid-Tier","P90","Mil-Spec","The Huntsman Collection")) 
skinList.push(new Skin("Schematic","Mid-Tier","P90","Mil-Spec","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Tiger Pit","Mid-Tier","P90","Mil-Spec","The Havoc Collection")) 
skinList.push(new Skin("Baroque Red","Mid-Tier","P90","Mil-Spec","The Canals Collection")) 
skinList.push(new Skin("Facility Negative","Mid-Tier","P90","Mil-Spec","The 2018 Nuke Collection")) 
skinList.push(new Skin("Teardown","Mid-Tier","P90","Mil-Spec","The Lake Collection")) 
skinList.push(new Skin("Glacier Mesh","Mid-Tier","P90","Mil-Spec","The Vertigo Collection")) 
skinList.push(new Skin("Wash me","Mid-Tier","P90","Industrial Grade","The Overpass 2024 Collection")) 
skinList.push(new Skin("Verdant Growth","Mid-Tier","P90","Industrial Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Sunset Lily","Mid-Tier","P90","Industrial Grade","The St. Marc Collection")) 
skinList.push(new Skin("Leather","Mid-Tier","P90","Industrial Grade","The Baggage Collection")) 
skinList.push(new Skin("Ash Wood","Mid-Tier","P90","Industrial Grade","The Train Collection")) 
skinList.push(new Skin("Fallout Warning","Mid-Tier","P90","Industrial Grade","The Nuke Collection")) 
skinList.push(new Skin("Desert DDPAT","Mid-Tier","P90","Consumer Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Ancient Earth","Mid-Tier","P90","Consumer Grade","The Ancient Collection")) 
skinList.push(new Skin("Storm","Mid-Tier","P90","Consumer Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Scorched","Mid-Tier","P90","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Sand Spray","Mid-Tier","P90","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Neo-Noir","Mid-Tier","UMP-45","Classified","Gallery Case")) 
skinList.push(new Skin("Wild Child","Mid-Tier","UMP-45","Classified","Revolution Case")) 
skinList.push(new Skin("Momentum","Mid-Tier","UMP-45","Classified","Danger Zone Case")) 
skinList.push(new Skin("Primal Saber","Mid-Tier","UMP-45","Classified","Chroma 3 Case")) 
skinList.push(new Skin("Fade","Mid-Tier","UMP-45","Classified","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Gold Bismuth","Mid-Tier","UMP-45","Restricted","Operation Broken Fang Case")) 
skinList.push(new Skin("Plastique","Mid-Tier","UMP-45","Restricted","CS20 Case")) 
skinList.push(new Skin("Moonrise","Mid-Tier","UMP-45","Restricted","Prisma Case")) 
skinList.push(new Skin("Arctic Wolf","Mid-Tier","UMP-45","Restricted","Clutch Case")) 
skinList.push(new Skin("Exposure","Mid-Tier","UMP-45","Restricted","Spectrum 2 Case")) 
skinList.push(new Skin("Scaffold","Mid-Tier","UMP-45","Restricted","Spectrum Case")) 
skinList.push(new Skin("Grand Prix","Mid-Tier","UMP-45","Restricted","Chroma 2 Case")) 
skinList.push(new Skin("Crimson Foil","Mid-Tier","UMP-45","Restricted","The Sport & Field Collection")) 
skinList.push(new Skin("Crime Scene","Mid-Tier","UMP-45","Restricted","The Control Collection")) 
skinList.push(new Skin("Motorized","Mid-Tier","UMP-45","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Roadblock","Mid-Tier","UMP-45","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Oscillator","Mid-Tier","UMP-45","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Metal Flowers","Mid-Tier","UMP-45","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Briefing","Mid-Tier","UMP-45","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Riot","Mid-Tier","UMP-45","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Delusion","Mid-Tier","UMP-45","Mil-Spec","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Labyrinth","Mid-Tier","UMP-45","Mil-Spec","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Corporal","Mid-Tier","UMP-45","Mil-Spec","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Bone Pile","Mid-Tier","UMP-45","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("Full Stop","Mid-Tier","UMP-45","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("Day Lily","Mid-Tier","UMP-45","Mil-Spec","The St. Marc Collection")) 
skinList.push(new Skin("Minotaur's Labyrinth","Mid-Tier","UMP-45","Mil-Spec","The Gods and Monsters Collection")) 
skinList.push(new Skin("Blaze","Mid-Tier","UMP-45","Mil-Spec","The Mirage Collection")) 
skinList.push(new Skin("Mechanism","Mid-Tier","UMP-45","Industrial Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Houndstooth","Mid-Tier","UMP-45","Industrial Grade","The Havoc Collection")) 
skinList.push(new Skin("Carbon Fiber","Mid-Tier","UMP-45","Industrial Grade","The Bank Collection")) 
skinList.push(new Skin("Gunsmoke","Mid-Tier","UMP-45","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Fallout Warning","Mid-Tier","UMP-45","Industrial Grade","The Nuke Collection")) 
skinList.push(new Skin("Facility Dark","Mid-Tier","UMP-45","Consumer Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Mudder","Mid-Tier","UMP-45","Consumer Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Indigo","Mid-Tier","UMP-45","Consumer Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Scorched","Mid-Tier","UMP-45","Consumer Grade","The Overpass Collection")) 
skinList.push(new Skin("Urban DDPAT","Mid-Tier","UMP-45","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Caramel","Mid-Tier","UMP-45","Consumer Grade","The Assault Collection")) 
skinList.push(new Skin("Justice","Mid-Tier","MAG-7","Classified","Prisma 2 Case")) 
skinList.push(new Skin("Cinquedea","Mid-Tier","MAG-7","Classified","The Canals Collection")) 
skinList.push(new Skin("BI83 Spectrum","Mid-Tier","MAG-7","Restricted","Operation Riptide Case")) 
skinList.push(new Skin("Monster Call","Mid-Tier","MAG-7","Restricted","Fracture Case")) 
skinList.push(new Skin("SWAG-7","Mid-Tier","MAG-7","Restricted","Clutch Case")) 
skinList.push(new Skin("Petroglyph","Mid-Tier","MAG-7","Restricted","Gamma 2 Case")) 
skinList.push(new Skin("Praetorian","Mid-Tier","MAG-7","Restricted","Operation Wildfire Case")) 
skinList.push(new Skin("Heat","Mid-Tier","MAG-7","Restricted","Chroma 2 Case")) 
skinList.push(new Skin("Prism Terrace","Mid-Tier","MAG-7","Restricted","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Core Breach","Mid-Tier","MAG-7","Restricted","The 2018 Nuke Collection")) 
skinList.push(new Skin("Bulldozer","Mid-Tier","MAG-7","Restricted","The Mirage Collection")) 
skinList.push(new Skin("Insomnia","Mid-Tier","MAG-7","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Foresight","Mid-Tier","MAG-7","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Popdog","Mid-Tier","MAG-7","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Hard Water","Mid-Tier","MAG-7","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Sonar","Mid-Tier","MAG-7","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Cobalt Core","Mid-Tier","MAG-7","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Firestarter","Mid-Tier","MAG-7","Mil-Spec","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Heaven Guard","Mid-Tier","MAG-7","Mil-Spec","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Memento","Mid-Tier","MAG-7","Mil-Spec","eSports 2013 Case")) 
skinList.push(new Skin("Copper Coated","Mid-Tier","MAG-7","Mil-Spec","Anubis Collection Package")) 
skinList.push(new Skin("Counter Terrace","Mid-Tier","MAG-7","Mil-Spec","The Rising Sun Collection")) 
skinList.push(new Skin("Hazard","Mid-Tier","MAG-7","Mil-Spec","The Alpha Collection")) 
skinList.push(new Skin("Wildwood","Mid-Tier","MAG-7","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("Carbon Fiber","Mid-Tier","MAG-7","Industrial Grade","The Control Collection")) 
skinList.push(new Skin("Chainmail","Mid-Tier","MAG-7","Industrial Grade","The Norse Collection")) 
skinList.push(new Skin("Silver","Mid-Tier","MAG-7","Industrial Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Metallic DDPAT","Mid-Tier","MAG-7","Industrial Grade","The Train Collection")) 
skinList.push(new Skin("Navy Sheen","Mid-Tier","MAG-7","Consumer Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Rust Coat","Mid-Tier","MAG-7","Consumer Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Seabird","Mid-Tier","MAG-7","Consumer Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Storm","Mid-Tier","MAG-7","Consumer Grade","The Overpass Collection")) 
skinList.push(new Skin("Sand Dune","Mid-Tier","MAG-7","Consumer Grade","The Inferno Collection")) 
skinList.push(new Skin("Irradiated Alert","Mid-Tier","MAG-7","Consumer Grade","The Nuke Collection")) 
skinList.push(new Skin("Hyper Beast","Mid-Tier","Nova","Classified","Operation Wildfire Case")) 
skinList.push(new Skin("Bloomstick","Mid-Tier","Nova","Classified","eSports 2014 Summer Case")) 
skinList.push(new Skin("Antique","Mid-Tier","Nova","Classified","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Clear Polymer","Mid-Tier","Nova","Restricted","Operation Broken Fang Case")) 
skinList.push(new Skin("Toy Soldier","Mid-Tier","Nova","Restricted","Horizon Case")) 
skinList.push(new Skin("Wild Six","Mid-Tier","Nova","Restricted","Clutch Case")) 
skinList.push(new Skin("Gila","Mid-Tier","Nova","Restricted","Glove Case")) 
skinList.push(new Skin("Koi","Mid-Tier","Nova","Restricted","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Rising Skull","Mid-Tier","Nova","Restricted","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Graphite","Mid-Tier","Nova","Restricted","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Sobek's Bite","Mid-Tier","Nova","Restricted","Anubis Collection Package")) 
skinList.push(new Skin("Red Quartz","Mid-Tier","Nova","Restricted","The 2021 Train Collection")) 
skinList.push(new Skin("Baroque Orange","Mid-Tier","Nova","Restricted","The Canals Collection")) 
skinList.push(new Skin("Dark Sigil","Mid-Tier","Nova","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Windblown","Mid-Tier","Nova","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Plume","Mid-Tier","Nova","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Wood Fired","Mid-Tier","Nova","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Exo","Mid-Tier","Nova","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Ranger","Mid-Tier","Nova","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Ghost Camo","Mid-Tier","Nova","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Tempest","Mid-Tier","Nova","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("Yorkshire","Mid-Tier","Nova","Mil-Spec","The Sport & Field Collection")) 
skinList.push(new Skin("Wurst Hölle","Mid-Tier","Nova","Mil-Spec","The Overpass 2024 Collection")) 
skinList.push(new Skin("Quick Sand","Mid-Tier","Nova","Mil-Spec","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Interlock","Mid-Tier","Nova","Mil-Spec","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Modern Hunter","Mid-Tier","Nova","Mil-Spec","The Militia Collection")) 
skinList.push(new Skin("Blaze Orange","Mid-Tier","Nova","Mil-Spec","The Militia Collection")) 
skinList.push(new Skin("Rust Coat","Mid-Tier","Nova","Industrial Grade","The Havoc Collection")) 
skinList.push(new Skin("Green Apple","Mid-Tier","Nova","Industrial Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Caged Steel","Mid-Tier","Nova","Industrial Grade","The Bank Collection")) 
skinList.push(new Skin("Candy Apple","Mid-Tier","Nova","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Army Sheen","Mid-Tier","Nova","Consumer Grade","The Ancient Collection")) 
skinList.push(new Skin("Mandrel","Mid-Tier","Nova","Consumer Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Moon in Libra","Mid-Tier","Nova","Consumer Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Sand Dune","Mid-Tier","Nova","Consumer Grade","The Italy Collection")) 
skinList.push(new Skin("Polar Mesh","Mid-Tier","Nova","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Predator","Mid-Tier","Nova","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Forest Leaves","Mid-Tier","Nova","Consumer Grade","The Aztec Collection")) 
skinList.push(new Skin("Walnut","Mid-Tier","Nova","Consumer Grade","The Inferno Collection")) 
skinList.push(new Skin("The Kraken","Mid-Tier","Sawed-Off","Covert","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Kiss♥Love","Mid-Tier","Sawed-Off","Classified","Recoil Case")) 
skinList.push(new Skin("Devourer","Mid-Tier","Sawed-Off","Classified","Horizon Case")) 
skinList.push(new Skin("Wasteland Princess","Mid-Tier","Sawed-Off","Classified","Glove Case")) 
skinList.push(new Skin("Analog Input","Mid-Tier","Sawed-Off","Restricted","Kilowatt Case")) 
skinList.push(new Skin("Apocalypto","Mid-Tier","Sawed-Off","Restricted","Prisma 2 Case")) 
skinList.push(new Skin("Limelight","Mid-Tier","Sawed-Off","Restricted","Gamma Case")) 
skinList.push(new Skin("Serenity","Mid-Tier","Sawed-Off","Restricted","Chroma Case")) 
skinList.push(new Skin("Highwayman","Mid-Tier","Sawed-Off","Restricted","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Orange DDPAT","Mid-Tier","Sawed-Off","Restricted","eSports 2013 Case")) 
skinList.push(new Skin("Spirit Board","Mid-Tier","Sawed-Off","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Black Sand","Mid-Tier","Sawed-Off","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Morris","Mid-Tier","Sawed-Off","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Zander","Mid-Tier","Sawed-Off","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Fubar","Mid-Tier","Sawed-Off","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("Yorick","Mid-Tier","Sawed-Off","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Origami","Mid-Tier","Sawed-Off","Mil-Spec","Chroma 2 Case")) 
skinList.push(new Skin("Brake Light","Mid-Tier","Sawed-Off","Mil-Spec","The 2018 Inferno Collection")) 
skinList.push(new Skin("First Class","Mid-Tier","Sawed-Off","Mil-Spec","The Baggage Collection")) 
skinList.push(new Skin("Full Stop","Mid-Tier","Sawed-Off","Mil-Spec","The Italy Collection")) 
skinList.push(new Skin("Amber Fade","Mid-Tier","Sawed-Off","Mil-Spec","The Train Collection")) 
skinList.push(new Skin("Copper","Mid-Tier","Sawed-Off","Mil-Spec","The Dust Collection")) 
skinList.push(new Skin("Rust Coat","Mid-Tier","Sawed-Off","Industrial Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Snake Camo","Mid-Tier","Sawed-Off","Industrial Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Mosaico","Mid-Tier","Sawed-Off","Industrial Grade","The Alpha Collection")) 
skinList.push(new Skin("Parched","Mid-Tier","Sawed-Off","Consumer Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Clay Ambush","Mid-Tier","Sawed-Off","Consumer Grade","The Havoc Collection")) 
skinList.push(new Skin("Jungle Thicket","Mid-Tier","Sawed-Off","Consumer Grade","The St. Marc Collection")) 
skinList.push(new Skin("Bamboo Shadow","Mid-Tier","Sawed-Off","Consumer Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Sage Spray","Mid-Tier","Sawed-Off","Consumer Grade","The Overpass Collection")) 
skinList.push(new Skin("Forest DDPAT","Mid-Tier","Sawed-Off","Consumer Grade","The Bank Collection")) 
skinList.push(new Skin("Irradiated Alert","Mid-Tier","Sawed-Off","Consumer Grade","The Nuke Collection")) 
skinList.push(new Skin("XOXO","Mid-Tier","XM1014","Classified","Snakebite Case")) 
skinList.push(new Skin("Entombed","Mid-Tier","XM1014","Classified","Fracture Case")) 
skinList.push(new Skin("Incinegator","Mid-Tier","XM1014","Classified","Prisma Case")) 
skinList.push(new Skin("Tranquility","Mid-Tier","XM1014","Classified","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Zombie Offensive","Mid-Tier","XM1014","Restricted","Dreams & Nightmares Case")) 
skinList.push(new Skin("Ziggy","Mid-Tier","XM1014","Restricted","Spectrum 2 Case")) 
skinList.push(new Skin("Seasons","Mid-Tier","XM1014","Restricted","Spectrum Case")) 
skinList.push(new Skin("Black Tie","Mid-Tier","XM1014","Restricted","Chroma 3 Case")) 
skinList.push(new Skin("Teclu Burner","Mid-Tier","XM1014","Restricted","Revolver Case")) 
skinList.push(new Skin("Heaven Guard","Mid-Tier","XM1014","Restricted","Huntsman Weapon Case")) 
skinList.push(new Skin("Monster Melt","Mid-Tier","XM1014","Restricted","The Overpass 2024 Collection")) 
skinList.push(new Skin("Elegant Vines","Mid-Tier","XM1014","Restricted","The 2021 Mirage Collection")) 
skinList.push(new Skin("Ancient Lore","Mid-Tier","XM1014","Restricted","The Ancient Collection")) 
skinList.push(new Skin("Irezumi","Mid-Tier","XM1014","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Watchdog","Mid-Tier","XM1014","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Oxide Blaze","Mid-Tier","XM1014","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Slipstream","Mid-Tier","XM1014","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Scumbria","Mid-Tier","XM1014","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Quicksilver","Mid-Tier","XM1014","Mil-Spec","Chroma Case")) 
skinList.push(new Skin("Red Python","Mid-Tier","XM1014","Mil-Spec","eSports 2014 Summer Case")) 
skinList.push(new Skin("Halftone Shift","Mid-Tier","XM1014","Mil-Spec","The Graphic Design Collection")) 
skinList.push(new Skin("Frost Borre","Mid-Tier","XM1014","Mil-Spec","The Norse Collection")) 
skinList.push(new Skin("Bone Machine","Mid-Tier","XM1014","Mil-Spec","The Cache Collection")) 
skinList.push(new Skin("Red Leather","Mid-Tier","XM1014","Mil-Spec","The Baggage Collection")) 
skinList.push(new Skin("VariCamo Blue","Mid-Tier","XM1014","Mil-Spec","The Overpass Collection")) 
skinList.push(new Skin("Blaze Orange","Mid-Tier","XM1014","Mil-Spec","The Militia Collection")) 
skinList.push(new Skin("Banana Leaf","Mid-Tier","XM1014","Industrial Grade","The St. Marc Collection")) 
skinList.push(new Skin("CaliCamo","Mid-Tier","XM1014","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Blue Steel","Mid-Tier","XM1014","Industrial Grade","The Lake Collection")) 
skinList.push(new Skin("Fallout Warning","Mid-Tier","XM1014","Industrial Grade","The Nuke Collection")) 
skinList.push(new Skin("Hieroglyph","Mid-Tier","XM1014","Consumer Grade","Anubis Collection Package")) 
skinList.push(new Skin("Blue Tire","Mid-Tier","XM1014","Consumer Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Charter","Mid-Tier","XM1014","Consumer Grade","The Control Collection")) 
skinList.push(new Skin("Blue Spruce","Mid-Tier","XM1014","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("Jungle","Mid-Tier","XM1014","Consumer Grade","The Alpha Collection")) 
skinList.push(new Skin("Grassland","Mid-Tier","XM1014","Consumer Grade","The Militia Collection")) 
skinList.push(new Skin("Urban Perforated","Mid-Tier","XM1014","Consumer Grade","The Vertigo Collection")) 
skinList.push(new Skin("Downtown","Mid-Tier","M249","Restricted Machine","Recoil Case")) 
skinList.push(new Skin("Aztec","Mid-Tier","M249","Restricted Machine","CS20 Case")) 
skinList.push(new Skin("Emerald Poison Dart","Mid-Tier","M249","Restricted Machine","Spectrum Case")) 
skinList.push(new Skin("Nebula Crusader","Mid-Tier","M249","Restricted Machine","Shadow Case")) 
skinList.push(new Skin("Hypnosis","Mid-Tier","M249","Mil-Spec Machine","Gallery Case")) 
skinList.push(new Skin("O.S.I.P.R.","Mid-Tier","M249","Mil-Spec Machine","Snakebite Case")) 
skinList.push(new Skin("Deep Relief","Mid-Tier","M249","Mil-Spec Machine","Operation Broken Fang Case")) 
skinList.push(new Skin("Warbird","Mid-Tier","M249","Mil-Spec Machine","Shattered Web Case")) 
skinList.push(new Skin("Spectre","Mid-Tier","M249","Mil-Spec Machine","Chroma 3 Case")) 
skinList.push(new Skin("System Lock","Mid-Tier","M249","Mil-Spec Machine","Chroma Case")) 
skinList.push(new Skin("Magma","Mid-Tier","M249","Mil-Spec Machine","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Humidor","Mid-Tier","M249","Mil-Spec Machine","The 2021 Mirage Collection")) 
skinList.push(new Skin("Spectrogram","Mid-Tier","M249","Industrial Grade Machine","The Graphic Design Collection")) 
skinList.push(new Skin("Midnight Palm","Mid-Tier","M249","Industrial Grade Machine","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Shipping Forecast","Mid-Tier","M249","Industrial Grade Machine","The Gods and Monsters Collection")) 
skinList.push(new Skin("Gator Mesh","Mid-Tier","M249","Industrial Grade Machine","The Safehouse Collection")) 
skinList.push(new Skin("Blizzard Marbleized","Mid-Tier","M249","Industrial Grade Machine","The Office Collection")) 
skinList.push(new Skin("Submerged","Mid-Tier","M249","Consumer Grade Machine","Anubis Collection Package")) 
skinList.push(new Skin("Predator","Mid-Tier","M249","Consumer Grade Machine","The Havoc Collection")) 
skinList.push(new Skin("Jungle","Mid-Tier","M249","Consumer Grade Machine","The St. Marc Collection")) 
skinList.push(new Skin("Impact Drill","Mid-Tier","M249","Consumer Grade Machine","The Chop Shop Collection")) 
skinList.push(new Skin("Contrast Spray","Mid-Tier","M249","Consumer Grade Machine","The Overpass Collection")) 
skinList.push(new Skin("Jungle DDPAT","Mid-Tier","M249","Consumer Grade Machine","The Alpha Collection")) 
skinList.push(new Skin("Mjölnir","Mid-Tier","Negev","Classified Machine","The Norse Collection")) 
skinList.push(new Skin("dev_texture","Mid-Tier","Negev","Restricted Machine","Snakebite Case")) 
skinList.push(new Skin("Lionfish","Mid-Tier","Negev","Restricted Machine","Clutch Case")) 
skinList.push(new Skin("Power Loader","Mid-Tier","Negev","Restricted Machine","Revolver Case")) 
skinList.push(new Skin("Loudmouth","Mid-Tier","Negev","Restricted Machine","Falchion Case")) 
skinList.push(new Skin("Drop Me","Mid-Tier","Negev","Mil-Spec Machine","Recoil Case")) 
skinList.push(new Skin("Ultralight","Mid-Tier","Negev","Mil-Spec Machine","Fracture Case")) 
skinList.push(new Skin("Prototype","Mid-Tier","Negev","Mil-Spec Machine","Prisma 2 Case")) 
skinList.push(new Skin("Dazzle","Mid-Tier","Negev","Mil-Spec Machine","Gamma 2 Case")) 
skinList.push(new Skin("Man-o'-war","Mid-Tier","Negev","Mil-Spec Machine","Chroma 2 Case")) 
skinList.push(new Skin("Bratatat","Mid-Tier","Negev","Mil-Spec Machine","eSports 2014 Summer Case")) 
skinList.push(new Skin("Desert-Strike","Mid-Tier","Negev","Mil-Spec Machine","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Terrain","Mid-Tier","Negev","Mil-Spec Machine","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Infrastructure","Mid-Tier","Negev","Mil-Spec Machine","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Phoenix Stencil","Mid-Tier","Negev","Mil-Spec Machine","The Havoc Collection")) 
skinList.push(new Skin("Anodized Navy","Mid-Tier","Negev","Mil-Spec Machine","The Assault Collection")) 
skinList.push(new Skin("Wall Bang","Mid-Tier","Negev","Industrial Grade Machine","The Overpass 2024 Collection")) 
skinList.push(new Skin("Bulkhead","Mid-Tier","Negev","Industrial Grade Machine","The 2018 Nuke Collection")) 
skinList.push(new Skin("Nuclear Waste","Mid-Tier","Negev","Industrial Grade Machine","The Cache Collection")) 
skinList.push(new Skin("CaliCamo","Mid-Tier","Negev","Industrial Grade Machine","The Mirage Collection")) 
skinList.push(new Skin("Palm","Mid-Tier","Negev","Industrial Grade Machine","The Alpha Collection")) 
skinList.push(new Skin("Boroque Sand","Mid-Tier","Negev","Consumer Grade Machine","The Canals Collection")) 
skinList.push(new Skin("Army Sheen","Mid-Tier","Negev","Consumer Grade Machine","The Bank Collection")) 
skinList.push(new Skin("Inheritance","Rifle","AK-47","Covert","Kilowatt Case")) 
skinList.push(new Skin("Head Shot","Rifle","AK-47","Covert","Revolution Case")) 
skinList.push(new Skin("Nightwish","Rifle","AK-47","Covert","Dreams & Nightmares Case")) 
skinList.push(new Skin("Leet Museo","Rifle","AK-47","Covert","Operation Riptide Case")) 
skinList.push(new Skin("Legion of Anubis","Rifle","AK-47","Covert","Fracture Case")) 
skinList.push(new Skin("Asiimov","Rifle","AK-47","Covert","Danger Zone Case")) 
skinList.push(new Skin("Neon Rider","Rifle","AK-47","Covert","Horizon Case")) 
skinList.push(new Skin("The Empress","Rifle","AK-47","Covert","Spectrum 2 Case")) 
skinList.push(new Skin("Bloodsport","Rifle","AK-47","Covert","Spectrum Case")) 
skinList.push(new Skin("Neon Revolution","Rifle","AK-47","Covert","Gamma 2 Case")) 
skinList.push(new Skin("Fuel Injector","Rifle","AK-47","Covert","Operation Wildfire Case")) 
skinList.push(new Skin("Aquamarine Revenge","Rifle","AK-47","Covert","Falchion Case")) 
skinList.push(new Skin("Wasteland Rebel","Rifle","AK-47","Covert","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Jaguar","Rifle","AK-47","Covert","eSports 2014 Summer Case")) 
skinList.push(new Skin("Vulcan","Rifle","AK-47","Covert","Huntsman Weapon Case")) 
skinList.push(new Skin("Fire Serpent","Rifle","AK-47","Covert","Operation Bravo Case")) 
skinList.push(new Skin("B the Monster","Rifle","AK-47","Covert","The Overpass 2024 Collection")) 
skinList.push(new Skin("Gold Arabesque","Rifle","AK-47","Covert","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("X-Ray","Rifle","AK-47","Covert","The Havoc Collection")) 
skinList.push(new Skin("Wild Lotus","Rifle","AK-47","Covert","The St. Marc Collection")) 
skinList.push(new Skin("The Outsiders","Rifle","AK-47","Classified","Gallery Case")) 
skinList.push(new Skin("Ice Coaled","Rifle","AK-47","Classified","Recoil Case")) 
skinList.push(new Skin("Phantom Disruptor","Rifle","AK-47","Classified","Prisma 2 Case")) 
skinList.push(new Skin("Point Disarray","Rifle","AK-47","Classified","Revolver Case")) 
skinList.push(new Skin("Frontside Misty","Rifle","AK-47","Classified","Shadow Case")) 
skinList.push(new Skin("Cartel","Rifle","AK-47","Classified","Chroma Case")) 
skinList.push(new Skin("Redline","Rifle","AK-47","Classified","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Case Hardened","Rifle","AK-47","Classified","Case Hardened")) 
skinList.push(new Skin("Red Laminate","Rifle","AK-47","Classified","CS:GO Weapon Case")) 
skinList.push(new Skin("Panthera onca","Rifle","AK-47","Classified","AK-47 Case Hardened Skin & Price Details")) 
skinList.push(new Skin("Hydroponic","Rifle","AK-47","Classified","eSports 2013 Case")) 
skinList.push(new Skin("Jet Set","Rifle","AK-47","Classified","The Ancient Collection")) 
skinList.push(new Skin("Slate","Rifle","AK-47","Restricted","The Rising Sun Collection")) 
skinList.push(new Skin("Rat Rod","Rifle","AK-47","Restricted","The Baggage Collection")) 
skinList.push(new Skin("Orbit Mk01","Rifle","AK-47","Restricted","Snakebite Case")) 
skinList.push(new Skin("Blue Laminate","Rifle","AK-47","Restricted","Shattered Web Case")) 
skinList.push(new Skin("Safety Net","Rifle","AK-47","Restricted","Operation Hydra Case")) 
skinList.push(new Skin("First Class","Rifle","AK-47","Restricted","eSports 2013 Winter Case")) 
skinList.push(new Skin("Emerald Pinstripe","Rifle","AK-47","Restricted","The 2018 Inferno Collection")) 
skinList.push(new Skin("Uncharted","Rifle","AK-47","Mil-Spec","The Baggage Collection")) 
skinList.push(new Skin("Elite Build","Rifle","AK-47","Mil-Spec","The Bank Collection")) 
skinList.push(new Skin("Crossfade","Rifle","AK-47","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Steel Delta","Rifle","AK-47","Mil-Spec","Chroma 2 Case")) 
skinList.push(new Skin("Green Laminate","Rifle","AK-47","Mil-Spec","The Graphic Design Collection")) 
skinList.push(new Skin("Black Laminate","Rifle","AK-47","Mil-Spec","Anubis Collection Package")) 
skinList.push(new Skin("Olive Polycam","Rifle","AK-47","Industrial Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Baroque Purple","Rifle","AK-47","Industrial Grade","The Vertigo Collection")) 
skinList.push(new Skin("Safari Mesh","Rifle","AK-47","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("Jungle Spray","Rifle","AK-47","Industrial Grade","The Canals Collection")) 
skinList.push(new Skin("Predator","Rifle","AK-47","Industrial Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Chameleon","Rifle","AUG","Covert","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Akihabara Accept","Rifle","AUG","Covert","The Rising Sun Collection")) 
skinList.push(new Skin("Death by Puppy","Rifle","AUG","Classified","CS20 Case")) 
skinList.push(new Skin("Momentum","Rifle","AUG","Classified","Prisma Case")) 
skinList.push(new Skin("Stymphalian","Rifle","AUG","Classified","Clutch Case")) 
skinList.push(new Skin("Syd Mead","Rifle","AUG","Classified","Gamma 2 Case")) 
skinList.push(new Skin("Fleet Flock","Rifle","AUG","Classified","Chroma 3 Case")) 
skinList.push(new Skin("Bengal Tiger","Rifle","AUG","Classified","eSports 2014 Summer Case")) 
skinList.push(new Skin("Lil' Pig","Rifle","AUG","Classified","The Graphic Design Collection")) 
skinList.push(new Skin("Arctic Wolf","Rifle","AUG","Restricted","Shattered Web Case")) 
skinList.push(new Skin("Aristocrat","Rifle","AUG","Restricted","Gamma Case")) 
skinList.push(new Skin("Torque","Rifle","AUG","Restricted","Huntsman Weapon Case")) 
skinList.push(new Skin("Eye of Zapems","Rifle","AUG","Restricted","The Overpass 2024 Collection")) 
skinList.push(new Skin("Sand Storm","Rifle","AUG","Restricted","The 2021 Mirage Collection")) 
skinList.push(new Skin("Flame Jörmungandr","Rifle","AUG","Restricted","The Norse Collection")) 
skinList.push(new Skin("Midnight Lily","Rifle","AUG","Restricted","The St. Marc Collection")) 
skinList.push(new Skin("Random Access","Rifle","AUG","Restricted","The 2018 Nuke Collection")) 
skinList.push(new Skin("Luxe Trim","Rifle","AUG","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Plague","Rifle","AUG","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Tom Cat","Rifle","AUG","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Amber Slipstream","Rifle","AUG","Mil-Spec","Horizon Case")) 
skinList.push(new Skin("Triqua","Rifle","AUG","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Ricochet","Rifle","AUG","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Wings","Rifle","AUG","Mil-Spec","CS:GO Weapon Case")) 
skinList.push(new Skin("Amber Fade","Rifle","AUG","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("Carved Jade","Rifle","AUG","Mil-Spec","The Ancient Collection")) 
skinList.push(new Skin("Anodized Navy","Rifle","AUG","Mil-Spec","The Alpha Collection")) 
skinList.push(new Skin("Hot Rod","Rifle","AUG","Mil-Spec","The Assault Collection")) 
skinList.push(new Skin("Copperhead","Rifle","AUG","Mil-Spec","The Dust Collection")) 
skinList.push(new Skin("Spalted Wood","Rifle","AUG","Industrial Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Radiation Hazard","Rifle","AUG","Industrial Grade","The Cache Collection")) 
skinList.push(new Skin("Condemned","Rifle","AUG","Industrial Grade","The Safehouse Collection")) 
skinList.push(new Skin("Snake Pit","Rifle","AUG","Consumer Grade","Anubis Collection Package")) 
skinList.push(new Skin("Surveillance","Rifle","AUG","Consumer Grade","The Control Collection")) 
skinList.push(new Skin("Navy Murano","Rifle","AUG","Consumer Grade","The Canals Collection")) 
skinList.push(new Skin("Sweeper","Rifle","AUG","Consumer Grade","The 2018 Inferno Collection")) 
skinList.push(new Skin("Daedalus","Rifle","AUG","Consumer Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Storm","Rifle","AUG","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("Contractor","Rifle","AUG","Consumer Grade","The Italy Collection")) 
skinList.push(new Skin("Colony","Rifle","AUG","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Chrome Cannon","Rifle","AWP","Covert","Kilowatt Case")) 
skinList.push(new Skin("Chromatic Aberration","Rifle","AWP","Covert","Recoil Case")) 
skinList.push(new Skin("Containment Breach","Rifle","AWP","Covert","Shattered Web Case")) 
skinList.push(new Skin("Wildfire","Rifle","AWP","Covert","CS20 Case")) 
skinList.push(new Skin("Neo-Noir","Rifle","AWP","Covert","Danger Zone Case")) 
skinList.push(new Skin("Oni Taiji","Rifle","AWP","Covert","Operation Hydra Case")) 
skinList.push(new Skin("Hyper Beast","Rifle","AWP","Covert","Falchion Case")) 
skinList.push(new Skin("Man-o'-war","Rifle","AWP","Covert","Chroma Case")) 
skinList.push(new Skin("Asiimov","Rifle","AWP","Covert","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Lightning Strike","Rifle","AWP","Covert","CS:GO Weapon Case")) 
skinList.push(new Skin("CMYK","Rifle","AWP","Covert","The Graphic Design Collection")) 
skinList.push(new Skin("Desert Hydra","Rifle","AWP","Covert","The 2021 Mirage Collection")) 
skinList.push(new Skin("Fade","Rifle","AWP","Covert","The Control Collection")) 
skinList.push(new Skin("The Prince","Rifle","AWP","Covert","The Canals Collection")) 
skinList.push(new Skin("Gungnir","Rifle","AWP","Covert","The Norse Collection")) 
skinList.push(new Skin("Medusa","Rifle","AWP","Covert","The Gods and Monsters Collection")) 
skinList.push(new Skin("Dragon Lore","Rifle","AWP","Covert","The Cobblestone Collection")) 
skinList.push(new Skin("Duality","Rifle","AWP","Classified","Revolution Case")) 
skinList.push(new Skin("Mortis","Rifle","AWP","Classified","Clutch Case")) 
skinList.push(new Skin("Fever Dream","Rifle","AWP","Classified","Spectrum Case")) 
skinList.push(new Skin("Elite Build","Rifle","AWP","Classified","Operation Wildfire Case")) 
skinList.push(new Skin("Corticera","Rifle","AWP","Classified","eSports 2014 Summer Case")) 
skinList.push(new Skin("Redline","Rifle","AWP","Classified","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Electric Hive","Rifle","AWP","Classified","eSports 2013 Winter Case")) 
skinList.push(new Skin("Graphite","Rifle","AWP","Classified","Operation Bravo Case")) 
skinList.push(new Skin("BOOM","Rifle","AWP","Classified","eSports 2013 Case")) 
skinList.push(new Skin("Crakow!","Rifle","AWP","Classified","The Overpass 2024 Collection")) 
skinList.push(new Skin("Silk Tiger","Rifle","AWP","Classified","The Havoc Collection")) 
skinList.push(new Skin("Exoskeleton","Rifle","AWP","Restricted","Operation Broken Fang Case")) 
skinList.push(new Skin("Atheris","Rifle","AWP","Restricted","Prisma Case")) 
skinList.push(new Skin("PAW","Rifle","AWP","Restricted","Horizon Case")) 
skinList.push(new Skin("Phobos","Rifle","AWP","Restricted","Gamma Case")) 
skinList.push(new Skin("Worm God","Rifle","AWP","Restricted","Chroma 2 Case")) 
skinList.push(new Skin("POP AWP","Rifle","AWP","Restricted","The 2021 Train Collection")) 
skinList.push(new Skin("Pink DDPAT","Rifle","AWP","Restricted","The Overpass Collection")) 
skinList.push(new Skin("Pit Viper","Rifle","AWP","Restricted","The Italy Collection")) 
skinList.push(new Skin("Capillary","Rifle","AWP","Mil-Spec","Prisma 2 Case")) 
skinList.push(new Skin("Black Nile","Rifle","AWP","Mil-Spec","Anubis Collection Package")) 
skinList.push(new Skin("Acheron","Rifle","AWP","Mil-Spec","The 2018 Nuke Collection")) 
skinList.push(new Skin("Snake Camo","Rifle","AWP","Mil-Spec","The Dust Collection")) 
skinList.push(new Skin("Sun in Leo","Rifle","AWP","Industrial Grade","The Gods and Monsters Collection")) 
skinList.push(new Skin("Safari Mesh","Rifle","AWP","Industrial Grade","The Lake Collection")) 
skinList.push(new Skin("Commemoration","Rifle","FAMAS","Covert","CS20 Case")) 
skinList.push(new Skin("Roll Cage","Rifle","FAMAS","Covert","Gamma 2 Case")) 
skinList.push(new Skin("Rapid Eye Movement","Rifle","FAMAS","Classified","Dreams & Nightmares Case")) 
skinList.push(new Skin("Eye of Athena","Rifle","FAMAS","Classified","Horizon Case")) 
skinList.push(new Skin("Mecha Industries","Rifle","FAMAS","Classified","Glove Case")) 
skinList.push(new Skin("Djinn","Rifle","FAMAS","Classified","Chroma 2 Case")) 
skinList.push(new Skin("Afterimage","Rifle","FAMAS","Classified","eSports 2013 Winter Case")) 
skinList.push(new Skin("Waters of Nephthys","Rifle","FAMAS","Classified","Anubis Collection Package")) 
skinList.push(new Skin("Meltdown","Rifle","FAMAS","Classified","The 2021 Train Collection")) 
skinList.push(new Skin("ZX Spectron","Rifle","FAMAS","Restricted","Operation Riptide Case")) 
skinList.push(new Skin("Valence","Rifle","FAMAS","Restricted","Operation Wildfire Case")) 
skinList.push(new Skin("Neural Net","Rifle","FAMAS","Restricted","Falchion Case")) 
skinList.push(new Skin("Sergeant","Rifle","FAMAS","Restricted","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Pulse","Rifle","FAMAS","Restricted","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Prime Conspiracy","Rifle","FAMAS","Restricted","The Control Collection")) 
skinList.push(new Skin("Styx","Rifle","FAMAS","Restricted","The Cache Collection")) 
skinList.push(new Skin("Spitfire","Rifle","FAMAS","Restricted","The Alpha Collection")) 
skinList.push(new Skin("Meow 36","Rifle","FAMAS","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Decommissioned","Rifle","FAMAS","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Crypsis","Rifle","FAMAS","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Macabre","Rifle","FAMAS","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Survivor Z","Rifle","FAMAS","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Hexane","Rifle","FAMAS","Mil-Spec","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Doomkitty","Rifle","FAMAS","Mil-Spec","eSports 2013 Case")) 
skinList.push(new Skin("Dark Water","Rifle","FAMAS","Mil-Spec","The Ancient Collection")) 
skinList.push(new Skin("Sundown","Rifle","FAMAS","Mil-Spec","The St. Marc Collection")) 
skinList.push(new Skin("Teardown","Rifle","FAMAS","Mil-Spec","The Safehouse Collection")) 
skinList.push(new Skin("Half Sleeve","Rifle","FAMAS","Industrial Grade","The Sport & Field Collection")) 
skinList.push(new Skin("Halftone Wash","Rifle","FAMAS","Industrial Grade","The Graphic Design Collection")) 
skinList.push(new Skin("CaliCamo","Rifle","FAMAS","Industrial Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Cyanospatter","Rifle","FAMAS","Industrial Grade","The Lake Collection")) 
skinList.push(new Skin("Faulty Wiring","Rifle","FAMAS","Consumer Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Night Borre","Rifle","FAMAS","Consumer Grade","The Norse Collection")) 
skinList.push(new Skin("Colony","Rifle","FAMAS","Consumer Grade","The Italy Collection")) 
skinList.push(new Skin("Contrast Spray","Rifle","FAMAS","Consumer Grade","The Office Collection")) 
skinList.push(new Skin("The Executioner","Rifle","G3SG1","Classified","Revolver Case")) 
skinList.push(new Skin("Flux","Rifle","G3SG1","Classified","Shadow Case")) 
skinList.push(new Skin("Dream Glade","Rifle","G3SG1","Restricted","Dreams & Nightmares Case")) 
skinList.push(new Skin("Scavenger","Rifle","G3SG1","Restricted","Danger Zone Case")) 
skinList.push(new Skin("High Seas","Rifle","G3SG1","Restricted","Horizon Case")) 
skinList.push(new Skin("Stinger","Rifle","G3SG1","Restricted","Glove Case")) 
skinList.push(new Skin("Chronos","Rifle","G3SG1","Restricted","The Gods and Monsters Collection")) 
skinList.push(new Skin("Keeping Tabs","Rifle","G3SG1","Mil-Spec","Operation Riptide Case")) 
skinList.push(new Skin("Digital Mesh","Rifle","G3SG1","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("Black Sand","Rifle","G3SG1","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Hunter","Rifle","G3SG1","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Ventilator","Rifle","G3SG1","Mil-Spec","Gamma 2 Case")) 
skinList.push(new Skin("Orange Crash","Rifle","G3SG1","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("Murky","Rifle","G3SG1","Mil-Spec","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Azure Zebra","Rifle","G3SG1","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Demeter","Rifle","G3SG1","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("New Roots","Rifle","G3SG1","Mil-Spec","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Violet Murano","Rifle","G3SG1","Mil-Spec","The Canals Collection")) 
skinList.push(new Skin("Ancient Ritual","Rifle","G3SG1","Industrial Grade","The Ancient Collection")) 
skinList.push(new Skin("Green Apple","Rifle","G3SG1","Industrial Grade","The Bank Collection")) 
skinList.push(new Skin("VariCamo","Rifle","G3SG1","Industrial Grade","The Safehouse Collection")) 
skinList.push(new Skin("Arctic Camo","Rifle","G3SG1","Industrial Grade","The Office Collection")) 
skinList.push(new Skin("Orange Kimono","Rifle","G3SG1","Consumer Grade","The Rising Sun Collection")) 
skinList.push(new Skin("Contractor","Rifle","G3SG1","Consumer Grade","The Baggage Collection")) 
skinList.push(new Skin("Polar Camo","Rifle","G3SG1","Consumer Grade","The Train Collection")) 
skinList.push(new Skin("Safari Mesh","Rifle","G3SG1","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Jungle Dashed","Rifle","G3SG1","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("Desert Storm","Rifle","G3SG1","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Chatterbox","Rifle","Galil AR","Covert","Chroma Case")) 
skinList.push(new Skin("Chromatic Aberration","Rifle","Galil AR","Classified","Snakebite Case")) 
skinList.push(new Skin("Sugar Rush","Rifle","Galil AR","Classified","Operation Hydra Case")) 
skinList.push(new Skin("Eco","Rifle","Galil AR","Classified","Chroma 2 Case")) 
skinList.push(new Skin("Rainbow Spoon","Rifle","Galil AR","Classified","The Sport & Field Collection")) 
skinList.push(new Skin("Connexion","Rifle","Galil AR","Restricted","Fracture Case")) 
skinList.push(new Skin("Signal","Rifle","Galil AR","Restricted","Danger Zone Case")) 
skinList.push(new Skin("Crimson Tsunami","Rifle","Galil AR","Restricted","Spectrum Case")) 
skinList.push(new Skin("Firefight","Rifle","Galil AR","Restricted","Chroma 3 Case")) 
skinList.push(new Skin("Stone Cold","Rifle","Galil AR","Restricted","Shadow Case")) 
skinList.push(new Skin("Orange DDPAT","Rifle","Galil AR","Restricted","eSports 2013 Case")) 
skinList.push(new Skin("CAUTION!","Rifle","Galil AR","Restricted","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Phoenix Blacklight","Rifle","Galil AR","Restricted","The Havoc Collection")) 
skinList.push(new Skin("Cerberus","Rifle","Galil AR","Restricted","The Cache Collection")) 
skinList.push(new Skin("Destroyer","Rifle","Galil AR","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Vandal","Rifle","Galil AR","Mil-Spec","Operation Broken Fang Case")) 
skinList.push(new Skin("Akoben","Rifle","Galil AR","Mil-Spec","Prisma Case")) 
skinList.push(new Skin("Black Sand","Rifle","Galil AR","Mil-Spec","Glove Case")) 
skinList.push(new Skin("Rocket Pop","Rifle","Galil AR","Mil-Spec","Falchion Case")) 
skinList.push(new Skin("Kami","Rifle","Galil AR","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Blue Titanium","Rifle","Galil AR","Mil-Spec","eSports 2013 Winter Case")) 
skinList.push(new Skin("Sandstorm","Rifle","Galil AR","Mil-Spec","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Shattered","Rifle","Galil AR","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("Metallic Squeezer","Rifle","Galil AR","Mil-Spec","The Overpass 2024 Collection")) 
skinList.push(new Skin("Amber Fade","Rifle","Galil AR","Mil-Spec","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Dusk Ruins","Rifle","Galil AR","Mil-Spec","The Ancient Collection")) 
skinList.push(new Skin("Aqua Terrace","Rifle","Galil AR","Mil-Spec","The Rising Sun Collection")) 
skinList.push(new Skin("Tuxedo","Rifle","Galil AR","Mil-Spec","The Bank Collection")) 
skinList.push(new Skin("NV","Rifle","Galil AR","Industrial Grade","The Graphic Design Collection")) 
skinList.push(new Skin("Cold Fusion","Rifle","Galil AR","Industrial Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Urban Rubble","Rifle","Galil AR","Industrial Grade","The Chop Shop Collection")) 
skinList.push(new Skin("VariCamo","Rifle","Galil AR","Industrial Grade","The Safehouse Collection")) 
skinList.push(new Skin("Winter Forest","Rifle","Galil AR","Industrial Grade","The Office Collection")) 
skinList.push(new Skin("Tornado","Rifle","Galil AR","Consumer Grade","The Norse Collection")) 
skinList.push(new Skin("Sage Spray","Rifle","Galil AR","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("Hunting Blind","Rifle","Galil AR","Consumer Grade","The Mirage Collection")) 
skinList.push(new Skin("Vaporwave","Rifle","M4A1-S","Covert","Gallery Case")) 
skinList.push(new Skin("Printstream","Rifle","M4A1-S","Covert","Operation Broken Fang Case")) 
skinList.push(new Skin("Player Two","Rifle","M4A1-S","Covert","Prisma 2 Case")) 
skinList.push(new Skin("Mecha Industries","Rifle","M4A1-S","Covert","Gamma Case")) 
skinList.push(new Skin("Chantico's Fire","Rifle","M4A1-S","Covert","Chroma 3 Case")) 
skinList.push(new Skin("Golden Coil","Rifle","M4A1-S","Covert","Shadow Case")) 
skinList.push(new Skin("Hyper Beast","Rifle","M4A1-S","Covert","Chroma 2 Case")) 
skinList.push(new Skin("Cyrex","Rifle","M4A1-S","Covert","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Fade","Rifle","M4A1-S","Covert","The Sport & Field Collection")) 
skinList.push(new Skin("Imminent Danger","Rifle","M4A1-S","Covert","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Welcome to the Jungle","Rifle","M4A1-S","Covert","The Ancient Collection")) 
skinList.push(new Skin("Black Lotus","Rifle","M4A1-S","Classified","Kilowatt Case")) 
skinList.push(new Skin("Nightmare","Rifle","M4A1-S","Classified","Horizon Case")) 
skinList.push(new Skin("Leaded Glass","Rifle","M4A1-S","Classified","Spectrum 2 Case")) 
skinList.push(new Skin("Decimator","Rifle","M4A1-S","Classified","Spectrum Case")) 
skinList.push(new Skin("Atomic Alloy","Rifle","M4A1-S","Classified","Huntsman Weapon Case")) 
skinList.push(new Skin("Guardian","Rifle","M4A1-S","Classified","Winter Offensive Weapon Case")) 
skinList.push(new Skin("Blue Phosphor","Rifle","M4A1-S","Classified","The Control Collection")) 
skinList.push(new Skin("Control Panel","Rifle","M4A1-S","Classified","The 2018 Nuke Collection")) 
skinList.push(new Skin("Hot Rod","Rifle","M4A1-S","Classified","The Chop Shop Collection")) 
skinList.push(new Skin("Master Piece","Rifle","M4A1-S","Classified","The Overpass Collection")) 
skinList.push(new Skin("Knight","Rifle","M4A1-S","Classified","The Cobblestone Collection")) 
skinList.push(new Skin("Emphorosaur-S","Rifle","M4A1-S","Restricted","Revolution Case")) 
skinList.push(new Skin("Night Terror","Rifle","M4A1-S","Restricted","Dreams & Nightmares Case")) 
skinList.push(new Skin("Flashback","Rifle","M4A1-S","Restricted","Glove Case")) 
skinList.push(new Skin("Basilisk","Rifle","M4A1-S","Restricted","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Bright Water","Rifle","M4A1-S","Restricted","Operation Bravo Case")) 
skinList.push(new Skin("Dark Water","Rifle","M4A1-S","Restricted","CS:GO Weapon Case")) 
skinList.push(new Skin("Icarus Fell","Rifle","M4A1-S","Restricted","The Gods and Monsters Collection")) 
skinList.push(new Skin("Nitro","Rifle","M4A1-S","Restricted","The Safehouse Collection")) 
skinList.push(new Skin("Briefing","Rifle","M4A1-S","Mil-Spec","Operation Hydra Case")) 
skinList.push(new Skin("Blood Tiger","Rifle","M4A1-S","Mil-Spec","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Fizzy POP","Rifle","M4A1-S","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("VariCamo","Rifle","M4A1-S","Mil-Spec","The Dust 2 Collection")) 
skinList.push(new Skin("Wash me plz","Rifle","M4A1-S","Industrial Grade","The Overpass 2024 Collection")) 
skinList.push(new Skin("Mud-Spec","Rifle","M4A1-S","Industrial Grade","Anubis Collection Package")) 
skinList.push(new Skin("Moss Quartz","Rifle","M4A1-S","Industrial Grade","The Norse Collection")) 
skinList.push(new Skin("Boreal Forest","Rifle","M4A1-S","Industrial Grade","The Italy Collection")) 
skinList.push(new Skin("Temukau","Rifle","M4A4","Covert","Revolution Case")) 
skinList.push(new Skin("In Living Color","Rifle","M4A4","Covert","Snakebite Case")) 
skinList.push(new Skin("The Emperor","Rifle","M4A4","Covert","Prisma Case")) 
skinList.push(new Skin("Neo-Noir","Rifle","M4A4","Covert","Clutch Case")) 
skinList.push(new Skin("Buzz Kill","Rifle","M4A4","Covert","Glove Case")) 
skinList.push(new Skin("The Battlestar","Rifle","M4A4","Covert","Operation Wildfire Case")) 
skinList.push(new Skin("Royal Paladin","Rifle","M4A4","Covert","Revolver Case")) 
skinList.push(new Skin("Bullet Rain","Rifle","M4A4","Covert","eSports 2014 Summer Case")) 
skinList.push(new Skin("Desert-Strike","Rifle","M4A4","Covert","Huntsman Weapon Case")) 
skinList.push(new Skin("Asiimov","Rifle","M4A4","Covert","Winter Offensive Weapon Case")) 
skinList.push(new Skin("X-Ray","Rifle","M4A4","Covert","eSports 2013 Winter Case")) 
skinList.push(new Skin("Eye of Horus","Rifle","M4A4","Covert","Anubis Collection Package")) 
skinList.push(new Skin("The Coalition","Rifle","M4A4","Covert","The 2021 Train Collection")) 
skinList.push(new Skin("Cyber Security","Rifle","M4A4","Classified","Operation Broken Fang Case")) 
skinList.push(new Skin("Tooth Fairy","Rifle","M4A4","Classified","Fracture Case")) 
skinList.push(new Skin("Hellfire","Rifle","M4A4","Classified","Operation Hydra Case")) 
skinList.push(new Skin("Desolate Space","Rifle","M4A4","Classified","Gamma Case")) 
skinList.push(new Skin("龍王 (Dragon King)","Rifle","M4A4","Classified","Chroma Case")) 
skinList.push(new Skin("Poseidon","Rifle","M4A4","Classified","The Gods and Monsters Collection")) 
skinList.push(new Skin("Turbine","Rifle","M4A4","Restricted","Gallery Case")) 
skinList.push(new Skin("Etch Lord","Rifle","M4A4","Restricted","Kilowatt Case")) 
skinList.push(new Skin("Spider Lily","Rifle","M4A4","Restricted","Operation Riptide Case")) 
skinList.push(new Skin("Evil Daimyo","Rifle","M4A4","Restricted","Falchion Case")) 
skinList.push(new Skin("Griffin","Rifle","M4A4","Restricted","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Zirka","Rifle","M4A4","Restricted","Operation Bravo Case")) 
skinList.push(new Skin("Polysoup","Rifle","M4A4","Restricted","The Graphic Design Collection")) 
skinList.push(new Skin("Red DDPAT","Rifle","M4A4","Restricted","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Daybreak","Rifle","M4A4","Restricted","The Rising Sun Collection")) 
skinList.push(new Skin("Modern Hunter","Rifle","M4A4","Restricted","The Militia Collection")) 
skinList.push(new Skin("Poly Mag","Rifle","M4A4","Mil-Spec","Recoil Case")) 
skinList.push(new Skin("Magnesium","Rifle","M4A4","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Faded Zebra","Rifle","M4A4","Mil-Spec","eSports 2013 Case")) 
skinList.push(new Skin("Global Offensive","Rifle","M4A4","Mil-Spec","The Control Collection")) 
skinList.push(new Skin("Converter","Rifle","M4A4","Mil-Spec","The 2018 Inferno Collection")) 
skinList.push(new Skin("Radiation Hazard","Rifle","M4A4","Mil-Spec","The Nuke Collection")) 
skinList.push(new Skin("Dark Blossom","Rifle","M4A4","Industrial Grade","The St. Marc Collection")) 
skinList.push(new Skin("Mainframe","Rifle","M4A4","Industrial Grade","The 2018 Nuke Collection")) 
skinList.push(new Skin("Urban DDPAT","Rifle","M4A4","Industrial Grade","The Train Collection")) 
skinList.push(new Skin("Tornado","Rifle","M4A4","Industrial Grade","The Inferno Collection")) 
skinList.push(new Skin("Desert Storm","Rifle","M4A4","Industrial Grade","The Dust Collection")) 
skinList.push(new Skin("Jungle Tiger","Rifle","M4A4","Industrial Grade","The Aztec Collection")) 
skinList.push(new Skin("Bloodsport","Rifle","SCAR-20","Classified","Gamma Case")) 
skinList.push(new Skin("Cardiac","Rifle","SCAR-20","Classified","Operation Vanguard Weapon Case")) 
skinList.push(new Skin("Cyrex","Rifle","SCAR-20","Classified","Huntsman Weapon Case")) 
skinList.push(new Skin("Splash Jam","Rifle","SCAR-20","Classified","The Militia Collection")) 
skinList.push(new Skin("Enforcer","Rifle","SCAR-20","Restricted","Prisma 2 Case")) 
skinList.push(new Skin("Powercore","Rifle","SCAR-20","Restricted","Gamma 2 Case")) 
skinList.push(new Skin("Emerald","Rifle","SCAR-20","Restricted","The Alpha Collection")) 
skinList.push(new Skin("Trail Blazer","Rifle","SCAR-20","Mil-Spec","Gallery Case")) 
skinList.push(new Skin("Fragments","Rifle","SCAR-20","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Poultrygeist","Rifle","SCAR-20","Mil-Spec","Dreams & Nightmares Case")) 
skinList.push(new Skin("Torn","Rifle","SCAR-20","Mil-Spec","Shattered Web Case")) 
skinList.push(new Skin("Assault","Rifle","SCAR-20","Mil-Spec","CS20 Case")) 
skinList.push(new Skin("Jungle Slipstream","Rifle","SCAR-20","Mil-Spec","Spectrum 2 Case")) 
skinList.push(new Skin("Blueprint","Rifle","SCAR-20","Mil-Spec","Spectrum Case")) 
skinList.push(new Skin("Outbreak","Rifle","SCAR-20","Mil-Spec","Revolver Case")) 
skinList.push(new Skin("Green Marine","Rifle","SCAR-20","Mil-Spec","Shadow Case")) 
skinList.push(new Skin("Grotto","Rifle","SCAR-20","Mil-Spec","Chroma Case")) 
skinList.push(new Skin("Crimson Web","Rifle","SCAR-20","Mil-Spec","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Wild Berry","Rifle","SCAR-20","Mil-Spec","The Graphic Design Collection")) 
skinList.push(new Skin("Magna Carta","Rifle","SCAR-20","Mil-Spec","The Control Collection")) 
skinList.push(new Skin("Brass","Rifle","SCAR-20","Mil-Spec","The Norse Collection")) 
skinList.push(new Skin("Carbon Fiber","Rifle","SCAR-20","Industrial Grade","The Train Collection")) 
skinList.push(new Skin("Palm","Rifle","SCAR-20","Industrial Grade","The Dust Collection")) 
skinList.push(new Skin("Stone Mosaico","Rifle","SCAR-20","Consumer Grade","The Canals Collection")) 
skinList.push(new Skin("Army Sheen","Rifle","SCAR-20","Consumer Grade","The Chop Shop Collection")) 
skinList.push(new Skin("Storm","Rifle","SCAR-20","Consumer Grade","The Cobblestone Collection")) 
skinList.push(new Skin("Contractor","Rifle","SCAR-20","Consumer Grade","The Safehouse Collection")) 
skinList.push(new Skin("Sand Mesh","Rifle","SCAR-20","Consumer Grade","The Dust 2 Collection")) 
skinList.push(new Skin("Colony IV","Rifle","SG 553","Classified","Shattered Web Case")) 
skinList.push(new Skin("Cyrex","Rifle","SG 553","Classified","Falchion Case")) 
skinList.push(new Skin("Hazard Pay","Rifle","SG 553","Classified","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Integrale","Rifle","SG 553","Classified","The 2018 Inferno Collection")) 
skinList.push(new Skin("Dragon Tech","Rifle","SG 553","Restricted","Recoil Case")) 
skinList.push(new Skin("Darkwing","Rifle","SG 553","Restricted","Prisma 2 Case")) 
skinList.push(new Skin("Phantom","Rifle","SG 553","Restricted","Spectrum 2 Case")) 
skinList.push(new Skin("Triarch","Rifle","SG 553","Restricted","Gamma 2 Case")) 
skinList.push(new Skin("Tiger Moth","Rifle","SG 553","Restricted","Revolver Case")) 
skinList.push(new Skin("Pulse","Rifle","SG 553","Restricted","Operation Phoenix Weapon Case")) 
skinList.push(new Skin("Hypnotic","Rifle","SG 553","Restricted","The Havoc Collection")) 
skinList.push(new Skin("Bulldozer","Rifle","SG 553","Restricted","The Chop Shop Collection")) 
skinList.push(new Skin("Cyberforce","Rifle","SG 553","Mil-Spec","Revolution Case")) 
skinList.push(new Skin("Heavy Metal","Rifle","SG 553","Mil-Spec","Snakebite Case")) 
skinList.push(new Skin("Ol' Rusty","Rifle","SG 553","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Danger Close","Rifle","SG 553","Mil-Spec","Danger Zone Case")) 
skinList.push(new Skin("Aloha","Rifle","SG 553","Mil-Spec","Clutch Case")) 
skinList.push(new Skin("Aerial","Rifle","SG 553","Mil-Spec","Gamma Case")) 
skinList.push(new Skin("Atlas","Rifle","SG 553","Mil-Spec","Chroma 3 Case")) 
skinList.push(new Skin("Wave Spray","Rifle","SG 553","Mil-Spec","Operation Bravo Case")) 
skinList.push(new Skin("Ultraviolet","Rifle","SG 553","Mil-Spec","CS:GO Weapon Case")) 
skinList.push(new Skin("Berry Gel Coat","Rifle","SG 553","Mil-Spec","The Graphic Design Collection")) 
skinList.push(new Skin("Desert Blossom","Rifle","SG 553","Mil-Spec","The 2021 Mirage Collection")) 
skinList.push(new Skin("Anodized Navy","Rifle","SG 553","Mil-Spec","The Lake Collection")) 
skinList.push(new Skin("Damascus Steel","Rifle","SG 553","Mil-Spec","The Dust 2 Collection")) 
skinList.push(new Skin("Candy Apple","Rifle","SG 553","Industrial Grade","The Canals Collection")) 
skinList.push(new Skin("Fallout Warning","Rifle","SG 553","Industrial Grade","The Cache Collection")) 
skinList.push(new Skin("Traveler","Rifle","SG 553","Industrial Grade","The Baggage Collection")) 
skinList.push(new Skin("Gator Mesh","Rifle","SG 553","Industrial Grade","The Mirage Collection")) 
skinList.push(new Skin("Bleached","Rifle","SG 553","Consumer Grade","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Lush Ruins","Rifle","SG 553","Consumer Grade","The Ancient Collection")) 
skinList.push(new Skin("Barricade","Rifle","SG 553","Consumer Grade","The Norse Collection")) 
skinList.push(new Skin("Army Sheen","Rifle","SG 553","Consumer Grade","The Bank Collection")) 
skinList.push(new Skin("Waves Perforated","Rifle","SG 553","Consumer Grade","The Lake Collection")) 
skinList.push(new Skin("Tornado","Rifle","SG 553","Consumer Grade","The Assault Collection")) 
skinList.push(new Skin("Dragonfire","Rifle","SSG 08","Covert","Glove Case")) 
skinList.push(new Skin("Blood in the Water","Rifle","SSG 08","Covert","CS:GO Weapon Case 2")) 
skinList.push(new Skin("Turbo Peek","Rifle","SSG 08","Classified","Operation Riptide Case")) 
skinList.push(new Skin("Bloodshot","Rifle","SSG 08","Classified","Shattered Web Case")) 
skinList.push(new Skin("Big Iron","Rifle","SSG 08","Classified","Shadow Case")) 
skinList.push(new Skin("Death Strike","Rifle","SSG 08","Classified","The 2021 Dust 2 Collection")) 
skinList.push(new Skin("Rapid Transit","Rifle","SSG 08","Restricted","Gallery Case")) 
skinList.push(new Skin("Parallax","Rifle","SSG 08","Restricted","Operation Broken Fang Case")) 
skinList.push(new Skin("Fever Dream","Rifle","SSG 08","Restricted","Prisma 2 Case")) 
skinList.push(new Skin("Death's Head","Rifle","SSG 08","Restricted","Operation Hydra Case")) 
skinList.push(new Skin("Ghost Crusader","Rifle","SSG 08","Restricted","Chroma 3 Case")) 
skinList.push(new Skin("Sea Calico","Rifle","SSG 08","Restricted","The St. Marc Collection")) 
skinList.push(new Skin("Dezastre","Rifle","SSG 08","Mil-Spec","Kilowatt Case")) 
skinList.push(new Skin("Mainframe 001","Rifle","SSG 08","Mil-Spec","Fracture Case")) 
skinList.push(new Skin("Necropos","Rifle","SSG 08","Mil-Spec","Operation Wildfire Case")) 
skinList.push(new Skin("Dark Water","Rifle","SSG 08","Mil-Spec","eSports 2014 Summer Case")) 
skinList.push(new Skin("Abyss","Rifle","SSG 08","Mil-Spec","Operation Breakout Weapon Case")) 
skinList.push(new Skin("Slashed","Rifle","SSG 08","Mil-Spec","Huntsman Weapon Case")) 
skinList.push(new Skin("Zeno","Rifle","SSG 08","Mil-Spec","The Sport & Field Collection")) 
skinList.push(new Skin("Spring Twilly","Rifle","SSG 08","Mil-Spec","The 2021 Train Collection")) 
skinList.push(new Skin("Threat Detected","Rifle","SSG 08","Mil-Spec","The Control Collection")) 
skinList.push(new Skin("Orange Filigree","Rifle","SSG 08","Mil-Spec","The Canals Collection")) 
skinList.push(new Skin("Hand Brake","Rifle","SSG 08","Mil-Spec","The 2018 Inferno Collection")) 
skinList.push(new Skin("Detour","Rifle","SSG 08","Mil-Spec","The Overpass Collection")) 
skinList.push(new Skin("Acid Fade","Rifle","SSG 08","Mil-Spec","The Safehouse Collection")) 
skinList.push(new Skin("Halftone Whorl","Rifle","SSG 08","Industrial Grade","The Graphic Design Collection")) 
skinList.push(new Skin("Azure Glyph","Rifle","SSG 08","Industrial Grade","Anubis Collection Package")) 
skinList.push(new Skin("Carbon Fiber","Rifle","SSG 08","Industrial Grade","The 2021 Vertigo Collection")) 
skinList.push(new Skin("Tropical Storm","Rifle","SSG 08","Industrial Grade","The Mirage Collection")) 
skinList.push(new Skin("Mayan Dreams","Rifle","SSG 08","Industrial Grade","The Alpha Collection")) 
skinList.push(new Skin("Prey","Rifle","SSG 08","Consumer Grade","The 2021 Mirage Collection")) 
skinList.push(new Skin("Jungle Dashed","Rifle","SSG 08","Consumer Grade","The Ancient Collection")) 
skinList.push(new Skin("Red Stone","Rifle","SSG 08","Consumer Grade","The Norse Collection")) 
skinList.push(new Skin("Sand Dune","Rifle","SSG 08","Consumer Grade","The Baggage Collection")) 
skinList.push(new Skin("Blue Spruce","Rifle","SSG 08","Consumer Grade","The Safehouse Collection")) 
skinList.push(new Skin("Lichen Dashed","Rifle","SSG 08","Consumer Grade","The Aztec Collection")) 
  
=======
    //ca 1222
    
    //howl = new Skin("Navn",klasseTall,VåpenTall,Sjeldenhetstall)
    //Klasse tall 0=pistol 1=mid tier 2=rifle 
    //sjeldenhetstall 0=Contraband 1=Covert 2=Classified 3=Restricted 4=Mil-Spec 5= industrial Grade 6=Consumer Grade

    //Legge til collection for å øke "skill" behov + årstall med oransje/gul farge når innenfor 1 år (Legg til samtidig etter alle skins så bruk cheat sheet med alle colelctions + årstall)

    //Mid tier 
    {
        //Våpentall mid tier 0=negev 1=m249  2=xm1014 3=mag-7 4=sawed off 5=nova   6=ump 7=mp7 8=p90 9=mp9 10=mp5 11=pp-bizon 12=mac-10

        //Mac-10
        {
            skinList.push(Stalker = new Skin("Stalker",1,12,1));
            skinList.push(Neon_RiderMac = new Skin("Neon Rider",1,12,1));

            skinList.push(Toybox = new Skin("Toybox",1,12,2));
            skinList.push(Disco_Tech = new Skin("Disco Tech",1,12,2));
            skinList.push(Propaganda = new Skin("Propaganda",1,12,2));
            skinList.push(Hot_Snakes = new Skin("Hot Snakes",1,12,2));

            skinList.push(Saiba_Oni = new Skin("Saibā Oni",1,12,3));
            skinList.push(Sakkaku = new Skin("Sakkaku",1,12,3));
            skinList.push(Button_Masher = new Skin("Button Masher",1,12,3));
            skinList.push(Allure = new Skin("Allure",1,12,3));
            skinList.push(Pipe_Down = new Skin("Pipe Down",1,12,3));
            skinList.push(Last_Dive = new Skin("Last Dive",1,12,3));
            skinList.push(Malachite = new Skin("Malachite",1,12,3));
            skinList.push(Tatter = new Skin("Tatter",1,12,3));
            skinList.push(Curse = new Skin("Curse",1,12,3));
            skinList.push(HeatMac = new Skin("Heat",1,12,3));
            skinList.push(Graven = new Skin("Graven",1,12,3));
            skinList.push(Case_HardenedMac = new Skin("Case Hardened",1,12,3));
            skinList.push(Gold_Brick = new Skin("Gold Brick",1,12,3));
            skinList.push(Red_Filigree = new Skin("Red Filigree",1,12,3));

            skinList.push(Light_Box = new Skin("Light Box",1,12,4));
            skinList.push(Monkeyflage = new Skin("Monekyflage",1,12,4));
            skinList.push(Ensnared = new Skin("Ensnared",1,12,4));
            skinList.push(Classic_Crate = new Skin("Classic Crate",1,12,4));
            skinList.push(Whitefish = new Skin("Whitefish",1,12,4));
            skinList.push(OceanicMac = new Skin("Oceanic",1,12,4));
            skinList.push(AlohaMac = new Skin("Aloha",1,12,4));
            skinList.push(Carnivore = new Skin("Carnivore",1,12,4));
            skinList.push(Lapis_Gator = new Skin("Lapis Gator",1,12,4));
            skinList.push(Rangeen = new Skin("Rangeen",1,12,4));
            skinList.push(UltralightMac = new Skin("Ultraviolet",1,12,4));
            skinList.push(Pipsqueak = new Skin("Pipsqueak",1,12,4));
            skinList.push(Copper_Borre = new Skin("Copper_Borre",1,12,4));
            skinList.push(FadeMac = new Skin("Fade",1,12,4));
            skinList.push(Nuclear_GardenMac = new Skin("Nuclear Garden",1,12,4));
            skinList.push(Amber_FadeMac = new Skin("Amber Fade",1,12,4));

            skinList.push(Echoing_Sands = new Skin("Echoing Sands",1,12,5));
            skinList.push(Calf_Skin = new Skin("Calf Skin",1,12,5));
            skinList.push(Commuter = new Skin("Commuter",1,12,5));
            skinList.push(SilverMac = new Skin("Silver",1,12,5));
            skinList.push(PalmMac = new Skin("PalmMac",1,12,5));
            skinList.push(Candy_AppleMac = new Skin("Candy Apple",1,12,5));

            skinList.push(Strats = new Skin("Strats",1,12,6));
            skinList.push(Sienna_DamaskMac = new Skin("Sienna Damask",1,12,6));
            skinList.push(Surfwood = new Skin("Surfwood",1,12,6));
            skinList.push(IndigoMac = new Skin("Indigo",1,12,6));
            skinList.push(TornadoMac = new Skin("Tornado",1,12,6));
            skinList.push(Urban_DDPATMac = new Skin("Urban_DDPAT",1,12,6));
        }

        //PP-Bizon
        {
            skinList.push(JudgementOfAnubis = new Skin("Judgement of Anubis",1,11,1));

            skinList.push(High_Roller = new Skin("High Roller",1,11,2));

            skinList.push(Space_Cat = new Skin("Space Cat",1,11,3));
            skinList.push(Embargo = new Skin("Embargo",1,11,3));
            skinList.push(Fuel_Rod = new Skin("Fuel Rod",1,11,3));
            skinList.push(Blue_Streak = new Skin("Blue Streak",1,11,3));
            skinList.push(Osiris = new Skin("Osiris",1,11,3));
            skinList.push(AntiquePP = new Skin("Antique",1,11,3));

            skinList.push(Lumen = new Skin("Lumen",1,11,4));
            skinList.push(Runic = new Skin("Runic",1,11,4));
            skinList.push(Night_Riot = new Skin("Night Riot",1,11,4));
            skinList.push(Jungle_SlipstreamPP = new Skin("Jungle Slipstream",1,11,4));
            skinList.push(Harvester = new Skin("Harvester",1,11,4));
            skinList.push(Photic_Zone = new Skin("Photic Zone",1,11,4));
            skinList.push(Water_Sigil = new Skin("Water Sigil",1,11,4));
            skinList.push(Cobalt_Halftone = new Skin("Cobalt Halftone",1,11,4));
            skinList.push(BrassPP = new Skin("Brass",1,11,4));
            skinList.push(Rust_CoatPP = new Skin("Rust Coat",1,11,4));
            skinList.push(Modern_HunterPP = new Skin("Modern Hunter",1,11,4));

            skinList.push(Cold_Cell = new Skin("Cold Cell",1,11,5));
            skinList.push(Breaker_Box = new Skin("Breaker Box",1,11,5));
            skinList.push(Candy_ApplePP = new Skin("Candy Apple",1,11,5));
            skinList.push(Chemical_Green = new Skin("Chemical Green",1,11,5));
            skinList.push(Night_OpsPP = new Skin("Night Ops",1,11,5));
            skinList.push(Carbon_FiberPP = new Skin("Carbon Fiber",1,11,5));

            skinList.push(Anolis = new Skin("Anolis",1,11,6));
            skinList.push(Death_RattlePP = new Skin("Death Rattle",1,11,6));
            skinList.push(SeabirdPP = new Skin("Seabird",1,11,6));
            skinList.push(Facility_Sketch = new Skin("Facility Sketch",1,11,6));
            skinList.push(Bamboo_Print = new Skin("Bamboo Print",1,11,6));
            skinList.push(Sand_DashedPP = new Skin("Sand Dashed",1,11,6));
            skinList.push(Urban_DashedPP = new Skin("Urban Dashed",1,11,6));
            skinList.push(Forest_LeavesPP = new Skin("Forest Leaves",1,11,6));
            skinList.push(Irradiated_AlertPP = new Skin("Irradiated Alert",1,11,6));
        }

        //Mp5
        {
            skinList.push(Phoshphor = new Skin("Phosphor",1,10,2));
            skinList.push(Oxide_Oasis = new Skin("Oxide Oasis",1,10,2));

            skinList.push(Kitbash = new Skin("Kitbash",1,10,3));
            skinList.push(Agent = new Skin("Agent",1,10,3));
            skinList.push(Gauss = new Skin("Gauss",1,10,3));
            skinList.push(Autumn_Twilly = new Skin("Autumn Twilly",1,10,3));
            skinList.push(Lab_Rats = new Skin("Lab_Rats",1,10,3));

            skinList.push(Statics = new Skin("Statics",1,10,4));
            skinList.push(Liquidation = new Skin("Liquidation",1,10,4));
            skinList.push(NecroJr = new Skin("Necro Jr.",1,10,4));
            skinList.push(Condition_Zero = new Skin("Condition Zero",1,10,4));
            skinList.push(Desert_StrikeMP5 = new Skin("Desert Strike",1,10,4));
            skinList.push(Acid_Wash = new Skin("Acid Wash",1,10,4));
            skinList.push(Co_Processor = new Skin("Co-Processor",1,10,4));

            skinList.push(Neon_Squeezer = new Skin("Neon Squeezer",1,10,5));
            skinList.push(Savannah_Halftone = new Skin("Savannah Halftone",1,10,5));
            skinList.push(NitroMP5 = new Skin("Nitro",1,10,5));

            skinList.push(Bamboo_Garden = new Skin("Bamboo Garden",1,10,6));
            skinList.push(Dirt_Drop = new Skin("Dirt Drop",1,10,6));
        }

        //MP9
        {
            skinList.push(Starlight_Protector = new Skin("Starlight Protector",1,9,1));

            skinList.push(Food_Chain = new Skin("Food Chain",1,9,2));
            skinList.push(Hydra = new Skin("Hydra",1,9,2));
            skinList.push(Airlock = new Skin("Airlock",1,9,2));
            skinList.push(Wild_Lily = new Skin("Wild Lily",1,9,2));

            skinList.push(Mount_Fuji = new Skin("Mount Fuji",1,9,3));
            skinList.push(GooMP9 = new Skin("Goo",1,9,3));
            skinList.push(Ruby_Poison_Dart = new Skin("Ruby Poison Dart",1,9,3));
            skinList.push(Rose_Iron = new Skin("Rose Iron",1,9,3));
            skinList.push(HypnoticMP9 = new Skin("Hypnotic",1,9,3));
            skinList.push(Arctic_Tri_Tone = new Skin("Arctic Tri-Tone",1,9,3));
            skinList.push(Stained_Glass = new Skin("Stained Glass",1,9,3));
            skinList.push(BulldozerMp9 = new Skin("Bulldozer",1,9,3));

            skinList.push(Featherweight = new Skin("Featherweight",1,9,4));
            skinList.push(Modest_Threat = new Skin("Modest Threat",1,9,4));
            skinList.push(CapillaryMP9 = new Skin("Capillary",1,9,4));
            skinList.push(Black_SandMP9 = new Skin("Black Sand",1,9,4));
            skinList.push(Sand_ScaleMP9 = new Skin("Sand Scale",1,9,4));
            skinList.push(Bioleak = new Skin("Bioleak",1,9,4));
            skinList.push(Deadly_Poison = new Skin("Deadly Poison",1,9,4));
            skinList.push(Dart = new Skin("Dart",1,9,4));
            skinList.push(Music_Box = new Skin("Music Box",1,9,4));
            skinList.push(Pandora_Box = new Skin("Pandora's Box",1,9,4));
            skinList.push(Setting_Sun = new Skin("Setting Sun",1,9,4));
            skinList.push(Dark_Age = new Skin("Dark Age",1,9,4));
            skinList.push(Hot_RodMP9 = new Skin("Hot Rod",1,9,4));

            skinList.push(Old_Roots = new Skin("Old Roots",1,9,5));
            skinList.push(Orange_PeelMP9 = new Skin("Orange Peel",1,9,5));

            skinList.push(Army_SheenMP9 = new Skin("Army Sheen",1,9,6));
            skinList.push(SlideMP9 = new Skin("Slide",1,9,6));
            skinList.push(StormMP9 = new Skin("Storm",1,9,6));
            skinList.push(Green_PlaidMP9 = new Skin("Green Plaid",1,9,6));
            skinList.push(Sand_DashedMP9 = new Skin("Sand Dashed",1,9,6));
            skinList.push(Dry_Season = new Skin("Dry Season",1,9,6));
        }

        //P90
        {
            skinList.push(AsiimovP90 = new Skin("Asiimov",1,8,1));
            skinList.push(Death_By_Kitty = new Skin("Death by Kitty",1,8,1));

            skinList.push(Nostalgia = new Skin("Nostalgia",1,8,2));
            skinList.push(Shallow_Grave = new Skin("Shallow Grave",1,8,2));
            skinList.push(Shapewood = new Skin("Shapewood",1,8,2));
            skinList.push(Trigon = new Skin("Trigon",1,8,2));
            skinList.push(Cold_Blooded = new Skin("Cold Blooded",1,8,2));
            skinList.push(Emerald_Dragon = new Skin("Emerald Dragon",1,8,2));
            skinList.push(Run_and_Hide = new Skin("Run and Hide",1,8,2));

            skinList.push(Randy_Rush = new Skin("Randy Rush",1,8,3));
            skinList.push(Neoqueen = new Skin("Neoqueen",1,8,3));
            skinList.push(Vent_Rush = new Skin("Vent Rush",1,8,3));
            skinList.push(Death_Grip = new Skin("Death Grip",1,8,3));
            skinList.push(Chopper = new Skin("Chopper",1,8,3));
            skinList.push(Virus = new Skin("Virus",1,8,3));
            skinList.push(Blind_Spot = new Skin("Blind Spot",1,8,3));
            skinList.push(Attack_Vector = new Skin("Attack Vector",1,8,3));
            skinList.push(ScaraB_Rush = new Skin("ScaraB Rush",1,8,3));
            skinList.push(Astral_Jormungandr = new Skin("Astral Jörmungandr",1,8,3));

            skinList.push(Cocoa_Rampage = new Skin("Cocoa Rampage",1,8,4));
            skinList.push(Freight = new Skin("Freight",1,8,4));
            skinList.push(Off_WorldP90 = new Skin("Off World",1,8,4));
            skinList.push(Traction = new Skin("Traction",1,8,4));
            skinList.push(Grim = new Skin("Grim",1,8,4));
            skinList.push(Elite_BuildP90 = new Skin("Elite Build",1,8,4));
            skinList.push(Module = new Skin("Module",1,8,4));
            skinList.push(Desert_Warfare = new Skin("Desert Warfare",1,8,4));
            skinList.push(Schematic = new Skin("Schematic",1,8,4));
            skinList.push(Tiger_Pit = new Skin("Tiger Pit",1,8,4));
            skinList.push(Baroque_Red = new Skin("Baroque Red",1,8,4));
            skinList.push(Facility_Negative = new Skin("Facility Negative",1,8,4));
            skinList.push(TeardownP90 = new Skin("Teardown",1,8,4));
            skinList.push(Glacier_Mesh = new Skin("Glacier Mesh",1,8,4));

            skinList.push(Wash_Me = new Skin("Wash me",1,8,5));
            skinList.push(Verdant_Growth = new Skin("Verdant Growth",1,8,5));
            skinList.push(Sunset_Lily = new Skin("Sunset Lily",1,8,5));
            skinList.push(Leather = new Skin("Leather",1,8,5));
            skinList.push(Ash_Wood = new Skin("Ash Wood",1,8,5));
            skinList.push(Fallout_WarningP90 = new Skin("Fallout Warning",1,8,5));

            skinList.push(Desert_DDPAT = new Skin("Desert DDPAT",1,8,6));
            skinList.push(Ancient_Earth = new Skin("Ancient Earth",1,8,6));
            skinList.push(StormP90 = new Skin("StormP90",1,8,6));
            skinList.push(ScorchedP90 = new Skin("Scorched",1,8,6));
            skinList.push(Sand_SprayP90 = new Skin("Sand Spray",1,8,6));
        }

        //MP7
        {
            skinList.push(BloodsportMP7 = new Skin("Bloodsport",1,7,1));
            
            skinList.push(Abyssal_Apparition = new Skin("Abyssal Apparition",1,7,2));
            skinList.push(Nemesis = new Skin("Nemesis",1,7,2));

            skinList.push(Just_Smile = new Skin("Just Smile",1,7,3));
            skinList.push(Neon_Ply = new Skin("Neon Ply",1,7,3));
            skinList.push(PowercoreMP7 = new Skin("Powercore",1,7,3));
            skinList.push(Impire = new Skin("Impire",1,7,3));
            skinList.push(Special_Delivery = new Skin("Special Delivery",1,7,3));
            skinList.push(Ocean_FoamMp7 = new Skin("Ocean Foam",1,7,3));
            skinList.push(FadeMp7 = new Skin("Fade",1,7,3));

            skinList.push(Guerrilla = new Skin("Guerrilla",1,7,4));
            skinList.push(Mischief = new Skin("Mischief",1,7,4));
            skinList.push(AkobenMP7 = new Skin("Akoben",1,7,4));
            skinList.push(Cirrus = new Skin("Cirrus",1,7,4));
            skinList.push(Armor_Core = new Skin("Armor Core",1,7,4));
            skinList.push(Urban_HazardMP7 = new Skin("Urban Hazard",1,7,4));
            skinList.push(SkullsMp7 = new Skin("Skulls",1,7,4));
            skinList.push(Teal_Blossom = new Skin("Teal Blossom",1,7,4));
            skinList.push(Full_StopMp7 = new Skin("Full Stop",1,7,4));
            skinList.push(Anodized_NavyMP7 = new Skin("Anodized Navy",1,7,4));
            skinList.push(WhiteoutMP7 = new Skin("Whiteout",1,7,4));
            
            skinList.push(Astrolabe = new Skin("Astrolabe",1,7,5));
            skinList.push(Vault_Heist = new Skin("Vault Heist",1,7,5));
            skinList.push(Tall_Grass = new Skin("Tall Grass",1,7,5));
            skinList.push(Motherboard = new Skin("Motherboard",1,7,5));
            skinList.push(GunsmokeMP7 = new Skin("Gunsmoke",1,7,5));
            skinList.push(Orange_PeelMP7 = new Skin("Orange Peel",1,7,5));

            skinList.push(Sunbaked = new Skin("Sunbaked",1,7,6));
            skinList.push(PreyMP7 = new Skin("Prey",1,7,6));
            skinList.push(ScorchedMP7 = new Skin("Scorched",1,7,6));
            skinList.push(Asterion = new Skin("Asterion",1,7,6));
            skinList.push(Olive_Plaid = new Skin("Olive Plaid",1,7,6));
            skinList.push(Forest_DDPATMp7 = new Skin("Forest DDPAT",1,7,6));
            skinList.push(Army_Recon = new Skin("Army Recon",1,7,6));
            skinList.push(GroundwaterMp7 = new Skin("Groundwater",1,7,6));
        }

        //Ump
        {
            skinList.push(Neo_NoirUmp = new Skin("Neo-Noir",1,6,2));
            skinList.push(Wild_Child = new Skin("Wild Child",1,6,2));
            skinList.push(MomentumUmp = new Skin("Momentum",1,6,2));
            skinList.push(Primal_Saber = new Skin("Primal Saber",1,6,2));
            skinList.push(FadeUmp = new Skin("Fade",1,6,2));

            skinList.push(Gold_Bismuth = new Skin("Gold Bismuth",1,6,3));
            skinList.push(Plastique = new Skin("Plastique",1,6,3));
            skinList.push(MoonriseUmp = new Skin("Moonrise",1,6,3));
            skinList.push(Arctic_WolfUmp = new Skin("Arctic Wolf",1,6,3));
            skinList.push(Exposure = new Skin("Exposure",1,6,3));
            skinList.push(Scaffold = new Skin("Scaffold",1,6,3));
            skinList.push(Grand_Prix = new Skin("Grand Prix",1,6,3));
            skinList.push(Crimson_Foil = new Skin("Crimson Foil",1,6,3));
            skinList.push(Crimse_Scene = new Skin("Crimson Scene",1,6,3));

            skinList.push(Motorized = new Skin("Motorized",1,6,4));
            skinList.push(Roadblock = new Skin("Roadblock",1,6,4));
            skinList.push(OscillatorUmp = new Skin("Oscillator",1,6,4));
            skinList.push(Metal_Flowers = new Skin("Metal Flowers",1,6,4));
            skinList.push(BriefingUmp = new Skin("Briefing",1,6,4));
            skinList.push(RiotUmp = new Skin("Riot",1,6,4));
            skinList.push(Delusion = new Skin("Delusion",1,6,4));
            skinList.push(Labyrinth = new Skin("Labyrinth",1,6,4));
            skinList.push(Corporal = new Skin("Corporal",1,6,4));
            skinList.push(Bone_Pile = new Skin("Bone Pile",1,6,4));
            skinList.push(Full_StopUmp = new Skin("Full Stop",1,6,4));
            skinList.push(Day_Lily = new Skin("Day Lily",1,6,4));
            skinList.push(MinotaursLabyrinth = new Skin("Minotaur's Labyrinth",1,6,4));
            skinList.push(BlazeUmp = new Skin("Blaze",1,6,4));

            skinList.push(Mechanism = new Skin("Mechanism",1,6,5));
            skinList.push(Houndstooth = new Skin("Houndstooth",1,6,5));
            skinList.push(Carbon_FiberUMP = new Skin("Carbon Fiber",1,6,5));
            skinList.push(GunsmokeUmp = new Skin("Gunsmoke",1,6,5));
            skinList.push(Fallout_WarningUmp = new Skin("Fallout Warning",1,6,5));

            skinList.push(MudderUmp = new Skin("Mudder",1,6,6));
            skinList.push(Facility_Dark = new Skin("Facility Dark",1,6,6));
            skinList.push(IndigoUmp = new Skin("Indigo",1,6,6));
            skinList.push(ScorchedUmp = new Skin("Scorched",1,6,6));
            skinList.push(Urban_DDPATUmp = new Skin("Urban DDPAT",1,6,6));
            skinList.push(Caramel = new Skin("Caramel",1,6,6));



        }

        //Nova
        {
            skinList.push(Hyper_BeastNova = new Skin("Hyper Beast",1,5,2));
            skinList.push(Bloomstick = new Skin("Bloomstick",1,5,2));
            skinList.push(Antique = new Skin("Antique",1,5,2));

            skinList.push(Clear_PolymerNova = new Skin("Clear Polymer",1,5,3));
            skinList.push(Toy_Soldier = new Skin("Toy Soldier",1,5,3));
            skinList.push(Wild_Six = new Skin("Wild Six",1,5,3));
            skinList.push(Gila = new Skin("Gila",1,5,3));
            skinList.push(Koi = new Skin("Koi",1,5,3));
            skinList.push(Rising_Skull = new Skin("Rising Skull",1,5,3));
            skinList.push(GraphiteNova = new Skin("Graphite",1,5,3));
            skinList.push(Sobeks_Bite = new Skin("Sobek's Bite",1,5,3));
            skinList.push(Red_QuartzNova = new Skin("Red Quartz",1,5,3));
            skinList.push(Baroque_Orange = new Skin("Baroque Orange",1,5,3));

            skinList.push(Dark_Sigil = new Skin("Dark Sigil",1,5,4));
            skinList.push(Windblown = new Skin("Windblown",1,5,4));
            skinList.push(Plume = new Skin("Plume",1,5,4));
            skinList.push(Wood_Fired = new Skin("Wood Fired",1,5,4));
            skinList.push(Exo = new Skin("Exo",1,5,4));
            skinList.push(Ranger = new Skin("Range",1,5,4));
            skinList.push(Ghost_Camo = new Skin("Ghost Camo",1,5,4));
            skinList.push(Wurst_Holle = new Skin("Wurst Hölle",1,5,4));
            skinList.push(Yorkshire = new Skin("Yorkshire",1,5,4));
            skinList.push(Quick_Sand = new Skin("Quick Sand",1,5,4));
            skinList.push(Interlock = new Skin("Interlock",1,5,4));
            skinList.push(Blaze_OrangeNova = new Skin("Blaze Orange",1,5,4));
            skinList.push(Modern_HunterNova = new Skin("Modern Hunter",1,5,4));

            skinList.push(Rust_CoatNova = new Skin("Rust Coat",1,5,5));
            skinList.push(Green_Apple = new Skin("Green Apple",1,5,5));
            skinList.push(Caged_Steel = new Skin("Caged Steel",1,5,5));
            skinList.push(Candy_AppleNova = new Skin("Candy Apple",1,5,5));

            skinList.push(Army_SheenNova = new Skin("Army Sheen",1,5,6));
            skinList.push(Mandrel = new Skin("Mandrel",1,5,6));
            skinList.push(Moon_in_LibraNova = new Skin("Moon in Libra",1,5,6));
            skinList.push(Sand_DuneNova = new Skin("Sand Dune",1,5,6));
            skinList.push(Polar_Mesh = new Skin("Polar Mesh",1,5,6));
            skinList.push(PredatorNova = new Skin("Predator",1,5,6));
            skinList.push(Forest_LeavesNova = new Skin("Forest Leaves",1,5,6));
            skinList.push(Walnut = new Skin("Walnut",1,5,6));
        }

        //Sawed Off
        {
            skinList.push(TheKraken = new Skin("The Kraken",1,4,1));

            skinList.push(KissLove = new Skin("Kiss♥Love",1,4,2));
            skinList.push(Devourer = new Skin("Devourer",1,4,2));
            skinList.push(Wasteland_Princess = new Skin("Wasteland Princess",1,4,2));

            skinList.push(AnalogInput = new Skin("Analog Input",1,4,3));
            skinList.push(Apocalypto = new Skin("Apocalypto",1,4,3));
            skinList.push(Limelight = new Skin("Limelight",1,4,3));
            skinList.push(Serenity = new Skin("Serenity",1,4,3));
            skinList.push(Highwayman = new Skin("Highwayman",1,4,3));
            skinList.push(Orange_DDPATsaw = new Skin("Orange DDPAT",1,4,3));

            skinList.push(Spirit_Board = new Skin("Spirit Board",1,4,4));
            skinList.push(Black_SandSaw = new Skin("Black Sand",1,4,4));
            skinList.push(Morris = new Skin("Morris",1,4,4));
            skinList.push(Zander = new Skin("Zander",1,4,4));
            skinList.push(FubarSaw = new Skin("FubarSaw",1,4,4));
            skinList.push(Yorick = new Skin("Yorick",1,4,4));
            skinList.push(Origami = new Skin("Origami",1,4,4));
            skinList.push(Brake_Light = new Skin("Brake Light",1,4,4));
            skinList.push(First_ClassSAw = new Skin("First Class",1,4,4));
            skinList.push(Full_Stop = new Skin("Full Stop",1,4,4));
            skinList.push(Amber_FadeSaw = new Skin("Amber Fade",1,4,4));
            skinList.push(Copper = new Skin("Copper",1,4,4));

            skinList.push(Rust_CoatSaw = new Skin("Rust Coat",1,4,5));
            skinList.push(Snake_CamoSaw = new Skin("Snake Camo",1,4,5));
            skinList.push(Mosaico = new Skin("Mosaico",1,4,5));

            skinList.push(Parched = new Skin("Parched",1,4,6));
            skinList.push(Clay_Ambush = new Skin("Clay Ambush",1,4,6));
            skinList.push(Jungle_Thicket = new Skin("Jungle Thicket",1,4,6));
            skinList.push(Bamboo_Shadow = new Skin("Bamboo Shadow",1,4,6));
            skinList.push(Sage_SpraySaw = new Skin("Sage Spray",1,4,6));
            skinList.push(Forest_DDPATSaw = new Skin("Forest DDPAT",1,4,6));
            skinList.push(Irradiated_AlertSaw = new Skin("Irradiated Alert",1,4,6));
        }

        //Mag-7
        {
            //Classified
            skinList.push(Justice = new Skin("Justice",1,3,2));
            skinList.push(Cinquedea = new Skin("Cinquedea",1,3,2));

            //Restricted
            skinList.push(Bi83 = new Skin("BI83 Spectrum",1,3,3));
            skinList.push(Monster_Call = new Skin("Monster Call",1,3,3));
            skinList.push(Swag7 = new Skin("Swag-7",1,3,3));
            skinList.push(Petroglyph = new Skin("Petroglyph",1,3,3));
            skinList.push(Praetorian = new Skin("Praetorian",1,3,3));
            skinList.push(HeatMag = new Skin("Heat",1,3,3));
            skinList.push(Prism_Terrace = new Skin("Prism Terrace",1,3,3));
            skinList.push(Core_Breach = new Skin("Core Breach",1,3,3));
            skinList.push(BulldozerMag = new Skin("Bulldozer",1,3,3));

            //Mil-spec
            skinList.push(Insomnia = new Skin("Insomnia",1,3,4));
            skinList.push(Foresight = new Skin("Foresight",1,3,4));
            skinList.push(Popdog = new Skin("Popdog",1,3,4));
            skinList.push(Hard_Water = new Skin("Hard Water",1,3,4));
            skinList.push(Sonar = new Skin("Sonar",1,3,4));
            skinList.push(Cobalt_Core = new Skin("Cobalt Core",1,3,4));
            skinList.push(Firestarter = new Skin("Firestarter",1,3,4));
            skinList.push(Heaven_GuardMag = new Skin("Heaven Guard",1,3,4));
            skinList.push(Memento = new Skin("Memento",1,3,4));
            skinList.push(Copper_Coated = new Skin("Copper COated",1,3,4));
            skinList.push(Counter_Terrace = new Skin("Counter Terrace",1,3,4));
            skinList.push(Hazard = new Skin("Hazard",1,3,4));

            //Industrial
            skinList.push(Wildwood = new Skin("Wildwood",1,3,5));
            skinList.push(Carbon_FiberMag = new Skin("Carbon Fiber",1,3,5));
            skinList.push(ChainmailMag = new Skin("Chainmail",1,3,5));
            skinList.push(SilverMag = new Skin("Silver",1,3,5));
            skinList.push(Metallic_DDPATMag = new Skin("Metallic DDPAT",1,3,5));

            //Consumer
            skinList.push(Navy_Sheen = new Skin("Navy Sheen",1,3,6));
            skinList.push(Rust_Coat = new Skin("Rust Coat",1,3,6));
            skinList.push(Seabird = new Skin("Seabird",1,3,6));
            skinList.push(StormMag = new Skin("Storm",1,3,6));
            skinList.push(Irradiated_Alert = new Skin("Irradiated Alert",1,3,6));
            skinList.push(Sand_DuneMag = new Skin("Sand Dune",1,3,6));
        }
        
        //Xm1014
        {
            //Classified
            skinList.push(Xoxo = new Skin("XOXO",1,2,2));
            skinList.push(Entombed = new Skin("Entombed",1,2,2));
            skinList.push(Incinegator = new Skin("Incinegator",1,2,2));
            skinList.push(Tranquility = new Skin("Tranquility",1,2,2));

            //Restricted
            skinList.push(Zombie_Offensive = new Skin("Zombie Offensive",1,2,3));
            skinList.push(Ziggy = new Skin("Ziggy",1,2,3));
            skinList.push(Seasons = new Skin("Seasons",1,2,3));
            skinList.push(Black_TieXM = new Skin("Black Tie",1,2,3));
            skinList.push(Teclu_Burner = new Skin("Teclu Burner",1,2,3));
            skinList.push(Heaven_Guard = new Skin("Heaven Guard",1,2,3));
            skinList.push(Monster_Melt = new Skin("Monster Melt",1,2,3));
            skinList.push(Elegant_Vines = new Skin("Elegant Vines",1,2,3));
            skinList.push(Ancient_Lore = new Skin("Ancient Lore",1,2,3));

            //Mil-spec
            skinList.push(Irezumi = new Skin("Irezumi",1,2,4));
            skinList.push(Watchdog = new Skin("Watchdog",1,2,4));
            skinList.push(Oxide_BlazeXM = new Skin("Oxide Blaze",1,2,4));
            skinList.push(Slipstream = new Skin("Slipstream",1,2,4));
            skinList.push(ScumbriaXM = new Skin("Scumbria",1,2,4));
            skinList.push(Quicksilver = new Skin("Quicksilver",1,2,4));
            skinList.push(Red_Python = new Skin("Red Python",1,2,4));
            skinList.push(Halftone_Shift = new Skin("Halftone Shift",1,2,4));
            skinList.push(Frost_Borre = new Skin("Frost Borre",1,2,4));
            skinList.push(Bone_Machine = new Skin("Bone Machine",1,2,4));
            skinList.push(Red_Leather = new Skin("Red Leather",1,2,4));
            skinList.push(VariCamo_Blue = new Skin("VariCamo Blue",1,2,4));
            skinList.push(Blaze_Orange = new Skin("Blaze Orange",1,2,4));

            //Industrial
            skinList.push(Banana_Leaf = new Skin("Banana Leaf",1,2,5));
            skinList.push(Blue_SteelXM = new Skin("Blue Steel",1,2,5));
            skinList.push(CaliCamoXM = new Skin("CaliCamo",1,2,5));
            skinList.push(Fallout_WarningXM = new Skin("Fallout Warning",1,2,5));
            
            //Consumer
            skinList.push(Hieroglyph = new Skin("Hieroglyph",1,2,6));
            skinList.push(Blue_Tire = new Skin("Blue Tire",1,2,6));
            skinList.push(Charter = new Skin("Charter",1,2,6));
            skinList.push(Blue_SpruceXM = new Skin("Blue Spruce",1,2,6));
            skinList.push(JungleXM = new Skin("Jungle",1,2,6));
            skinList.push(GrasslandXM = new Skin("Grassland",1,2,6));
            skinList.push(Urban_Perforated = new Skin("Urban Perforated",1,2,6));


            
        }
        //M249
        {

            //restricted
            skinList.push(Downtown = new Skin("Downtown",1,1,3));
            skinList.push(Aztec = new Skin("Aztec",1,1,3));
            skinList.push(Emerald_Poison_Dart = new Skin("Emerald Poison Dart",1,1,3));
            skinList.push(Nebula_Crusader = new Skin("Nebula Crusader",1,1,3));
            
            //Mil-Spec
            skinList.push(Hypnosis = new Skin("Hypnosis",1,1,4));
            skinList.push(Osipr = new Skin("O.S.I.P.R",1,1,4));
            skinList.push(Deep_Relief = new Skin("Deep Relief",1,1,4));
            skinList.push(Warbird = new Skin("Warbird",1,1,4));
            skinList.push(Spectre = new Skin("Spectre",1,1,4));
            skinList.push(System_Lock = new Skin("System Lock",1,1,4));
            skinList.push(Magma = new Skin("Magma",1,1,4));
            skinList.push(Humidor = new Skin("Humidor",1,1,4));

            //Industrial
            skinList.push(Spectogram = new Skin("Spectogram",1,1,5));
            skinList.push(Midnight_PalmM249 = new Skin("Midnight Palm",1,1,5));
            skinList.push(Shipping_Forecast = new Skin("Shipping Forecast",1,1,5));
            skinList.push(Gator_MeshM249 = new Skin("Gator Mesh",1,1,5));
            skinList.push(Blizzard_Marbleized = new Skin("Blizzard Marbleized",1,1,5));

            //Consumer
            skinList.push(Submerged = new Skin("Submerged",1,1,6));
            skinList.push(PredatorM249 = new Skin("Predator",1,1,6));
            skinList.push(JungleM249 = new Skin("Jungle",1,1,6));
            skinList.push(Impact_Drill = new Skin("Impact Drill",1,1,6));
            skinList.push(Contrast_SprayM249 = new Skin("Contrast Spray",1,1,6));
            skinList.push(Jungle_DDPAT = new Skin("Jungle",1,1,6));
        }

        //Negev
        {
            //Classified
            skinList.push(Mjolnir = new Skin("Mjölnir",1,0,2));

            //Restricted
            skinList.push(dev_texture = new Skin("dev_texture",1,0,3));
            skinList.push(Lionfish = new Skin("Lionfish",1,0,3));
            skinList.push(Power_Loader = new Skin("Power Loader",1,0,3));
            skinList.push(Loudmouth = new Skin("Loudmouth",1,0,3));

            //Mil-spec
            skinList.push(Drop_Me = new Skin("Drop Me",1,0,4));
            skinList.push(Ultralight = new Skin("Ultralight",1,0,4));
            skinList.push(Prototype = new Skin("Prototype",1,0,4));
            skinList.push(Dazzle = new Skin("Dazzle",1,0,4));
            skinList.push(Man_o_WarNegev = new Skin("Man-o'-war",1,0,4));
            skinList.push(Bratatat = new Skin("Bratatat",1,0,4));
            skinList.push(Desert_StrikeNegev = new Skin("Desert Strike",1,0,4));
            skinList.push(Terrain = new Skin("Terrain",1,0,4));
            skinList.push(Infrastructure = new Skin("Infrastructure",1,0,4));
            skinList.push(Phoenix_Stencil = new Skin("Phoenix Stencil",1,0,4));
            skinList.push(Anodized_NavyNegev = new Skin("Anodized Navy",1,0,4));

            //Industrial
            skinList.push(Wall_Bang = new Skin("Wall_Bang",1,0,5));
            skinList.push(Bulkhead = new Skin("Bulkhead",1,0,5));
            skinList.push(Nuclear_Waste = new Skin("Nuclear Waste",1,0,5));
            skinList.push(CaliCamoNegev = new Skin("CaliCamo",1,0,5));
            skinList.push(PalmNegev = new Skin("Palm",1,0,5));

            //Consumer
            skinList.push(Boroque_Sand = new Skin("Boroque Sand",1,0,6));
            skinList.push(Army_SheenNegev = new Skin("Army Sheen",1,0,6));
            
        }
    }

    //Pistols
    {
        //Våpentall Pistol 0=Usp-s 1=P2000 2=Glock 3=Desert Eagle 4=Revolver 5=Dual Berettas 6=Cz-75 7=Five-Seven 8=Tec-9 9=P250

        //USP-S
        {
            //Covert
            skinList.push(PrintstreamUSP = new Skin("Printstream",0,0,1));
            skinList.push(Neo_NoirUSP = new Skin("Neo-Noir",0,0,1));
            skinList.push(The_Traitor = new Skin("The Traitor",0,0,1));
            skinList.push(Kill_Confirmed = new Skin("Kill Confirmed",0,0,1));

            //Classified
            skinList.push(Jawbreaker = new Skin("Jawbreaker",0,0,2));
            skinList.push(Monster_Mashup = new Skin("Monster Mashup",0,0,2));
            skinList.push(Cortex = new Skin("Cortex",0,0,2));
            skinList.push(Caiman = new Skin("Caiman",0,0,2));
            skinList.push(Orion = new Skin("Orion",0,0,2));
            skinList.push(Serum = new Skin("Serum",0,0,2));
            skinList.push(WhiteoutUSP = new Skin("Whiteout",0,0,2));
            skinList.push(Target_Acquired = new Skin("Target Acquired",0,0,2));

            //Restricted
            skinList.push(Ticket_to_hell = new Skin("Ticket to Hell",0,0,3));
            skinList.push(FlashbackUSP = new Skin("Flashback",0,0,3));
            skinList.push(CyrexUSP = new Skin("Cyrex",0,0,3));
            skinList.push(GuardianUSP = new Skin("Guardian",0,0,3));
            skinList.push(OvergrowthUSP = new Skin("Overgrowth",0,0,3));
            skinList.push(Dark_WaterUSP = new Skin("Dark Water",0,0,3));
            skinList.push(Orange_Anolis= new Skin("Orange Anolis",0,0,3));
            skinList.push(Ancient_Visions = new Skin("Ancient Visions",0,0,3));
            skinList.push(Road_Rash = new Skin("Road Rash",0,0,3));

            //Mil-Spec
            skinList.push(Usp027 = new Skin("027",0,0,4));
            skinList.push(Black_LotusUSP = new Skin("Black Lotus",0,0,4));
            skinList.push(Blueprint = new Skin("Blueprint",0,0,4));
            skinList.push(Lead_Conduit = new Skin("Lead Conduit",0,0,4));
            skinList.push(Torque = new Skin("Torque",0,0,4));
            skinList.push(Blood_TigerUSP = new Skin("Blood Tiger",0,0,4));
            skinList.push(Stainless = new Skin("Stainless",0,0,4));
            skinList.push(Alpnie_CamoUSP = new Skin("Alpine Camo",0,0,4));
            skinList.push(PurpeDDPAT = new Skin("Purple DDPAT",0,0,4));
            skinList.push(Check_Engine = new Skin("Check Engine",0,0,4));
            skinList.push(Business_Class = new Skin("Business Class",0,0,4));
            skinList.push(Night_OpsUSP = new Skin("Night Ops",0,0,4));

            //Industrial Grade
            skinList.push(DesertTactical = new Skin("Desert Tactical",0,0,5));
            skinList.push(Pathfinder = new Skin("Pathfinder",0,0,5));
            skinList.push(Para_Green = new Skin("Para Green",0,0,5));
            skinList.push(Royal_Blue = new Skin("Royal Blue",0,0,5));
            skinList.push(Forest_LeavesUSP = new Skin("Forest Leaves",0,0,5));
        }

        //P2000
        {
            //Covert
            skinList.push(FireElemental = new Skin("Fire Elemental",0,1,1));

            //Classified
            skinList.push(Wicked_Sick = new Skin("Wicked Sick",0,1,2));
            skinList.push(Imperial_Dragon = new Skin("Imperial Dragon",0,1,2));
            skinList.push(Corticera = new Skin("Corticera",0,1,2));
            skinList.push(Ocean_Foam = new Skin("Ocean Foam",0,1,2));

            //Restricted
            skinList.push(Acid_Etched = new Skin("Acid Etched",0,1,3));
            skinList.push(Obsidian = new Skin("Obsidian",0,1,3));
            skinList.push(Woodsman = new Skin("Woodsman",0,1,3));
            skinList.push(Handgun = new Skin("Handgun",0,1,3));
            skinList.push(Space_Race = new Skin("Space Race",0,1,3));
            skinList.push(Amber_FadeP2000 = new Skin("Amber Fade",0,1,3));
            skinList.push(Scorpion = new Skin("Scorpion",0,1,3));

            //Mil-Spec
            skinList.push(Lifted_Spirits = new Skin("Lifted Spirits",0,1,4));
            skinList.push(Gnarled = new Skin("Gnarled",0,1,4));
            skinList.push(Urban_Hazard = new Skin("Urban Hazard",0,1,4));
            skinList.push(Turf = new Skin("Turf",0,1,4));
            skinList.push(OceanicP2000 = new Skin("Oceanic",0,1,4));
            skinList.push(Imperial = new Skin("Imperial",0,1,4));
            skinList.push(Ivory = new Skin("Ivory",0,1,4));
            skinList.push(Pulse = new Skin("Pulse",0,1,4));
            skinList.push(Red_FragCam = new Skin("Red FragCam",0,1,4));
            skinList.push(Dispatch = new Skin("Dispatch",0,1,4));
            skinList.push(Chainmail = new Skin("Chainmail",0,1,4));
            skinList.push(SilverP2000 = new Skin("Silver",0,1,4));

            //Industrial
            skinList.push(Coral_Halftone = new Skin("Coral Halftone",0,1,5));
            skinList.push(Panther_Camo = new Skin("Panter Camo",0,1,5));
            skinList.push(Pathfinder = new Skin("Pathfinder",0,1,5));
            skinList.push(Coach_Class = new Skin("Ivory",0,1,5));
            skinList.push(Grassland = new Skin("Grassland",0,1,5));
            skinList.push(Granite_Marbleized = new Skin("Granite Marbleized",0,1,5));
            skinList.push(Grassland_Leaves = new Skin("Grassland Leaves",0,1,5));

        }

        //Glock
        {
            //Covert
            skinList.push(Gold_Toof = new Skin("Gold Toof",0,2,1));
            skinList.push(Neo_NoirGlock = new Skin("Neo-Noir",0,2,1));
            skinList.push(Bullet_Queen = new Skin("Bullet Queen",0,2,1));
            skinList.push(Wasteland_RebelGlock = new Skin("Wasteland Rebel",0,2,1));
            skinList.push(Gamma_Doppler = new Skin("Gamma Doppler",0,2,1));

            //Classified
            skinList.push(Snack_Attack = new Skin("Snack Attack",0,2,2));
            skinList.push(Vogue = new Skin("Vogue",0,2,2));
            skinList.push(Water_Elemental = new Skin("Water Elemental",0,2,2));
            skinList.push(Axia = new Skin("AXIA",0,2,2));
            skinList.push(Twilight_Galaxy = new Skin("Twilight Galaxy",0,2,2));

            //Restricted
            skinList.push(Block_18 = new Skin("Block-18",0,2,3));
            skinList.push(Umbral_Rabbit = new Skin("Umbral Rabbit",0,2,3));
            skinList.push(MoonriseGlock = new Skin("Moonrise",0,2,3));
            skinList.push(Weasel = new Skin("Weasel",0,2,3));
            skinList.push(Grinder = new Skin("Grinder",0,2,3));
            skinList.push(Steel_Disruption = new Skin("Steel Disruption",0,2,3));
            skinList.push(Dragon_Tattoo = new Skin("Dragon Tattoo",0,2,3));
            skinList.push(Rameses_Reach = new Skin("Ramese's Reach",0,2,3));
            skinList.push(Franklin = new Skin("Franklin",0,2,3));
            skinList.push(Pink_DDPATGlock = new Skin("Pink_DDPAT",0,2,3));
            skinList.push(Royal_Legion = new Skin("Royal Legion",0,2,3));
            skinList.push(Synth_Leaf = new Skin("Synth Leaf",0,2,3));
            skinList.push(Nuclear_Garden = new Skin("Nuclear Garden",0,2,3));
            skinList.push(BrassGlock = new Skin("Brass",0,2,3));
            skinList.push(FadeGlock = new Skin("Fade",0,2,3));

            //Mil-Spec
            skinList.push(Winterized = new Skin("Winterized",0,2,4));
            skinList.push(Clear_Polymer = new Skin("Clear Polymer",0,2,4));
            skinList.push(Sacrifice = new Skin("Sacrifice",0,2,4));
            skinList.push(Oxide_BlazeGlock = new Skin("Oxide Blaze",0,2,4));
            skinList.push(Warhawk = new Skin("Warhawk",0,2,4));
            skinList.push(Off_WorldGlock = new Skin("Off World",0,2,4));
            skinList.push(Ironwork = new Skin("Ironwork",0,2,4));
            skinList.push(Wraiths = new Skin("Wraiths",0,2,4));
            skinList.push(Bunsen_Burner = new Skin("Bunsen Burner",0,2,4));
            skinList.push(Catacombs = new Skin("Catacombs",0,2,4));
            skinList.push(Blue_Fissure = new Skin("Blue Fissure",0,2,4));
            skinList.push(Teal_Graf = new Skin("Teal Graf",0,2,4));
            skinList.push(Reactor = new Skin("Reactor",0,2,4));
            skinList.push(Candy_Apple = new Skin("Candy Apple",0,2,4));

            //Industrial
            skinList.push(Red_Tire = new Skin("Red Tire",0,2,5));
            skinList.push(High_Beam = new Skin("High Beam",0,2,5));
            skinList.push(NightGlock = new Skin("NightGlock",0,2,5));
            skinList.push(Death_RattleGlock = new Skin("Death Rattle",0,2,5));
            skinList.push(Groundwater = new Skin("Groundwater",0,2,5));
            skinList.push(Sand_DuneGlock = new Skin("Sand Dune",0,2,5));
        }

        //Desert Eagle
        {
            //Covert
            skinList.push(Ocean_Drive = new Skin("Ocean Drive",0,3,1));
            skinList.push(PrintstreamDeagle = new Skin("Printstream",0,3,1));
            skinList.push(Code_Red = new Skin("Code Red",0,3,1));
            skinList.push(Golden_Koi = new Skin("Golden Koi",0,3,1));

            //Classified
            skinList.push(Mecha_IndustriesDeagle = new Skin("Mecha Industries",0,3,2));
            skinList.push(Kumicho_Dragon = new Skin("Kumicho Dragon",0,3,2));
            skinList.push(Conspiracy = new Skin("Conspiracy",0,3,2));
            skinList.push(Cobalt_Disruption = new Skin("Cobalt_Disruption",0,3,2));
            skinList.push(Hypnotic = new Skin("Hypnotic",0,3,2));
            skinList.push(Starcade = new Skin("Starcade",0,3,2));
            skinList.push(Heat_Treated = new Skin("Heat Treated",0,3,2));
            skinList.push(Fennec_Fox = new Skin("Fennec Fox",0,3,2));

            //Restricted
            skinList.push(Trigger_Discipline = new Skin("Trigger Discipline",0,3,3));
            skinList.push(Light_Rail = new Skin("Light_Rail",0,3,3));
            skinList.push(Directive = new Skin("Directive",0,3,3));
            skinList.push(Naga = new Skin("Naga",0,3,3));
            skinList.push(Crimson_WebDeagle = new Skin("Crimson Web",0,3,3));
            skinList.push(Heirloom = new Skin("Heirloom",0,3,3));
            skinList.push(EmeraldJormungandr = new Skin("Emerlad Jörmungandr",0,3,3));
            skinList.push(Sunset_Storm1= new Skin("Sunset Storm 弐",0,3,3));
            skinList.push(Sunset_Storm2 = new Skin("Sunset Storm 壱",0,3,3));
            skinList.push(Hand_Cannon = new Skin("Hand Cannon",0,3,3));
            skinList.push(Pilot = new Skin("Pilot",0,3,3));
            skinList.push(Blaze = new Skin("Blaze",0,3,3));

            //Mil-spec
            skinList.push(Calligraffiti = new Skin("Calligraffiti",0,3,4));
            skinList.push(Blue_Ply = new Skin("Blue Ply",0,3,4));
            skinList.push(Oxide_BlazeDeagle = new Skin("Oxide Blaze",0,3,4));
            skinList.push(Corinthian = new Skin("Corinthian",0,3,4));
            skinList.push(Bronze_Deco = new Skin("Bronze_Deco",0,3,4));
            skinList.push(Sputnik = new Skin("Sputnik",0,3,4));
            skinList.push(Night_Heist = new Skin("Night_Heist",0,3,4));
            skinList.push(Meteorite = new Skin("Meteorite",0,3,4));
            skinList.push(Urban_RubbleDeagle = new Skin("Urban Rubble",0,3,4));

            //industrial grade
            skinList.push(Tilted = new Skin("Tilted",0,3,5));
            skinList.push(The_Bronze = new Skin("The Bronze",0,3,5));
            skinList.push(Midnight_Storm = new Skin("Midnight Storm",0,3,5));
            skinList.push(NightDeagle = new Skin("Night",0,3,5));
            skinList.push(Urban_DDPATDeagle = new Skin("Urban DDPAT",0,3,5));
            skinList.push(Mudder = new Skin("Mudder",0,3,5));

        }

        //Revolver
        {
            //Covert
            skinList.push(FadeR8 = new Skin("Fade",0,4,1));

            //Classified
            skinList.push(Skull_Crusher = new Skin("Skull Crusher",0,4,2));
            skinList.push(Llama_Cannon = new Skin("Llama Cannon",0,4,2));
            skinList.push(Amber_FadeR8 = new Skin("Amber Fade",0,4,2));

            //Restricted
            skinList.push(Banana_Cannon = new Skin("Banana Cannon",0,4,3));
            skinList.push(Crazy_8 = new Skin("Crazy 8",0,4,3));
            skinList.push(Reboot = new Skin("Reboot",0,4,3));

            //Mil-spec
            skinList.push(Tango = new Skin("Tango",0,4,4));
            skinList.push(Junk_Yard = new Skin("Junk Yard",0,4,4));
            skinList.push(Bone_Forged = new Skin("Bone Forged",0,4,4));
            skinList.push(Memento = new Skin("Memento",0,4,4));
            skinList.push(Survivalist = new Skin("Survivalist",0,4,4));
            skinList.push(Grip = new Skin("Grip",0,4,4));
            skinList.push(Crimson_WebR8 = new Skin("Crimson Web",0,4,4));
            skinList.push(BlazeR8 = new Skin("Blaze",0,4,4));

            //Industrial
            skinList.push(Phoenix_Marker = new Skin("Phoenix Marker",0,4,5));
            skinList.push(NitroR8 = new Skin("Nitro",0,4,5));

            //Consumer grade
            skinList.push(Inlay = new Skin("Inlay",0,4,6));
            skinList.push(Desert_Brush = new Skin("Desert Brush",0,4,6));
            skinList.push(NightR8 = new Skin("Night",0,4,6));
            skinList.push(Canal_Spray = new Skin("Canal Spray",0,4,6));
            skinList.push(Bone_Mask = new Skin("Bone Mask",0,4,6));
        }

        //Dual Berettas
        {
            //Classified
            skinList.push(Melondrama = new Skin("Melondrama",0,5,2));
            skinList.push(Cobra_Strike = new Skin("Cobra Strike",0,5,2));
            skinList.push(Twin_Turbo = new Skin("Twin Turbo",0,5,2));

            //Restricted
            skinList.push(Hydro_Strike = new Skin("Hydro Strike",0,5,3));
            skinList.push(Flora_Carnivora = new Skin("Flora Carnivora",0,5,3));
            skinList.push(DezastreDual = new Skin("Dezastre",0,5,3));
            skinList.push(Royal_Consorts = new Skin("Royal Consorts",0,5,3));
            skinList.push(Urban_Shock = new Skin("Urban Shock",0,5,3));
            skinList.push(Marina = new Skin("Marina",0,5,3));
            skinList.push(Hemoglobin = new Skin("Hemoglobin",0,5,3));
            skinList.push(Sweet_Little_Angels = new Skin("Sweet Little Angels",0,5,3));
            skinList.push(Duelist = new Skin("Duelist",0,5,3));
            skinList.push(Cobalt_Quartz = new Skin("Cobalt Quartz",0,5,3));
            skinList.push(Demolition = new Skin("Demolition",0,5,3));
            
            //Mil-Spec
            skinList.push(Hideout = new Skin("Hideout",0,5,4));
            skinList.push(Tread = new Skin("Tread",0,5,4));
            skinList.push(Balance = new Skin("Balance",0,5,4));
            skinList.push(Elite_16 = new Skin("Elite 1.6",0,5,4));
            skinList.push(Shred = new Skin("Shred",0,5,4));
            skinList.push(Ventilators = new Skin("Ventilators",0,5,4));
            skinList.push(CartelDual = new Skin("Cartel",0,5,4));
            skinList.push(Dualing_Dragons = new Skin("Dualing Dragons",0,5,4));
            skinList.push(Retribution = new Skin("Retribution",0,5,4));
            skinList.push(PantherDual = new Skin("Panther",0,5,4));
            skinList.push(Black_Limba = new Skin("Black Limba",0,5,4));
            skinList.push(EmeraldDual = new Skin("Emerald",0,5,4));
            skinList.push(Anodized_NavyDual = new Skin("Anodized Navy",0,5,4));

            //Industrial
            skinList.push(Drift_Wood = new Skin("Drift Wood",0,5,5));
            skinList.push(Switch_Board = new Skin("Switch Board",0,5,5));
            skinList.push(Pyre = new Skin("Pyre",0,5,5));
            skinList.push(StainedDual = new Skin("Stained",0,5,5));

            //Consumer
            skinList.push(Oil_ChangeDual = new Skin("Oil Change",0,5,6));
            skinList.push(HeistDual = new Skin("Heist",0,5,6));
            skinList.push(Moon_in_Libra = new Skin("Moon in Libra",0,5,6));
            skinList.push(Briar = new Skin("Briar",0,5,6));
            skinList.push(ContractorDual = new Skin("Contractor",0,5,6));
            skinList.push(ColonyDual = new Skin("Colony",0,5,6));
        }

        //CZ
        {
            //Covert
            skinList.push(Victoria = new Skin("Victoria",0,6,1));

            //Classified
            skinList.push(Xiangliu = new Skin("Xiangliu",0,6,2));
            skinList.push(Yellow_Jacket = new Skin("Yellow Jacket",0,6,2));
            skinList.push(The_Fuschia_Is_Now = new Skin("The Fuschia Is Now",0,6,2));

            //Restricted
            skinList.push(EcoCz = new Skin("Eco",0,6,3));
            skinList.push(Tacticat = new Skin("Tacticat",0,6,3));
            skinList.push(Red_Astor = new Skin("Red_Astor",0,6,3));
            skinList.push(Pole_Position = new Skin("Pole Position",0,6,3));
            skinList.push(Tigris = new Skin("Tigris",0,6,3));
            skinList.push(Tread_Plate = new Skin("Tread Plate",0,6,3));
            skinList.push(Slalom = new Skin("Slalom",0,6,3));
            skinList.push(Syndicate = new Skin("Syndicate",0,6,3));
            skinList.push(Chalice = new Skin("Chalice",0,6,3));

            //Mil-Spec
            skinList.push(Circaetus = new Skin("Circaetus",0,6,4));
            skinList.push(Vendetta = new Skin("Vendetta",0,6,4));
            skinList.push(Distressed = new Skin("Distressed",0,6,4));
            skinList.push(Polymer = new Skin("Polymer",0,6,4));
            skinList.push(Imprint = new Skin("Imprint",0,6,4));
            skinList.push(Hexane = new Skin("Hexane",0,6,4));
            skinList.push(Twist = new Skin("Twist",0,6,4));
            skinList.push(Poison_Dart = new Skin("Poison Dart",0,6,4));
            skinList.push(Crimson_WebCz = new Skin("Crimson Web",0,6,4));
            skinList.push(Emerald_Quartz = new Skin("Emerald Quartz",0,6,4));
            skinList.push(EmeraldCz = new Skin("Emerald",0,6,4));
            skinList.push(NitroCz = new Skin("Nitro",0,6,4));
            skinList.push(TuxedoCz = new Skin("Tuxedo",0,6,4));

            //Industrial 
            skinList.push(Midnight_Palm = new Skin("Midnight Palm",0,6,5));
            skinList.push(SilverCz = new Skin("Silver",0,6,5));

            //Consumer
            skinList.push(Framework = new Skin("Framework",0,6,6));
            skinList.push(Jungle_DashedCz = new Skin("Jungle Dashed",0,6,6));
            skinList.push(IndigoCz = new Skin("Indigo",0,6,6));
            skinList.push(Army_SheenCz = new Skin("Army Sheen",0,6,6));
            skinList.push(Green_Plaid = new Skin("Green Plaid",0,6,6));
        }

        //Five Seven
        {
            //Covert
            skinList.push(Hyper_BeastFive = new Skin("Hyper Beast",0,7,1));
            skinList.push(Angry_Mob = new Skin("Angry Mob",0,7,1));

            //Classified
            skinList.push(Fairy_Tale = new Skin("Fairy Tale",0,7,2));
            skinList.push(Monkey_Business = new Skin("Monkey Business",0,7,2));
            skinList.push(Fowl_Play = new Skin("Fowl Play",0,7,2));
            skinList.push(Fall_Hazard = new Skin("Fall Hazard",0,7,2));

            //Restricted
            skinList.push(Hybrid = new Skin("Hybrid",0,7,3));
            skinList.push(Boost_Protocol = new Skin("Boost Protocol",0,7,3));
            skinList.push(Buddy = new Skin("Buddy",0,7,3));
            skinList.push(Triumvirate = new Skin("Triumvirate",0,7,3));
            skinList.push(RetrobutionFive = new Skin("Retrobution",0,7,3));
            skinList.push(Copper_Galaxy = new Skin("Copper Galaxy",0,7,3));
            skinList.push(Case_HardenedFive = new Skin("Case Hardened",0,7,3));
            skinList.push(Heat_TreatedFive = new Skin("Heat Treated",0,7,3));
            skinList.push(Berries_And_Cherries = new Skin("Berries And Cherries",0,7,3));
            skinList.push(Neon_Kimono = new Skin("Neon Kimono",0,7,3));

            //Mil-Spec
            skinList.push(Scrawl = new Skin("Scrawl",0,7,4));
            skinList.push(Flame_Test = new Skin("Flame Test",0,7,4));
            skinList.push(CapillaryFive = new Skin("Capillary",0,7,4));
            skinList.push(Scumbria = new Skin("Scumbria",0,7,4));
            skinList.push(Violent_DaimyouFive = new Skin("Violent Daimyo",0,7,4));
            skinList.push(Urban_HazardFive = new Skin("Urban Hazard",0,7,4));
            skinList.push(Nightshade = new Skin("Nightshade",0,7,4));
            skinList.push(KamiFive = new Skin("Kami",0,7,4));
            skinList.push(Crimson_BlossomFive = new Skin("Crimson Blossom",0,7,4));
            skinList.push(NitroFive = new Skin("Nitro",0,7,4));
            skinList.push(Silver_Quartz = new Skin("Silver Quartz",0,7,4));

            //Industrial
            skinList.push(Midnight_Paintover = new Skin("Midnight Paintover",0,7,5));
            skinList.push(Withered_Vine = new Skin("Withered Vine",0,7,5));
            skinList.push(Hot_Shot = new Skin("Hot Shot",0,7,5));
            skinList.push(orange_PeelFive = new Skin("Orange Peel",0,7,5));
            skinList.push(Candy_AppleFive = new Skin("Candy Apple",0,7,5));

            //Consumer
            skinList.push(Coolant = new Skin("Coolant",0,7,6));
            skinList.push(ContractorFive = new Skin("Contractor",0,7,6));
            skinList.push(Forest_NightFive = new Skin("Forest Night",0,7,6));
            skinList.push(Anodized_Gunmetal = new Skin("Anodized Gunmetal",0,7,6));
            skinList.push(JungleFive = new Skin("Jungle",0,7,6));

        }

        //Tec-9
        {
            //Classified
            skinList.push(DecimatorTec = new Skin("Decimator",0,8,2));
            skinList.push(Fuel_InjectorTec = new Skin("Fuel Injector",0,8,2));
            skinList.push(Remote_Control = new Skin("Remote Control",0,8,2));

            //Restricted
            skinList.push(Brother = new Skin("Brother",0,8,3));
            skinList.push(Bamboozle = new Skin("Bamboozle",0,8,3));
            skinList.push(Re_Entry = new Skin("Re-Entry",0,8,3));
            skinList.push(Avalanche = new Skin("Avalanche",0,8,3));
            skinList.push(Titanium_Bit = new Skin("Titanium Bit",0,8,3));
            skinList.push(Red_Quartz = new Skin("Red Quartz",0,8,3));
            skinList.push(Nuclear_Threat = new Skin("Nuclear Threat",0,8,3));

            //Mil-spec
            skinList.push(Slag = new Skin("Slag",0,8,4));
            skinList.push(Rebel = new Skin("Rebel",0,8,4));
            skinList.push(Flash_Out = new Skin("Flash Out",0,8,4));
            skinList.push(Fubar = new Skin("Fubar",0,8,4));
            skinList.push(Snek_9 = new Skin("Snek-9",0,8,4));
            skinList.push(Cracked_Opal = new Skin("Cracked Opal",0,8,4));
            skinList.push(Cut_Out = new Skin("Cut Out",0,8,4));
            skinList.push(Ice_Cap = new Skin("Ice Cap",0,8,4));
            skinList.push(Jambiya = new Skin("Jambiya",0,8,4));
            skinList.push(Isaac = new Skin("Isaac",0,8,4));
            skinList.push(SandstormTec = new Skin("Sandstorm",0,8,4));
            skinList.push(Blue_TitaniumTec = new Skin("Blue Titanium",0,8,4));
            skinList.push(Mummys_Rot = new Skin("Mummy's Rot",0,8,4));
            skinList.push(Safety_NetTec = new Skin("Safety Net",0,8,4));
            skinList.push(Blast_From_The_Past = new Skin("Blast From the Past",0,8,4));
            skinList.push(TerraceTec = new Skin("Terrace",0,8,4));
            skinList.push(Toxic = new Skin("Toxic",0,8,4));
            skinList.push(BrassTec = new Skin("Brass",0,8,4));
            skinList.push(Ossified = new Skin("Ossified",0,8,4));

            //Industrial
            skinList.push(Tiger_Stencil = new Skin("Tiger Stencil",0,8,5));
            skinList.push(Rust_Leaf = new Skin("Rust Leaf",0,8,5));
            skinList.push(Orange_Murano = new Skin("Orange Murano",0,8,5));
            skinList.push(HadesTec = new Skin("Hades",0,8,5));
            skinList.push(VariCamoTec = new Skin("VariCamo",0,8,5));

            //Consumer
            skinList.push(Phoenix_Chalk = new Skin("Phoenix Chalk",0,8,6));
            skinList.push(Bamboo_Forest = new Skin("Bamboo Forest",0,8,6));
            skinList.push(Urban_DDPATTec = new Skin("Urban DDPAT",0,8,6));
            skinList.push(Army_Mesh = new Skin("Army Mesh",0,8,6));
            skinList.push(Groundwater = new Skin("Groundwater",0,8,6));
            skinList.push(TornadoTec = new Skin("Tornado",0,8,6));
        }

        //P250
        {
           //Covert
           skinList.push(See_Ya_Later = new Skin("See Ya Later",0,9,1)); 

           //Classified
           skinList.push(Epicenter = new Skin("Epicenter",0,9,2)); 
           skinList.push(Visions = new Skin("Visions",0,9,2)); 
           skinList.push(AsiimovP250 = new Skin("Asiimov",0,9,2)); 
           skinList.push(Muertos = new Skin("Muertos",0,9,2)); 
           skinList.push(CartelP250 = new Skin("Cartel",0,9,2)); 
           skinList.push(Undertow = new Skin("Undertow",0,9,2)); 
           skinList.push(Mehndi = new Skin("Mehndi",0,9,2)); 
           skinList.push(Apeps_Curse = new Skin("Apep's Curse",0,9,2)); 
           skinList.push(FranklinP250 = new Skin("Franklin",0,9,2));
           
           //Restricted
           skinList.push(Cyber_ShellP250 = new Skin("Cyber Shell",0,9,3)); 
           skinList.push(Inferno = new Skin("Inferno",0,9,3)); 
           skinList.push(X_RayP250 = new Skin("X-Ray",0,9,3)); 
           skinList.push(NevermoreP250 = new Skin("Nevermore",0,9,3)); 
           skinList.push(Red_Rock = new Skin("Red Rock",0,9,3)); 
           skinList.push(Wingshot = new Skin("Wingshot",0,9,3)); 
           skinList.push(Supernova = new Skin("Supernova",0,9,3)); 
           skinList.push(Splash = new Skin("Splash",0,9,3)); 
           skinList.push(Digital_Architect = new Skin("Digital Architect",0,9,3)); 
           skinList.push(Vino_Primo = new Skin("Vino Primo",0,9,3)); 
           skinList.push(Nuclear_ThreatP250 = new Skin("Nuclear Threat",0,9,3));
           
           //Mil-Spec
           skinList.push(Re_Built = new Skin("Re.built",0,9,4)); 
           skinList.push(Contaminant = new Skin("Contaminant",0,9,4)); 
           skinList.push(Cassette = new Skin("Cassette",0,9,4)); 
           skinList.push(Verdigris = new Skin("Verdigris",0,9,4)); 
           skinList.push(Ripple = new Skin("Ripple",0,9,4)); 
           skinList.push(Iron_Clad = new Skin("Iron Clad",0,9,4)); 
           skinList.push(ValenceP250 = new Skin("Valence",0,9,4)); 
           skinList.push(Steel_DisruptionP250 = new Skin("Steel Disruption",0,9,4)); 
           skinList.push(Hive = new Skin("Hive",0,9,4)); 
           skinList.push(Small_Game = new Skin("Small Game",0,9,4));
           skinList.push(Black_And_Tan = new Skin("Black & Tan",0,9,4)); 
           skinList.push(Bengal_TigerP250 = new Skin("Bengal Tiger",0,9,4)); 
           skinList.push(Exchanger = new Skin("Exchanger",0,9,4)); 
           skinList.push(WhiteoutP250 = new Skin("Whiteout",0,9,4));  
           skinList.push(Modern_HunterP250 = new Skin("Modern Hunter",0,9,4));
           
           //Industrial
           skinList.push(Dark_Filigree = new Skin("Dark Filigree",0,9,5)); 
           skinList.push(Crimson_Kimono = new Skin("Crimson Kimono",0,9,5)); 
           skinList.push(Contamination = new Skin("Contamination",0,9,5)); 
           skinList.push(Metallic_DDPAT = new Skin("Metallic DDPAT",0,9,5)); 
           skinList.push(Facets = new Skin("Facets",0,9,5)); 
           skinList.push(Gunsmoke = new Skin("Gunsmoke",0,9,5)); 
           
           //Consumer
           skinList.push(Drought = new Skin("Drought",0,9,6)); 
           skinList.push(Forest_NightP250 = new Skin("Forest Night",0,9,6)); 
           skinList.push(Facility_Draft = new Skin("Facility Draft",0,9,6));
           skinList.push(Mint_Kimono = new Skin("Mint Kimono",0,9,6));  
           skinList.push(Boreal_ForestP250 = new Skin("Boreal Forest",0,9,6)); 
           skinList.push(Sand_DuneP250 = new Skin("Sand Dune",0,9,6)); 
           skinList.push(Bone_MaskP250 = new Skin("Bone Mask",0,9,6)); 
        }
    }

    //Rifles legg til fra armory update
    {
        //Våpentall Rifle 0=Awp 1=ak-47 2=M4A4 3=M4A1 4=Galil 5= Famas 6=SG-553 7=G3SG1 8=Scar-20 9=Aug 10=ssg08
    //Awp
    {
        //Covert
        skinList.push(Chrome_Cannon = new Skin("Chrome Cannon",2,0,1));
        skinList.push(Chromatic_AberrationAwp = new Skin("Chromatic Aberration",2,0,1));
        skinList.push(Containment_Breach = new Skin("Containment Breach",2,0,1));
        skinList.push(Wildfire = new Skin("Wildfire",2,0,1));
        skinList.push(Neo_NoirAwp = new Skin("Neo-Noir",2,0,1));
        skinList.push(Oni_Taiji = new Skin("Oni Taiji",2,0,1));
        skinList.push(Hyper_Beast = new Skin("Hyper Beast",2,0,1));
        skinList.push(Man_o_War = new Skin("Man-o'-war",2,0,1));
        skinList.push(AsiimovAwp = new Skin("Asiimov",2,0,1));
        skinList.push(Lightning_Strike = new Skin("Lightning Strike",2,0,1));
        skinList.push(Desert_Hydra = new Skin("Desert Hydra",2,0,1));
        skinList.push(Fade = new Skin("Fade",2,0,1));
        skinList.push(Gungnir = new Skin("Gungnir",2,0,1));
        skinList.push(The_Prince = new Skin("The Prince",2,0,1));
        skinList.push(Medusa = new Skin("Medusa",2,0,1));
        skinList.push(Dragon_Lore = new Skin("Dragon Lore",2,0,1));
        skinList.push(Cmyk = new Skin("CMYK",2,0,1));

        //Classified
        skinList.push(Duality = new Skin("Duality",2,0,2));
        skinList.push(Mortis = new Skin("Mortis",2,0,2));
        skinList.push(Fever_DreamAwp = new Skin("Fever Dream",2,0,2));
        skinList.push(Elite_BuildAWP = new Skin("Elite Build",2,0,2));
        skinList.push(Corticera = new Skin("Corticera",2,0,2));
        skinList.push(RedlineAwp = new Skin("Redline",2,0,2));
        skinList.push(Electric_Hive = new Skin("Electric Hive",2,0,2));
        skinList.push(Graphite = new Skin("Graphite",2,0,2));
        skinList.push(Boom = new Skin("BOOM",2,0,2));
        skinList.push(Silk_Tiger = new Skin("Silk Tiger",2,0,2));
        skinList.push(Crackow = new Skin("Crackow!",2,0,2));


        //Restricted
        skinList.push(Exoskeleton = new Skin("Exoskeleton",2,0,3));
        skinList.push(Atheris = new Skin("Atheris",2,0,3));
        skinList.push(Paw = new Skin("PAW",2,0,3));
        skinList.push(Phobos = new Skin("Phobos",2,0,3));
        skinList.push(Worm_God = new Skin("Worm God",2,0,3));
        skinList.push(Pop_Awp = new Skin("POP AWP",2,0,3));
        skinList.push(Pink_DDPAT = new Skin("Pink DDPAT",2,0,3));
        skinList.push(Pit_Viper = new Skin("Pit Viper",2,0,3));

        //Mil-spec
        skinList.push(CapillaryAwp = new Skin("Capillary",2,0,4));
        skinList.push(Black_Nile = new Skin("Black Nile",2,0,4));
        skinList.push(Acheron = new Skin("Acheron",2,0,4));
        skinList.push(Snake_Camo = new Skin("Snake Camo",2,0,4));

        //Industrial
        skinList.push(Sun_in_Leo = new Skin("Sun in Leo",2,0,5));
        skinList.push(Safari_MeshAwp = new Skin("Safari Mesh",2,0,5));
    }
    //ak-47
    {
    //covert
    skinList.push(inheritance = new Skin("Inheritance",2,1,1));
    skinList.push(Head_Shot = new Skin("Head Shot",2,1,1));
    skinList.push(Nightwish = new Skin("Nightwish",2,1,1));
    skinList.push(Leet_Museo = new Skin("Leet Museo",2,1,1));
    skinList.push(Legion_Of_Anubis = new Skin("Legion of Anubis",2,1,1));
    skinList.push(AsiimovAk = new Skin("Asiimov",2,1,1));
    skinList.push(Neon_Rider = new Skin("Neon Rider",2,1,1));
    skinList.push(The_Empress = new Skin("The Empress",2,1,1));
    skinList.push(Bloodsport = new Skin("Bloodsport",2,1,1));
    skinList.push(Neon_Revolution = new Skin("Neon Revolution",2,1,1));
    skinList.push(Fuel_Injector = new Skin("Fuel Injector",2,1,1));
    skinList.push(Aquamarine_Revenge = new Skin("Aquamarine Revenge",2,1,1));
    skinList.push(Wasteland_Rebel = new Skin("Wasteland Rebel",2,1,1));
    skinList.push(Jaguar = new Skin("Jaguar",2,1,1));
    skinList.push(Vulcan = new Skin("Vulcan",2,1,1));
    skinList.push(Fire_Serpent = new Skin("Fire Serpent",2,1,1));
    skinList.push(Gold_Arabesque = new Skin("Gold Arabesque",2,1,1));
    skinList.push(X_RAy = new Skin("X-Ray",2,1,1));
    skinList.push(Wild_Lotus = new Skin("Wild Lotus",2,1,1));
    skinList.push(B_The_Monster = new Skin("B the Monster",2,1,1));

    //Classified
    skinList.push(Ice_Coaled = new Skin("Ice Coaled",2,1,2));
    skinList.push(Phantom_Disruptor = new Skin("Phantom Disruptor",2,1,2));
    skinList.push(Point_Disarray = new Skin("Point Disarray",2,1,2));
    skinList.push(Frontside_Misty = new Skin("Frontside Misty",2,1,2));
    skinList.push(CartelAK = new Skin("Cartel",2,1,2));
    skinList.push(RedlineAk = new Skin("Redline",2,1,2));
    skinList.push(Case_Hardened = new Skin("Case Hardened",2,1,2));
    skinList.push(Red_Laminate = new Skin("Red_Laminate",2,1,2));
    skinList.push(Panther_Onca = new Skin("Panthera Onca",2,1,2));
    skinList.push(Hydroponic = new Skin("Hydroponic",2,1,2));
    skinList.push(Jet_Set = new Skin("Jet Set",2,1,2));
    skinList.push(The_Outsiders = new Skin("The Outsiders",2,1,2));

    //Restricted
    skinList.push(Slate = new Skin("Slate",2,1,3));
    skinList.push(Rat_Rod = new Skin("Rat Rod",2,1,3));
    skinList.push(Orbit = new Skin("Orbit Mk01",2,1,3));
    skinList.push(Blue_Laminate = new Skin("Blue Laminate",2,1,3));
    skinList.push(Safety_Net = new Skin("Safety Net",2,1,3));
    skinList.push(First_Class = new Skin("First Class",2,1,3));
    skinList.push(Emerald_Pinstripe = new Skin("Emerald Pinstripe",2,1,3));

    //Mil-spec
    skinList.push(Uncharted = new Skin("Uncharted",2,1,4));
    skinList.push(Elite_BuildAk = new Skin("Elite Build",2,1,4));
    skinList.push(Steel_Delta = new Skin("Steel Delta",2,1,4));
    skinList.push(Green_Laminate = new Skin("Green Laminate",2,1,4));
    skinList.push(Black_Laminate = new Skin("Black Laminate",2,1,4));
    skinList.push(Crossfade = new Skin("Crossfade",2,1,4));

    //Industrial
    skinList.push(Baroque_Purple = new Skin("Baroque Purple",2,1,5));
    skinList.push(Safari_MeshAk = new Skin("Safari Mesh",2,1,5));
    skinList.push(Predator = new Skin("Predator",2,1,5));
    skinList.push(Olive_Polycam = new Skin("Olive Polycam",2,1,5));
    skinList.push(Jungle_Spray = new Skin("Jungle Spray",2,1,5));
    }
    //M4A1-S
    {
        //Covert
        skinList.push(PrintstreamM4 = new Skin("Printstream",2,3,1));
        skinList.push(Player_Two = new Skin("Player Two",2,3,1));
        skinList.push(Mecha_Industries = new Skin("Mecha Industries",2,3,1));
        skinList.push(Chanticos_fire = new Skin("Chantico's Fire",2,3,1));
        skinList.push(Golden_Coil = new Skin("Golden Coil",2,3,1));
        skinList.push(Hyper_BeastM4 = new Skin("Hyper Beast",2,3,1));
        skinList.push(Cyrex = new Skin("Cyrex",2,3,1));
        skinList.push(Imminent_Danger = new Skin("Imminent Danger",2,3,1));
        skinList.push(Welcome_To_The_Jungle = new Skin("Welcome to the Jungle",2,3,1));
        skinList.push(Vaporwave = new Skin("Vaporwave",2,3,1));
        skinList.push(FadeM4 = new Skin("Fade",2,3,1));

        //Classified
        skinList.push(Black_LotusM4 = new Skin("Black Lotus",2,3,2));
        skinList.push(Nightmare = new Skin("Nightmare",2,3,2));
        skinList.push(Leaded_Glass = new Skin("Leaded Glass",2,3,2));
        skinList.push(Decimator = new Skin("Decimator",2,3,2));
        skinList.push(Atomic_Alloy = new Skin("Atomic Alloy",2,3,2));
        skinList.push(Guardian = new Skin("Guardian",2,3,2));
        skinList.push(Blue_Phosphor = new Skin("Blue Phosphor",2,3,2));
        skinList.push(Control_Panel = new Skin("Control Panel",2,3,2));
        skinList.push(Hot_Rod = new Skin("Hot Rod",2,3,2));
        skinList.push(Master_Piece = new Skin("Master Piece",2,3,2));
        skinList.push(Knight = new Skin("Knight",2,3,2));

        //Restricted
        skinList.push(Emphorosaur_S = new Skin("Emphorosaur-S",2,3,3));
        skinList.push(Night_Terror = new Skin("Night Terror",2,3,3));
        skinList.push(FlashbackM4 = new Skin("Flashback",2,3,3));
        skinList.push(Basilisk = new Skin("Basilisk",2,3,3));
        skinList.push(Bright_Water = new Skin("Bright Water",2,3,3));
        skinList.push(Dark_Water = new Skin("Dark Water",2,3,3));
        skinList.push(Icarus_Fell = new Skin("Icarus Fell",2,3,3));
        skinList.push(NitroM4 = new Skin("Nitro",2,3,3));

        //Mil-spec
        skinList.push(Briefing = new Skin("Briefing",2,3,4));
        skinList.push(Blood_Tiger = new Skin("Blood Tiger",2,3,4));
        skinList.push(Fizzy_POP = new Skin("Fizzy POP",2,3,4));
        skinList.push(VariCamoM4 = new Skin("VariCamo",2,3,4));

        //Industrial
        skinList.push(Mud_Spec = new Skin("Mud-Spec",2,3,5));
        skinList.push(Moss_Quartz = new Skin("Moss Quartz",2,3,5));
        skinList.push(Boreal_Forest = new Skin("Boreal Forest",2,3,5));
        skinList.push(Wash_me_plz = new Skin("Wash me plz",2,3,5));
    }
    //M4A4
    {
        //Contraband
        skinList.push(howl = new Skin("Howl",2,2,0));

        //Covert
        skinList.push(Temukau = new Skin("Temukau",2,2,1));
        skinList.push(In_Living_Color = new Skin("In Living Color",2,2,1));
        skinList.push(The_Emperor = new Skin("The Emperor",2,2,1));
        skinList.push(Neo_NoirM4 = new Skin("Neo-Noir",2,2,1));
        skinList.push(Buzz_Kill = new Skin("Buzz Kill",2,2,1));
        skinList.push(The_Battlestar = new Skin("The Battlestar",2,2,1));
        skinList.push(Royal_Paladin = new Skin("Royal Paladin",2,2,1));
        skinList.push(Bullet_Rain = new Skin("Bullet Rain",2,2,1));
        skinList.push(Desert_Strike = new Skin("Desert-Strike",2,2,1));
        skinList.push(AsiimovM4 = new Skin("Asiimov",2,2,1));
        skinList.push(X_RayM4 = new Skin("X-Ray",2,2,1));
        skinList.push(Eye_of_Horus = new Skin("Eye of Horus",2,2,1));
        skinList.push(The_Coalition = new Skin("The Coalition",2,2,1));

        //Classified
        skinList.push(Cyber_Security = new Skin("Cyber Security",2,2,2));
        skinList.push(Tooth_Fairy = new Skin("Tooth Fairy",2,2,2));
        skinList.push(Hellfire = new Skin("Hellfire",2,2,2));
        skinList.push(Desolate_Space = new Skin("Desolate Space",2,2,2));
        skinList.push(DragonKing = new Skin("龍王 (Dragon King)",2,2,2));
        skinList.push(Poseidon = new Skin("Poseidon",2,2,2));

        //Restricted
        skinList.push(Etch_Lord = new Skin("Etch Lord",2,2,3));
        skinList.push(Spider_Lily = new Skin("Spider Lily",2,2,3));
        skinList.push(Evil_Daimyo = new Skin("Evil Daimyo",2,2,3));
        skinList.push(Griffin = new Skin("Griffin",2,2,3));
        skinList.push(Zirka = new Skin("Zirka",2,2,3));
        skinList.push(Red_DDPAT = new Skin("Red DDPAT",2,2,3));
        skinList.push(Daybreak = new Skin("Daybreak",2,2,3));
        skinList.push(Modern_Hunter = new Skin("Modern Hunter",2,2,3));
        skinList.push(Turbine = new Skin("Turbine",2,2,3));
        skinList.push(Polysoup = new Skin("Polysoup",2,2,3));

        //Mil-Spec
        skinList.push(Poly_Mag = new Skin("Poly Mag",2,2,4));
        skinList.push(Magnesium = new Skin("Magnesium",2,2,4));
        skinList.push(Faded_Zebra = new Skin("Faded Zebra",2,2,4));
        skinList.push(Global_Offensive = new Skin("Global Offensive",2,2,4));
        skinList.push(Convertor = new Skin("Convertor",2,2,4));
        skinList.push(Radiation_Hazard = new Skin("Radiation Hazard",2,2,4));

        //Industrial
        skinList.push(Dark_Blossom = new Skin("Dark Blossom",2,2,5));
        skinList.push(Mainframe = new Skin("Mainframe",2,2,5));
        skinList.push(Urban_DDPAT = new Skin("Urban DDPAT",2,2,5));
        skinList.push(Tornado = new Skin("Tornado",2,2,5));
        skinList.push(Desert_Storm = new Skin("Desert Storm",2,2,5));
        skinList.push(Jungle_Tiger = new Skin("Jungle Tiger",2,2,5));

    }
    //Galil
    {
        //Covert
        skinList.push(Chatterbox = new Skin("Chatterbox",2,4,1));

        //Classified
        skinList.push(Chromatic_AberrationGal = new Skin("Chromatic Aberration",2,4,2));
        skinList.push(Sugar_Rush = new Skin("Sugar Rush",2,4,2));
        skinList.push(EcoGal = new Skin("Eco",2,4,2));
        skinList.push(Rainbow_Spoon = new Skin("Rainbow Spoon",2,4,2));

        //Restricted
        skinList.push(Connexion = new Skin("Connexion",2,4,3));
        skinList.push(Signal = new Skin("Signal",2,4,3));
        skinList.push(Crimson_Tsunami = new Skin("Crimson Tsunami",2,4,3));
        skinList.push(Firefight = new Skin("Firefight",2,4,3));
        skinList.push(Stone_Cold = new Skin("Stone Cold",2,4,3));
        skinList.push(Orange_DDPAT = new Skin("Orange DDPAT",2,4,3));
        skinList.push(Caution = new Skin("CAUTION!",2,4,3));
        skinList.push(Phoenix_Blacklight = new Skin("Phienix Blacklight",2,4,3));
        skinList.push(Cerberus = new Skin("Cerberus",2,4,3));

        //Mil_Spec
        skinList.push(Destroyer = new Skin("Destroyer",2,4,4));
        skinList.push(Vandal = new Skin("Vandal",2,4,4));
        skinList.push(Akoben = new Skin("Akoben",2,4,4));
        skinList.push(Black_SandGal = new Skin("Black Sand",2,4,4));
        skinList.push(Rocket_Pop = new Skin("Rocket Pop",2,4,4));
        skinList.push(Kami = new Skin("Kami",2,4,4));
        skinList.push(Blue_Titanium = new Skin("Blue Titanium",2,4,4));
        skinList.push(Sandstorm = new Skin("Sandstorm",2,4,4));
        skinList.push(Shattered = new Skin("Shattered",2,4,4));
        skinList.push(Amber_FadeGal = new Skin("Amber Fade",2,4,4));
        skinList.push(Dusk_Ruins = new Skin("Dusk Ruins",2,4,4));
        skinList.push(Aqua_Terrace = new Skin("Aqua Terrace",2,4,4));
        skinList.push(TuxedoGal = new Skin("Tuxedo",2,4,4));
        skinList.push(Metallic_Squeezer = new Skin("Metallic Squeezer",2,4,4));

        //Industrial
        skinList.push(Cold_Fusion = new Skin("Cold Fusion",2,4,5));
        skinList.push(Urban_RubbleGal = new Skin("Urban Rubble",2,4,5));
        skinList.push(VariCamoGal = new Skin("VariCamo",2,4,5));
        skinList.push(Winter_Forest = new Skin("Winter Forest",2,4,5));
        skinList.push(Nv = new Skin("NV",2,4,5));

        //Consumer 
        skinList.push(Tornado = new Skin("Tornado",2,4,6));
        skinList.push(Sage_Spray = new Skin("Sage Spray",2,4,6));
        skinList.push(Hunting_Blind = new Skin("Hunting Blind",2,4,6));
    }
    //Famas
    {
        //Covert
        skinList.push(Commemoration = new Skin("Commemoration",2,5,1));
        skinList.push(Roll_Cage = new Skin("Roll Cage",2,5,1));

        //Classified
        skinList.push(Rapid_Eye_Movement = new Skin("Rapid Eye Movement",2,5,2));
        skinList.push(Eye_Of_Athena = new Skin("Eye of Athena",2,5,2));
        skinList.push(Mecha_IndustriesFam = new Skin("Mecha Industries",2,5,2));
        skinList.push(Djinn = new Skin("Djinn",2,5,2));
        skinList.push(Afterimage = new Skin("Afterimage",2,5,2));
        skinList.push(Waters_Of_Nephthys = new Skin("Water of Nephthys",2,5,2));
        skinList.push(Meltdown = new Skin("Meltdown",2,5,2));

        //Restricted
        skinList.push(ZX_Spectron = new Skin("ZX Spectron",2,5,3));
        skinList.push(Valence = new Skin("Valence",2,5,3));
        skinList.push(Neural_Net = new Skin("Neural Net",2,5,3));
        skinList.push(Sergeant = new Skin("Sergeant",2,5,3));
        skinList.push(Pulse = new Skin("Pulse",2,5,3));
        skinList.push(Prime_Conspiracy = new Skin("Prime Conspiracy",2,5,3));
        skinList.push(Styx = new Skin("Styx",2,5,3));
        skinList.push(Spitfire = new Skin("Spitfire",2,5,3));

        //Mil-Spec
        skinList.push(Meow_36 = new Skin("Meow 36",2,5,4));
        skinList.push(Decommissioned = new Skin("Decommissioned",2,5,4));
        skinList.push(Crypsis = new Skin("Crypsis",2,5,4));
        skinList.push(Macabre = new Skin("Macabre",2,5,4));
        skinList.push(Survivor_Z = new Skin("Survivor >",2,5,4));
        skinList.push(Hexane = new Skin("Hexane",2,5,4));
        skinList.push(Doomkitty = new Skin("Doomkitty",2,5,4));
        skinList.push(Dark_WaterFam = new Skin("Dark Water",2,5,4));
        skinList.push(Sundown = new Skin("Sundown",2,5,4));
        skinList.push(Teardown = new Skin("Teardown",2,5,4));

        //Industrial
        skinList.push(CaliCamoFam = new Skin("CaliCamo",2,5,5));
        skinList.push(CyanospatterFam = new Skin("Cyanospatter",2,5,5));
        skinList.push(Halftone_Wash = new Skin("Halftone Wash",2,5,5));
        skinList.push(Half_Sleeve = new Skin("Half Sleeve",2,5,5));

        //COnsumer
        skinList.push(Faulty_Wiring = new Skin("Faulty Wiring",2,5,6));
        skinList.push(Night_Borre = new Skin("Night Borre",2,5,6));
        skinList.push(ColonyFam = new Skin("Colony",2,5,6));
        skinList.push(Contrast_Spray = new Skin("Contrast Spray",2,5,6));
    }
    //SG553
    {
        //Classified
        skinList.push(Colony_IV = new Skin("Colony IV",2,6,2));
        skinList.push(CyrexSG = new Skin("Cyrex",2,6,2));
        skinList.push(Hazard_Pay = new Skin("Hazard Pay",2,6,2));
        skinList.push(Integrale = new Skin("Integrale",2,6,2));

        //Retricted
        skinList.push(Darkwing = new Skin("Darkwing",2,6,3));
        skinList.push(Dragon_Tech = new Skin("Dragon Tech",2,6,3));
        skinList.push(Phantom = new Skin("Phantom",2,6,3));
        skinList.push(Triarch = new Skin("Triarch",2,6,3));
        skinList.push(Tiger_Moth = new Skin("Tiger Moth",2,6,3));
        skinList.push(Pulse = new Skin("Pulse",2,6,3));
        skinList.push(Hypnotic = new Skin("Hypnotic",2,6,3));
        skinList.push(Bulldozer = new Skin("Bulldozer",2,6,3));

        //Mil-Spec
        skinList.push(Cyberforce = new Skin("Cyberforce",2,6,4));
        skinList.push(Heavy_Metal = new Skin("Heavy Metal",2,6,4));
        skinList.push(Ol_Rusty = new Skin("Ol' Rusty",2,6,4));
        skinList.push(Danger_Close = new Skin("Danger Close",2,6,4));
        skinList.push(Aloha = new Skin("Aloha",2,6,4));
        skinList.push(Aerial = new Skin("Aerial",2,6,4));
        skinList.push(Atlas = new Skin("Atlas",2,6,4));
        skinList.push(Wave_Spray = new Skin("Wave Spray",2,6,4));
        skinList.push(UltravioletSG = new Skin("Ultraviolet",2,6,4));
        skinList.push(Desert_Blossom = new Skin("Desert Blossom",2,6,4));
        skinList.push(Anodized_NavySg = new Skin("Anodized Navy",2,6,4));
        skinList.push(Damascus_Steel = new Skin("Damascus Steel",2,6,4));
        skinList.push(Berry_Gel_Coat = new Skin("Berry Gel Coat",2,6,4));

        //Industrial
        skinList.push(Candy_AppleSG = new Skin("Candy Apple",2,6,5));
        skinList.push(Fallout_Warning = new Skin("Fallout_Warning",2,6,5));
        skinList.push(Traveler = new Skin("Traveler",2,6,5));
        skinList.push(Gator_MeshSG = new Skin("Gator Mesh",2,6,5));

        //Consumer
        skinList.push(Bleached = new Skin("Bleached",2,6,6));
        skinList.push(Lush_Ruins = new Skin("Lush Ruins",2,6,6));
        skinList.push(Barricade = new Skin("Barricade",2,6,6));
        skinList.push(Army_Sheen = new Skin("Army Sheen",2,6,6));
        skinList.push(Waves_PerforatedSG = new Skin("Waves Perforated",2,6,6));
        skinList.push(Tornado = new Skin("Tornado",2,6,6));
    }
    //G3SG1
    {
        //Classified
        skinList.push(The_Executioner = new Skin("The Executioner",2,7,2));
        skinList.push(Flux = new Skin("Flux",2,7,2));

        //Restricted
        skinList.push(Dream_Glade = new Skin("Dream Glade",2,7,3));
        skinList.push(Scavenger = new Skin("Scavenger",2,7,3));
        skinList.push(High_Seas = new Skin("High Seas",2,7,3));
        skinList.push(Stinger = new Skin("Stinger",2,7,3));
        skinList.push(Chronos = new Skin("Chronos",2,7,3));

        //Mil-Spec
        skinList.push(Keeping_Tabs = new Skin("Keeping Tabs",2,7,4));
        skinList.push(Digital_MeshG3 = new Skin("Digital Mesh",2,7,4));
        skinList.push(Black_SandG3 = new Skin("Black Sand",2,7,4));
        skinList.push(Hunter = new Skin("Hunter",2,7,4));
        skinList.push(Ventilator = new Skin("Ventilator",2,7,4));
        skinList.push(Orange_Crash = new Skin("Orange Crash",2,7,4));
        skinList.push(Murky = new Skin("Murky",2,7,4));
        skinList.push(Azure_Zebra = new Skin("Azure Zebra",2,7,4));
        skinList.push(Demeter = new Skin("Demeter",2,7,4));
        skinList.push(New_Roots = new Skin("New Roots",2,7,4));
        skinList.push(Violet_Murano = new Skin("Violet Murano",2,7,4));

        //Industrial
        skinList.push(Ancient_Ritual = new Skin("Ancient Ritual",2,7,5));
        skinList.push(Green_AppleG3 = new Skin("Green Apple",2,7,5));
        skinList.push(VariCamoG3 = new Skin("VariCamo",2,7,5));
        skinList.push(Arctic_CamoG3 = new Skin("Arctic Camo",2,7,5));

        //Consumer
        skinList.push(Orange_Kimono = new Skin("Orange Kimono",2,7,6));
        skinList.push(Contractor = new Skin("Contractor",2,7,6));
        skinList.push(Jungle_Dashed = new Skin("Jungle Dashed",2,7,6));
        skinList.push(Desert_Storm = new Skin("Desert Storm",2,7,6));
        skinList.push(Polar_CamoG3 = new Skin("Polar Camo",2,7,6));
        skinList.push(Safari_MeshG3 = new Skin("Safari Mesh",2,7,6));
    }
    //Scar20
    {
        //Classified
        skinList.push(BloodsportG3 = new Skin("Bloodsport",2,8,2));
        skinList.push(Cardiac = new Skin("Cardiac",2,8,2));
        skinList.push(CyrexScar = new Skin("Cyrex",2,8,2));
        skinList.push(Splash_Jam = new Skin("Splash Jam",2,8,2));

        //Restricted
        skinList.push(Enforcer = new Skin("Enforcer",2,8,3));
        skinList.push(Powercore = new Skin("Powercore",2,8,3));
        skinList.push(EmeraldScar = new Skin("Emerald",2,8,3));

        //Mil-Spec
        skinList.push(Fragments = new Skin("Fragments",2,8,4));
        skinList.push(Poultrygeist = new Skin("Poultrygeist",2,8,4));
        skinList.push(Torn = new Skin("Torn",2,8,4));
        skinList.push(Assault = new Skin("Assault",2,8,4));
        skinList.push(Jungle_SlipstreamScar = new Skin("Jungle Slipstream",2,8,4));
        skinList.push(Blueprint = new Skin("Blueprint",2,8,4));
        skinList.push(Outbreak = new Skin("Outbreak",2,8,4));
        skinList.push(Green_Marine = new Skin("Green Marine",2,8,4));
        skinList.push(Grotto = new Skin("Grotto",2,8,4));
        skinList.push(Crimson_Web = new Skin("Crimson Web",2,8,4));
        skinList.push(Magna_Carta = new Skin("Magna Carta",2,8,4));
        skinList.push(Brass = new Skin("Brass",2,8,4));
        skinList.push(Trail_Blazer = new Skin("Trail Blazer",2,8,4));
        skinList.push(WildBerry = new Skin("Wild Berry",2,8,4));

        //industrial
        skinList.push(Carbon_Fiber = new Skin("Carbon Fiber",2,8,5));
        skinList.push(Palm = new Skin("Palm",2,8,5));
        
        //Consumer
        skinList.push(Stone_Mosaico = new Skin("Stone Mosaico",2,8,6));
        skinList.push(Army_SheenScar = new Skin("Army Sheen",2,8,6));
        skinList.push(Storm = new Skin("Storm",2,8,6));
        skinList.push(ContractorScar = new Skin("Contractor",2,8,6));
        skinList.push(Sand_MeshScar = new Skin("Sand Mesh",2,8,6));
    }
    //Aug
    {
        //Covert
        skinList.push(Chameleon = new Skin("Chameleon",2,9,1));
        skinList.push(Akihabara_Accept = new Skin("Akihabara Accept",2,9,1));

        //Classified
        skinList.push(Death_by_Puppy = new Skin("Death by Puppy",2,9,2));
        skinList.push(MomentumAUG = new Skin("Momentum",2,9,2));
        skinList.push(Stymphalian = new Skin("Stymphalian",2,9,2));
        skinList.push(Syd_Mead = new Skin("Syd Mead",2,9,2));
        skinList.push(Fleet_Flock = new Skin("Fleet Flock",2,9,2));
        skinList.push(Bengal_Tiger = new Skin("Bengal Tiger",2,9,2));
        skinList.push(LilPig = new Skin("Lil' Pig",2,9,2));

        //Restricted
        skinList.push(Arctic_Wolf = new Skin("Arctic Wolf",2,9,3));
        skinList.push(Aritocrat = new Skin("Aristocrat",2,9,3));
        skinList.push(TorqueAug = new Skin("Torque",2,9,3));
        skinList.push(Sand_Storm = new Skin("Sand Storm",2,9,3));
        skinList.push(Midnight_Lily = new Skin("Midnight Lily",2,9,3));
        skinList.push(Flame_Jormungandr = new Skin("Flame Jörmungandr",2,9,3));
        skinList.push(Random_Access = new Skin("Random Access",2,9,3));
        skinList.push(Eye_Of_Zapems = new Skin("Eye of Zapems",2,9,3));

        //Mil Spec
        skinList.push(Plague = new Skin("Plague",2,9,4));
        skinList.push(Tom_Cat = new Skin("Tom Cat",2,9,4));
        skinList.push(Amber_Slipstream = new Skin("Amber Slipstream",2,9,4));
        skinList.push(Triqua = new Skin("Triqua",2,9,4));
        skinList.push(Ricochet = new Skin("Ricochet",2,9,4));
        skinList.push(Wings = new Skin("Wings",2,9,4));
        skinList.push(Amber_FadeAug = new Skin("Amber Fade",2,9,4));
        skinList.push(Carved_Jade = new Skin("Carved Jade",2,9,4));
        skinList.push(Anodized_NavyAug = new Skin("Anodized Navy",2,9,4));
        skinList.push(Hot_RodAug = new Skin("Hot Rod",2,9,4));
        skinList.push(Copperhead = new Skin("Copperhead",2,9,4));
        skinList.push(Luxe_Trim = new Skin("Luxe Trim",2,9,4));

        //Industrial
        skinList.push(Spalted_Wood = new Skin("Spalted Wood",2,9,5));
        skinList.push(Radiation_HazardAug = new Skin("Radiation Hazard",2,9,5));
        skinList.push(Condemned = new Skin("Condemned",2,9,5));

        //Consumer
        skinList.push(Snake_Pit = new Skin("Snake Pit",2,9,6));
        skinList.push(Surveillance = new Skin("Surveillance",2,9,6));
        skinList.push(Navy_Murano = new Skin("Navy Murano",2,9,6));
        skinList.push(Sweeper = new Skin("Sweeper",2,9,6));
        skinList.push(Daedalus = new Skin("Daedalus",2,9,6));
        skinList.push(StormAug = new Skin("StormAug",2,9,6));
        skinList.push(ContractorAug = new Skin("Contractor",2,9,6));
        skinList.push(ColonyAug = new Skin("Colony",2,9,6));
    }
    //SSG08
    {
        //Covert
        skinList.push(Dragonfire = new Skin("Dragonfire",2,10,1));
        skinList.push(Blood_in_the_Water = new Skin("Blood in the water",2,10,1));

        //Classified
        skinList.push(Turbo_Peek = new Skin("Turbo Peek",2,10,2));
        skinList.push(Bloodshot = new Skin("Bloodshot",2,10,2));
        skinList.push(Big_Iron = new Skin("Big Iron",2,10,2));
        skinList.push(Death_Strike = new Skin("Death Strike",2,10,2));
        
        //Restricted
        skinList.push(Parallax = new Skin("Parallax",2,10,3));
        skinList.push(Fever_Dream = new Skin("Fever_Dream",2,10,3));
        skinList.push(Deaths_Head = new Skin("Death's Head",2,10,3));
        skinList.push(Ghost_Crusader = new Skin("Ghost Crusader",2,10,3));
        skinList.push(Sea_Calico = new Skin("Sea Calico",2,10,3));
        skinList.push(Rapid_Transit = new Skin("Rapid Transit",2,10,3));

        //Mil-Spec
        skinList.push(Dezastre = new Skin("Dezastre",2,10,4));
        skinList.push(Mainframe_001 = new Skin("Mainframe 001",2,10,4));
        skinList.push(Necropos = new Skin("Necropos",2,10,4));
        skinList.push(Dark_WaterSSG = new Skin("Dark Water",2,10,4));
        skinList.push(Abyss = new Skin("Abyss",2,10,4));
        skinList.push(Slashed = new Skin("Slashed",2,10,4));
        skinList.push(Spring_Twilly = new Skin("Spring Twilly",2,10,4));
        skinList.push(Threat_Detected = new Skin("Threat Detected",2,10,4));
        skinList.push(Orange_Filigree = new Skin("Orange Filigree",2,10,4));
        skinList.push(Hand_Brake = new Skin("Hand Brake",2,10,4));
        skinList.push(Detour = new Skin("Detour",2,10,4));
        skinList.push(Acid_Fade = new Skin("Acid Fade",2,10,4));
        skinList.push(Zeno = new Skin("Zeno",2,10,4));

        //Industrial
        skinList.push(Azure_Glyph = new Skin("Azure Glyph",2,10,5));
        skinList.push(Carbon_FiberSSG = new Skin("Carbon Fiber",2,10,5));
        skinList.push(Tropical_Storm = new Skin("Tropical Storm",2,10,5));
        skinList.push(Mayan_Dreams = new Skin("Mayan Dreams",2,10,5));
        skinList.push(Halftone_Whorl = new Skin("Halftone Whorl",2,10,5));

        //Consumer
        skinList.push(Prey = new Skin("Prey",2,10,6));
        skinList.push(Jungle_DashedSSG = new Skin("Jungle Dashed",2,10,6));
        skinList.push(Red_Stone = new Skin("Red Stone",2,10,6));
        skinList.push(Sand_DuneSSG = new Skin("Sand Dune",2,10,6));
        skinList.push(Blue_SpruceSSG = new Skin("Blue Spruce",2,10,6));
        skinList.push(Lichen_Dashed = new Skin("Lichen_Dashed",2,10,6));
    }

    }
>>>>>>> 485317d6805795cef4d4d69cda8a3d558f2fce41

    sortList();
    setAnswerSkin();
}


