console.log('***** Music Collection *****')
let collection = [];


function addToCollection(title,artist,yearPublished,tracks){
    let album = {
        title:title,
        artist:artist,
        yearPublished: yearPublished,
        tracks:tracks
    };
    collection.push(album);
    return album;

}// end addToCollection

function showCollection(argArray){
    console.log(argArray.length);
    for(let i=0;i<argArray.length;i++){
        console.log(argArray[i].title+' by '+ argArray[i].artist+', published in '+argArray[i].yearPublished+':');
        console.log(argArray[i]['tracks']);
        
        
    }//end for i loop
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

function search(searchCriteria){
    if(searchCriteria == undefined){
        return collection;
    }
    let artistToSearchFor = searchCriteria.artist;
    let yearToSearchFor = searchCriteria.yearPublished;
    let trackName = searchCriteria.trackName;
    let foundAlbums=[];
    for(let i =0;i<collection.length;i++){
        if(collection[i].artist==artistToSearchFor && collection[i].yearPublished==yearToSearchFor){
            //console.log(collection[i]['tracks']);
            for(let j =0;j<collection[i]['tracks'].length;j++){
                if(collection[i]['tracks'][j].name==trackName){
                    foundAlbums.push(collection[i]);
                }
            }
            
        }
    }//end for loop
    return foundAlbums;

}//end search

console.log('test addToCollection');
let sabtracks =[
    {name: "Sabbath Bloody Sabbath",
    duration:'5:45'},
    {name: "A National Acrobat",
     duration: '6:15'},
     {name: 'Fluff',
     duration: '4:10'}
];
console.log(addToCollection('Sabbath Bloody Sabbath','Black Sabbath',1973,sabtracks));

let mettracks =[
    {name: "Fuel",
    duration:'4:29'},
    {name: "The Memory Remains",
     duration: '4:38'},
     {name: 'Devils Dance',
     duration: '5:18'}
];
console.log(addToCollection('Reload','Metallica',1997,mettracks));

let met2tracks =[
    {name: "Battery",
    duration:'5:12'},
    {name: "Master of Puppets",
     duration: '8:35'},
     {name: 'The Thing That Should Not Be',
     duration: '6:36'}
];
console.log(addToCollection('Master of Puppets','Metallica',1986,met2tracks));

let nattracks =[
    {name: "What a Drag",
    duration:'3:35'},
    {name: "And Its Still Alright",
     duration: '3:56'},
     {name: 'All or Nothing',
     duration: '5:02'}
];
console.log(addToCollection('And Its still Alright','Nathaniel Rateliff',2020,nattracks));

let morgtracks =[
    {name: "Up Down",
    duration:'3:17'},
    {name: "Happy Hour",
     duration: '3:20'},
     {name: 'Had Me By Halftime',
     duration: '2:52'}
];
console.log(addToCollection('If I Know Me','Morgan Wallen',2018,morgtracks));

let stromtracks =[
    {name: "Ta fete",
    duration:'2:56'},
    {name: "Papaoutai",
     duration: '3:52'},
     {name: 'batard',
     duration: '3:29'}
];
console.log(addToCollection('Racine Carree','Stromae',2015,stromtracks));
console.log(collection);
console.log('------')
console.log('test showCollection');
showCollection(collection);
console.log('------')
console.log('test findByArtist');
console.log('find 1 Black Sabbath album');
console.log(findByArtist('Black Sabbath'));
console.log('search for an artist not in collection');
console.log(findByArtist('Donald Duck'));
console.log('find 2 metallica albums');
console.log(findByArtist('Metallica'));
console.log('-------');
console.log('test search function');
let searchObj ={
    artist: 'Metallica',
    yearPublished: 1986,
    trackName: 'Battery'
};
console.log('search for Metallica 1986, Battery');
console.log(search(searchObj));
console.log('test with missing search object');
console.log(search());
console.log('search with partial missing search object');
console.log(search('Metallica'));