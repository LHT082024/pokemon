class Trainer
{
    constructor(name, types, gender){
        this._name = name;
        this._types = types;
        this._gender = gender;
    }
}

class Teams
{
    constructor(pk1, pk2, pk3, pk4, pk5, pk6){
        this._pk1 = pk1;
        this._pk2 = pk2;
        this._pk3 = pk3;
        this._pk4 = pk4;
        this._pk5 = pk5;
        this._pk6 = pk6;
    }
}


//Array of trainer images
class TrainerImages {
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