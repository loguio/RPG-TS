import Objet from "./Objet.ts"
import Perso from "../character/Personnage.ts";

export default class MorceauEtoile extends Objet{ 
    name : string = "PieceOfStar";
    morceauEtoile(Ally: Perso){
       if (Ally.isAlive()) {
           Ally.life = Math.min( Ally.life+(Ally.ValueMaxLife/2),Ally.ValueMaxLife)
       }else {
           Ally.life = Ally.ValueMaxLife/4
       }
    }
}