
const user = [["admin", "admin", 5], ["itshixun", "itshixun", 10], ['guoqy', "123", 7]];
window.onload = function () {
    bakclogin();
    setcheckItem();
}
function bakclogin() {
    var flag = 0;
    do {
        var userName = prompt("请输入用户名");
        var userPwd = prompt("请输入密码");

        for (var i = 0; i < user.length; i++) {
            if (user[i][0] == userName && user[i][1] == userPwd) {
                alert("用户登录成功，欢迎<" + user[i][0] + ">使用本系统");
                document.getElementById("user").innerHTML = user[i][0] + "</span><span>消息</span><span>" + user[i][2];
                flag = 1;
                break;
            }
        }
        if (!userName && !userPwd) {
            flag = 2;
        }
        if (flag == 0) {
            alert("用户名或密码错误，请重新登录");
        }
    }
    while (flag == 0)
}
function selectAll() {
    var items = document.getElementsByName("checkItem");
    var cheackall = document.getElementById("cheackAll");
    console.log(items);
    console.log(cheackall);
    for (var i = 0; i < items.length; i++) {
        items[i].checked = cheackall.checked;
    }

}
function selectOther() {
    var items = document.getElementsByName("checkItem");
    var cheackall = document.getElementById("checkAll");
    for (var i = 0; i < items.length; i++) {
        items[i].checked = !items[i].checked;
    }
}

function setcheckItem() {
    var items = document.getElementsByName("checkItem");
    var cheackall = document.getElementById("checkAll");
    for (var i = 0; i < items.length; i++) {
        items[i].onclick = function () {
            items[i].checked = !items[i].checked;
            if (items[i].checked) {
                var flag = true
                for (var j = 0; j < items.length; i++) {
                    if (items[j].checked == false) {
                        flag = false;
                    }
                }
                cheackall.checked = flag;
            }
        }
    }
}