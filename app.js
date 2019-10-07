// api key
var apiKey = "g78LI21YarNhjYhB3RHzhmtgevtDoTbS";

// Rappers array
var rapArray = ["Nas", "Wu-Tang Clan", "Ice Cube", "MF Doom", "Earl Sweatshirt", "DMX", "2pac", "Kool G Rap"];

// Function to display hip hop gifs
function displayRapGifs() {
    var rapper = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + movie;
    console.log(queryURL);

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {

        // Creating a div to hold the movie
        var rapperDiv = $("<div class='rapper'>");

        // Store rating data
        var rating = response.Rated;

        // Creating an element to have the rating displayed
        var giphyRating = $("<p>").text("Rating: " + rating);

        // Displaying the rating
        movieDiv.append(giphyRating);
}