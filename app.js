// api key
var apiKey = "g78LI21YarNhjYhB3RHzhmtgevtDoTbS";

// Rappers array
var rapArray = ["2pac", "Open Mike Eagle", "Nas", "Madlib", "MF Doom", "Earl Sweatshirt", "Bone Thugs", "Wu-Tang Clan", "Beastie Boys", "Tyler, the Creator"];

// Function to display hip hop gifs
function displayRapStuff() {
    $("#rapDiv").empty();
    var rapper = $(this).attr("rap-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + rapper;

    // Creating an AJAX call for the specific button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(giphyResponse) {
        var result = giphyResponse.data;

        // Retrieving the URL for the images, using a for loop to get 10 images.
        for (var i = 0; i < 10 ; i++) {
         var imgURL = giphyResponse.data[i].images.fixed_height.url;
         //var imgURL = "giphyResponse.data[" + [i] + "].images.fixed_height".url;
        // console.log([i]);
        //it keeps running through and appending images to my div with the index i
        $("#rapDiv").append('<img src =' + imgURL + "/>") 
        // ratings from giphy are stored in a <p>paragraph</p>
        var p = $("<p>");
        var rating = result[i].rating;
        p.text("Rating: " + rating);
        $("#rapDiv").append(p);
         

    }
}
)}

function makeButtons() {
    $("#hipHopButtons").empty(); // empty buttons div so the page only holds 10 pics at once

    for (var i = 0; i < rapArray.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        var a = $("<button>"); // create a button
        // Adding a class of movie-btn to our button
        a.addClass("rap-btn");
        // Adding a data-attribute
        a.attr("rap-name", rapArray[i]);
        // Providing the initial button text
        a.text(rapArray[i]);
        // Adding the button to the buttons-view div
        $("#hipHopButtons").append(a);
      }
}

// This function handles events where a movie button is clicked
    $("#addRapper").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var rapper = $("#rapperInput").val().trim();

        // Adding movie from the textbox to our array
        rapArray.push(rapper);

        // Calling renderButtons which handles the processing of our movie array
        makeButtons();
      });

      // Adding a click event listener to all elements with a class of "movie-btn"
      $(document).on("click", ".rap-btn", displayRapStuff);

      // Calling the renderButtons function to display the intial buttons
      makeButtons();