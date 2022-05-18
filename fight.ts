import Chara from "./character/Personnage.ts";
import Menu from "./menu.ts";
import Inventory from "./inventory.ts"
import Monster from "./character/Monstre.ts"
import Boss from "./character/Boss.ts"

export default class Fight {
    /**
     * @type {Menu}
     */
    public menu : Menu = new Menu()
    /**
     * @type {Inventory}
     */
    public inventory : Inventory = new Inventory()
    /**
     * @type {Perso[]}
     */
    protected Ally : Chara[]  = []
    /**
     * @type {Monster[]}
     */
    protected Ennemies : Monster[] = []
    /**
     * @type {Perso[]}
    */ 
    private goodOrder : Chara[]= []

    private Order() {//met dans l'ordre de combat
        this.Ally.forEach(element => {//ajoute les personnages de l'équipe alliée dane le tableau goodOrder
            this.goodOrder.push(element)
        });
        this.Ennemies.forEach(element => {//ajoute les personnages de l'équipe ennemie dane le tableau goodOrder
            this.goodOrder.push(element)
        })
        this.goodOrder = this.goodOrder.sort()//trie le tableau
    }

    private AllyTeamAlive() {//vérifie si l'équipe alliée est en vie
        for (const element of this.Ally) {
            if (element.isAlive()) {
                return true
            }
        }
        return false
    }

    
    private EnnemiesTeamAlive() {//vérifie si l'équipe ennemie est en vie
        for (const element of this.Ennemies) {
            if (element.isAlive()) {
                return true
            }
        }
        return false
    }

    /**
     * Fonction qui permet de lancer le combat
     * @param ally il s'agit d'une liste de personnages Alliés (ceux de l'utilisateur)
     * @param ennemies il s'agit d'une liste de monstres Ennemies 
     * @param inventory il s'agit de l'inventaire contenant tous les objets 
     */
    public fight(ally : Chara[],ennemies : Monster[], inventory : Inventory) {
        this.Ally = ally
        this.inventory = inventory
        this.Ennemies = ennemies
        this.Order()//met dans l'ordre de combat
        let order = 0
        while (this.AllyTeamAlive() && this.EnnemiesTeamAlive()) {//tant qu'une équipe n'est pas morte
            if (this.goodOrder[order].isAlive() && this.goodOrder[order].team == "ally") {//si le personnage est en vie et que c'est l'équipe alliée
                this.menu.showCharacter(this.Ally,this.Ennemies)
                this.AllyFight(this.goodOrder[order])//le personnage attaque
            }else if (this.goodOrder[order].isAlive()) {//si le personnage est en vie et que c'est l'équipe ennemie
                this.menu.showCharacter(this.Ally,this.Ennemies)
                this.EnnemieFight(this.goodOrder[order])//le personnage attaque
                setTimeout(function(){ 
                }, 1000);
            }
            if (order == this.goodOrder.length-1) {order = 0} else {order++}//passe au personnage suivant
        }
        if (this.AllyTeamAlive()) {console.log(" Bravo vous avez gagnez le combat ! ")}
            else {console.log("Mince vous avez perdu...")}
    }

    protected AllyFight(ally : any) {//fonction qui permet de lancer le combat pour un allié
        console.log(`c'est au tour de ${ally.name}`)
        let choose : string | null = Menu.menuFight()//choix de l'action
        while(choose == null ) {choose = Menu.menuFight()}//vérifie que le choix est valide
        if (choose == "1") {//si le choix montrer l'inventaire
            this.inventory.showInventory(this.Ally)//affiche l'inventaire
        }else if (choose == "2") {//si le choix est attaquer
            this.menu.ShowEnemies(this.Ennemies)//affiche les ennemis

            let choose :string | null = null
            while (choose !== "1" && choose !== "2" && choose !== "3" ) {
                choose = prompt("qui voulez vous attaquer ? >") //choix de l'ennemi à attaquer
            }        
            ally.Attack(this.Ennemies[parseInt(choose)-1])//attaque l'ennemi

        }else if (choose == "3") {//si le choix est utiliser une attaque spéciale

            let choose : null | string = null
            while (choose !== "y" && choose !== "n" && choose !== "Y" && choose !== "N") {
                choose = prompt("voulez vous faire l'attaque spéciale ? Y/N")
            }

            if (choose == "N" || choose == "n") {this.AllyFight(ally)}else {
                switch(ally.name) {
                    case("Mage"):
                        ally.MagicAttck(this.Ennemies)
                        break
                    case("Barbare"):
                        ally.Berserk(this.Ennemies)
                        break
                    case("Paladin"):
                        ally.Sainte(this.Ennemies)
                        break
                    case("Pretre"):
                        ally.Healing(this.Ally)
                        break
                    case("Guerrier"):
                        this.menu.ShowEnemies(this.Ennemies)//affiche les ennemis
                        let choose :string | null = null
                        while (choose !== "1" && choose !== "2" && choose !== "3") {
                            choose = prompt("qui voulez vous attaquer ? >") //choix de l'ennemi à attaquer
                        }        
                        ally.Attack(this.Ennemies[parseInt(choose)-1])//attaque l'ennemi
                
                        break
                    case("Voleur"):
                        ally.steal(this.inventory)
                        break
                }
            }
        }else {this.AllyFight(ally)}//retourne au menu
    }

    protected EnnemieFight(ennemi : Chara) {//fonction qui permet de lancer le combat pour un ennemi
        if (ennemi instanceof Boss) {//si l'ennemi est un boss
            ennemi.AttackBoss(this.Ally) 
        }else {
            let allyAlive : Chara = this.Ally[Math.floor(Math.random()*3)]//choisi un allié au hasard
            while(!allyAlive.isAlive) {//tant que l'allié choisi n'est pas en vie
                allyAlive = this.Ally[Math.floor(Math.random()*3)]//choisi un allié au hasard
            }
            ennemi.Attack(allyAlive)//attaque l'allié
            this.menu.showAttack(ennemi.valueAtk-allyAlive.valueDef, ennemi.name, allyAlive.name) // permet d'afficher l'action qui viens de se dérouler
            var start = new Date().getTime(); // on créer notre date de départ
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > 2500){ // on vérifie la différence lorsque une fois que c'est au dessus on sort de la boucle
                    break;
                }
            }
        }
    }
}