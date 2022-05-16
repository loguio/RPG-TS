export default class Perso {
    invetory : Object[] = [];
    name : string;
    valueAtk : number = 80;
    valueAtkMagic : number = 40;
    valueDef : number = 50;
    valueVit : number = 0;
    ValueMaxLife : number = 100;
    life : number = 100
    valuemagie : number = 0;
    chance : number = 100;
    side : string;
    /**
     * 
     * @param name initialise le nom du personnage
     * @param side initialise le coté du personnage
     */
    constructor(name:string = "",side:string = "") {
        this.name = name;
        this.side = side;
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
    /**
     * Fonction pour enlever la vie du personne quand il tombe dans un piège
     */
    Trap(){
        this.life -= 50;
    }
    /**
     * Fonction qui vérifie si le personnage est mort ou vivant 
     */
    isAlive() : boolean {
        if (this.life == 0) {return false}else{return true}
    }
}