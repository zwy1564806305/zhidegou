function login(){
    // 获取用户输入的内容
    var $uname = uname.value;
    var $upwd = upwd.value;
    if(!$uname){alert("用户名不能为空");return;}
    if(!$upwd){alert("密码不能为空");return}
    // 创建xhr异步对象
    var xhr = new XMLHttpRequest();
    // 4.创建监听，接收响应
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var r = xhr.responseText;
            if(r == 1){
                alert('登录成功');
                location.href="http://127.0.0.1:8080/index.html"
            }else{
                alert('登录失败');
            }
        }
    }
    // 2.创建请求，打开链接
    xhr.open("get",`/router/login/${$uname}&${$upwd}`,true);
    // 3.发送请求
    xhr.send();
}