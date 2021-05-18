var provinces = ["山东省", "河北省"];
var cities = [["济南市", "青岛市"], ["石家庄", "廊坊市"]];
var areas = [
    [
        ["市中区", "历下区", "天桥区", "槐荫区", "历城区", "长清区"],
        ["市南区", "市北区", "四方区", "李沧区", "城阳区", "崂山区"]
    ], [
        ["桥西区", "新华区", "长安区", "裕华区", "井陉区", "藁城区", "鹿泉区", "栾城区"],
        ["安次区", "广阳区", "三河市", "霸州市", "香河县", "永清县", "固安县", "文安县"]
    ]
];
//定义变量
var province, city, area;
//初始化省份下拉列表
function initProvince() {
    //获取表单中的省，市，区元素
    province = document.getElementById("province");
    city = document.getElementById("city");
    area = document.getElementById("area");
    province.options.length = 1;
    for (var i = 0; i < provinces.length; i++) {
        var option = new Option(provinces[i], provinces[i]);
        province.options.add(option);
    }
}
//选择省份时触发
function provinceChange() {
    //对地区下拉列表初始化
    cityChange();
    //对城市下拉列表初始化
    city.options.length = 1;
    if (province.selectedIndex == 0) {
        return;
    }
    //注意：选项的下标是从1开始的，数组的下标是从9开始的
    var pIndex = province.selectedIndex;
    for (var i = 0; i < cities[pIndex - 1].length; i++) {
        var optionValue = cities[pIndex - 1][i];
        var option = new Option(optionValue, optionValue);
        city.options.add(option);
    }
}
//选择城市时触发
function cityChange() {
    //对城市下拉列表初始化
    area.options.length = 1;
    if (city.selectedIndex == 0) {
        return;
    }
    var pIndex = province.selectedIndex;
    var cIndex = city.selectedIndex;
    for (var i = 0; i < areas[pIndex - 1][cIndex - 1].length; i++) {
        var optionValue = areas[pIndex - 1][cIndex - 1][i];
        var option = new Option(optionValue, optionValue);
        area.options.add(option);
    }
}


//元素获取焦点时触发该函数
function onFoucs() {
    this.select();
    // console.log(this);
    this.style.backgroundColor = "#FFEC8B";
    this.style.color = "#000000";
}
//元素失去焦点时触发该函数
function onBlur() {
    this.style.backgroundColor = "#FFFFFF";
    this.style.color = "#000000";
}
//验证用户名是否有效
function checkUserName() {
    var useName = document.getElementById("userNames");
    console.log(useName.value);
    if (useName.value == "") {
        alert("用户名不能为空");
        useName.focus();
        return false; //用户名不能为空
    }
}
//验证密码和确认密码是否有效
function checkPassword() {
    var userPwd = document.getElementById("userPwd").value;
    var userRePwd = document.getElementById("userRePwd").value;
    if (userPwd == "") {
        alert("密码不能为空！");
        return false;
    } else if (userPwd.length < 6 || userPwd.length > 20) {
        alert("密码长度为6~20位，请进行确认！");
        return false;
    }
    else if (userPwd != userRePwd) {
        alert("新密码和确认密码不一致！");
        return false;
    }
    // 密码由字母、数字和符号的两种以上组合
    if (/\d/.test(userPwd) && /[a-z]/i.test(userPwd) ||
        /\d/.test(userPwd) && /[\@\#\$\%\&\*]/.test(userPwd) ||
        /[\@\#\$\%\&\*]/.test(userPwd) && /[a-z]/i.test(userPwd)) {
        return true;
    } else {
        alert("密码必须是由字母、数字和符号的两种以上组合");
        return false;
    }
    return false;
}
//else
//表单提交时，触发该函数
function checkForm() {
    return checkUserName() && checkPassword();
}

//窗口加载完毕时，完成事件绑定和初始化
window.onload = function () {
    //初始化省份下拉列表
    initProvince();
    checkUserName();
    checkPassword();
    //为下拉列表绑定onchange事件
    province.onchange = provinceChange;
    city.onchange = cityChange;
    var myform = document.forms[0];
    myform.onsubmit = checkForm;
    //为输入文本框绑定onfoucs和onBlur事件处理函数
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        var type = inputs[i].type;
        if (type == "text" || type == "password") {
            inputs[i].onfocus = onFoucs;
            inputs.onBlur = onBlur;
            // console.log(inputs[i]);
        }
    }
}