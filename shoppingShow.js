var JsonData = {
    name: "热门推荐",
    data: [{ href: "#", src: "./images/s1.jpg", price: 56.00 },
    { href: "#", src: "./images/s2.jpg", price: 97.00 },
    { href: "#", src: "./images/s3.jpg", price: 89.00 },
    { href: "#", src: "./images/s4.jpg", price: 69.00 },
    { href: "#", src: "./images/s5.jpg", price: 35.00 },
    { href: "#", src: "./images/s6.jpg", price: 18.00 },
    { href: "#", src: "./images/s7.jpg", price: 76.00 },
    { href: "#", src: "./images/s8.jpg", price: 82.00 },
    { href: "#", src: "./images/s9.jpg", price: 60.00 },
    { href: "#", src: "./images/yifu1.jpg", price: 45.00 },
    { href: "#", src: "./images/yifu2.jpg", price: 92.00 },
    { href: "#", src: "./images/yifu3.jpg", price: 16.00 },
    { href: "#", src: "./images/yifu4.jpg", price: 42.00 },
    { href: "#", src: "./images/yifu5.jpg", price: 79.00 }
    ]
};
window.onload = showHotAdvise;
window.setInterval("showHotAdvise()", 2000);
function showHotAdvise() {
    var adviseContent = "";
    var turnShow = getRandomNum(9, 0, 14);
    for (var i = 0; i < turnShow.length; i++) {
        var index = turnShow[i];
        adviseContent = adviseContent + '<div class="min-botbox floatLeft"><div class="min-botpicbox"><img src="' + JsonData.data[index].src + '"><div class="min-topdescription"> ¥' + JsonData.data[index].price + '</div></div></div>';

    }
    document.getElementById("commend").innerHTML = adviseContent;
    // console.log(adviseContent)
}

function getRandomNum(num, minNum, maxNum) {
    var array = new Array();
    for (var i = 0; i < num; i++) {
        do {
            var randomNum = Math.floor(Math.random() * maxNum + minNum);
            if (!checkNum(array, randomNum)) {
                array.push(randomNum);
                break;
            }
        } while (true);
    }
    return array;
}
function checkNum(array, num) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == num)
            return true;
    }
    return false;
}