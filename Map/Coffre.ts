import Perso from "../character/Personnage.ts";
import Inventory from "../inventory.ts"
import Potion from "../ClassObjet/potion.ts"

export default class Coffre {
    coffre(player :Perso,inventory : Inventory) {
        console.log("Vous avez trouvé un coffre !\nOuverture du coffre !")
        let openChest = Math.round(Math.random())//génere un nombre aléatoire entre 0 et 1
        if (openChest == 1) {//ouverture du coffre avec succès
            inventory.addItem(new Potion)
            console.log("Vous avez trouvé une potion !")
        }else{//ouverture du coffre avec échec
            console.log("Vous avez trouvé un piège !\nVous avez perdu 50 point de vie !")
            player.Trap()//perte de 50 point de vie
        }
    }
}