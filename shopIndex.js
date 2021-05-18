window.onload = function () {
    console.log(window.innerWidth);
    // 初始化
    var imgList = document.getElementById("rightbig");
    var imgArr = document.getElementsByClassName("showimg");
    var outer = document.getElementById("outer");
    var wpx = outer.offsetWidth;
    console.log(wpx);
    imgList.style.width = wpx * imgArr.length + "px";
    //设置按钮居中
    var navpot = document.getElementById("navpot");
    navpot.style.left = (outer.offsetWidth - navpot.offsetWidth) / 2 + "px";

    var index = 0;
    var allA = document.getElementsByClassName("showa");
    allA[index].style.backgroundColor = "black";
    // console.log(allA);

    // 点击超链接切换到指定图片
    for (var i = 0; i < allA.length; i++) {
        allA[i].number = i;
        allA[i].onclick = function () {
            // clearInterval(timer);
            index = this.number;
            imgList.style.left = -807 * index + "px";
            // console.log(index);
            setA();
        }
    }

    aotoChange();

    function setA() {
        for (var i = 0; i < allA.length; i++) {
            allA[i].style.backgroundColor = "";
            // 内联样式表比hover优先级高 将值设为空 将会是css设置的颜色
        }
        allA[index].style.backgroundColor = "#000";
    }
    var timer;
    // 自动切换图片
    function aotoChange() {
        timer = setInterval(function () {
            index++;
            index %= imgArr.length;
            // move(imgList, "left", -520 * inedx, 20, function () {
            //     setA();
            // })
            console.log(imgArr.length);
            console.log(index);
            imgList.style.left = -807 * index + "px";
            // console.log(index);
            setA();
        }, 3000)
    }
};