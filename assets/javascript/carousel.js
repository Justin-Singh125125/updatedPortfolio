var counter = 0;
var quoteArray = [];
for (var i = 0; i <= 3; i++) {
    // http://quotes.rest/quote/random.json?api_key=<your_api_key>
    var queryURL = "https://quota.glitch.me/random";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);
        if (counter == 0) {
            $('#random-quote-1').text(`"${response.quoteText}"`);
            $('#author-1').text(response.quoteAuthor);
        }

        if (counter == 1) {
            $('#random-quote-2').text(`"${response.quoteText}"`);
            $('#author-2').text(response.quoteAuthor);
        }

        if (counter == 2) {
            $('#random-quote-3').text(`"${response.quoteText}"`);
            $('#author-3').text(response.quoteAuthor);
        }

        counter++;

    })
}