import Perso from "../caracter/Personnage.ts"

export default class DemiEtoile extends Perso{
    demiEtoile(){
        if (this.alive == false) {this.alive = this.alive}
        else if (this.life > 0 ) {this.life = 100}
    }
}