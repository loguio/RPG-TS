import Perso from "./Personnage.ts";

export default class Guerrier extends Perso {
    name :  string = "Guerrier";
    valueAtk = 70;
    valueDef = 50;
    valueVit = 45;
}

// Le guerrier aura une attaque et une défense élevée, 
// il ne possèdera pasd'attaque spéciale, et une vitesse moyenne.