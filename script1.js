


/**
 * Exercices 1
 */
console.log("-----------------Exercices 1---------------");

// 1- Créez 2 variables, x et y. Chacun d'eux doit avoir une valeur numérique différente.
let x = 30;
let y = 20;
 
// 2- Écrivez une instruction if/else qui vérifie quel nombre est le plus grand.
if (x > y) {
    alert(` la variable x = ${x} est superieur à la variable y = ${y} `);
} else if(y > x){
    alert(` la variable y = ${y} est superieur à la variable x = ${x} `);
}
 else {
    alert(` la variable y = ${y} est egale à la variable x = ${x} `);
 }


/**
 * Exercices 2
 */
console.log("-----------------Exercices 2---------------");

// 1-Créez une variable appelée newDogdont la valeur est "Chihuahua".
let newDog = "Chihuahuas";

// 2-Vérifiez et affichez le nombre de lettres dans newDog.
if(newDog){
    alert(newDog.length)
}

// 3- Affichez la newDogvariable en majuscule puis en minuscule (pas besoin de créer de nouvelles variables, juste console.log deux fois)
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

// 4- Vérifiez si la variable newDogest égale à "Chihuahua"
if(newDog == "Chihuahua"){
    alert("J'adore les chihuahuas, c'est ma race de chien préférée")
} else {
    console.log("Je m'en fous, je préfère les chats");
}



/**
 * Exercices 3
 */
console.log("-----------------Exercices 3---------------");

// 1- Invitez l'utilisateur à entrer un nombre et enregistrez-le dans une variable.
let nombreAsaisir = prompt('Saisir un nombre', 10);
// let nombreConvertir =  parseInt(nombreAsaisir)
let nombreConvertir =  isNaN(nombreAsaisir)


// 2- Vérifiez si la variable est paire ou impaire.
if(nombreConvertir){
    alert("Vous n'avez pas entré un nombre")
}else  {
    if (nombreConvertir % 2 == 0) {
        alert(` x = ${nombreConvertir} est un nombre pair`);
    } else {
        alert(` x = ${nombreConvertir} est un nombre impaire`);
    }
} 


/**
 * Exercices 4
 */
console.log("-----------------Exercices 4---------------");

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// 1- Vérifiez si la variable est paire ou impaire.

// S'il n'y a pas d'utilisateurs (le tableau des utilisateurs est vide), console.log "personne n'est en ligne".
if (users.length === 0) {
    console.log("personne n'est en ligne");
}

//S'il y a 1 utilisateur, console.log " <name_user>est en ligne".
if (users.length === 1) {
    console.log(` ${users[0]} est en ligne`);
}

// S'il y a 2 utilisateurs, console.log « <name_user1>et <name_user2>sont en ligne ».
if (users.length === 2) {
    console.log(` ${users[0]}, ${users[1]} sont en ligne`);
}

// S'il y a plus de 2 utilisateurs, console.log les deux premiers noms dans le tableau des utilisateurs et le nombre d'utilisateurs supplémentaires en ligne.
if (users.length > 2) {
    console.log(` ${users[0]} , ${users[1]} et ${users.length - 2} autres personne sont en ligne`);
}
