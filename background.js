// Background.js
// Responsible for fetching book details from library.

var searchURL = "http://aleph.nottingham.ac.uk/F/?func=find-b&request=";

console.log("Background task :)");
chrome.runtime.onMessage.addListener(

    function(request, sender, sendResponse) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", searchURL + request.isbn10, false);
        xhr.send(null);

        var tempHolder = document.createElement("div");
        tempHolder.innerHTML = xhr.responseText;

        // Remove scripts
        Array
            .from(tempHolder.getElementsByTagName("script"))
            .map((x) => x.parentElement.removeChild(x));

        var tables = tempHolder.getElementsByTagName("table");
        var results_row = Array
            .from(tables)
            .filter((x) => x.getAttribute("cellspacing") == "2")[0]
            .getElementsByTagName("tr")[1];

        var title = results_row
            .getElementsByClassName("uontitle")[0]
            .textContent
            .trim();

        var availibility = results_row
            .getElementsByTagName("td")[6]
            .textContent
            .trim();

        var request_link = results_row
            .getElementsByTagName("td")[7]
            .getElementsByTagName("a")[0]
            .getAttribute("href");

        console.log(request_link);

        sendResponse(
                {
                    "title": title,
                    "available": availibility,
                    "request_link": request_link
                }
        );
    }
);

// String trim function
if(typeof(String.prototype.trim) === "undefined") {
    String.prototype.trim = function() {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

