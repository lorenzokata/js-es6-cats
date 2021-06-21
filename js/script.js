document.getElementById("container").innerHTML += "Milestone 1<br/>";
const cats = [
    {
        name : "Pippo",
        age : 4,
        color: "#F75C1E",
        gender: "male"
    },
    {
        name : "Pluto",
        age : 3.5,
        color: "#F75C1E",
        gender: "female"
    },
    {
        name : "Portos",
        age : 8,
        color: "#000000",
        gender: "male"
    },
    {
        name : "Sam",
        age : 1.5,
        color: "#AAA5A2",
        gender: "male"
    },
    {
        name : "Shiro",
        age : 9,
        color: "#753000",
        gender: "female"
    },
    {
        name : "Minù",
        age : 2,
        color: "#B900F6",
        gender: "female"
    }
];


cats.forEach((element) => {
    document.getElementById("container").innerHTML +=
    `
    ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i>,
    `;
});

document.getElementById("container").innerHTML += "<br/><br/>Milestone 2";

const pink = "#E7120F";
const blue = "#211CBB";

const newCats = cats.map((element) => {

    const{name, age, color, gender} = element;
    const opacity = element.age / 9;

    return {
        name,
        age,
        color,
        gender,
        ribbon : {
            color: (gender == "female") ? pink : blue,
            opacity : opacity
        }
    }
});

// Funzione di stampa gattini in HTML
const printCatsRibbon = (array) => {
    array.forEach((element) => {
        document.getElementById("container").innerHTML +=
        `
        <br/><br/>
            ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i> 
            <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>,
        `;
    });
} 


// Divisione per sesso

// maschi
const maleCats = newCats.filter((element) => {
    return element.gender === "male";
});

document.getElementById("container").innerHTML += "<br/><br/>Maschi";
printCatsRibbon(maleCats);

// femmine
const femaleCats = newCats.filter((element) => {
    return element.gender === "female";
});

document.getElementById("container").innerHTML += "<br/><br/>Femmine";
printCatsRibbon(femaleCats);


// Milestone 3
document.getElementById("container").innerHTML += "<br/><br/>Milestone 3";

let catsFemaleMale = [...femaleCats, ...maleCats];

const catsFemaleMaleZip = catsFemaleMale.map((element) => {
   const {name, color, ribbon} = element;

   return {
        name,
        color,
        ribbon
   } 
});


printCatsRibbon(catsFemaleMaleZip);

