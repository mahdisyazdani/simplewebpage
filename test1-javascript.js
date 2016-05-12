window.onload = function () {
    function showSearchBox() {
            searchIcon.style.marginLeft="0px";
            searchBox.style.display="inline-block";
            isClicked = true;
    }
    function hideSearchBox() {
        searchIcon.style.marginLeft="15px";
        searchBox.style.display="none";
        isClicked = false;
    }
    var searchIcon = document.getElementsByClassName("search")[0];
    var searchBox = document.getElementsByClassName("search-box")[0];
    prompt("hiiiii");
    searchIcon.addEventListener("mouseover",showSearchBox);
    searchBox.addEventListener("mouseout",hideSearchBox)



}
