class Perso {
    invetory : Object[] = [];
    name : string = "";
    valueAtk : number = 0;
    valueDef : number = 0;
    valueVit : number = 0;
    valueMaxLife : number = 0;
    life : number = 100
    mana: number = 0
    alive : boolean = true

    UseItem() {

    }

    Attack() {
        
    }

    isAlive() {
        if (this.life == 0) {this.alive = false}
    }
}