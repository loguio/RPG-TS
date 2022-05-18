import Object from "./Objet.ts"
import Chara from "../character/Personnage.ts"

export default class MorceauEtoile extends Object{ 
    name : string = "MorceauEtoile";
    morceauEtoile(Ally: Chara){
        console.log(Ally)
        if (Ally.isAlive()) {
            Ally.life = Math.min( Ally.life+(Ally.ValueMaxLife/2),Ally.ValueMaxLife)
        }else {
            Ally.life = Ally.ValueMaxLife/4
        }
        console.log(Ally)
    }
}