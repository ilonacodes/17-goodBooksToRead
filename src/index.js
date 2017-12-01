var pic1 = "https://images.gr-assets.com/books/1396645125l/17841.jpg";
var pic2 = "http://3.bp.blogspot.com/_frPILdvPYyI/TEjagIzYt9I/AAAAAAAADbs/68EZGuq6CPk/s1600/AtlasShr%20ugged.jpg";
var pic3 = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/LordOfTheFliesBookCover.jpg/220px-LordOfTheFliesBookCover.jpg";
var pic4 = "https://upload.wikimedia.org/wikipedia/en/2/28/The_Circle_%28Dave_Eggers_novel_-_cover_art%29.jpg";
var pic5 = "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/The_Book_Thief_by_Markus_Zusak_book_cover.jpg/220px-The_Book_Thief_by_Markus_Zusak_book_cover.jpg";
var pic6 = "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Theboyinthestripedpyjamas.jpg/220px-Theboyinthestripedpyjamas.jpg";
var pic7 = "https://epub.us/wp-content/uploads/2016/04/The_Thirteenth_Tale_Diane2-1.jpg";

var prev = document.querySelector("#prev");
var next = document.querySelector("#next");

var count = 0;
var srcArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];
var allImages = srcArray.length;

prev.onclick = function () {
    document.querySelector("#currentImage").src = srcArray[(count - 1) % allImages];
    count--;
};

next.onclick = function () {
    document.querySelector("#currentImage").src = srcArray[(count + 1) % allImages];
    count++;
};

if (count === 3) {
    count = 0;
};