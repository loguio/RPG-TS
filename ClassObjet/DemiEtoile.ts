<<<<<<< HEAD
import Objet from "./Objet.ts"
import Perso from "../character/Personnage.ts"

export default class DemiEtoile extends Objet{
    name : string = "HalfStar";
    demiEtoile(ally : Perso){
        if (ally.isAlive()){
            ally.life = Math.min(ally.life+this.heal,ally.ValueMaxLife)
        } else {
            console.log("This ally is dead")
        }
=======
import Perso from "../character/Personnage.ts"
import Objet from "./Objet.ts"  

export default class DemiEtoile extends Objet{
    name : string = "DemiEtoile";
    demiEtoile(Ally:Perso){
        Ally.life = Ally.ValueMaxLife
>>>>>>> e4353367eae7af729ef056dd5f828b1bbece5bc4
    }
}