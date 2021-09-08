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
    subType: "Snake",
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
`<div class="d-flex justify-content-between align-items-center">
    <h3>${card.name}</h3>
    <h5>${card.combinedManaCost()}</h5>
</div>
<div class="img-space h-100">
    <img class="w-100" src="img/magicPH.jpg" alt="">
</div>

<div class="d-flex justify-content-between align-items-center">
    <p>${card.type} - ${card.subType}</p>
    <p>${card.expansion.name}</p>
</div>
<div class="description">
    <p>${card.abilities.splel1.description}</p>
    <p>${card.abilities.splel2.description}</p>
</div>
<hr>
<div class="d-flex">
    <div class="flex-grow-1">
        <p class="mb-0">${card.infoCard.collection.cardNumber}/${card.infoCard.collection.cardTotal}</p>
        <p class="mb-0">${card.infoCard.artist.name} ${card.infoCard.artist.surname}</p>
    </div>
    <div class="flex-grow-1 text-end">
    <p class="mb-0">${card.trait.strength}/${card.trait.const}</p>
    </div>
</div>

` 


document.getElementById("card").innerHTML += cardHTML