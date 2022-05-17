import Perso from "./Personnage.ts";
export default class Pretre extends Perso{
    name : string = "Pretre";
    mana : number = 40;
    maxMana : number = 40;
    Attack() {
        this.mana -= 10;
        
    }
}