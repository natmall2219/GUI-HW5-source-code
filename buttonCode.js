//Natalie M. 
//GUI Programming 201
//12/6/21
//HW5: Scrabble

//this function allows the user to always restart the game. use a button for this. 
//borrowed this snippet of code from peer Karsten Hrasna. 
//found this here: https://www.w3schools.com/jsref/met_loc_reload.asp

$('input[type="submit"]').click(function () {
    sub(); //submission process
});

$('input[value="Restart"]').click(function () {
    location.reload(); //restart everything
});



//this function clears the scrabble board after each round so that a new word can be played.
//found out how here: https://www.w3schools.com/jquery/html_empty.asp
function clear_GameBoard(){
    $('#ClearBoard_button').click(function(){
        $("div").empty();
      });
}

