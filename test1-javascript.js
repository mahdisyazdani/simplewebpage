    function showNews() {
        content.style.display = "none";
        newsContent.style.display = "block";
    }
    function readNews(array) {
        var out = "";
        var i;
        for(i = 0 ; i < array.length ; i++){
            out +='<div class="news-item">'+'<img src="'+array[i].image+'"/>'+ '<h2>'+array[i].title+'</h2><p>'+array[i].body+'</p><br>'+'</div>'
        }
        newsContent.innerHTML=out;
        console.log(out);
    }
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
    function showHome() {
        content.style.display = "block";
        newsContent.style.display = "none";
    }
    var searchIcon = document.getElementsByClassName("search")[0];
    var searchBox = document.getElementsByClassName("search-box")[0];
    searchIcon.addEventListener("mouseover",showSearchBox);
    searchBox.addEventListener("mouseout",hideSearchBox)

    var home = document.getElementsByClassName("home")[0];

    //var news = document.getElementsByClassName("news")[0];
    home.addEventListener("click",showHome);

    var newsContent = document.getElementById("news");

    var content = document.getElementsByClassName("content")[0];

    var news = document.getElementsByClassName("news")[0];
    news.addEventListener("click", showNews);
    showHome();