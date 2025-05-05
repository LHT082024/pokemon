class Trainer
{
    constructor(name, types, gender){
        this._name = name;
        this._types = types;
        this._gender = gender;
    }
}

class Pokemons
{
    constructor(){
        this.ImgPoke = [
                "/src/assets/pokemon/Zekrom.png",

            
        ]
    }
}


//Array of trainer images
class TrainerImages 
{
    constructor() {
        this.imgsTrain = [
            "/src/assets/trainer/Blue.png",
            "/src/assets/trainer/Calem.png",
            "/src/assets/trainer/Elio.png",
            "/src/assets/trainer/Gold.png",
            "/src/assets/trainer/Hilbert.png",
            "/src/assets/trainer/Lucas.png",
            "/src/assets/trainer/Nate.png",
            "/src/assets/trainer/Red.png"
        ];
    }
}


export {Trainer, Teams, TrainerImages}