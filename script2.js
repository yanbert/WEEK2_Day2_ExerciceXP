

// Partie 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries[1];

let myWatchedSeriesSentence = "C'est la meilleur serie du monde";

console.log(`J'ai regardé la serie ${myWatchedSeriesLength}  et ${myWatchedSeriesSentence}`);


// Partie 2
myWatchedSeries.splice(2, 1);
myWatchedSeries.push('friends');

myWatchedSeries.push('Suite');

myWatchedSeries.unshift('Allo');

myWatchedSeries.splice(1, 1);

console.log(myWatchedSeries[1][2]);

console.log(myWatchedSeries);

