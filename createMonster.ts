import Monstre from "./character/Monstre.ts"
import ArcherZombie from "./character/archerZombie.ts"
import Zombie from "./character/zombie.ts"
import GiantSqueleton from "./character/squelette_Geant.ts"
import LittleSqueleton from "./character/petit_squelette.ts"

export default class createMonster {
    public static createMonster() : Monstre[]  {
        const listMonster : Monstre[] = []
        for (let index = 0; index < 3; index++) {
            let tempo = Math.floor(Math.random()*4)
            switch (tempo) {
                case 1:
                listMonster.push(new ArcherZombie())
                break
                case 0 : 
                listMonster.push(new Zombie())
                break
                case 2 : 
                listMonster.push(new GiantSqueleton())
                break
                default : 
                listMonster.push(new LittleSqueleton())
                break
            }  
        }
        return listMonster
    }

}