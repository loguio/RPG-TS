import Perso from "../character/Personnage.ts"
import Objet from "./Objet.ts"  

export default class DemiEtoile extends Objet{
    name : string = "DemiEtoile";
    demiEtoile(Ally:Perso){
        Ally.life = Ally.ValueMaxLife
    }
}