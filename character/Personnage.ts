export default class Perso {
    name : string;
    valueAtk : number = 50;
    valueAtkMagic : number = 40;
    valueDef : number = 25;
    valueVit : number = 0;
    ValueMaxLife : number = 150;
    life : number = 150
    valuemagie : number = 0;
    chance : number = 100;
    team : string = "ally"
    constructor(name:string = ""){
        this.name = name;
    }
    /**
     * Fonction pour attaquer un personnage
     * @param enemy l'ennemi que le personnage va attaquer
     */
    Attack(enemy : Perso) {
        if (this.valueAtk <= enemy.valueDef) {enemy.valueDef = Math.max(0,enemy.valueDef - (this.valueAtk/4) ); console.log("l'ennemie a perdu de l'armure")}
        else {enemy.life = Math.max(enemy.life - (this.valueAtk - enemy.valueDef),0)};
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