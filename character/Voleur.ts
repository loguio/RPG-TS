import Chara from "./Personnage.ts";
import Inventory from "../inventory.ts";
import Potion from "../ClassObjet/potion.ts";
import Ether from "../ClassObjet/Ether.ts";
import MorceauEtoile from "../ClassObjet/MorceauEtoile.ts";
import DemiEtoile from "../ClassObjet/DemiEtoile.ts";
/**
 * la classVoleur est une classe enfant de Perso 
 */
export default class Voleur extends Chara{
    name : string = "Voleur";
    valueVit = 100
    valueAtk = 50
    valueDef = 30
    steal(inventory : Inventory){
        let luck = Math.random()*100
        if(luck <=40){
            console.log("Vous n'avez rien trouvé")
        }else if (luck >40&& luck <= 70){
            inventory.addItem(new Potion())
            console.log("Vous avez trouvé une potion")
        }else if (luck >70&& luck <= 85){
            inventory.addItem(new MorceauEtoile())
            console.log("Vous avez trouvé un morceau d'etoile")
        }else if (luck >85&& luck <= 95){
            inventory.addItem(new Ether())
            console.log("Vous avez trouvé un Ether")
        }else{
            inventory.addItem(new DemiEtoile())
            console.log("Vous avez trouvé une Demi Etoile")
        }
    }
}