<<<<<<< HEAD
import Objet from "./Objet.ts";

export default class MorceauEtoile extends Objet{ 
    name : string = "PieceOfStar";
    heal : number = 50; 
    morceauEtoile(){
       
=======
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
>>>>>>> e4353367eae7af729ef056dd5f828b1bbece5bc4
    }
}