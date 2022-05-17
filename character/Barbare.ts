import Perso from "./Personnage.ts";
import Monster from "./Monstre.ts"
/** 
 * la classe Barbare est une classe enfant de la classe Perso
*/
export default class Barbare extends Perso{
    name : string = "Barbare";
    valueAtk : number = 80;
    valueAtkMagic : number = 40;
    valueDef : number = 25;
    valueVit : number = 60;
    ValueMaxLife : number = 150;
    life : number = 150
    valuemagie : number = 0;
    chance : number = 100;
    team : string = "ally"
}

// Le barbare aura une défense faible et une attaque plus élevée encore que leguerrier. 
// Il aura une attaque Berserk qui attaque un ennemi au hasard pour130% des dégats 
// physiques normaux (attaque - défense adverse)*1.3, mais ilse blessera de 20% de 
// sa vie en l'effectuant.