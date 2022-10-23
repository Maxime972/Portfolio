//console.log("toto");


// String 

let myVar = "ma variable";
const myVar2 = "ma variable 2";

myVar = "variable changée";

//console.log(myVar);


// Boolean

let isTrue = true;
let isFalse = false;

//console.log(isTrue);


// Chiffres et opérateurs

let chiffre1 = 4;
let chiffre2 = 3;

//console.log(typeof chiffre1, typeof chiffre2);


// Template string, littéraux de gabarits et concat
/*
let test = "test " + myVar;
let test2 = `test ${myVar}`;
console.log(test2);

if (chiffre1 < chiffre2) {
    console.log('condition est valide');
} else if ( chiffre1 == 4){
    console.log("je passe par la");
} else {
    console.log("condition fasse");
}
*/

// Tableaux

let array = ["item 1", "item 2", "item 3", "item 4"];
/*console.log(array);
console.log(array.length);
console.log(array[2]);
*/


// Objets

let obj ={
    title: "Mon titre",
    description: "Ma description"
}

//console.log(obj.title, obj.description);


// Les boucles, while, for, foreach

/*
for (let i = 0 ; i < 5 ; i++) {
    console.log(i);
    console.log("toto");
}
*/

/*
for (let i = 0 ; i < array.length ; i++) {
    console.log(array[i]);
}
*/

/*
array.forEach(item => {
    console.log(item);
})
*/


// Fonctions
/*
function myFunction(item, item2) {
    console.log(item, item2);
}

const myFunction2 = (item, item2) => {
    console.log(item, item2);
}
// Fonction fléchée

myFunction("toto", 5);
myFunction("tata", 6);

myFunction2("toto", 5);
myFunction2("tata", 6);

const calcul = (nb1 , nb2) => {
    console.log(nb1 + nb2);
}

calcul(4, 5);

const calcul2 = (nb1 , nb2) => {
    return nb1 + nb2;
}

console.log(calcul2(10, 5));
let result = calcul2(20,10);
console.log(result);
*/


// Intéragir avec le dom (Document Object Model) // méthode, propriété, événement

//console.log(document.body);

// selector
/*let header =document.querySelector('header');
let header2 = document.querySelector('header .container'); // fonctionne aussi avec les classes
let hero = document.getElementById('hero');*/
//console.log(header);
//console.log(header2);
//console.log(hero);

//let grids = document.querySelectorAll('.grid'); // cible tous les éléments grids
//console.log(grids);
/*
grids.forEach (grid => {
    grid.classList.add('titi'); //ajout une classe titi à tous les grid
    console.log(grid);
})
*/

// événement les plus courants
/*
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM entièrement chargé et analysé");
});
// permet découter un événement

header.addEventListener('click', function () {
    console.log('je click');
});
header.addEventListener('click', (e) => {   // on prend la valeur d'un événement
    console.log(e);
});

header.addEventListener('mouseenter', () => {
    console.log('souris entre');
});
header.addEventListener('mouseleave', () => {
    console.log('souris sort');
});
*/


// Insertion DOM et navigation dans le DOM
/*
let div = document.createElement('div');
div.classList.add('top');
div.innerHTML = `<span>Top zone</span>`;
// innerHTML permet d'injecter du contenu html
header.append(div); // ajoute la div à la fin du header
// append permet d'ajouter la div au header
header.parentNode.append(div); 
// le parent du header = body donc div ajouter après le body
console.log(header.nextElementSibling);
// affiche le prochain élément après le header => section hero
*/