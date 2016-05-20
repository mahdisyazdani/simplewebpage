var arr;
$(document).ready(function () {

    arr = [
        {
            "id": 1,
            "title": "Trolltunga Norway",
            "image": "http://www.w3schools.com/css/img_fjords.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "nature"
        },
        {
            "id": 2,
            "title": "Mountains",
            "image": "http://www.w3schools.com/css/img_mountains.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "mountain"
        },
        {
            "id": 3,
            "title": "Northern Lights",
            "image": "http://www.w3schools.com/css/img_lights.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "mountain"
        },
        {
            "id": 4,
            "title": "Forest",
            "image": "http://www.w3schools.com/css/img_forest.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "nature"
        },
        {
            "id": 5,
            "title": "Trolltunga Norway",
            "image": "http://www.w3schools.com/css/img_fjords.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "city"
        },
        {
            "id": 6,
            "title": "Mountains",
            "image": "http://www.w3schools.com/css/img_mountains.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "mountain"
        },
        {
            "id": 7,
            "title": "Northern Lights",
            "image": "http://www.w3schools.com/css/img_lights.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "city"
        },
        {
            "id": 8,
            "title": "Forest",
            "image": "http://www.w3schools.com/css/img_forest.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "nature"
        },
        {
            "id": 9,
            "title": "Northern Lights",
            "image": "http://www.w3schools.com/css/img_lights.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "city"
        },
        {
            "id": 10,
            "title": "Forest",
            "image": "http://www.w3schools.com/css/img_forest.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "nature"
        },
        {
            "id": 11,
            "title": "Mountains",
            "image": "http://www.w3schools.com/css/img_mountains.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "mountain"
        },
        {
            "id": 12,
            "title": "Northern Lights",
            "image": "http://www.w3schools.com/css/img_lights.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "city"
        },
        {
            "id": 13,
            "title": "Mountains",
            "image": "http://www.w3schools.com/css/img_mountains.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "nature"
        },
        {
            "id": 14,
            "title": "Forest",
            "image": "http://www.w3schools.com/css/img_forest.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "nature"
        },
        {
            "id": 15,
            "title": "Northern Lights",
            "image": "http://www.w3schools.com/css/img_lights.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "city"
        },
        {
            "id": 16,
            "title": "Northern Lights",
            "image": "http://www.w3schools.com/css/img_lights.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "city"
        },
        {
            "id": 17,
            "title": "Mountains",
            "image": "http://www.w3schools.com/css/img_mountains.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "mountain"
        },
        {
            "id": 18,
            "title": "Northern Lights",
            "image": "http://www.w3schools.com/css/img_lights.jpg",
            "description": "در این جا شرح تصویر را اضافه کنید...",
            "category": "city"
        }

    ];
    var tabCategory = $("#tab1").text();
    var content = $(".content");
    var tab = $(".tab");
    $("#tab1").css("background-color", "#ccc");
    $(content.find("h1")).text(tabCategory);
    if (tabCategory == "طبیعت") {
        tabCategory = "nature";
    }
    else if (tabCategory == "شهر") {
        tabCategory = "city";
    }
    else if (tabCategory == "کوه") {
        tabCategory = "mountain";
    }
    if (!(localStorage.getItem(tabCategory) === null)) {
        var localStorageArr = JSON.parse(localStorage.getItem(tabCategory));
        readImageInfo(localStorageArr, tabCategory);
    } else {
        readImageInfo(arr, tabCategory);

    }


    tab.click(function (event) {


        openTab(event);
    })

});
function openTab(event) {
    if ($(event.target).attr("id") != "tab1")
        $("#tab1").css("background-color", "#f1f1f1");
    else $("#tab1").css("background-color", "#ccc");
    $(content.find("h1")).text($(event.target).text());
     var tabCategory = $(event.target).text();
     if (tabCategory == "طبیعت") {
     tabCategory = "nature";
     }
     else if (tabCategory == "شهر") {
     tabCategory = "city";
     }
     else if (tabCategory == "کوه") {
     tabCategory = "mountain";
     }
    if (!(localStorage.getItem(tabCategory) === null)) {
        var localStorageArr = JSON.parse(localStorage.getItem(tabCategory));
        readImageInfo(localStorageArr, $(event.target).text());
    } else {
        readImageInfo(arr, $(event.target).text());

        /*saveChangesOfDescs(tabCategory);*/
    }
}