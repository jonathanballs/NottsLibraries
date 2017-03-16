// Background.js
// Responsible for fetching book details from library.

var searchURL = "http://aleph.nottingham.ac.uk/F/?func=find-b&request=";

chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {
        console.log(searchURL + request.isbn10);
        console.log("Searching by ISBN (" + request.isbn10 + ")");
        var xhr = new XMLHttpRequest();
        xhr.open("GET", searchURL + request.isbn10, true);
        xhr.onload = function() { parseResultsPage(request, xhr.responseText, sendResponse) };
        xhr.send(null);

        return true;
    }
);

// Parse the html of the search results
function parseResultsPage(searchParams, searchResults, sendResponse, tryNumber) {

    // If no results are found
    if (searchResults.search("No results found") >= 0
            || searchResults.search("No exact match") >= 0) {

        // Assume first try if tryNumber is undefined
        var xhr = new XMLHttpRequest();

        tryNumber = tryNumber || 1;
        switch (tryNumber) {
            case 1:
                console.log("No results found... Searching by book title (" + searchParams.title + ")");
                xhr.open("GET", searchURL + searchParams.title, true);
                break;
            case 2:
                console.log("No results found... Returning none");
                sendResponse([]);
                return;
        }

        xhr.onload = function() { parseResultsPage(searchParams, xhr.responseText, sendResponse, ++tryNumber) };
        xhr.send(null);

        return true;
    }

    var tempHolder = document.createElement("div");
    tempHolder.innerHTML = searchResults;

    // Remove scripts
    Array
        .from(tempHolder.getElementsByTagName("script"))
        .map((x) => x.parentElement.removeChild(x));

    var tables = tempHolder.getElementsByTagName("table");
    var results_row = Array
        .from(tables)
        .filter((x) => x.getAttribute("cellspacing") == "2")[0]
        .getElementsByTagName("tr")[1];

    console.log(results_row);

    var title = results_row
        .getElementsByClassName("uontitle")[0]
        .textContent
        .trim();

    var availibility = results_row
        .getElementsByTagName("td")[6]
        .textContent
        .trim();

    // Aleph is highly cancerous. Here we have to get the link from a js snippet
    if (availibility.length == 0) {
        availibility = "eBook";
        var request_link = searchURL + searchParams.title;
    }
    else {
        var request_link = results_row
            .getElementsByTagName("td")[7]
            .getElementsByTagName("a")[0]
            .getAttribute("href");
    }

    sendResponse(
            [{
                "title": title,
                "available": availibility,
                "request_link": request_link
            }]
    )
}

// String trim function
if(typeof(String.prototype.trim) === "undefined") {
    String.prototype.trim = function() {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

