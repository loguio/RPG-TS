import Perso from "./Personnage.ts";
export default class Voleur extends Perso{
    name : string = "Voleur";
    nothing : number = 0;
    potion : number = 0;
    star : number = 0;
    ether : number = 0;
    pieceOfStar : number = 0;
    VoleurVit() {
        this.valueVit = this.valueVit + 20;
    }
    VoleurVol() {
       this.nothing = this.chance / 0.4;
       this.potion = this.chance / 0.3;
       this.star = this.chance / 0.15;
       this.ether = this.chance / 0.10;
       this.pieceOfStar = this.chance / 0.05; 
    }
}