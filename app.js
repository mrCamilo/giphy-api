// api key
var apiKey = "g78LI21YarNhjYhB3RHzhmtgevtDoTbS";

// Rappers array
var rapArray = ["2pac", "Nas", "Madlib", "MF Doom", "Earl Sweatshirt", "DMX", "Wu-Tang Clan", "Kool G Rap"];

// Function to display hip hop gifs
function displayRapStuff() {
    var rapper = $(this).attr("rap-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + rapper + "&limit=10";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(giphyResponse) {

        // Creating a div to hold the artists
        var rapperDiv = $("<div class='rap'>");

        // $("body").append('<img src =' + giphyResponse.data[1].images.fixed_height.url + "/>")

        // Retrieving the URL for the images, using a for loop to get 10 images.
        for (var i = 0; i < 10 ; i++) {
        var imgURL = giphyResponse.data[i].images.fixed_height.url;
        
        $("body").append('<img src =' + imgURL + "/>")
        }
        // Creating an element to hold the image
        //var image = $("<img>").attr("src", imgURL);

        // Append the image
        //rapperDiv.append(image);
}
)}

function makeButtons() {
    $("#hipHopButtons").empty(); // empty buttons div so it doesn't repeat

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