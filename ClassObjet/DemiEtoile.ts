import Objet from "./Objet.ts"  
import Chara from "../character/Personnage.ts"
export default class DemiEtoile extends Objet{
    name : string = "Demi Etoile";
    demiEtoile(Ally:Chara){
        console.log(Ally)
        Ally.life = Ally.ValueMaxLife
        console.log(Ally)
    }
}