import Perso from "../caracter/Personnage.ts";
export default class Coffre {
    coffre(player :Perso) {
        console.log("Vous avez trouvé un coffre !\nOuverture du coffre !")
        let openChest = Math.round(Math.random())
        if (openChest == 1) {
            console.log("Vous avez trouvé une potion !")
        }else{
            console.log("Vous avez trouvé un piège !\nVous avez perdu 50 point de vie !")
            player.Trap()
        }
    }
}