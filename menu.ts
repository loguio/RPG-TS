class Menu {
    /**
     * Permet de voir les différents personnages et de les choisir
     */
    showCharacter() {
        
    }
    /**
     * Permet de choisir le type d'attaque
     */
    menuFight() {
        let choice = 0;
        while (choice != 3){
            choice = this.menu(
               "Attaquer",);
            switch (choice) {
                case 1:
                    // this.fight();
                    break;
                case 2:
                    // this.heal();
                    break;
                case 3:
                    break;
                default : 
                    break;
            }
        }
    }

    menu(choix : string) {
        console.log(choix);
        for (let i = 0; i < arguments.length; i++) {
            console.log(i + " : " + arguments[i]);
        }
        let choice :number = 0;
        while (isNaN(choice) || choice < 0 || choice > arguments.length - 1) {
            const choiceStr = (prompt("Choisissez une option"));
            if(choiceStr !== null){
                choice = parseInt(choiceStr);
            }
        }
    }

    /**
     * Permet de 
     */
    showMenu() {

    }
    /**
     * Permet d'ouvrir un coffre
     */
    openChest() {

    }
    /**
     * Permet d'utiliser un item
     */
    useItems() {
        
    }
}