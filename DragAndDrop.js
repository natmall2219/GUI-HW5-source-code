//Natalie M. 
//GUI Programming 201
//12/6/21
//HW5: Scrabble
//This file contains code for the drag-and drop functionality of the scrabble game. 


//this function makes the scrabble pieces draggable and handles its related events. 
//used this as a source: 
//https://api.jqueryui.com/draggable/
function handle_tile_drag_events(){
    $(".letter_tiles").draggable();

//this prevents multiple tiles from being dragged onto the same board tile. 
//(OPTIMIZE THIS FOR THE BOARD)
$( ".drop-zone" ).droppable({
    classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
    },
    accept: function( draggable ){
        if (!$(this).hasClass('dropped') || draggable.hasClass('dropped')){
            return true;
        }
        return false;
    },
    drop: function( event, ui ) {
        $(this).addClass('dropped');
        ui.draggable.addClass('dropped');
    },
    out: function( event, ui ){
        $(this).removeClass('dropped');
        ui.draggable.removeClass('dropped');
    }
});


//this allows tiles to be dragged from the board back onto the rack. 



}

//this function handles everything related to drop events with the tiles. 
function handle_tile_drop_events(){
//this makes a tile "snap" to the center of tile it's being placed on in the board.
//(OPTIMIZE THIS TO WORK WITH THE BOARD)
//found here: 
//https://stackoverflow.com/questions/26746823/jquery-ui-drag-and-drop-snap-to-center/26764579#26764579 
$(".letter_tiles").draggable({
    revert: 'invalid'
  });
  
  $(".letter_tiles").droppable({
    accept: function(item) {
      return $(this).attr("drop-zone") == item.attr("drop-zone");
    },
    drop: function(event, ui) {
      var $this = $(this);
      ui.draggable.position({
        my: "center",
        at: "center",
        of: $this,
        using: function(pos) {
          $(this).animate(pos, 200, "linear");
        }
      });
    }
  });

//this returns a tile to its original position if it is not dropped in the right place. 
//found on this stack overflow post: 
//https://stackoverflow.com/questions/5735270/revert-a-jquery-draggable-object-back-to-its-original-container-on-out-event-of/5848800#5848800
$(function() {
    $(".letter_tiles").draggable({
        revert : function(event, ui) {
            $(this).data("uiDraggable").originalPosition = {
                top : 0,
                left : 0
            };
            // return boolean
            return !event;
            // that evaluate like this:
            return event !== false ? false : true;
        }
    });
    $(".letter_tiles").droppable();
});


}


