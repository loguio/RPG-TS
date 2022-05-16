import Perso from "../caracter/Personnage.ts"

export default class Ether extends Perso{
    name : string = "Ether";
    magie : number = 30;
    ether(){
        if (this.alive = true) {this.valuemagie = this.valuemagie + this.magie}
    }
}