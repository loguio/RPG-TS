export default class Perso {
    name : string;
    valueAtk : number = 80;
    valueAtkMagic : number = 40;
    valueDef : number = 50;
    valueVit : number = 0;
    ValueMaxLife : number = 100;
    life : number = 30
    valuemagie : number = 0;
    chance : number = 100;
    team : string = "ally"
    constructor(name:string = ""){
        this.name = name;
    }
    UseItem() {

    }
    /**
     * Fonction pour attaquer un personnage
     * @param enemy l'ennemi que le personnage va attaquer
     */
    Attack(enemy : Perso) {
        enemy.life = Math.max(enemy.life - (this.valueAtk - enemy.valueDef),0);
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
    isAlive()  : boolean{
        if (this.life == 0) {return false} return true
    }
}