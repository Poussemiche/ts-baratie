import {Takoyaki, Katsudon, Udon, Ramen, MatchaCookie} from './dishesInfo'
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

export default class Reception {
    public static instance: Reception | null = null
    public argsChoice = process.argv

    public static getInstance() {
		if (Reception.instance === null)
            Reception.instance = new Reception()
        return Reception.instance
	}

    public displayArgs() {
        if (Number(this.argsChoice[3]) && Number(this.argsChoice[4]) && Number(this.argsChoice[5])) {
            console.log('Here are your parameters: \n' +
                        `Cooking time Multiplier for a dish --> ${this.argsChoice[3]}\n` +
                        `Cooks per kitchen number --> ${this.argsChoice[4]}\n` +
                        `Kitchen replenishment time (milliseconds) --> ${this.argsChoice[5]}`)
        } else {
            console.log('Wrong parameters, please only use integers to start Baratie')
            process.exit(1)
        }
    }

    public displayIngredients(dish: any) {
        const ingredients = Object.keys(dish).filter((item) => {
            return isNaN(Number(item))
        })
        console.log(ingredients.join(" - "))
    }

    public displayDishes() {
        console.log('Welcome to Baratie, here is a list of the proposed dishes: \n' +
                    `${this.displayIngredients(Takoyaki)}\n` +
                    `${this.displayIngredients(Katsudon)}\n` +
                    `${this.displayIngredients(Udon)}\n` +
                    `${this.displayIngredients(Ramen)}\n` +
                    `${this.displayIngredients(MatchaCookie)}\n`)
    }

    public openBar() {
        this.displayArgs()
        this.displayDishes()

    }
}

//        if (this.argsChoice.length < 6) {
//    console.log('Not enough arguments, please follow this syntax: \n' + 
//    'DISH SIZE xNUMBER;')