// api key
var apiKey = "g78LI21YarNhjYhB3RHzhmtgevtDoTbS";

// Rappers array
var rapArray = ["Nas", "Wu-Tang Clan", "Ice Cube", "MF Doom", "Earl Sweatshirt", "DMX", "2pac", "Kool G Rap"];

// Function to display hip hop gifs
function displayRapGifs() {
    var rapper = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=undertale";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(giphyResponse) {
        console.log(giphyResponse);

        // Creating a div to hold the movie
        var rapperDiv = $("<div class='rapper'>");

        $(".rapper").append('<img src =' + giphyResponse.data[3].images.fixed_width.url + "/>")
}
)}