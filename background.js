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

        var title = tempHolder.getElementsByClassName("uontitle")[0].childNodes[2].data.trim();
        var num_available = 2
        sendResponse([{"title": title, "available": num_available}]);
    }
);

// String trim function
if(typeof(String.prototype.trim) === "undefined") {
    String.prototype.trim = function() {
        return String(this).replace(/^\s+|\s+$/g, '');
    };
}

