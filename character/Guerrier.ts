import Chara from "./Personnage.ts";
/**
 * la classe Guerrier est une classe enfant de Perso
 */
export default class Guerrier extends Chara {
    name :  string = "Guerrier";
    valueAtk = 70;
    valueDef = 50;
    valueVit = 45;
}

// Le guerrier aura une attaque et une défense élevée, 
// il ne possèdera pasd'attaque spéciale, et une vitesse moyenne.