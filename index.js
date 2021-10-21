//  exo 1 méthode pour push en es6 fin du array
let fruits = ['Apple','Orange','Banana']
fruits = [...fruits,"Raspberry"]
// exo 2 // méthode pour unshift en es6 debut du array
fruits = ["Raspberry",...fruits]
console.log(fruits);

// exo 3
const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']
// methode es6 pour mettre 2 array dans un seul array
const fusionArray = [...arr1,...arr2]
console.log(fusionArray);

// exo 4 
const user = {
    age: 10,
    eyes: "vert",
    legs: 2,
    arms: 2,
    hair: "long",
    caracterstique: "gras du bide",
    nose: "petit nez",
    ears: "grandes oreilles",
    glasses: true,
    sosie: "sarkozy"
}
// methode pour rajouter une clé a un objet et la stocker dans une variable
const bobby = {
    firstName: "bobby",
    ...user
}
console.log(bobby);

// exo 5
const numbers = [1, 2, 3, 4, 5, 6]
// methode pour boucler un array avec for each plus la function arrow es6
numbers.forEach(num => console.log(num));

// exo 6

// methode pour filtré le array numbers avec la condition du filtre stocker dans ma var result
const result = numbers.filter(num => num %2 ===1 );
console.log("return nombre impair",result);

// exo 7
// méthode map pour mettre au carré mon array filtré juste au dessus
const arrayCarre = result.map(num => num * num)
console.log(arrayCarre);