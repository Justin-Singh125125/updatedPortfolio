var counter = 0;
var quoteArray = [];
for (var i = 0; i <= 3; i++) {
    // http://quotes.rest/quote/random.json?api_key=<your_api_key>
    var queryURL = "https://talaikis.com/api/quotes/random/";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {

        if (counter == 0) {
            $('#random-quote-1').text(`"${response.quote}"`);
            $('#author-1').text(response.author);
        }

        if (counter == 1) {
            $('#random-quote-2').text(`"${response.quote}"`);
            $('#author-2').text(response.author);
        }

        if (counter == 2) {
            $('#random-quote-3').text(`"${response.quote}"`);
            $('#author-3').text(response.author);
        }

        counter++;

    })
}