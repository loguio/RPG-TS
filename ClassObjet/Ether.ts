import Mage from "../character/Mage.ts"
import Pretre from "../character/Pretre.ts"
import Objet from "./Objet.ts"

export default class Ether extends Objet {
    name : string = "Ether";
    magie : number = 30;
    ether(Ally:Mage | Pretre){
        if (Ally.isAlive()) {Ally.mana = Math.min(Ally.mana + this.magie,Ally.manaMax)}
    }
}