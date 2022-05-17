import Perso from "./Personnage.ts";
/**
 * la classVoleur est une classe enfant de Perso 
 */
export default class Voleur extends Perso{
    name : string = "Voleur";
    valueVit = 100
    valueAtk = 50
    valueDef = 30
}