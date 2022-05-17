import Chara from "../character/Personnage.ts";
import Chest from "./Coffre.ts";
import Fight from "../fight.ts";
import GameManager from "../GameManager.ts";
import Monster from "../character/Monstre.ts"
import Menu from "../menu.ts";
import Inventory from "../inventory.ts";;
import Boss from "../character/Boss.ts"
import MonsterCreation from "../createMonster.ts"

export default class room {
    // Monstres : Perso[] = [new Monster(), new Monster(), new Monster()]
    Chest : Chest | null = null
    /**
     * Fonction qui se lance lorsque le joueur entre dans une salle
     * @param gameManager 
     * @param inventory  
     */
    room(gameManager: GameManager, inventory : Inventory){
        let Monsters : Monster[] = MonsterCreation.createMonster()
        console.log("Vous rentrez dans une salle")
        if (gameManager.place == 1 || gameManager.place == 3) {             //Si on est dans la salle 1 ou 3
            let fight : Fight = new Fight();                                //créer une instance de Fight
            console.log("Des monstre sont apparu, ils vous attaquent !\n")
            fight.fight(gameManager.team,Monsters,inventory)              //lance le combat
            gameManager.place += 1;                                         // on passe à la salle suivante
        }
        else if (gameManager.place == 2 || gameManager.place == 4) {//Si on est dans la salle 2 ou 4
            let character:string|Chara = Menu.question("Choissisez un personnage pour ouvrir le coffre : ")
            if (character == "1") {//Si le joueur choisit le personnage 1
                character = gameManager.team[0]   //On affecte le personnage 1 à caractere
            }else if (character == "2") {//Si le joueur choisit le personnage 2
                character = gameManager.team[1]//On affecte le personnage 2 à caractere
            }else if (character == "3") {  //Si le joueur choisit le personnage 3
                character = gameManager.team[2]// On affecte le personnage 3 à caractere
            }else{
                console.log("Vous n'avez pas choisis de personnage !")//    Si le joueur n'a pas choisis de personnage
                return
            }
            this.Chest = new Chest();//On créer une instance de coffre
            this.Chest.chest(character,inventory)// On lance le coffre
            gameManager.place += 1
        }else{//Si on est dans la salle 5
            console.log("Vous êtes dans la salle du boss ! ")
            let fight : Fight = new Fight()//créer une instance de Fight
            fight.fight(gameManager.team,[new Boss()],inventory)//lance le combat
            gameManager.place += 1// on passe à la salle suivante
        }
        console.log("Vous avez quitté la salle !\n")
    }
}