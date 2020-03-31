export enum Dishsize {
    S = 1,
    M = 2,
    L = 4,
    XL = 8,
    XXL = 16
}

//DISHTYPE AND ASSOCIATED BAKE TIME IN SECONDS
export enum DishType {
    Takoyaki = 1,
    Katsudon = 2,
    Udon = 2,
    Ramen = 2,
    MatchaCookie = 4
}

//ALL DISHES AND ASSOCIATED INGREDIENTS
export enum Takoyaki {
    octopus = "octopus",
    soja_sauce = "soja_sauce"
}

export enum Katsudon {
    rice = "rice",
    pork = "pork",
    eggs = "eggs"
}

export enum Udon {
    noodle = "noodle",
    pork = "pork",
    eggs = "eggs"
}

export enum Ramen {
    noodle = "noodle",
    chicken = "chicken",
    eggs = "eggs"
}

export enum MatchaCookie {
    dough = "dough",
    matcha = "matcha",
    chocolate = "chocolate",
    chief_love = "chief_love"
}