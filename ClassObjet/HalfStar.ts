import Perso from "../character/Personnage.ts"
import Objet from "./Objet.ts"  

export default class HalfStar extends Objet{
    name : string = "HalfStar";
    demiEtoile(Ally:Perso){
        Ally.life = Ally.ValueMaxLife
    }
}