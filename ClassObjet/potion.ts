// import Objet from "./Objet.ts"
import Perso from "../caracter/Personnage.ts"

export default class Potion extends Perso {
    heal : number = 50;
    name : string = "Potion"
    /**
     * Cette function permet de soigner un personnage en lui rendant 50% de pv.
     */
    potion(){
        if (this.life > 0){this.life = this.life + this.heal} 
        else if (this.life > 50) {
            let diff = this.ValueMaxLife - this.life;
            this.life = this.life + diff;
        }
    }
}