import Objets from "./ClassObjet/Objet.ts"
import Potion from "./ClassObjet/potion.ts"
import Ether from "./ClassObjet/Ether.ts"
import MorceauEtoile from "./ClassObjet/MorceauEtoile.ts"
import DemiEtoile from "./ClassObjet/DemiEtoile.ts"
import Perso from "./character/Personnage.ts"
import Mage from "./character/Mage.ts"
import Pretre from "./character/Pretre.ts"

export default class Inventory {
    inventory : Objets[] = [new Potion(), new Ether(), new DemiEtoile(),new MorceauEtoile()]

    showInventory(ally : Perso[]) {//affiche l'inventaire
        if (this.inventory.length == 0) {return null}

        for (let index = 1; index <= this.inventory.length; index++) {//affiche les objets
            console.log(` ${index}. ${this.inventory[index-1].name}`)
        }

        let item : Objets | null = null
        let choose : string | number | null = prompt("what do you want to choose ? >")//choix de l'objet
        if (choose != null && parseInt(choose) <= this.inventory.length) {
            item = this.inventory[parseInt(choose)-1]
            this.inventory.splice(parseInt(choose)-1,1)
            console.log(`sur qui voulez vous consommer : ${item.name}`)
        }
        
        for (let index = 0; index < ally.length; index++) {//affiche l'équipe du joueur
            console.log(` ${index+1}. ${ally[index].name}`)          
        }
        choose = prompt("Qui choisissez vous ? >")
        if (choose == "1" || choose == "2" || choose == "3") {//choix du personnage
            if (item != null) {
                if (item.name == "Potion") {//si l'objet est une potion
                    item.Healing(ally[parseInt(choose)-1])//le personnage se soigne
                }else if (item.name == "Ether" && ally[parseInt(choose)-1].name == "Mage") {
                    item.ether(ally[parseInt(choose)-1] as Mage)
                }else if (item.name == "Ether" && ally[parseInt(choose)-1].name == "Pretre" ) {
                    item.ether(ally[parseInt(choose)-1] as Pretre)
                }else if (item.name == "DemiEtoile") {
                    item.demiEtoile(ally[parseInt(choose)-1])
                }else if (item.name == "MorceauEtoile"){
                    item.morceauEtoile(ally[parseInt(choose)-1])
                }else {console.log("recommencer mais choisissez des entrée valides");this.showInventory(ally)}
            }
        }
    }
    /**
     * ajoute un objet à l'inventaire
     * @param item 
     */
    addItem(item : Objets) {
        this.inventory.push(item)
    }

}
