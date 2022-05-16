import Perso from "../character/Personnage.ts";
import Inventory from "../inventory.ts"
import Potion from "../ClassObjet/potion.ts"

export default class Coffre {
    coffre(player :Perso,inventory : Inventory) {
        console.log("Vous avez trouvé un coffre !\nOuverture du coffre !")
        let openChest = Math.round(Math.random())
        if (openChest == 1) {
            inventory.addItem(new Potion)
            console.log("Vous avez trouvé une potion !")
        }else{
            console.log("Vous avez trouvé un piège !\nVous avez perdu 50 point de vie !")
            player.Trap()
        }
    }
}