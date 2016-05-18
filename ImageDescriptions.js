$(document).ready(function () {
    var arr = [
        {
            "id": 1,
            "title": "Trolltunga Norway",
            "image": "http://www.w3schools.com/css/img_fjords.jpg",
            "description" : "در این جا شرح تصویر را اضافه کنید..."
        },
        {
            "id": 2,
            "title": "Mountains",
            "image": "http://www.w3schools.com/css/img_mountains.jpg",
            "description" : "در این جا شرح تصویر را اضافه کنید..."
        },
        {
            "id": 3,
            "title": "Northern Lights",
            "image": "http://www.w3schools.com/css/img_lights.jpg",
            "description" : "در این جا شرح تصویر را اضافه کنید..."
        },
        {
            "id": 4,
            "title": "Forest",
            "image": "http://www.w3schools.com/css/img_forest.jpg",
            "description" : "در این جا شرح تصویر را اضافه کنید..."
        },
        {
            "id": 5,
            "title": "Trolltunga Norway",
            "image": "http://www.w3schools.com/css/img_fjords.jpg",
            "description" : "در این جا شرح تصویر را اضافه کنید..."
        },
        {
            "id": 6,
            "title": "Mountains",
            "image": "http://www.w3schools.com/css/img_mountains.jpg",
            "description" : "در این جا شرح تصویر را اضافه کنید..."
        }

    ];
    if( ! (localStorage.getItem("contentArray") === null)){
        var localStorageArr = JSON.parse(localStorage.getItem("contentArray"));
        console.log("local :"+localStorageArr);
        readImageInfo(localStorageArr);
    }else {
        console.log("not "+arr);
        readImageInfo(arr);
    }

});
