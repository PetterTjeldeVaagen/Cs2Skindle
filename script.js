   function GetHeavyWeapon(){
    let heavyWeaponName = "";
    let heavyWeaponGrade = "";
    let heavyGun = "";
    //Mag 7
    Mag7Navn=[
        "Justice", "Cinquedea", "BI83 spectrum", "Monster Call", "Swag7", "Petroglyph",
        "Praetorian", "Heat" , "Prism Terrace", "Core Breach", "Bulldozer", "Foresight",
        "Popdog", "Hard Water", "Sonar", "Cobalt Core", "Firestarter", "Heaven Guard", 
        "Memento", "Counter Terrace", "Hazard", "Carbon Fiber", "Chainmail", "Silver",
        "Metallic DDPAT", "Navy Sheen", "Rust Coat", "Seabird", "Storm", "Irradiated Alert",
        "SandDune"
    ];

    Mag7Grade=[
        "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted",
        "Restricted", "Restricted", "Restricted","Restricted", "Restricted", "Mil-spec", 
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Mil-spec","Mil-spec", "Industrial", "Industrial", "Industrial", "Industrial",
        "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer"
    ];

    //sawed off
    SawedOffNavn=[
    "The Kraken", "Wasteland Princess", "Devourer", "Kiss Love", "Orange DDPAT", "Limelight",
    "Serenity", "Highwayman", "Apocalypto", "Fubar", "Yorick", "Origami", "First Class", "Amber Fade",
    "Full Stop", "Copper", "Zander", "Brake Light", "Black Sand", "Morris", "Spirit Board", 
    "Mosaico", "RustCoat", "Snake Camo", "Forest DDPAT", "Bamboo Shadow", "Sage Spray", "Irradiated Alert",
    "Jungle Thicket", "Clay Ambush", "Parched"
    ];

    SawedOffGrade=[
    "Covert", "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted",
    "Restricted", "Restricted", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
    "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Industrial",
    "Industrial", "Consumer", "Consumer", "Consumer", "Consumer",
    "Consumer", "Consumer", "Consumer"
    ];

    //Nova
    NovaNavn=[
     "Antique", "Hyper Beast", "Bloomstick", "Graphite", "Rising Skull", "Koi", "Gila",
     "Wild Six", "Baroque Orange", "Clear Polymer", "Toy Soldier", "Red Quartz", "Tempest",
     "Ghost Camo", "Exo", "Ranger", "Modern Hunter", "Blaze Orange", "Plume", "Wood Fired",
     "Windblown", "Quick Sand", "Interlock", "Green Apple", "Caged Steel", "Candy Apple",
     "Rust Coat", "Fores tLeaves", "Walnut", "Moon In Libra", "Predator", "SandDune",
     "Polar Mesh", "Mandrel", "Army Sheen"
    ];

    NovaGrade=[
        "Classified", "Classified",  "Classified", "Restricted", "Restricted", "Restricted",
        "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Industrial", "Industrial",
        "Mil-spec", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer"
    ];
    //Xm1014
    Xm1014Navn=[
    "Tranquility", "Incinegator", "Entombed", "XOXO", "Heaven Guard", "Teclu Burner", "Black Tie",
    "Seasons", "Ancient Lore", "Ziggy", "Elegant Vines", "Zombie Offensive", "Slipstream",
    "Blaze Orange", "VariCamo Blue", "Bone Machine", "Red Leather", "Red Python", "Quicksilver",
    "Scumbria", "Oxide Blaze", "Frost Borre", "Watchdog", "Fallout Warning", "Blue Steel", "CaliCamo",
    "Banana Leaf", "Jungle", "Urban Perforated", "Blue Spruce", "Grassland", "Charter", "Blue Tire"
    ];

    Xm1014Grade=[
    "Classified", "Classified", "Classified", "Classified", "Restricted", "Restricted", 
    "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
    "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
    "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Industrial", "Industrial", 
    "Industrial",  "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer"
    ];

    //Negev
    NegevNavn=[
    "Mjölnir", "Power Loader", "Loud Mouth", "Lionfish", "Dev_Texture", "Anodized Navy",
    "Terrain", "Man-O-War", "Bratatat", "Desert-Strike", "Dazzle", "Prototype",
    "Ultralight", "Phoenix Stencil", "Infrasructure", "Drop Me", "Palm", "Nuclear Waste",
    "CaliCamo", "Bulk Head", "Army Sheen", "Baroque Sand"
    ];

   NegevGrade=[
    "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
    "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Industrial", "Industrial", 
    "Industrial", "Consumer", "Consumer"
    ];

    M249Navn=[
    "Nebula Crusader", "Emerald Poison Dart", "Aztec", "Downtown", "Magma", "spectre",
    "System Lock", "Warbird", "Deep Relief", "O.S.I.P.R", "Humidor", "Blizzard Marbleized",
    "Shipping Forecast", "Gator Mesh", "Midnight Palm", "Jungle DDPAT", "Impact Drill", "Contrast Spray",
    "Jungle", "Predator"
    ];

   M249Grade=[
    "Restricted", "Restricted", "Restricted", "Restricted",  "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", 
    "Mil-spec", "Mil-spec", "Mil-spec",  "Industrial", "Industrial", "Industrial", 
    "Industrial",  "Consumer", "Consumer", "Consumer", "Consumer", "Consumer"
   ];

    let HeavyWeaponType = Math.floor(Math.random() * 6) + 1;

    if(HeavyWeaponType == 1){
        let WeaponNumber = Math.floor(Math.random() * Mag7Navn.length) + 1;
        heavyWeaponName = Mag7Navn[WeaponNumber];
        heavyWeaponGrade = Mag7Grade[WeaponNumber];
        heavyGun = "Mag-7";
    }else if(HeavyWeaponType == 2){
        let WeaponNumber = Math.floor(Math.random() * SawedOffNavn.length) + 1;
        heavyWeaponName = SawedOffNavn[WeaponNumber];
        heavyWeaponGrade = SawedOffGrade[WeaponNumber];
        heavyGun = "Sawed-Off";
    }else if(HeavyWeaponType == 3){
        let WeaponNumber = Math.floor(Math.random() * NovaNavn.length) + 1;
        heavyWeaponName = NovaNavn[WeaponNumber];
        heavyWeaponGrade = NovaGrade[WeaponNumber];
        heavyGun = "Nova";
    }else if(HeavyWeaponType == 4){
        let WeaponNumber = Math.floor(Math.random() * Xm1014Navn.length) + 1;
        heavyWeaponName = Xm1014Navn[WeaponNumber];
        heavyWeaponGrade = Xm1014Grade[WeaponNumber];
        heavyGun = "XM1014";
    }else if(HeavyWeaponType == 5){
        let WeaponNumber = Math.floor(Math.random() * NegevNavn.length) + 1;
        heavyWeaponName = NegevNavn[WeaponNumber];
        heavyWeaponGrade = NegevGrade[WeaponNumber];
        heavyGun = "Negev";
    }else if(HeavyWeaponType == 6){
        let WeaponNumber = Math.floor(Math.random() * M249Navn.length) + 1;
        heavyWeaponName = M249Navn[WeaponNumber];
        heavyWeaponGrade = M249Grade[WeaponNumber];
        heavyGun = "M249";
    }
    let heavyArrray = [heavyGun,heavyWeaponGrade,heavyWeaponName]
    return(heavyArrray)
   }

   function GetSmgWeapon(){
    let smgWeaponName = ""
    let smgWeaponGrade = ""
    let smgGun = "";
    
    //mac 10
    var Mac10Navn = [
        "Neon Rider", "Stalker", "Disco Tech", "Hot Snakes", "Toybox", "Propaganda", "Graven", "Heat", "Malachite",
        "Tatter", "Curse", "Last Dive", "Red Filigree", "Pipe Down", "Allure", "Gold Brick", "Button Masher", "Case Hardened",
        "Carnivore", "Lapis Gator", "Rangeen", "Ultraviolet", "Fade", "Nuclear Garden", "Amber Fade", "Whitefish", "Classic Crate",
        "Copper Borre", "Aloha", "Oceanic", "Ensnared", "Monkeyflage", "Silver", "Commuter", "Palm", "Candy Apple", "Calf Skin",
        "Indigo", "Tornado", "Urban DDPAT", "Surfwood", "Sienna Damask", "Strats"
    ];

   Mac10Grade=[
        "Covert", "Covert", "Classified", "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted",
        "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial", "Industrial", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer",
    ];

    //mp9

    Mp9Navn =[
        "Starlight Protector", "Airlock", "Hydra", "Wild Lily", "Food Chain", "Hypnotic", "Rose Iron", "Bulldozer",
        "Ruby Poison Dart", "Stained Glass", "Goo", "Mount Fuji", "Dark Age", "Hot Rod", "Setting Sun", "Pandoras Box",
        "Dart", "Deadly Poison", "Bioleak", "Sand Scale", "Black Sand", "Modest Threat", "Capillary", "Music Box", 
        "Orange Peel", "Old Roots", "Dry Season", "Sand Dashed", "Storm", "Green Plaid", "Slide", "Army Sheen"
    ];

    Mp9Grade =[
        "Covert", "Classified", "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted",
        "Restricted", "Restricted", "Restricted", "Restricted", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", 
        "Mil-spec", "Mil-spec", "Mil-spec",  "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Industrial", "Consumer",
        "Consumer", "Consumer", "Consumer", "Consumer", "Consumer"
    ];

    Mp7Navn = [
        "Bloosport", "Nemesis", "Abyssal Apparition", "Impire", "Special Delivery", "Ocean Foam", "Fade", "Neon Ply",
        "Powercore", "Skulls", "Whiteout", "Armor Core", "Urban Hazard", "Full Stop", "Anodized Navy", "Cirrus", "Akoben",
        "Mischief", "Teal Blossom", "Guerrilla", "Gunsmoke", "Orange Peel", "Motherboard", "Tall Grass", "Vault Heist",
        "Groundwater", "Forest DDPAT", "Asterion", "Olive Plaid", "Army Recon", "Scorched", "Prey"
    ];

    Mp7Grade = [
        "Covert", "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial", "Industrial", "Consumer", "Consumer",  "Consumer",  "Consumer", 
        "Consumer",  "Consumer",  "Consumer" 
    ];

    //mp5

    Mp5Navn = [
        "Phosophor", "Oxide Oasis", "Lab Rats", "Gauss", "Agent", "Kitbash", "Autumn Twilly", "Acid Wash", "Co-Processor",
        "Desert Strike", "Condition Zero", "Necro Jr.", "Nitro", "Dirt Drop", "Bamboo Garden"
    ];

   Mp5Grade =[
        "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Mil-spec",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Consumer", "Consumer"
    ];

    P90Navn = [
        "Death by Kitty", "Asiimov", "Emerald Dragon", "Cold Blooded", "Trigon", "Shapewood", "Shallow Grave", "Nostalgia",
        "Run and Hide", "Blind Spot", "Chopper", "Virus", "Astral Jörmungandr", "Death Grip", "Vent Rush", "Elite Build", "Module",
        "Desert Warfare", "Teardown", "Glacier Mesh", "Grim", "Off World", "Baroque Red", "Facility Negative", "Freight", "Tiger Pit",
        "Cocoa Rampage", "Traction", "Schematic", "Leather", "Ash Wood", "Fallout Warning", "Sunset Lily", "Verdant Growth",
        "Storm", "Sand Spray", "Scorched", "Ancient Earth", "Desert DDPAT"
    ];

   P90Grade = [
        "Covert", "Covert", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified",
        "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Mil-spec", "Mil-spec", "Mil-spec",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", 
        "Mil-spec", "Industrial", "Industrial", "Industrial", "Industrial", "Industrial", "Consumer", "Consumer", "Consumer" , "Consumer", "Consumer"
    ];

    //ump 45

    Ump45Navn = [
        "Primal Saber", "Momentum", "Fade", "Grand Prix", "Scaffold", "Arctic Wolf", "Moonrise", "Plastique", "Crime Scene",
        "Gold Bismuth", "Exposure", "Bone Pile", "Corporal", "Riot", "Delusion", "Labyrinth", "Minotaurs Labyrinth", "Blaze",
        "Briefing", "Day Lily", "Metal Flowers", "Oscillator", "Full Stop", "Roadblock", "Carbon Fiber", "Gunsmoke", "Fallout Warning",
        "Houndstooth", "Mechanism", "Indigo", "Caramel", "Scorched", "Urban DDPAT", "Mudder", "Facility Dark"
    ];

    Ump45Grade =[
        "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Industrial", "Industrial", "Industrial", "Industrial",
        "Consumer",  "Consumer",  "Consumer", "Consumer",  "Consumer",  "Consumer",
    ];

    //ppbizon
    PPBizonNavn = [
        "Judgement of Anubis", "High Roller", "Fuel Rod", "Blue Streak", "Osiris", "Antique", "Embargo", "Space Cat",
        "Rust Coat", "Water Sigil", "Cobalt Halftone", "Harvester", "Photic Zone", "Brass", "Modern Hunter",
        "Jungle Slipstream", "Night Riot", "Runic", "Lumen", "Chemical Green", "Night Ops", "Carbon Fiber", "Candy Apple",
        "Breaker Box", "Bamboo Print", "Sand Dashed", "Urban Dashed", "Irradiated Alert", "Forest Leaves", "Facility Sketch",
        "Seabird", "Death Rattle", "Anolis"
    ];

    PPBizonGrade =[
        "Covert", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial", "Industrial", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer",
        "Consumer", "Consumer", "Consumer", "Consumer",

    ];

    let SmgWeaponType = Math.floor(Math.random() * 7) + 1;

    if(SmgWeaponType == 1){
        let WeaponNumber = Math.floor(Math.random() * Mac10Navn.length) + 1;
        smgWeaponName = Mac10Navn[WeaponNumber];
        smgWeaponGrade = Mac10Grade[WeaponNumber];
        smgGun = "Mac-10";
    }else if(SmgWeaponType == 2){
        let WeaponNumber = Math.floor(Math.random() * Mp9Navn.length) + 1;
        smgWeaponName = Mp9Navn[WeaponNumber];
        smgWeaponGrade = Mp9Grade[WeaponNumber];
        smgGun = "Mp9";
    }else if(SmgWeaponType == 3){
        let WeaponNumber = Math.floor(Math.random() * Mp7Navn.length) + 1;
        smgWeaponName = Mp7Navn[WeaponNumber];
        smgWeaponGrade = Mp7Grade[WeaponNumber];
        smgGun = "Mp7";
    }else if(SmgWeaponType == 4){
        let WeaponNumber = Math.floor(Math.random() * Mp5Navn.length) + 1;
        smgWeaponName = Mp5Navn[WeaponNumber];
        smgWeaponGrade = Mp5Grade[WeaponNumber];
        smgGun = "Mp5";
    }else if(SmgWeaponType == 5){
        let WeaponNumber = Math.floor(Math.random() * Ump45Navn.length) + 1;
        smgWeaponName = Ump45Navn[WeaponNumber];
        smgWeaponGrade = Ump45Grade[WeaponNumber];
        smgGun = "Ump-45";
    }else if(SmgWeaponType == 6){
        let WeaponNumber = Math.floor(Math.random() * PPBizonNavn.length) + 1;
        smgWeaponName = PPBizonNavn[WeaponNumber];
        smgWeaponGrade = PPBizonGrade[WeaponNumber];
        smgGun = "PP-Bizon";
    }else if(SmgWeaponType == 7){
        let WeaponNumber = Math.floor(Math.random() * P90Navn.length) + 1;
        smgWeaponName = P90Navn[WeaponNumber];
        smgWeaponGrade = P90Grade[WeaponNumber];
        smgGun = "P90";
    }
    let smgArray = [smgGun,smgWeaponGrade,smgWeaponName]
    return(smgArray)
   }

   function GetPistolWeapon(){
    let pistolWeaponName = "";
    let pistolWeaponGrade = "";
    let pistolGun = "";

    Cz75Navn = [
        "Victoria", "The Fuschia Is Now", "Yellow Jacket", "Xiangliu", "Tread Plate", "Chalice", "Tigris", "Pole Position",
        "Red Astor", "Tacticat", "Eco", "Syndicate", "Crimson Web", "Tuxedo", "Nitro", "Emerald", "Posion Dart", "Twist",
        "Heaxane", "Imprint", "Polymer", "Emerald Quartz", "Distressed", "Vendetta", "Circaetus", "Silver", "Midnight Palm",
        "Green Plaid", "Army Sheen", "Indigo", "Jungle Dashed", "Framework"
    ];

    Cz75Grade = [
        "Covert", "Classified", "Classified", "Classified", "Restricted", "Restricted",  "Restricted", "Restricted",
        "Restricted", "Restricted",  "Restricted", "Restricted", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Industrial",
        "Consumer",  "Consumer",  "Consumer",  "Consumer",  "Consumer", 
    ];


    DeagleNavn = [
        "Golden Koi", "Code Red", "Printstream", "Ocean Drive", "Hypnotic", "Cobalt Disruption", "Conspiracy", "Kumicho Dragon",
        "Mecha Industries", "Fennec Fox", "Heirloom", "Hand Cannon", "Blaze", "Pilot", "Sunset Storm1", "Sunset Storm2", "Crimson Web",
        "Naga", "Directive", "Light Rail", "Emerald Jörmungandr", "Trigger Discipline", "Meteorite", "Urban Rubble", "Bronze Deco",
        "Corinthian", "Oxide Blaze", "Blue Ply", "Night Heist", "Sputnik", "Mudder", "Urban DDPAT", "Midnight Storm", "Night",
        "The Bronze"
    ];

    DeagleGrade = [
        "Covert", "Covert", "Covert", "Covert", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified",
        "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",  "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial", "Industrial",
    ];



    DualiesNavn = [
        "Cobra Strike", "Twin Turbo", "Melondrama", "Hemoglobin", "Marina", "Urban Shock", "Duelist", "Cobalt Quartz",
        "Demolition", "Royal Consorts", "Dezastre", "Flora Carnivora", "Black Limba", "Panther", "Anodized Navy", "Ventilators",
        "Cartel", "Dualing Dragons", "Retribution", "Elite 1.6", "Balance", "Emerald", "Shred", "Thread", "Stained", "Pyre",
        "Switch Board", "Drift Wood", "Briar", "Moon in Libra", "Contractor", "Colony", "Heist", "Oil Change"
    ];

    DualiesGrade = [
        "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial",  "Industrial",  "Industrial",  "Industrial", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer",
    ];

   

    FiveSevenNavn = [
        "Hyper Beast", "Angry Mob", "Monkey Business", "Fowl Play", "Fairy Tale", "Fall Hazard", "Case Hardened",
        "Copper Galaxy", "Retrobution", "Triumvirate", "Neon Kimono", "Buddy", "Berries And Cherries", "Boost Protocol",
        "Nightshade", "Kami", "Violent Daimyo", "Urban Hazard", "Nitro", "Silver Quartz", "Scumbria", "Capillary", "Flame Test",
        "Crimson Blossom", "Scrawl", "Candy Apple", "Orange Peel", "Hot Shot", "Withered Vine", "Anodized Gunmetal", "Jungle",
        "Forest Night", "Contractor", "Coolant"

    ];

   FiveSevenGrade = [
        "Covert", "Covert", "Classified", "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",
        "Industrial", "Industrial",  "Industrial",  "Industrial", "Consumer","Consumer","Consumer","Consumer","Consumer",
   ];



    P250Navn = [
        "See Ya Later", "Mehndi", "Undertow", "Franklin", "Cartel", "Muertos", "Asiimov", "Visions", "Splash", "Supernova",
        "Wingshot", "Nuclear Threat", "Vino Primo", "Inferno", "X-Ray", "Nevermore", "Red Rock", "Cyber Shell", "Digital Architect",
        "Hive", "Steel Disruption", "Modern Hunter", "Whiteout", "Valence", "Iron Clad", "Ripple", "Verdigris", "Exchanger",
        "Casette", "Bengal Tiger", "Containment", "Black & Tan", "Facets", "Gunsmoke", "Crimson Kimono", "Metallic DDPAT",
        "Contamination", "Dark Filigree", "Bone Mask", "Boreal Forest", "Sand Dune <3", "Mint Kimono", "Facility Draft", "Forest Night",
        "Drought"
    ];

    P250Grade = [
        "Covert", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified",
        "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial", "Industrial", "Industrial",
        "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer",
    ];

    
    GlockNavn = [
        "Wasteland Rebel", "Bullet Queen", "Neo-Noir", "Gamma Doppler", "Twilight Galaxy", "Water Elemental", "Vogue",
        "Snack Attack", "Dragon Tattoo", "Fade", "Steel Disruption", "Grinder", "Royal Legion", "Brass", "Weasel", "Moonris",
        "Nuclear Garden", "Synth Leaf", "Franklin", "Pink DDPAT", "Blue Fissure", "Candy Apple", "Reactor", "Catacombs",
        "Bunsen Burner", "Wraiths", "Ironwork", "Sacrifice", "Oxide Blaze", "Off World", "Warhawk", "Clear Polymer", "Winterized",
        "Sand Dune", "Death Rattle", "Groundwater", "Night", "High Beam", "Red Tire"
    ];

   GlockGrade = [
        "Covert", "Covert",  "Covert",  "Covert", "Classified", "Classified", "Classified", "Classified",
        "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial", "Industrial","Industrial"
   ];



    P2000Navn = [
        "Fire Elemental", "Ocean Foam", "Imperial Dragon", "Corticera", "Scorpion", "Amber Fade",
        "Handgun", "Obsidian", "Acid Etched", "Woodsman", "Space Race", "Red FragCam", "Chainmail", "Silver", "Pulse",
        "Ivory", "Imperial", "Oceanic", "Turf", "Urban Hazard", "Gnarled", "Dispatch", "Lifted Spirits", "Grassland Leaves",
        "Granite Marbleized", "Grassland", "Coach Class", "Pathfinder", "Panther Camo"
    ];

    P2000Grade = [
        "Covert", "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial", "Industrial", "Industrial",
    ];

    //34
    UspsNavn =[
        "Kill Confirmed", "Neo-Noir", "The Traitor", "Printstream", "Serum", "Orion", "Caiman", "Cortex", "Target Acquired",
        "Monster Mashup", "Whiteout", "Dark Water", "Overgrowth", "Guardian", "Road Rash", "Cyrex", "Flashback", "Ancient Visions", "Orange Anolis", "Ticket to Hell",
        "Stainless", "Night Ops", "Business Class", "Blood Tiger", "Lead Conduit", "Torque", "Check Engine", "Blueprint",
        "Black Lotus", "Purple DDPAT", "Royal Blue", "Forest Leaves", "Para Green", "Pathfinder"
    ];

    UspsGrade = [
        "Covert", "Covert", "Covert", "Covert", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", 
        "Restricted",  "Restricted", "Restricted",  "Restricted",  "Restricted", "Restricted",  "Restricted",  "Restricted", "Restricted", 
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial",
    ];

    //19
    RevolverNavn =[
        "Fade", "Amber Fade", "Skull Crusher", "Llama Cannon", "Reebot", "Crazy 8", "Crimson Web", "Grip", "Memento",
        "Bone Forged", "Survivalist", "Junk Yard", "Blaze", "Nitro", "Phoenix Marker", "Bone Mask", "Canal Spray", "Night", "Desert Brush"
    ];

    RevolverGrade = [
        "Covert", "Classified", "Classified", "Classified", "Restricted", "Restricted", "Mil-spec", "Mil-spec", "Mil-spec",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Industrial", "Consumer", "Consumer", "Consumer", "Consumer"
    ];

    //36

    Tec9Navn = [
        "Fuel Injector", "Decimator", "Remote Control", "Tintanium Bit", "Re-Entry", "Avalanche", "Nuclear Threat",
        "Red Quartz", "Bamboozle", "Brother", "Blue Titanium", "Ossified", "Brass", "Sandstorm", "Ice Cap",
        "Toxic", "Terrace", "Isaac", "Jambiya", "Flash Out", "Fubar", "Blast From The Past", "Cut Out", "Cracked Opal",
        "Snek-9", "Safety Net", "VariCamo", "Hades", "Orange Murano", "Rust Leaf", "Tornado", "Urban DDPAT", "Army Mesh",
        "Groundwater", "Bamboo Forest", "Phoenix Chalk"
    ];

    Tec9Grade = [
        "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer",
    ];

    let PistolWeaponType = Math.floor(Math.random() * 10) + 1;

    if(PistolWeaponType == 1){
        let WeaponNumber = Math.floor(Math.random() * UspsNavn.length) + 1;
        pistolWeaponName = UspsNavn[WeaponNumber];
        pistolWeaponGrade = UspsGrade[WeaponNumber];
        pistolGun = "USP-S";
    }else if(PistolWeaponType == 2){
        let WeaponNumber = Math.floor(Math.random() * GlockNavn.length) + 1;
        pistolWeaponName = GlockNavn[WeaponNumber];
        pistolWeaponGrade = GlockGrade[WeaponNumber];
        pistolGun = "Glock 18";
    }else if(PistolWeaponType == 3){
        let WeaponNumber = Math.floor(Math.random() * P2000Navn.length) + 1;
        pistolWeaponName = P2000Navn[WeaponNumber];
        pistolWeaponGrade = P2000Grade[WeaponNumber];
        pistolGun = "p2000";
    }else if(PistolWeaponType == 4){
        let WeaponNumber = Math.floor(Math.random() * P250Navn.length) + 1;
        pistolWeaponName = P250Navn[WeaponNumber];
        pistolWeaponGrade = P250Grade[WeaponNumber];
        pistolGun = "p250";
    }else if(PistolWeaponType == 5){
        let WeaponNumber = Math.floor(Math.random() * DeagleNavn.length) + 1;
        pistolWeaponName = DeagleNavn[WeaponNumber];
        pistolWeaponGrade = DeagleGrade[WeaponNumber];
        pistolGun = "Desert Eagle";
    }else if(PistolWeaponType == 6){
        let WeaponNumber = Math.floor(Math.random() * DualiesNavn.length) + 1;
        pistolWeaponName = DualiesNavn[WeaponNumber];
        pistolWeaponGrade = DualiesGrade[WeaponNumber];
        pistolGun = "Dual Berettas";
    }else if(PistolWeaponType == 7){
        let WeaponNumber = Math.floor(Math.random() * Cz75Navn.length) + 1;
        pistolWeaponName = Cz75Navn[WeaponNumber];
        pistolWeaponGrade = Cz75Grade[WeaponNumber];
        pistolGun = "CZ 75";
    }else if(PistolWeaponType == 8){
        let WeaponNumber = Math.floor(Math.random() * FiveSevenNavn.length) + 1;
        pistolWeaponName = FiveSevenNavn[WeaponNumber];
        pistolWeaponGrade = FiveSevenGrade[WeaponNumber];
        pistolGun = "Five-seven";
    }else if(PistolWeaponType == 9){
        let WeaponNumber = Math.floor(Math.random() * RevolverNavn.length) + 1;
        pistolWeaponName = RevolverNavn[WeaponNumber];
        pistolWeaponGrade = RevolverGrade[WeaponNumber];
        pistolGun = "R8 revolver";
    }else if(PistolWeaponType == 10){
        let WeaponNumber = Math.floor(Math.random() * Tec9Navn.length) + 1;
        pistolWeaponName = Tec9Navn[WeaponNumber];
        pistolWeaponGrade = Tec9Grade[WeaponNumber];
        pistolGun = "Tec-9";
    }
    let pistolArray = [pistolGun,pistolWeaponGrade,pistolWeaponName]
    return(pistolArray)
   }

   function GetRifleWeapon(){
    let rifleWeaponName = "";
    let rifleWeaponGrade = "";
    let rifleGun = "";

    Ak47Navn = [
        "Fire Serpent", "Fuel Injector", "Aquamarine Revenge", "Wasteland Rebel", "Jaguar", "Vulcan", "Neon Revolution",
        "Bloodsport", "The Empress", "Asiimov", "Wild Lotus", "Legion of Anubis", "X-Ray", "Neon Rider", "Leet Museo",
        "Gold Arabesque", "Nightwish", "Case Hardened", "Red Laminate", "Redline", "Point Disarray", "Frontside Misty",
        "Cartel", "Hydroponic", "Jet Set", "Phantom Disruptor", "Panthera onca", "Ice Coaled", "Blue Laminate", "Emeral Pinstripe",
        "First Class", "Orbit Mk01", "Safety Net", "Rat Rod", "Slate", "Elite Build", "Black Laminate", "Uncharted", "Green Laminate",
        "Jungle Spray", "Safari Mesh", "Predator", "Baroque Purple"
    ];

    Ak47Grade = [
        "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert",
        "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified",
        "Restricted",  "Restricted",  "Restricted",  "Restricted",  "Restricted",  "Restricted",  "Restricted", 
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Industrial", "Industrial", "Industrial"
    ];



    AugNavn = [
        "Chameleon", "Akihabra Accept", "Fleet Flock", "Bengal Tiger", "Syd Mead", "Stymphalian", "Momentum", "Death by Puppy",
        "Aristocrat", "Torque", "Arctic Wolf", "Flame Jörmungandr", "Random Access", "Midnight Lily", "Sand Storm",
        "Anodized Navy", "Wings", "Hot Rod", "Ricochet", "Copperhead", "Tom Cat", "Carved Jade", "Triqua", "Amber Slipstream",
        "Plague", "Amber Fade", "Radiation Hazard", "Condemned", "Spalted Wood", "Contractor", "Storm", "Colony", "Deadalus",
        "Navy Murano", "Sweeper", "Surveillance"
    ];

    AugGrade = [
        "Covert", "Covert", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified",
        "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer",
    ];


    AwpNavn = [
        "Lightning Strike", "Dragon Lore", "Asiimov", "Medusa", "Man-o-War", "Hyper Beast", "Oni Taiji", "Wildfire",
        "Neo-Noir", "Containment Breach", "The Prince", "Gungnir", "Fade", "Desert Hydra", "Chromatic Aberration", "Graphite", "Boom", "Electric Hive",
        "Redline", "Corticera", "Elite Build", "Fever Dream", "Mortis", "Silk Tiger", "Pit Viper", "Pink DDPAT", "Worm God",
        "Phobos", "Atheris", "Exoskeleton", "Paw", "POP AWP", "Snake Camo", "Acheron", "Capillary", "Safari Mesh", "Sun in Leo"
    ];

    AwpGrade = [
        "Covert", "Covert", "Covert",  "Covert", "Covert", "Covert",  "Covert", "Covert", "Covert",  "Covert", "Covert", "Covert",  "Covert", "Covert", "Covert",
        "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified",
        "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Industrial",
    ];

    

    FamasNavn = [
        "Roll Cage", "Commemoration", "Afterimage", "Djinn", "Mecha Industries", "Eye of Athena", "Meltdown", "Rapid Eye Movement",
        "Spitfire", "Pulse", "Sergeant", "Valence", "Neural Net", "Styx", "Prime Conspiracy", "ZX Spectron", "Dommkitty", "Hexane",
        "Survivor Z", "Teardown", "Crypsis", "Decommissoned","Sundown", "Dark Water", "Macabre", "Meow 36", "Cyanospatter",
        "CaliCamo", "Contrast Spray", "Colony", "Night Borre", "Faulty Wiring"
    ];

    FamasGrade = [
        "Covert", "Covert", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified",
        "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Consumer", "Consumer", "Consumer", "Consumer",
    ];

    

    G3SG1Navn = [
        "The Executioner", "Flux", "Chronos", "Stinger", "Scavenger", "High Seas", "Dream Glade", "Demeter", "Azure Zebra",
        "Orange Crash", "Murky", "Ventilator", "Black Sand", "Violet Murano", "Digital Mesh", "Hunter", "Keeping Tabs",
        "New Roots", "Green Apple", "Arctic Camo", "VariCamo", "Ancient Ritual", "Orange Kimono", "Contractor", "Desert Storm",
        "Jungle Dashed", "Safari Mesh", "Polar Camo"
    ];

    G3SG1Grade = [
        "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer"
    ];

    

    GalilNavn = [
        "Chatterbox", "Eco", "Sugar Rush", "Chromatic Aberration", "Orange DDPAT", "Firefight", "Stone Colde",
        "Cerberus", "Crimson Tsunami", "Signal", "Connexion", "Phoenix Blacklight", "CAUTION!", "Shattered", "Blue Titanium",
        "Sandstorm", "Tuxedo", "Rocket Pop", "Kami", "Aqua Terrace", "Black Sand", "Akoben", "Dusk Ruins", "Vandal", "Amber Fade",
        "Destroyer", "Winter Forest", "Urban Rubble", "VariCamo", "Cold Fusion", "Sage Spray", "Hunting Blind", "Tornado"
    ];

    GalilGrade = [
        "Covert", "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec","Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial",  "Industrial" ,"Industrial","Industrial", "Consumer", "Consumer", "Consumer"
    ];

    

    M4A1SNavn = [
        "Cyrex", "Hyper Beast", "Mecha Industries", "Chantico's Fire", "Golden Coil", "Player Two", "Welcome To The Jungle",
        "Printstream", "Imminent Danger", "Guardian", "Knight", "Hot Rod", "Master Piece", "Atomic Alloy", "Decimator",
        "Control Panel", "Blue Phosphor", "Leaded Glass", "Nightmare", "Dark Water", "Bright Water", "Basilisk", "Nitro",
        "Icarus Fell", "Flashback", "Night Terror", "Blood Tiger", "VariCamo", "Briefing", "Fizzy POP", "Boreal Forest", "Moss Quartz"
    ];

    M4A1SGrade = [
        "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert",
        "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Classified",
        "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Industrial", "Industrial"
    ];

    //uten howl
    M4A4Navn = [
        "X-Ray", "Asiimov", "The Battlestar", "Royal Paladin", "Bullet Rain", "Desert-Strike", "Buzz Kill", "Neo-Noir",
        "The Emperor", "In Living Color", "The Coalition", "Desolate Space", "Dragon King", "Poseidon", "Hellfire", "Tooth Fairy",
        "Cyber Security", "Zirka", "Evil Daimyo", "Griffin", "Daybreak", "Modern Hunter", "Spider Lily", "Red DDPAT",
        "Fade Zebra", "Radiation Hazard", "Convertor", "Magnesium", "Global Offensive", "Poly Mag", "Jungle Tiger", "Tornado",
        "Urban DDPAT", "Desert Storm", "Mainframe", "Dark Blossom"
    ];

   M4A4Grade = [
        "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert", "Covert",
        "Classified", "Classified", "Classified", "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted",
        "Restricted", "Restricted", "Restricted", "Restricted", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial", "Industrial", "Industrial",
   ];

    //25
    ScarNavn = [
        "Bloodsport", "Cardiac", "Cyrex", "Splash Jam", "Emerald", "Powercore", "Enforcer", "Crimson Web", "Outbreak",
        "Green Marine", "Grott", "Blueprint", "Assault", "Torn", "Brass", "Magna Carta", "Jungle Slipstream", "Poultrygeist",
        "Carbon Fiber", "Palm", "Storm", "Army Sheen", "Sand Mesh", "Contractor", "Stone Mosaico"
    ];

    ScarGrade = [
        "Classified", "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer",
    ];

    //32

    SG553Navn = [
        "Cyrex", "Intergrale", "Hazard Pay", "Pulse", "Tiger Moth", "Bulldozer", "Triarch", "Darkwing", "Hypnotic",
        "Phantom", "Dragon Tech", "Ultraviolet", "Wave Spray", "Aerial", "Atlas",  "Damascus Steel", "Anodized Navy",
        "Aloha", "Danger Close", "Ol'Rusty", "Heavy Metal", "Desert Blossom", "Fallout Warning", "Traveler", "Gator Mesh",
        "Candy Apple", "Army Sheen", "Tornado", "Waves Perforated", "Lush Ruins", "Barricade", "Bleached"
    ];

    SG553Grade = [
        "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",  "Restricted", "Restricted",
        "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec", "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Industrial", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer",
    ];

    

    SSG08Navn = [
        "Blood in the Water", "Dragonfire", "Big Iron", "Bloodshot", "Turbo Peek", "Death Strike", "Ghost Crusader",
        "Death's Hand", "Fever Dream", "Sea Calico", "Parallax", "Necropos", "Dark Water", "Abyss", "Slashed",
        "Detour", "Acid Fade", "Hand Brake", "Orange Filigree", "Mainframe 001", "Threat Detected", "Spring Twilly", "Mayan Dreams",
        "Tropical Storm", "Carbon Fiber", "Lichen Dashed", "Sand Dune", "Blue Spruce", "Jungle Dashed", "Red Stone", "Prey"
    ];

    SSG08Grade = [
        "Covert", "Covert", "Classified", "Classified", "Classified", "Classified", "Restricted", "Restricted", "Restricted", "Restricted", "Restricted",
        "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",  "Mil-spec",
        "Industrial", "Industrial", "Industrial", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer", "Consumer",
    ];

    let RifleWeaponType = Math.floor(Math.random() * 11) + 1;

    if(RifleWeaponType == 1){
        let WeaponNumber = Math.floor(Math.random() * Ak47Navn.length) + 1;
        rifleWeaponName = Ak47Navn[WeaponNumber];
        rifleWeaponGrade = Ak47Grade[WeaponNumber];
        rifleGun= "Ak-47";
    }else if(RifleWeaponType == 2){
        let WeaponNumber = Math.floor(Math.random() * M4A1SNavn.length) + 1;
        rifleWeaponName = M4A1SNavn[WeaponNumber];
        rifleWeaponGrade = M4A1SGrade[WeaponNumber];
        rifleGun= "M4A1-S";
    }else if(RifleWeaponType == 3){
        let WeaponNumber = Math.floor(Math.random() * M4A4Navn.length) + 1;
        rifleWeaponName = M4A4Navn[WeaponNumber];
        rifleWeaponGrade = M4A4Grade[WeaponNumber];
        rifleGun= "M4A4";
    }else if(RifleWeaponType == 4){
        let WeaponNumber = Math.floor(Math.random() * FamasNavn.length) + 1;
        rifleWeaponName = FamasNavn[WeaponNumber];
        rifleWeaponGrade = FamasGrade[WeaponNumber];
        rifleGun= "FAMAS";
    }else if(RifleWeaponType == 5){
        let WeaponNumber = Math.floor(Math.random() * GalilNavn.length) + 1;
        rifleWeaponName = GalilNavn[WeaponNumber];
        rifleWeaponGrade = GalilGrade[WeaponNumber];
        rifleGun= "Galil AR";
    }else if(RifleWeaponType == 6){
        let WeaponNumber = Math.floor(Math.random() * AwpNavn.length) + 1;
        rifleWeaponName = AwpNavn[WeaponNumber];
        rifleWeaponGrade = AwpGrade[WeaponNumber];
        rifleGun= "AWP";
    }else if(RifleWeaponType == 7){
        let WeaponNumber = Math.floor(Math.random() * SSG08Navn.length) + 1;
        rifleWeaponName = SSG08Navn[WeaponNumber];
        rifleWeaponGrade = SSG08Grade[WeaponNumber];
        rifleGun= "ssg-08";
    }else if(RifleWeaponType == 8){
        let WeaponNumber = Math.floor(Math.random() * SG553Navn.length) + 1;
        rifleWeaponName = SG553Navn[WeaponNumber];
        rifleWeaponGrade = SG553Grade[WeaponNumber];
        rifleGun= "SG553";
    }else if(RifleWeaponType == 9){
        let WeaponNumber = Math.floor(Math.random() * G3SG1Navn.length) + 1;
        rifleWeaponName = G3SG1Navn[WeaponNumber];
        rifleWeaponGrade = G3SG1Grade[WeaponNumber];
        rifleGun= "G3SG1";
    }else if(RifleWeaponType == 10){
        let WeaponNumber = Math.floor(Math.random() * ScarNavn.length) + 1;
        rifleWeaponName = ScarNavn[WeaponNumber];
        rifleWeaponGrade = ScarGrade[WeaponNumber];
        rifleGun= "Scar-20";
    }else if(RifleWeaponType == 11){
        let WeaponNumber = Math.floor(Math.random() * AugNavn.length) + 1;
        rifleWeaponName = AugNavn[WeaponNumber];
        rifleWeaponGrade = AugGrade[WeaponNumber];
        rifleGun= "AUG";
    }

    let rifleArray = [rifleGun,rifleWeaponGrade,rifleWeaponName]

    return(rifleArray)

   }
   let allSkinsArray = [];

   function setMysteryGun(){
    let mysteryGun = ""
    let mysteryGrade =""
    let mysterSkin = ""
    let mysteryArray = [];

    //prøv å legge til all arrays inni den ene
    
    allSkinsArray.push(GetSmgWeapon.Mac10Navn)
    console.log(allSkinsArray.length + " " + allSkinsArray[0] + " " + allSkinsArray[40])

    mysteryGunNumber = Math.floor(Math.random() * 4) + 1;
    if(mysteryGunNumber ==1){
        mysteryArray=GetHeavyWeapon();
    }else if(mysteryGunNumber ==2){
        mysteryArray=GetSmgWeapon();
    }if(mysteryGunNumber ==3){
        mysteryArray=GetPistolWeapon();
    }if(mysteryGunNumber ==4){
        mysteryArray=GetRifleWeapon();
    }
    mysteryGun=mysteryArray[0];
    mysteryGrade=mysteryArray[1];
    mysterSkin=mysteryArray[2];
    //console.log(mysteryGun, mysteryGrade, mysterSkin)
   }

   //lag gjetting
   let guessNr = 0;

   function Guess(){
    guessNr++;
    let name = "Guess"+guessNr //lag et object for hver gjett med attribute for hver kategori
    let $name = new GuessGun
        
   }

   //lage søke funksjon som kommer med forslag
   function updateSearchBar(){

   }

   class GuessGun{
    constructor(gunType, gun, rarity, skin){
        this.gunType = gunType;
        this.gun = gun;
        this.rarity = rarity;
        this.rarity = rarity;
    }
   }

   function Reset(){
    guessNr = 0;
    GetHeavyWeapon();
    GetPistolWeapon();
    GetSmgWeapon();
    GetRifleWeapon();
   }

   
     