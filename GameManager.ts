import Menu from "./menu.ts";
import Perso from "./character/Personnage.ts"
import Salle from "./Map/salle.ts";
import Inventory from "./inventory.ts"

export default class GameManager {
    inventory : Inventory = new Inventory()
    /**
     * Initialise la liste qui va contenir l'équipe du joueur
     * @type {Perso[]}
     */
    equipe: Perso[] = [];
    /**
     * @type {number} Variable qui contient dans quelle salle est le joueur
     */
    private _place: number = 1;
    public get place(): number {
        return this._place;
    }
    public set place(value: number) {
        this._place = value;
    }
    startGame() {
        this.equipe = new Menu().chooseCharacter();//lance et initialise le menu de choix de personnage
        let salle = new Salle();
        for (let i = 0; i < 5; i++) {
            salle.salle(this, this.inventory);
        }
        console.log("Vous avez gagné !")
    }
    constructor(){
        this.startGame();//lance le jeu
    }
}
let gameManager = new GameManager();
