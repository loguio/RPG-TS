import Perso from "./Personnage.ts";

export default class Guerrier extends Perso {
    name :  string = "Guerrier";
    GuerrierAtk() {
        this.valueAtk = this.valueAtk + 10;
        this.valueDef = this.valueDef + 10;
        this.valueVit = this.valueVit + 10;
    }
}

// Le guerrier aura une attaque et une défense élevée, 
// il ne possèdera pasd'attaque spéciale, et une vitesse moyenne.