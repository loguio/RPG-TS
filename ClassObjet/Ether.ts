import Object from "./Objet.ts"
import Mage from "../character/Mage.ts"
import Pretre from "../character/Pretre.ts"

export default class Ether extends Object {
    name : string = "Ether";
    magie : number = 30;
    ether(Ally:Mage | Pretre){
        console.log(Ally)
        if (Ally.isAlive()) {Ally.mana = Math.min(Ally.mana + this.magie,Ally.manaMax)}
        console.log(Ally)

    }
}