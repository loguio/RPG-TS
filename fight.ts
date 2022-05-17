import Perso from "./character/Personnage.ts";
import Menu from "./menu.ts";
import Inventory from "./inventory.ts"
import Monster from "./character/Monstre.ts"

export default class Fight {
    /**
     * @type {Menu}
     */
    menu : Menu = new Menu()
    /**
     * @type {Inventory}
     */
    inventory : Inventory = new Inventory()
    /**
     * @type {Perso[]}
     */
    Ally : Perso[]  = []
    /**
     * @type {Monster[]}
     */
    Ennemies : Monster[] = []
    /**
     * @type {Perso[]}
    */ 
    goodOrder : Perso[]= []

    Order() {//met dans l'ordre de combat
        this.Ally.forEach(element => {//ajoute les personnages de l'équipe alliée dane le tableau goodOrder
            this.goodOrder.push(element)
        });
        this.Ennemies.forEach(element => {//ajoute les personnages de l'équipe ennemie dane le tableau goodOrder
            this.goodOrder.push(element)
        })
        this.goodOrder = this.goodOrder.sort()//trie le tableau
    }

    AllyTeamAlive() {//vérifie si l'équipe alliée est en vie
        for (const element of this.Ally) {
            if (element.isAlive()) {
                return true
            }
        }
        return false
    }

    
    EnnemiesTeamAlive() {//vérifie si l'équipe ennemie est en vie
        for (const element of this.Ennemies) {
            if (element.isAlive()) {
                return true
            }
        }
        return false
    }

    magic() {//vérifie si le personnage peut utiliser une attaque magique
        this.Ally.forEach(element => {
            if (element.name == "Mage")
            return true
        });
        return false
    }
    /**
     * Fonction qui permet de lancer le combat
     * @param ally il s'agit d'une liste de personnages Alliés (ceux de l'utilisateur)
     * @param ennemies il s'agit d'une liste de monstres Ennemies 
     * @param inventory il s'agit de l'inventaire contenant tous les objets 
     */
    fight(ally : Perso[],ennemies : Monster[], inventory : Inventory) {
        this.Ally = ally
        this.inventory = inventory
        this.Ennemies = ennemies
        this.Order()//met dans l'ordre de combat
        let order = 0
        while (this.AllyTeamAlive() && this.EnnemiesTeamAlive()) {//tant qu'une équipe n'est pas morte
            if (this.goodOrder[order].isAlive() && this.goodOrder[order].team == "ally") {//si le personnage est en vie et que c'est l'équipe alliée
                this.AllyFight(this.goodOrder[order])//le personnage attaque
            }else if (this.goodOrder[order].isAlive()) {//si le personnage est en vie et que c'est l'équipe ennemie
                this.EnnemieFight(this.goodOrder[order])//le personnage attaque
            }
            if (order == this.goodOrder.length-1) {order = 0} else {order++}//passe au personnage suivant
        }
        if (this.AllyTeamAlive()) {console.log(" Bravo vous avez gagnez le combat ! ")}
            else {console.log("Mince vous avez perdu...")}
        
    }

    AllyFight(ally : Perso) {//fonction qui permet de lancer le combat pour un allié
        let choose : string | null = Menu.menuFight()//choix de l'action
        while(choose == null ) {choose = Menu.menuFight()}//vérifie que le choix est valide
        if (choose == "1") {//si le choix montrer l'inventaire
            this.inventory.showInventory(this.Ally)//affiche l'inventaire
        }else if (choose == "2") {//si le choix est attaquer
            for (let index = 0; index < this.Ennemies.length; index++) {//pour chaque ennemi
                console.log(`${index+1}. ${this.Ennemies[index].name}`)//affiche le nom de l'ennemi
            }
            let choose :string | null= prompt("qui voulez vous attaquer ? >")//choix de l'ennemi à attaquer
            if (choose != null || choose == "1" || choose == "2" || choose == "3" ) {
                ally.Attack(this.Ennemies[parseInt(choose)-1])//attaque l'ennemi
            }
        }else if (choose == "3") {//si le choix est utiliser une attaque magique
            if (this.magic() == false) {//vérifie si le personnage peut utiliser une attaque magique
                console.log("Vous ne pouvea pas utilisez d'attaque magique !")
                this.AllyFight(ally)}//retourne au menu
        }else {this.AllyFight(ally)}//retourne au menu
    }

    EnnemieFight(ennemi : Perso) {//fonction qui permet de lancer le combat pour un ennemi
        let tempo : Perso = this.Ally[Math.floor(Math.random()*3)]//choisi un allié au hasard
        while(!tempo.isAlive) {//tant que l'allié choisi n'est pas en vie
            tempo = this.Ally[Math.floor(Math.random()*3)]//choisi un allié au hasard
        }
        ennemi.Attack(tempo)//attaque l'allié
        this.menu.showAttack(ennemi.valueAtk-tempo.valueDef, ennemi.name, tempo.name)
    }
}