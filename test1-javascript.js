//variables
var searchIcon = document.getElementsByClassName("search")[0];
var searchBox = document.getElementsByClassName("search-box")[0]
var home = document.getElementsByClassName("home")[0];
var newsContent = document.getElementById("news");
var content = document.getElementsByClassName("content")[0];
var news = document.getElementsByClassName("news")[0];
//show news in the main page
function showNews() {
    content.style.display = "none";
    newsContent.style.display = "block";
}
//read news from json
function readNews(array) {
    var leftmenuinnerinner = document.getElementsByClassName("leftmenuinnerinner")[0];
    var newsTitleList = "";
    var out = "";
    var i;
    for (i = 0; i < array.length; i++) {
        newsTitleList += '<a href="#" id="' + array[i].id + '">' + array[i].title + '</a>';
        out += '<div class="news-item" id="news' + array[i].id + '">' + '<img src="' + array[i].image + '"/>' + '<h2>' + array[i].title + '</h2><p>' + array[i].body + '</p><br>' + '</div>'
    }
    newsContent.innerHTML = out;
    leftmenuinnerinner.innerHTML += newsTitleList;
}
//open search input when mouse over
function showSearchBox() {
    searchIcon.style.marginLeft = "0px";
    searchBox.style.display = "inline-block";
    isClicked = true;
}
//hide search input when mouse out
function hideSearchBox() {
    searchIcon.style.marginLeft = "15px";
    searchBox.style.display = "none";
    isClicked = false;
}
//show main content
function showHome() {
    content.style.display = "block";
    newsContent.style.display = "none";
}

searchIcon.addEventListener("mouseover", showSearchBox);
searchBox.addEventListener("mouseout", hideSearchBox);
home.addEventListener("click", showHome);
news.addEventListener("click", showNews);
showHome();

$(document).ready(function () {
    $(".leftmenuinnerinner").click(function (event) {
        event.preventDefault();
        var id =  $(event.target).attr("id");
        var contentLink = $(".news-item")[id-1];
        var selectedDivId = "#"+$(contentLink).attr("id");
        $('html, body').animate({
            scrollTop: $(selectedDivId).offset().top /*- $(window).scrollTop()*/
        }, 2000);
    });
});