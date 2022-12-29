

typeof(15)
console.log(typeof(15));
// Prediction: number => l'expression retourne une valeur de type number car la variable passé est un nombre
// Actual: number
// la prediction est la meme que la valeur réel

typeof(5.5)
console.log(typeof(5.5));
// Prediction: number => l'expression retourne une valeur de type number car la variable passé est un nombre
// Actual: number
// la prediction est la meme que la valeur réel


typeof(NaN)
console.log(typeof(NaN));
// Prediction: number 
// Actual: number
// j'ai pas pue fait la prediction pour cette expresssion car je ne l'es pas compris


typeof("hello")
console.log(typeof("hello"));
// Prediction: string =>  l'expression retourne une valeur de type string car la variable passé est une chaine de carrectere
// Actual: string
// la prediction est la meme que la valeur réel


typeof(true)
console.log(typeof(true));
// Prediction: boolean => l'expression retourne une valeur de type boolean car la variable passé est un boolean
// Actual: boolean
// la prediction est la meme que la valeur réel


typeof(1 != 2)
console.log(typeof(1 != 2));
// Prediction: boolean => l'expression retourne une valeur de type boolean car deux variables de meme sont comparé
// Actual: boolean
// la prediction est la meme que la valeur réel


"hamburger" + "s"
console.log("hamburger" + "s");
// Prediction: hamburgers => l'expression retourne une valeur de type string car deux variables de type chaine de carractere sont concatenés
// Actual: hamburgers
// la prediction est la meme que la valeur réel


"hamburgers" - "s"
console.log("hamburger" - "s");
// Prediction: undefined => l'expression retourne undefined car ces variables de type chaine de carractere ne peuvent pas etre contactené avec le signe -
// Actual: NaN
// la prediction est differente de la valeur réel


"1" + "3"
console.log("1" + "3");
// Prediction: 13 => l'expression retourne une valeur de type string car deux variables de type chaine de carractere sont concatenés
// Actual: 13
// la prediction est la meme que la valeur réel


"1" - "3"
console.log("1" - "3");
// Prediction:  undefined => l'expression retourne undefined car ces variables de type chaine de carractere ne peuvent pas etre contactené avec le signe -
// Actual: -2
// la prediction est differente de la valeur réel


"johnny" + 5
console.log("johnny" + 5);
// Prediction: johnny5 => l'expression retourne une valeur de type string car une variable de type chaine de carractere et une varriable de type number sont concatenés
// Actual: johnny5
// la prediction est la meme que la valeur réel


"johnny" - 5
console.log("johnny" - 5);
// Prediction:  undefined => l'expression retourne undefined car ces variables de type different ne peuvent pas etre contactené avec le signe -
// Actual:  NaN
// la prediction est differente de la valeur réel


99 * "hello"
console.log(99 * "hello");
// Prediction: undefined => l'expression retourne undefined car ces variables de type different ne peuvent pas etre contactené avec le signe *
// Actual: NaN
// la prediction est differente de la valeur réel


1 != 1
console.log(1 != 1);
// Prediction:
// Actual: false
// j'ai pas pue fait la prediction pour cette expresssion car je ne l'es pas compris

1 == "1"
console.log(1 == "1");
// Prediction:
// Actual: true
// j'ai pas pue fait la prediction pour cette expresssion car je ne l'es pas compris

1 === "1"
console.log(1 === "1");
// Prediction:
// Actual: true
// j'ai pas pue fait la prediction pour cette expresssion car je ne l'es pas compris