// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Please not that you can use the following but i chose 
// what i prefer.

/*
function makeGrid() {

Your code goes here!
}
*/

//OR YOU CAN WRAP YOUR CODE IN A SELF INVOKING FUNCTION LIKE THIS

/*
$(function() {

});
*/


// BUT I LIKE USING THE DOCUMENT.READY FUNCTION
$(document).ready(function() {
// first we write a function that will store the users 
// height and width input.

let column, row, color;// Global variables to be accessed by the functions for later use.

// Here we select form and act on it on submission of the user's input
$('#sizePicker').submit(function makeGrid(evt) {

    $('#pixelCanvas tr').remove(); // This line prevents the creation of an extra tr on each time of submission.
    evt.preventDefault(); // prevents the browser from opening in a new tab on clicking the submit button.
    column = $('#inputHeight').val(); // Get the value off the inputHeight
    row = $('#inputWeight').val(); // Get the value off the inputWidth
   
//Since the table rows and colums are repeative, just as a an array, we will loop through it.
    for(i = 1; i <= row; i++) { // Loops over and create table rows on each iteration.
        $('table#pixelCanvas').append('<tr></tr>'); // Adds a table row.
        for(j = 1; j <= column; j++ ) { // Loops over and create table columns on each iteration.
            $('tr:last').append('<td></td>'); // Adds a table colums
            $('td').attr('class', 'cells'); // Adds a class of cells on td for later use.
        };
    };

// Adds the color from the color picker to the table cells.
    $('.cells').click( function(event) { 
        color = $('#colorPicker').val();
        $(event.target).css('background', color);
        $(event.target).toggle();
    });
});

});