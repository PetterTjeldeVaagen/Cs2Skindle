class Skin {
    constructor(name, weaponClass,gun, rarity ) {
      this.name = name;
      this.weaponClass = weaponClass;
      this.gun = gun;
      this.rarity = rarity;
    }
}

function createSkins(){
    //ca 1222
    var skinList =[];
    //howl = new Skin("Navn",klasseTall,VåpenTall,Sjeldenhetstall)
    //Klasse tall 0=pistol 1=mid tier 2=rifle 
    //sjeldenhetstall 0=Contraband 1=Covert 2=Classified 3=Restricted 4=Mil-Spec 5= industrial Grade 6=Consumer Grade

    //Legg til 1 i 3 sjanse for hver klasse for balanse
    //legge til rifle skins fra armory kolleksjonene
    //Legge til collection for å øke "skill" behov + årstall med oransje farge når innenfor 1 år (Legg til samtidig etter alle skins så bruk cheat sheet med alle colelctions + årstall)

    //Mid tier 
    {
        //Våpentall mid tier 0=negev 1=m249  2=xm1014 3=mag-7 4=sawed off 5=nova   6=ump 7=mp7 8=p90 9=mp9 10=mp5 11=pp-bizon 12=mac-10

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
            skinList.push(Golden_Koi = new Skin("Golden_Koi",0,3,1));

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
        skinList.push(Neo_NoirAwp = new Skin("Neo_Noir",2,0,1));
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
    skinList.push(Gold_Arabesque = new Skin("Gold_Arabesque",2,1,1));
    skinList.push(X_RAy = new Skin("X-Ray",2,1,1));
    skinList.push(Wild_Lotus = new Skin("Wild Lotus",2,1,1));

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

    //Industrial
    skinList.push(Baroque_Purple = new Skin("Baroque Purple",2,1,5));
    skinList.push(Safari_MeshAk = new Skin("Safari Mesh",2,1,5));
    skinList.push(Predator = new Skin("Predator",2,1,5));
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
    }
    //M4A4
    {
        //Contraband
        skinList.push(howl = new Skin("Howl",2,2,0));

        //Covert
        skinList.push(Temukau = new Skin("Temukau",2,2,1));
        skinList.push(In_Living_Color = new Skin("In Living Color",2,2,1));
        skinList.push(The_Emperor = new Skin("The Emperor",2,2,1));
        skinList.push(Neo_NoirM4 = new Skin("Neo_Noir",2,2,1));
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

        //Industrial
        skinList.push(Cold_Fusion = new Skin("Cold Fusion",2,4,5));
        skinList.push(Urban_RubbleGal = new Skin("Urban Rubble",2,4,5));
        skinList.push(VariCamoGal = new Skin("VariCamo",2,4,5));
        skinList.push(Winter_Forest = new Skin("Winter Forest",2,4,5));

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

        //Restricted
        skinList.push(Arctic_Wolf = new Skin("Arctic Wolf",2,9,3));
        skinList.push(Aritocrat = new Skin("Aristocrat",2,9,3));
        skinList.push(TorqueAug = new Skin("Torque",2,9,3));
        skinList.push(Sand_Storm = new Skin("Sand Storm",2,9,3));
        skinList.push(Midnight_Lily = new Skin("Midnight Lily",2,9,3));
        skinList.push(Flame_Jormungandr = new Skin("Flame Jörmungandr",2,9,3));
        skinList.push(Random_Access = new Skin("Random Access",2,9,3));

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
        skinList.push(Blood_in_the_Water = new Skin("Dragonfire",2,10,1));

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

        //Industrial
        skinList.push(Azure_Glyph = new Skin("Azure Glyph",2,10,5));
        skinList.push(Carbon_FiberSSG = new Skin("Carbon Fiber",2,10,5));
        skinList.push(Tropical_Storm = new Skin("Tropical Storm",2,10,5));
        skinList.push(Mayan_Dreams = new Skin("Mayan Dreams",2,10,5));

        //Consumer
        skinList.push(Prey = new Skin("Prey",2,10,6));
        skinList.push(Jungle_DashedSSG = new Skin("Jungle Dashed",2,10,6));
        skinList.push(Red_Stone = new Skin("Red Stone",2,10,6));
        skinList.push(Sand_DuneSSG = new Skin("Sand Dune",2,10,6));
        skinList.push(Blue_SpruceSSG = new Skin("Blue Spruce",2,10,6));
        skinList.push(Lichen_Dashed = new Skin("Lichen_Dashed",2,10,6));
    }

    }

    
    console.log(skinList.length)
}




    
    
    
