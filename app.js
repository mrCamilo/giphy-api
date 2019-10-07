// api key
var apiKey = "g78LI21YarNhjYhB3RHzhmtgevtDoTbS";

// Rappers array
var rapArray = ["Nas", "Wu-Tang Clan", "Ice Cube", "MF Doom", "Earl Sweatshirt", "DMX", "2pac", "Kool G Rap"];

// Function to display hip hop gifs
function displayRapGifs() {
    var rapper = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + movie;
    console.log(queryURL);
}