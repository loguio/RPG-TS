import Perso from "./Personnage.ts";
export default class Boss extends Perso{
    name : string = "Boss";

    
    Boss(){
        this.ValueMaxLife = this.ValueMaxLife + 400; 
        this.valueDef = this.valueDef + 20;
        this.valueVit = this.valueVit + 50;
        this.valueAtk = this.valueAtk + 40;

        if (this.chance > 0 || this.chance <= 70 ) {this.valueAtk } // Mettre que le Boss
        else {this.valueAtkZone = this.valueAtkZone + 15}
    }

}