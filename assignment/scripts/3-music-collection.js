console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title,artist,yearPublished){
    let album = {
        title:title,
        artist:artist,
        yearPublished
    };
    collection.push(album);
    return album;

}// end addToCollection
console.log('test addToCollection');

console.log(addToCollection('Sabbath Bloody Sabbath','Black Sabbath',1973));
console.log(addToCollection('Reload','Metallica',1997));
console.log(addToCollection('Ring Ring','Abba',1973));
console.log(addToCollection('And Its still Alright','Nathaniel Rateliff',2020));
console.log(addToCollection('If I Know Me','Morgan Wallen',2018));
console.log(addToCollection('Racine Carree','Stromae',2015));
console.log(collection);
