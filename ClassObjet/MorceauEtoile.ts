import Perso from "../caracter/Personnage.ts";

export default class MorceauEtoile extends Perso{ 
    name : string = "MorceauEtoile";
    heal : number = 50; 
    ko : boolean = true;
    morceauEtoile(){
       if (this.ko = true) {}
       else if (this.life > 0) {this.life = this.life + this.heal}
    }
}
            