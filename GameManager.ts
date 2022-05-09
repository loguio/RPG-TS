import Menu from "./menu.ts";
import Perso from "./caracter/Personnage.ts"
import Salle from "./Map/salle.ts";

export default class GameManager {
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
        this._place += value;
    }
    startGame() {
        this.equipe = new Menu().chooseCharacter();//lance et initialise le menu de choix de personnage
        let salle = new Salle();
        salle.salle(this);//lance la salle et initialise la place du joueur
        salle.salle(this);
    }
    constructor(){
        this.startGame();//lance le jeu
    }
}
let gameManager = new GameManager();