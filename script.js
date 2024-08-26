class Skin {
    constructor(name, weaponClass,gun, rarity ) {
      this.name = name;
      this.weaponClass = weaponClass;
      this.gun = gun;
      this.rarity = rarity;
    }
}

function createSkins(){
    var skinList =[];
    //howl = new Skin("Navn",klasseTall,VåpenTall,Sjeldenhetstall)
    //Klasse tall 0=pistol 1=smg 2=rifle 3=heavy
    //Våpentall Rifle 0=Awp 1=ak-47 2=M4A1 3=M4A4 4=Galil 5= Famas 6=SG-553 7=G3SG1 8=Scar-20 9=Aug 10=ssg08
    //sjeldenhetstall 0=Contraband 1=Covert 2=Classified 3=Restricted 4=Mil-Spec 5= industrial Grade 6=Consumer Grade

    //Rifles
    {
    //Awp
    {
        //Covert
        skinList.push(Chrome_Cannon = new Skin("Chrome Cannon",2,0,1))
        skinList.push(Chromatic_AberrationAwp = new Skin("Chromatic Aberration",2,0,1))
        skinList.push(Containment_Breach = new Skin("Containment Breach",2,0,1))
        skinList.push(Wildfire = new Skin("Wildfire",2,0,1))
        skinList.push(Neo_NoirAwp = new Skin("Neo_Noir",2,0,1))
        skinList.push(Oni_Taiji = new Skin("Oni Taiji",2,0,1))
        skinList.push(Hyper_Beast = new Skin("Hyper Beast",2,0,1))
        skinList.push(Man_o_War = new Skin("Man-o'-war",2,0,1))
        skinList.push(AsiimovAwp = new Skin("Asiimov",2,0,1))
        skinList.push(Lightning_Strike = new Skin("Lightning Strike",2,0,1))
        skinList.push(Desert_Hydra = new Skin("Desert Hydra",2,0,1))
        skinList.push(Fade = new Skin("Fade",2,0,1))
        skinList.push(Gungnir = new Skin("Gungnir",2,0,1))
        skinList.push(The_Prince = new Skin("The Prince",2,0,1))
        skinList.push(Medusa = new Skin("Medusa",2,0,1))
        skinList.push(Dragon_Lore = new Skin("Dragon Lore",2,0,1))

        //Classified
        skinList.push(Duality = new Skin("Duality",2,0,2))
        skinList.push(Mortis = new Skin("Mortis",2,0,2))
        skinList.push(Fever_DreamAwp = new Skin("Fever Dream",2,0,2))
        skinList.push(Elite_BuildAWP = new Skin("Elite Build",2,0,2))
        skinList.push(Corticera = new Skin("Corticera",2,0,2))
        skinList.push(RedlineAwp = new Skin("Redline",2,0,2))
        skinList.push(Electric_Hive = new Skin("Electric Hive",2,0,2))
        skinList.push(Graphite = new Skin("Graphite",2,0,2))
        skinList.push(Boom = new Skin("BOOM",2,0,2))
        skinList.push(Silk_Tiger = new Skin("Silk Tiger",2,0,2))

        //Restricted
        skinList.push(Exoskeleton = new Skin("Exoskeleton",2,0,3))
        skinList.push(Atheris = new Skin("Atheris",2,0,3))
        skinList.push(Paw = new Skin("PAW",2,0,3))
        skinList.push(Phobos = new Skin("Phobos",2,0,3))
        skinList.push(Worm_God = new Skin("Worm God",2,0,3))
        skinList.push(Pop_Awp = new Skin("POP AWP",2,0,3))
        skinList.push(Pink_DDPAT = new Skin("Pink DDPAT",2,0,3))
        skinList.push(Pit_Viper = new Skin("Pit Viper",2,0,3))

        //Mil-spec
        skinList.push(CapillaryAwp = new Skin("Capillary",2,0,4))
        skinList.push(Black_Nile = new Skin("Black Nile",2,0,4))
        skinList.push(Acheron = new Skin("Acheron",2,0,4))
        skinList.push(Snake_Camo = new Skin("Snake Camo",2,0,4))

        //Industrial
        skinList.push(Sun_in_Leo = new Skin("Sun in Leo",2,0,5))
        skinList.push(Safari_MeshAwp = new Skin("Safari Mesh",2,0,5))
    }

    //ak-47
    {
    //covert
    skinList.push(inheritance = new Skin("Inheritance",2,1,1))
    skinList.push(Head_Shot = new Skin("Head Shot",2,1,1))
    skinList.push(Nightwish = new Skin("Nightwish",2,1,1))
    skinList.push(Leet_Museo = new Skin("Leet Museo",2,1,1))
    skinList.push(Legion_Of_Anubis = new Skin("Legion of Anubis",2,1,1))
    skinList.push(AsiimovAk = new Skin("Asiimov",2,1,1))
    skinList.push(Neon_Rider = new Skin("Neon Rider",2,1,1))
    skinList.push(The_Empress = new Skin("The Empress",2,1,1))
    skinList.push(Bloodsport = new Skin("Bloodsport",2,1,1))
    skinList.push(Neon_Revolution = new Skin("Neon Revolution",2,1,1))
    skinList.push(Fuel_Injector = new Skin("Fuel Injector",2,1,1))
    skinList.push(Aquamarine_Revenge = new Skin("Aquamarine Revenge",2,1,1))
    skinList.push(Wasteland_Rebel = new Skin("Wasteland Rebel",2,1,1))
    skinList.push(Jaguar = new Skin("Jaguar",2,1,1))
    skinList.push(Vulcan = new Skin("Vulcan",2,1,1))
    skinList.push(Fire_Serpent = new Skin("Fire Serpent",2,1,1))
    skinList.push(Gold_Arabesque = new Skin("Gold_Arabesque",2,1,1))
    skinList.push(X_RAy = new Skin("X-Ray",2,1,1))
    skinList.push(Wild_Lotus = new Skin("Wild Lotus",2,1,1))

    //Classified
    skinList.push(Ice_Coaled = new Skin("Ice Coaled",2,1,2))
    skinList.push(Phantom_Disruptor = new Skin("Phantom Disruptor",2,1,2))
    skinList.push(Point_Disarray = new Skin("Point Disarray",2,1,2))
    skinList.push(Frontside_Misty = new Skin("Frontside Misty",2,1,2))
    skinList.push(RedlineAk = new Skin("Redline",2,1,2))
    skinList.push(Case_Hardened = new Skin("Case Hardened",2,1,2))
    skinList.push(Red_Laminate = new Skin("Red_Laminate",2,1,2))
    skinList.push(Panther_Onca = new Skin("Panthera Onca",2,1,2))
    skinList.push(Hydroponic = new Skin("Hydroponic",2,1,2))
    skinList.push(Jet_Set = new Skin("Jet Set",2,1,2))

    //Restricted
    skinList.push(Slate = new Skin("Slate",2,1,3))
    skinList.push(Rat_Rod = new Skin("Rat Rod",2,1,3))
    skinList.push(Orbit = new Skin("Orbit Mk01",2,1,3))
    skinList.push(Blue_Laminate = new Skin("Blue Laminate",2,1,3))
    skinList.push(Safety_Net = new Skin("Safety Net",2,1,3))
    skinList.push(First_Class = new Skin("First Class",2,1,3))
    skinList.push(Emerald_Pinstripe = new Skin("Emerald Pinstripe",2,1,3))

    //Mil-spec
    skinList.push(Uncharted = new Skin("Uncharted",2,1,4))
    skinList.push(Elite_BuildAk = new Skin("Elite Build",2,1,4))
    skinList.push(Steel_Delta = new Skin("Steel Delta",2,1,4))
    skinList.push(Green_Laminate = new Skin("Green Laminate",2,1,4))
    skinList.push(Black_Laminate = new Skin("Black Laminate",2,1,4))

    //Industrial
    skinList.push(Baroque_Purple = new Skin("Baroque Purple",2,1,5))
    skinList.push(Safari_MeshAk = new Skin("Safari Mesh",2,1,5))
    skinList.push(Predator = new Skin("Predator",2,1,5))
    skinList.push(Jungle_Spray = new Skin("Jungle Spray",2,1,5))
    }

    //M4A1-S
    {
        //Covert
        skinList.push(PrintstreamM4 = new Skin("Printstream",2,3,1))
    }

    //M4A4
    {
    skinList.push(howl = new Skin("Howl",2,3,0))
    }
    
    }
    console.log(skinList.length)
}

    
    
    
