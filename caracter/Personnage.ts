export default class Perso {
    invetory : Object[] = [];
    name : string;
    valueAtk : number = 80;
    valueAtkMagic : number = 40;
    valueDef : number = 50;
    valueVit : number = 0;
    ValueMaxLife : number = 100;
    life : number = 100
    alive : boolean = true
    valuemagie : number = 0;
    chance : number = 100;
    constructor(name:string = ""){
        this.name = name;
    }
    UseItem() {

    }
    /**
     * Fonction pour attaquer un personnage
     * @param enemy l'ennemi que le personnage va attaquer
     */
    Attack(enemy : any) {
        enemy.life -= (this.valueAtk - enemy.valueDef);
    }
    /**
     * Fonction pour soigner un personnage  
     */
    Heal() {
        this.life += 0.2*this.ValueMaxLife;
    }
    Trap(){
        this.life -= 50;
    }
    isAlive() {
        if (this.life == 0) {this.alive = false}
    }
}