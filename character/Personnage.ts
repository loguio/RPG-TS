import Monster from "./Monstre.ts"
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

    /**
     * 
     * @param Ally il s'agit des jouerus alliés
     */
    AttackBoss(Ally : Chara[]){
        if(Math.floor(Math.random()*10) >=7) {
            Ally.forEach(element => {
                element.life = Math.max(0,element.life-this.valueAtk/3)
            });
        }else {
            let ally : Chara = Ally[Math.floor(Math.random()*3)]
            while (!ally.isAlive()) {
                ally = Ally[Math.floor(Math.random()*3)]
            }
            ally.life = Math.max(ally.life-this.valueAtk+ally.valueDef,0)
        }
    }
/**
 * il s'agit de l'attaque spéciale du barbare
 * @param ennemi il s'agit de la liste de tous nos ennemies durant un combat
 */
    public Berserk(ennemi : Monster[]){
        let tempo : Chara = ennemi[Math.floor(Math.random()*3)]
        while(!tempo.isAlive) {
            tempo = ennemi[Math.floor(Math.random()*3)]
        }
        tempo.life = Math.max(0,tempo.life-this.valueAtk*1.3)
    }
    /**
     * il s'agit de l'attaque spéciale du pretre
     * @param Ally il s'agit de nous 
     */
    Healing(Ally : Chara[]) {
        if (this.mana >= 10) {
            for (let index = 0; index < Ally.length; index++) {
                const element = Ally[index];  
                if (element.isAlive()) {
                    console.log(`${index+1}. ${element.name}`)
                }
            };
            let choose : null | string = prompt("qui choisissez vous pour soignez ? >")
            if (choose!= null && Ally[parseInt(choose)-1].isAlive()) {
                Ally[parseInt(choose)-1].life = Math.min(Ally[parseInt(choose)-1].ValueMaxLife,Ally[parseInt(choose)-1].life+Ally[parseInt(choose)-1].ValueMaxLife/4)
            }
            this.mana -= 10
            console.log(`il vous reste ${this.mana} point de mana`)
        }else{
            console.log("vous n'avez plus de mana et vous avez perdu un tour")
        }
    }
    /**
     * il s'agit de l'attaque spéciale du Paladin
     * @param ennemies il s'agit de nos ennemies durant u nfight
     */
    Sainte(ennemies : Monster[]) {
        ennemies.forEach(element => {
            element.life = Math.max(element.life-this.valueAtk*0.4,0)
        });
    }
    /**
     * il s'agti de l'attaque spéciale du Mage
     * @param ennemi il s'agit d'une liste de Monstre
     * 
     */
    MagicAttck(ennemi : Monster[]) {
        for (let index = 0; index < ennemi.length; index++) {
            const element = ennemi[index];
            if (element.isAlive()) {
                console.log(`${index+1}. ${element.name}`)
            }
        }
        let choose : null | string = prompt("Qui voulez vous choisir a attaquer ? >")
        while (choose == null) {choose = prompt("Qui voulez vous choisir a attaquer ? >")}
        this.mana =- 10
        ennemi[parseInt(choose)-1].life = Math.max(0,ennemi[parseInt(choose)-1].life-this.valueAtk)
    }
}