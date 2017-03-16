console.log("Nottingham University Amazon Checker");

//
// A few helper functions
//

var productTitle = null;

// Render a table of responses
function renderResponse(response) {
    console.log("Response below:");
    console.log(response);
    var manual_search_url = "http://aleph.nottingham.ac.uk/F/?func=find-b&request=" +
            productTitle;

    var insert = document.createElement("div");
    insert.innerHTML = Handlebars.templates["insert.hbs"](
            {
                'results': response,
                'manual_search_url': manual_search_url
            });
    insertAfter(insert, document.getElementById("centerCol"));
    console.log("Rendered :)");
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
    var isbn10 = Array
        .from(document.getElementsByTagName("li"))
        .filter((n) => !n.textContent.search("ISBN-10:"))[0]
        .textContent
        .substring(9);
    console.log("ISBN-10 detected: " + isbn10);

    // Get book title
    var bookTitle = document.getElementById("productTitle")
        .textContent;
    // If from a 'Classic' (e.g. penguin classics, wordsworth classics)range then remove range identifier
    if (bookTitle.search("Classics\\\)") >= 0)
        bookTitle = bookTitle.substring(0, bookTitle.search("\\\(") - 1);

    productTitle = bookTitle;

    console.log("Book Title detected: " + bookTitle);

    // We can't load an insecure page from a secure one so we must
    // request the background task do that for us.
    chrome.runtime.sendMessage({isbn10: isbn10, title: bookTitle}, renderResponse);


}

