export default class Perso {
    name : string;
    valueAtk : number = 80;
    valueDef : number = 50;
    valueVit : number = 0;
    ValueMaxLife : number = 100;
    life : number = 100
    alive : boolean = true

    constructor(name:string = ""){
        this.name = name;
    }
    UseItem() {

    }
    
    Attack(enemy : any) {
        enemy.life -= (this.valueAtk - enemy.valueDef);
    }
    Heal() {
        this.life += 0.2*this.ValueMaxLife;
    }

    isAlive() {
        if (this.life == 0) {this.alive = false}
    }
}