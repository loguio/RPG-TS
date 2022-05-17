/**
 * la classe Monstre est une classe qui es parentes de tout les monstres
 */
export default class Monstre {
    name : string = "Monstre qui fait peur !!!"
    valueAtk : number = 40;
    valueAtkMagic : number = 40;
    valueAtkZone : number = 10;
    valueDef : number = 20;
    valueVit : number = 0;
    ValueMaxLife : number = 100;
    life : number = 100
    valuemagie : number = 0;
    chance : number = 100;
    team : string = "ennemi"
    mana : number = 40
    manaMax : number = 40

    UseItem() {

    }
    /**
     * Fonction pour attaquer un personnage
     * @param enemy l'ennemi que le personnage va attaquer
     */
    Attack(enemy : any) {
        enemy.life = Math.max(enemy.life - (Math.max(this.valueAtk - enemy.valueDef,0)),0);
    }
    /**
     * Fonction pour soigner un personnage  
     */
    Heal() {
        this.life += 0.2*this.ValueMaxLife;
    }
    /**
     * Fonction pour enlever la vie du personne quand il tombe dans un piège
     */
    Trap(){
        this.life -= 50;
    }
    /**
     * Fonction qui vérifie si le personnage est mort ou vivant 
     */
    isAlive()  : boolean{
        if (this.life == 0) {return false} return true
    }
}