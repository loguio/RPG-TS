import Chara from "./Personnage.ts"
/**
 * la classe Pretre est une classe enfant de la classe Perso
 */
export default class Pretre extends Chara {
    name = "Pretre"
    mana : number = 40;
    manaMax : number = 40
    valueAtk = 40
    valueDef = 20
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
}