import Perso from "./Personnage.ts";
export default class Monstre {
    name : string = "Monstre qui fait peur !!!"
    valueAtk : number = 40;
    valueAtkMagic : number = 40;
    valueDef : number = 20;
    valueVit : number = 0;
    ValueMaxLife : number = 100;
    life : number = 100
    valuemagie : number = 0;
    chance : number = 100;
    team : string = "ennemi"

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
    isAlive()  : boolean{
        if (this.life == 0) {return false} return true
    }
}