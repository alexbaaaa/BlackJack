class Player {
    constructor(name){
        this._name = name;
        this._hand = [];
    }

    get name(){
        return this._name;
    }
    get hand(){
        return this._hand;
    }

}

export {Player}