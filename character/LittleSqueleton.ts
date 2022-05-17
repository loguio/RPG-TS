import Monstre from "./Monstre.ts"
/**
 * LtitleSqueleton est une classe enfant de la class Monstre
 */
export default class LittleSqueleton extends Monstre{
    name : string = "LittleSqueleton";
    ValueMaxLife = 50
    life = 50
    valueAtk = 30
    valueDef = 0
    valueVit = 20

}