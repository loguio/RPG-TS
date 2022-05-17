import Perso from "../character/Personnage.ts"

export default class DemiEtoile extends Perso{
    name : string = "HalfStar";
    demiEtoile(){
        if (this.alive == false) {this.alive = this.alive}
        else if (this.life > 0 ) {this.life = 100}
    }
}