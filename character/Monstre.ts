import Chara from "./Personnage.ts"
/**
 * la classe Monstre est une classe qui es parentes de tout les monstres
 */
export default class Monstre extends Chara{
    name : string = "Monstre qui fait peur !!!"
    valueAtk : number = 40;
    valueAtkMagic : number = 40;
    valueAtkZone : number = 10;
    valueDef : number = 20;
    valueVit : number = 0;
    ValueMaxLife : number = 100;
    life : number = 100
    valuemagie : number = 0;
    chance : number = 100;
    team : string = "ennemi"
    mana : number = 40
    manaMax : number = 40
    
}