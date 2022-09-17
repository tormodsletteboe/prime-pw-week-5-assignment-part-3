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

function showCollection(argArray){
    console.log(argArray.length);
    for(let i=0;i<argArray.length;i++){
        console.log(argArray[i].title+' by '+ argArray[i].artist+', published in '+argArray[i].yearPublished);
    }//end for loop
}//end showCollection

function findByArtist(strArtist){
    let arrAlbums=[];
    for(let i =0; i<collection.length;i++){
        if(strArtist==collection[i].artist){
            arrAlbums.push(collection[i]);
        }
    }
    return arrAlbums;

}//end findByArtist

console.log('test addToCollection');

console.log(addToCollection('Sabbath Bloody Sabbath','Black Sabbath',1973));
console.log(addToCollection('Reload','Metallica',1997));
console.log(addToCollection('Master of Puppets','Metallica',1986));
console.log(addToCollection('And Its still Alright','Nathaniel Rateliff',2020));
console.log(addToCollection('If I Know Me','Morgan Wallen',2018));
console.log(addToCollection('Racine Carree','Stromae',2015));
console.log(collection);
console.log('------')
console.log('testshowCollection');
showCollection(collection);
console.log('------')
console.log('test findByArtist');
console.log('find 1 Black Sabbath album');
console.log(findByArtist('Black Sabbath'));
console.log('search for an artist not in collection');
console.log(findByArtist('Donald Duck'));
console.log('find 2 metallica albums');
console.log(findByArtist('Metallica'));