console.log("Nottingham University Amazon Checker");

//
// A few helper functions
//

// Render a table of responses
function renderResponse(response) {
    var formats = document.getElementById("formats");
    var head = document.createElement("h1");
    head.innerHTML = Handlebars.templates["insert.hbs"]({})
    //console.log(Handlebars);
    insertAfter(head, formats);

}
// Insert node after
function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


// Is this a book? Get sales rank
var salesRankInfo = document.getElementById("SalesRank");
if (salesRankInfo) {
    var isBook = salesRankInfo.textContent.search("Books >") >= 0;

    // Get ISBN-10
    var li_tags = document.getElementsByTagName("li");
    var isbn10 = null;
    for (var i=0; i<li_tags.length; i++) {
        if (li_tags[i].textContent.search("ISBN-10:") >= 0) {
            isbn10 = li_tags[i].textContent.substring(9);
            break;
        }
    }
    console.log("ISBN-10 detected:" + isbn10);

    // We can't load an insecure page from a secure one so we must
    // request the background task do that for us.
    chrome.runtime.sendMessage({isbn10: isbn10}, function(response) {
        console.log(response);
        renderResponse(response);
    });


}

