import Chara from "../character/Personnage.ts";
import Inventory from "../inventory.ts"
import Potion from "../ClassObjet/potion.ts"
import DemiEtoile from "../ClassObjet/DemiEtoile.ts"
import Ether from "../ClassObjet/Ether.ts"
import MorceauEtoile from "../ClassObjet/MorceauEtoile.ts"

export default class Chest {
    chest(player :Chara,inventory : Inventory) {
        console.log("Vous avez trouvé un coffre !\nOuverture du coffre !")
        let openChest = Math.round(Math.random())//génere un nombre aléatoire entre 0 et 1
        if (openChest == 1) {//ouverture du coffre avec succès
            for (let index = 0; index < 2; index++) {
                let tempo = Math.floor(Math.random()*4)
                switch(tempo) {
                case 1:
                    inventory.addItem(new Potion())
                    console.log("Vous avez trouvé une potion !")
                    break
                case 0 : 
                    inventory.addItem(new DemiEtoile())
                    console.log("Vous avez trouvé une Demi Etoile  !")
                    break
                case 2 : 
                    inventory.addItem(new Ether())
                    console.log("Vous avez trouvé un Ether !")
                    break
                default : 
                    inventory.addItem(new MorceauEtoile())
                    console.log("Vous avez trouvé un morceau d'etoile !")
                    break
                }
            }
        }else{//ouverture du coffre avec échec
            console.log("Vous avez trouvé un piège !\nVous avez perdu 50 point de vie !")
            player.Trap()//perte de 50 point de vie
        } 
    }
}