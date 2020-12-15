let list_image = [
    "Image_1.jpg",
    "Image_2 .jpg",
    "Image_3 .jpg",
    "Image_4 .jpg",
    "Image_5 .jpg",
];
let indexImageFocus = 0;
// function render image with syntax arr[index]
let renderImage = (indexImageFocus) => {
    return (document.getElementById(
        "image-render"
    ).innerHTML = ` <img class='current-image' src='${list_image[indexImageFocus]}'/>  `);
};
// call func render once only
renderImage(0);

let handleClearInterval;
resetSetInterval = (status) => {
    if (status) {
        handleClearInterval = setInterval(() => {
            indexImageFocus += 1;
            renderImage(indexImageFocus);
            if (indexImageFocus == list_image.length) {
                indexImageFocus = 0;
                renderImage(indexImageFocus);
                return;
            }
        }, 5000);
    } else {
        clearInterval(handleClearInterval);
    }
};
// call func start interval once only
resetSetInterval(true);

// reset time setInterval when click
const onResetSetInterval = () => {
    resetSetInterval(false);
    resetSetInterval(true);
};
document.getElementById("next").onclick = function() {
    if (indexImageFocus == list_image.length - 1) {
        indexImageFocus = 0;
        renderImage(indexImageFocus);
        onResetSetInterval();
        return;
    } else {
        indexImageFocus += 1;
        renderImage(indexImageFocus);
        onResetSetInterval();
    }
};

document.getElementById("back").onclick = function() {
    if (indexImageFocus == 0) {
        indexImageFocus = list_image.length - 1;
        renderImage(indexImageFocus);
        onResetSetInterval();
        return;
    } else {
        indexImageFocus -= 1;
        renderImage(indexImageFocus);
        onResetSetInterval();
    }
};

//function myFunction() {
//var element, name, arr;
//element = document.getElementById("indexImageFocus");
//name = "pagination";
//arr = element.className.split(" ");
//if (arr.indexOf(name) == -1) {
//element.className += " " + name;
//}