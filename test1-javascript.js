var searchIcon ;
var inputBox ;
var searchIsOpen ;

var news ;
var newsContent ;
var content ;
var home ;
var imageDescription;

var tab;


//read news from json
function readNews(array) {
    var leftmenuinnerinner = $(".leftmenuinnerinner")[0];
    var newsTitleList = "";
    var out = "";
    for (var i = 0; i < array.length; i++) {
        newsTitleList += '<a href="#" id="' + array[i].id + '">' + array[i].title + '</a>';
        out += '<div class="news-item" id="news' + array[i].id + '">' + '<h2>' + array[i].title + '</h2><img src="'
            + array[i].image + '"/>'
            + '<p>' + array[i].body + '</p><br>' + '</div>'
    }
    newsContent.innerHTML = out;
    leftmenuinnerinner.innerHTML += newsTitleList;
}
//read image information
function readImageInfo(array) {
    var innerContent = $(".inner-content");
    for (var i = 0 ; i <array.length ; i++){
        var gallery ='<div class="gallery" id="'+array[i].id +'"><a target="_blank" href="'+array[i].image+
            '"><img src="'+array[i].image+'" alt="'+array[i].title+'"></a>'+'<p class="desc" contenteditable="true">'
            +'<span>'+array[i].description+'</span></p></div>';
        $(innerContent).append(gallery);
    }
    //save changes of image description on localStorage
    saveChangesOfDescs();
}
$(document).ready(function () {

    searchIcon = $(".search");
    inputBox = $(".search-box");
    searchIsOpen = false;
    news = $(".news");
    newsContent = $("#news")[0];
    content = $(".content");
    home = $(".home");
    imageDescription = $(".inner-content");
    tab = $(".tab");

    //go to top of the selected news from menu
    goToSelectedNews();
    //search box setting
    searchBoxSetting()
    //show news in the main page
    newsSetting()
    //show main content
    homeLinkSetting()


    imageDescription.focusout(function () {
        saveChangesOfDescs();
    });





    tab.click(function (event) {
        console.log(event.target);
        openTab(event);
    })
});

function newsSetting() {
    $(news).click(function () {
        $(content).css("display","none");
        $(newsContent).css("display","block");
        $(tab).css("display","none");
    });
}
function homeLinkSetting(){
    $(home).click(function () {
        $(content).css("display","block");
        $(newsContent).css("display","none");
        $(tab).css("display","block");
    });
}
function searchBoxSetting(){
    searchIcon.mouseover(function () {
        if (!searchIsOpen){
            $(inputBox).animate({width:'200px',marginLeft:'15px'},"slow",function () {
                searchIsOpen = true;
                $(this).find('input')[0].focus();
            });
        }
    });
    $(document).mouseup(function (e) {
        if ((!searchIcon.is(e.target) && searchIcon.has(e.target).length == 0) &&
            ($(".search-box").has(e.target).length != 1)){
            if (searchIsOpen){
                $(inputBox).animate({width:'0px',marginLeft:'0px'},"slow",function () {
                    searchIsOpen = false;
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
            $(tab).css("display","none");
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
function saveChangesOfDescs() {
    var innerContent = $(".inner-content");
    var array = new Array();
    for (var i = 1; i < 7 ; i++){
        var item = innerContent.find("#"+i);
        array[i-1] = {
            "id":item.attr("id")+"",
            "title":$(item.find("img")).attr("alt")+"",
            "image":$(item.find("img")).attr("src")+"",
            "description":$(item.find("p")).text()};
    }
    localStorage.setItem("contentArray",JSON.stringify(array));
}
function openTab(event) {
    console.log($(event.target).text());
    $(content.find("h1")).text($(event.target).text());
}