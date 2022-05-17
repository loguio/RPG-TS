import Perso from "../character/Personnage.ts"
import Mage from "../character/Mage.ts"
import Pretre from "../character/Pretre.ts"


export default class Objet {
    name : string = ""
    heal : number = 50;
    magie : number = 30;

    /**
     * Foncion pour heal le personnage
     * @param ally 
     */
    Healing(ally : Perso){
        console.log(ally)
        if (ally.isAlive()){ally.life = Math.min(ally.life+this.heal,ally.ValueMaxLife)}
        console.log(ally)

    }
    ether(Ally:Mage | Pretre){
        console.log(Ally)
        if (Ally.isAlive()) {Ally.mana = Math.min(Ally.mana + this.magie,Ally.manaMax)}
        console.log(Ally)

    }
    morceauEtoile(Ally: Perso){
        console.log(Ally)
        if (Ally.isAlive()) {
            Ally.life = Math.min( Ally.life+(Ally.ValueMaxLife/2),Ally.ValueMaxLife)
        }else {
            Ally.life = Ally.ValueMaxLife/4
        }
        console.log(Ally)
    }
    demiEtoile(Ally:Perso){
        console.log(Ally)
        Ally.life = Ally.ValueMaxLife
        console.log(Ally)
    }
}