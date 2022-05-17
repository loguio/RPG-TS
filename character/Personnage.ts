/**
 * il s'agit de la classe de création de n'importe quel personnage 
 */
export default class Chara {
    /**
    * il s'agit du nom qu'aura notre personnage  
    */
    name : string;
    /**
     * il s'agit de la valeur d'attaque qu'aura notre personnage
     */
    valueAtk : number = 50;
    /**
     * il s'agit de la valeur d'attaque magique qu'aura notre personnage 
     */
    valueAtkMagic : number = 40;
    /**
     * il s'agit de la valeur de defense qu'aura notre personnage
     */
    valueDef : number = 25;
    /**
     * il s'agit de la valeur de vitesse qu'aura notre personnage
     */
    valueVit : number = 0;
    /**
     * il s'agit de la vie maximum ue poura avoir notre personnage
     */
    ValueMaxLife : number = 150;
    /**
     * il s'agit de la vie qu'a notre personnage
     */
    life : number = 150
    /**
     * il s'agit de la team dans laquel est le personnage (soit gentil ou méchant)
     */
    team : string = "ally"
    mana : number = 40
    manaMax : number = 40
    /**
     * il s'agit de la chance qu'aura notre personnage
     */
    chance : number =100
    constructor(name:string = ""){
        this.name = name;
    }
    /**
     * Fonction pour attaquer un personnage
     * @param enemy l'ennemi que le personnage va attaquer
     */
    Attack(enemy : Chara) {
        if (this.valueAtk <= enemy.valueDef) {enemy.valueDef = Math.max(0,enemy.valueDef - (this.valueAtk/4) ); console.log("l'ennemie a perdu de l'armure")}
        else {let tempLife = enemy.life;enemy.life = Math.max(enemy.life - (this.valueAtk - enemy.valueDef),0);console.log("\nLife",enemy.name," : ",tempLife," --> ", enemy.life)};
    }
    /**
     * Fonction pour soigner un personnage  
     */
    Heal() {
        this.life += 0.2*this.ValueMaxLife;
    }
    /**
     * Fonction qui enlève des points de vie si le personnage tombe sur piège dans un coffre.
     */
    Trap(){
        this.life -= 50;
    }
    /**
     * 
     * @returns {number} retourne la valeur si le personnage est viavant ou mort.
     */
    isAlive()  : boolean{
        if (this.life == 0) {return false} return true
    }
}