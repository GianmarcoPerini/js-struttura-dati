let card = {
    name: "Stonecoil Serpent",
    manaCost:{
        w: 0,
        u: 0,
        b: 0,
        r: 0,
        g: 0
    },
    combinedManaCost: function(){
        let sum = 0
        for(let y in this.manaCost){
            sum += this.manaCost[y];
        }
        if(sum == 0){
            return sum = "X"
        }
        return sum
    },
    type: "Artifact Creature",
    sunType: "Snake",
    expansion: {
        name: "Throne of Eldrain",
        rarity: "Rare"
    } ,
    abilities: {
        splel1: {
            cost: {
                w: 0,
                u: 0,
                b: 0,
                r: 0,
                g: 0,
                other: ""
            },
            description: "Reach, trample, protection from multicolored"
        },
        splel2: {
            cost: {
                w: 0,
                u: 0,
                b: 0,
                r: 0,
                g: 0,
                other: ""
            },
            description: "Stonecoil Serpent enters the battlefield with X +1/+1 counters on it."
        },
    },
        
    
    flavor: "Hunted by Garenponte for his crimes, Ennon resorted to fairy magic to create the perfect weapon for revenge.",
    infoCard: {
        artist: {
            name: "Mark",
            surname: "Poole"
        },
        collection:{
            cardTotal: 269,
            cardNumber: 245
        },
    },
    trait:{
        strength: 0,
        const: 0
    },    
}

let cardHTML = 
`<ul class="d-flex">
    <li>ciao</li>
    <li>come</li>
    <li>stai</li>
    <li></li>
</ul>`


document.getElementById("card").innerHTML += cardHTML