import Perso from "../caracter/Personnage.ts";
import Coffre from "./Coffre.ts";
import Fight from "../fight.ts";
import GameManager from "../GameManager.ts";
import Monster from "../caracter/Monstre.ts"
import Menu from "../menu.ts";

export default class Salle {
    Monstres : Perso[] = [new Monster(), new Monster(), new Monster()]
    Chest : Coffre | null = null
    salle(gameManager: GameManager){
        console.log("Vous rentrez dans une salle")
        if (gameManager.place == 1 || gameManager.place == 3) {
            let fight = new Fight();
            console.log("Des monstre sont apparu, ils vous attaquent !")
            fight.fight(gameManager.equipe,this.Monstres)
            gameManager.place = 1;
        }
        else if (gameManager.place == 2 || gameManager.place == 4) {
            let caractere:string|Perso = Menu.question("Choissisez un personnage pour ouvrir le coffre : ")
            if (caractere == "1") {
                caractere = gameManager.equipe[0]
            }else if (caractere == "2") {
                caractere = gameManager.equipe[1]
            }else if (caractere == "3") {
                caractere = gameManager.equipe[2]
            }else{
                console.log("Vous n'avez pas choisis de personnage !")
                return
            }
            this.Chest = new Coffre();
            this.Chest.coffre(caractere)
            gameManager.place = 1
        }else{
            console.log("Vous êtes dans la salle du boss ! ")
            gameManager.place = 1
        }
        console.log("Vous avez quitté la salle !\n")
    }
    showRoom() {
        
    }   
}