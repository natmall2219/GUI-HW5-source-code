//Natalie M. 
//GUI Programming 201
//12/6/21
//HW5: Scrabble
//this file contains the general code for the game play. 

//this is a hard-coded array data structure that holds all of the individual tiles. 
//the score values and amounts you see listed for each letter are based on those listed on the pieces.json file,
//which I am not using, but I am instead taking inspiration from. 
const game_tiles = [
{
    letter: "A",
    points: 1, 
    initial_amount: 9,
    tiles_left: 9, 
    src: "Scrabble_Tiles/Scrabble_Tile_A.jpg",
},
{
    letter: "B",
    points: 3, 
    initial_amount: 2, 
    tiles_left: 2, 
    src: "Scrabble_Tiles/Scrabble_Tile_B.jpg",
},
{
    letter: "C",
    points: 3, 
    initial_amount: 2, 
    tiles_left: 2,
    src: "Scrabble_Tiles/Scrabble_Tile_C.jpg", 

},
{
    letter: "D",
    points: 2, 
    initial_amount: 4,
    tiles_left: 4, 
    src: "Scrabble_Tiles/Scrabble_Tile_D.jpg",

},
{
    letter: "E",
    points: 1,
    initial_amount: 12,
    tiles_left: 12, 
    src: "Scrabble_Tiles/Scrabble_Tile_E.jpg",

},
{
    letter: "F",
    points: 4,
    initial_amount: 2,
    tiles_left: 2, 
    src: "Scrabble_Tiles/Scrabble_Tile_F.jpg",

},  
{
    letter: "G",
    points: 2, 
    initial_amount: 3, 
    tiles_left: 3, 
    src: "Scrabble_Tiles/Scrabble_Tile_G.jpg",

},
{
    letter: "H",
    points: 4,
    initial_amount: 2,
    tiles_left: 2, 
    src: "Scrabble_Tiles/Scrabble_Tile_H.jpg",

},
{
    letter: "I",
    points: 1, 
    initial_amount: 9, 
    tiles_left: 9, 
    src: "Scrabble_Tiles/Scrabble_Tile_I.jpg",

},
{
    letter: "J",
    points: 8,
    initial_amount: 1,
    tiles_left: 1,  
    src: "Scrabble_Tiles/Scrabble_Tile_J.jpg",

},
{
    letter: "K",
    points: 5,
    initial_amount: 1,
    tiles_left: 1, 
    src:  "Scrabble_Tiles/Scrabble_Tile_K.jpg",

},
{
    letter: "L",
    points: 1,
    initial_amount: 4,
    tiles_left: 4, 
    src: "Scrabble_Tiles/Scrabble_Tile_L.jpg",

},
{
    letter: "M",
    points: 3,
    initial_amount: 2,
    tiles_left: 2, 
    src: "Scrabble_Tiles/Scrabble_Tile_M.jpg",

},
{
    letter: "N",
    points: 1,
    initial_amount: 5,
    tiles_left: 5,
    src: "Scrabble_Tiles/Scrabble_Tile_N.jpg",

},
{
    letter: "O",
    points: 1,
    initial_amount: 8,
    tiles_left: 8, 
    src: "Scrabble_Tiles/Scrabble_Tile_O.jpg",

},
{
    letter: "P",
    points: 3,
    initial_amount: 2,
    tiles_left:  2, 
    src: "Scrabble_Tiles/Scrabble_Tile_P.jpg",

},
{
    letter: "Q",
    points: 10,
    initial_amount: 1,
    tiles_left: 1, 
    src:  "Scrabble_Tiles/Scrabble_Tile_Q.jpg",

},
{
    letter: "R",
    points: 1,
    initial_amount: 6,
    tiles_left: 6, 
    src: "Scrabble_Tiles/Scrabble_Tile_R.jpg",

},
{
    letter: "S",
    points: 1,
    initial_amount: 4,
    tiles_left: 4, 
    src: "Scrabble_Tiles/Scrabble_Tile_S.jpg",

},
{
    letter: "T",
    points: 1,
    initial_amount: 6,
    tiles_left: 6, 
    src: "Scrabble_Tiles/Scrabble_Tile_T.jpg",

},
{
    letter: "U",
    points: 1,
    initial_amount: 4,
    tiles_left: 4, 
    src:  "Scrabble_Tiles/Scrabble_Tile_U.jpg",

},
{
    letter: "V",
    points: 4,
    initial_amount: 2,
    tiles_left: 2, 
    src: "Scrabble_Tiles/Scrabble_Tile_V.jpg",

},
{
    letter: "W",
    points: 4,
    initial_amount: 2,
    tiles_left: 2, 
    src: "Scrabble_Tiles/Scrabble_Tile_W.jpg",

},
{
    letter: "X",
    points: 8,
    initial_amount: 1, 
    tiles_left: 1, 
    src: "Scrabble_Tiles/Scrabble_Tile_X.jpg",

},
{
    letter: "Y",
    points: 4,
    initial_amount: 2,
    tiles_left: 2, 
    src: "Scrabble_Tiles/Scrabble_Tile_Y.jpg",

},
{
    letter: "Z",
    points: 10, 
    initial_amount: 1,
    tiles_left: 1, 
    src: "Scrabble_Tiles/Scrabble_Tile_Z.jpg",

},
];

//this function generates a random letter to be placed on the tile rack. 
//the rack is being designated to fit seven letters. 
//once a random letter object is generated, its count in the arrray data structure is decremented. 
function generate_random_letter_(){
    for(const i = 0; i < 7; i++){
        //Random letter-number generator.found here: https://www.w3schools.com/js/js_random.asp 
        const x = Math.floor(Math.random() * game_tiles.length);
        const random_letter = x; 
        
       //this finds the object in the array where the random letter matches the actual 
       //letter, and decrements the tiles left by 1. 
       var the_tile = game_tiles.find((y) => y.letter === random_letter);
       //here we used an anonymous function to assign the random letter to the tile. 
       the_tile.tiles_left -= 1; 
    }
}


//this function loads the tiles' graphics onto the tile rack. 
function load_tiles_into_div(){

    //then, iterate through the data structure to load the tile graphics into the tile rack div. 
    //figured this out with this post: https://stackoverflow.com/questions/5886144/create-divs-from-array-elements
    //found out about find() here: https://www.w3schools.com/jsref/jsref_find.asp
    for(let j = 0; j < game_tiles.length; j++){ 
        if(game_tiles[j] == game_tiles.find(src)){
            //append the letter graphics and their matching randomized letter value to the tile rack div here.
            $("#Tile_rack_div").append(
        }
    }
}

//this function makes sure that after the first letter, all sub-sequent letters 
//on the board are placed directly next to or below another letter with no space.
function check_letters_after_first(){

}


