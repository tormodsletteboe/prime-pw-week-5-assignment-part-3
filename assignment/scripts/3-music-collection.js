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

