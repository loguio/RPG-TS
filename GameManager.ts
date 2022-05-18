import Menu from "./menu.ts";
import Chara from "./character/Personnage.ts"
import Room from "./Map/salle.ts";
import Inventory from "./inventory.ts"

export default class GameManager {
    public inventory : Inventory = new Inventory()
    /**
     * Initialise la liste qui va contenir l'équipe du joueur
     * @type {Perso[]}
     */
    public team: Chara[] = [];
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
    private startGame() {
        this.team = new Menu().chooseCharacter();//lance et initialise le menu de choix de personnage
        let room = new Room();
        for (let i = 0; i < 5; i++) {
            room.room(this, this.inventory);
        }
        let counter : number = 0
        this.team.forEach(element => {
            if (element.isAlive()) {
                console.log("bravo vous avez gagné !")
            }else {
                counter++
            }
        });
        if (counter==3) {
            console.log("vous avez perdu :'( ")
        }
    }
    constructor(){
        this.startGame();//lance le jeu
    }
}
let gameManager = new GameManager();
