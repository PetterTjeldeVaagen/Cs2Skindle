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

function randomNumBetween(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
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

let input = document.getElementById("searchBar");
input.addEventListener('input', search);
let coloredText = true;
function setColoredText(input){
    coloredText = input;
}

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
                element.innerHTML = searchList[index].gun + " " + searchList[index].name;
                if(coloredText){
                    element.style.color = getRarityColor(searchList[index].rarity);
                }
            }
        }
        changePage(-2);
    }
}