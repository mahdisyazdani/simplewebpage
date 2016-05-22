var searchIcon;
var inputBox;
var searchIsOpen;

var news;
var newsContent;
var content;
var home;
var imageDescription;
var accountUser;
var logInPage;
var signUpPage;
var signUpLink;

var tab;


//read news from json
function readNews(array) {
    var leftmenuinnerinner = $(".leftmenuinnerinner")[0];
    var newsTitleList = "";
    for (var i = 0; i < array.length; i++) {
        var newsElement = $($("#news-script").html()).clone();
        var id = "news"+array[i].id;
        newsElement.attr('id',id);
        newsElement.find('h2').html(array[i].title);
        newsElement.find('img').attr('src',array[i].image);
        newsElement.find('p').text(array[i].body);
        $(newsContent).append(newsElement);
        newsTitleList += '<a href="#" id="' + array[i].id + '">' + array[i].title + '</a>';
    }
    leftmenuinnerinner.innerHTML += newsTitleList;
}

//read image information
function readImageInfo(array, category) {

    if (category == "طبیعت"){
        category="nature";
    }
    else if(category == "شهر"){
        category = "city";
    }
    else if (category == "کوه"){
        category = "mountain";
    }

    var innerContent = $(".inner-content");
    innerContent.empty();
    for (var i = 0; i < array.length; i++) {

        if (array[i].category == category) {
            var gallery = '<div class="gallery" id="' + array[i].id + '"><a target="_blank" href="' + array[i].image +
                '"><img src="' + array[i].image + '" alt="' + array[i].title + '"></a>' + '<p class="desc" contenteditable="true">'
                + '<span>' + array[i].description + '</span></p></div>';
            $(innerContent).append(gallery);
        }
    }
//save changes of image description on localStorage
    //saveChangesOfDescs(category);
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
    accountUser = $(".account");
    logInPage = $("#login-page");
    // signUpLink = $(".signup-link");
    signUpPage = $("#signup-page");

    //go to top of the selected news from menu
    goToSelectedNews();
    //search box setting
    searchBoxSetting()
    //show news in the main page
    newsSetting()
    //show main content
    homeLinkSetting()
    //show login page
    logInPageSetting();


    imageDescription.focusout(function () {
        var tabCategory = content.find("h1").text();
        if (tabCategory == "طبیعت"){
            tabCategory="nature";
        }
        else if(tabCategory == "شهر"){
            tabCategory = "city";
        }
        else if (tabCategory == "کوه"){
            tabCategory = "mountain";
        }
        saveChangesOfDescs(tabCategory);
    });


    setLogInPageItem();
    setSignUpPageItem();
    
});

function setLogInPageItem() {
    var accountElement = $($("#login-page-script").html()).clone();
    logInPage.append(accountElement);
    console.log(accountElement.find(".signup-link"));
    $(accountElement.find(".signup-link")).click(function () {
        signUpPageSetting();
    });
}

function logInPageSetting() {
    $(accountUser).click(function () {
        $(newsContent).css("display", "none");
        $(content).css("display", "none");
        $(logInPage).css("display", "block");
        $(signUpPage).css("display", "none");
        $(tab).css("display", "none");
    })
}
function setSignUpPageItem() {
    var signupElement = $($("#signup-page-script").html()).clone();
    signUpPage.append(signupElement);
}
function signUpPageSetting() {
        $(newsContent).css("display", "none");
        $(content).css("display", "none");
        $(logInPage).css("display", "none");
        $(signUpPage).css("display", "block");
        $(tab).css("display", "none");

}
function newsSetting() {
    $(news).click(function () {
        $(logInPage).css("display", "none");
        $(signUpPage).css("display", "none");
        $(content).css("display", "none");
        $(newsContent).css("display", "block");
        $(tab).css("display", "none");
    });
}
function homeLinkSetting() {
    $(home).click(function () {
        $(logInPage).css("display", "none");
        $(signUpPage).css("display", "none");
        $(content).css("display", "block");
        $(newsContent).css("display", "none");
        $(tab).css("display", "block");
    });
}
function searchBoxSetting() {
    searchIcon.mouseover(function () {
        if (!searchIsOpen) {
            $(inputBox).animate({width: '200px', marginLeft: '15px'}, "slow", function () {
                searchIsOpen = true;
                $(this).find('input')[0].focus();
            });
        }
    });
    $(document).mouseup(function (e) {
        if ((!searchIcon.is(e.target) && searchIcon.has(e.target).length == 0) &&
            ($(".search-box").has(e.target).length != 1)) {
            if (searchIsOpen) {
                $(inputBox).animate({width: '0px', marginLeft: '0px'}, "slow", function () {
                    searchIsOpen = false;
                });
            }
        }

    });
}
function goToSelectedNews() {

    $(".leftmenuinnerinner").click(function (event) {
        if ($(content).css("display") == "block" || $(signUpPage).css("display") == "block" || $(logInPage).css("display") == "block" ) {
            $(content).css("display", "none");
            $(newsContent).css("display", "block");
            $(tab).css("display", "none");
            $(logInPage).css("display", "none");
            $(signUpPage).css("display", "none");
        }
        event.preventDefault();
        var id = $(event.target).attr("id");
        var contentLink = $(".news-item")[id - 1];
        var selectedDivId = "#" + $(contentLink).attr("id");
        $('html, body').animate({
            scrollTop: $(selectedDivId).offset().top
        }, 2000);
    });
}
function saveChangesOfDescs(name) {
    var innerContent = $(".inner-content");
    var array = new Array();
    var j =0 ;
    for (var i = 1; i < 19; i++) {

        var item = innerContent.find("#" + i);
        if(item.length==0)
            continue;
        array[j] = {
            "id": item.attr("id") + "",
            "title": $(item.find("img")).attr("alt") + "",
            "image": $(item.find("img")).attr("src") + "",
            "description": $(item.find("p")).text(),
            "category":name
        };
        j++;
    }
    localStorage.setItem(name, JSON.stringify(array));
}
