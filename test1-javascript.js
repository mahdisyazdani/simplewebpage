var searchIcon = $(".search");
var inputBox = $(".search-box")[0];
var isOpen = false;

var news = $(".news")[0];
var newsContent = $("#news")[0];
var content = $(".content")[0];
var home = $(".home")[0];

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
$(document).ready(function () {
    //init
    init();
    //go to top of the selected news from menu
    goToSelectedNews();
    //search box setting
    searchBoxSetting()
    //show news in the main page
    showNews()
    //show main conten
    showHome()
});
function init() {
    $(content).css("display","block");
    $(newsContent).css("display","none");
}
function showNews() {
    $(news).click(function () {
        $(content).css("display","none");
        $(newsContent).css("display","block");
    });
}
function showHome(){
    $(home).click(function () {
        $(content).css("display","block");
        $(newsContent).css("display","none");
    });
}
function searchBoxSetting(){
    searchIcon.mouseover(function () {
        if (!isOpen){
            $(inputBox).animate({width:'200px',marginLeft:'15px'},"slow",function () {
                isOpen = true;
                $(this).find('input')[0].focus();
            });
        }
    });
    $(document).mouseup(function (e) {
        if (!searchIcon.is(e.target) && searchIcon.has(e.target).length == 0){
            if (isOpen){
                $(inputBox).animate({width:'0px',marginLeft:'0px'},"slow",function () {
                    isOpen = false;
                });
            }
        }

    });
}
function goToSelectedNews() {

    $(".leftmenuinnerinner").click(function (event) {
        if($(content).css("display")=="block"){
            $(content).css("display","none");
            $(newsContent).css("display","block");
        }
        event.preventDefault();
        var id =  $(event.target).attr("id");
        var contentLink = $(".news-item")[id-1];
        var selectedDivId = "#"+$(contentLink).attr("id");
        $('html, body').animate({
            scrollTop: $(selectedDivId).offset().top
        }, 2000);
    });
}