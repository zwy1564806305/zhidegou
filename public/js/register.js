// 注册切换
(function(){
	// 获取用户注册和手机号注册 0是用户注册  1是手机号注册
	var _register = document.getElementsByClassName('header_right')[0].children;
	// console.log(_register);
	// 获取左右内容
	var _root = document.getElementsByClassName('resgister_email')[0]
	var _phone = document.getElementsByClassName('register-telphone')[0]
	// console.log(_root,_phone)
	_register[0].onclick=function(){
		_root.style.display="block";
		_phone.style.display="none";
		_register[1].classList.remove('box_bottom');
		this.classList.add('box_bottom');
	}
	_register[1].onclick=function(){
		_phone.style.display="block";
		_root.style.display="none";
		_register[0].classList.remove('box_bottom');
		this.classList.add('box_bottom');
	}
})();
//查询用户名是否重复
function checkName(){
	var _register_email = document.getElementsByClassName('resgister_email')[0];
	var _register_telphone = document.getElementsByClassName('register-telphone')[0];
	var judge = (_register_email.style.display=='none');
	var $uname;
	if(!judge){
		$uname = _register_email.children[0].children[1].value;
	}else if(judge){
		$uname = _register_telphone.children[0].children[1].value;
	}
	// 创建xhr异步对象
	var xhr = new XMLHttpRequest();
	// 4.创建监听，接收响应
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var r = xhr.responseText;
			if(r == 1){
				alert('用户名重复，请重新输入')
			}else{
				// alert('注册失败')
			}
		}
	}
	// 2.创建请求，打开链接
	xhr.open("get",`/router/checkName/${$uname}`,true)
	// 3.发送请求
	xhr.send();
}
// 用户注册
function register(){
	// 获取用户注册和手机号注册 0是用户注册  1是手机号注册
	var _register_email = document.getElementsByClassName('resgister_email')[0];
	// console.log(_register_email);
	var _register_telphone = document.getElementsByClassName('register-telphone')[0];
	// console.log(_register_telphone);
	var judge = (_register_email.style.display=='none');
	// console.log(judge);
	var $uname,$upwd,$upwd_true,$code,$email,$check,rooter;
	if(!judge){
		rooter = _register_email.children
		// console.log(rooter);
		$uname = rooter[0].children[1].value;
		// console.log($uname)
		$upwd = rooter[1].children[1].value;
		// console.log($upwd);
		$upwd_true = rooter[2].children[1].value;
		// console.log($upwd_true);
		$email = rooter[3].children[1].value;
		// console.log($email);
		$check = rooter[4].children[0];
		// console.log($check.checked);
		if($uname == false){
			alert('请输入您要注册的用户名');
			return;
		}else if($upwd == false){
			alert('请输入您想要设置的密码');
			return;
		}else if($upwd_true == false){
			alert('请确认您要设置的密码');
			return;
		}else if($upwd != $upwd_true){
			alert('确认设置的密码与设置的密码不同，请重新输入');
			return;
		}else if($email == false){
			alert('请输入您的邮箱账号');
			return;
		}else if($check.checked == false){
			alert('请同意商城的《服务协议》，并打钩');
			return;
		}
	}else if(judge){
		rooter = _register_telphone.children;
		// console.log(rooter);
		$uname = rooter[0].children[1].value;
		// console.log($uname)
		$code = rooter[1].children[1].value;
		// console.log($code);
		$upwd = rooter[2].children[1].value;
		console.log($upwd);
		$upwd_true = rooter[3].children[1].value;
		console.log($upwd_true);
		$check = rooter[4].children[0];
		console.log($check.checked);
		if($uname == false){
			alert('请输入您的手机号');
			return;
		}else if($uname.length != 11){
			alert('请输入正确的11位手机号');
			return;
		}
		else if($code == false){
			alert('请输入正确的验证码');
			return;
		}else if($upwd == false){
			alert('请输入您要设置的密码');
			return;
		}else if($upwd_true == false){
			alert('请确认您要设置的密码');
			return;
		}else if($upwd != $upwd_true){
			alert('确认设置的密码与设置的密码不同，请重新输入');
			return;
		}else if($check.checked == false){
			alert('请同意商城的《服务协议》，并打钩');
			return;
		}
	}
	// 创建xhr异步对象
	var xhr = new XMLHttpRequest();
	// 4.创建监听，接收响应
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var r = xhr.responseText;
			if(r == 1){
				alert('注册成功')
				location.href="http://127.0.0.1:8080/index.html"
			}else{
				alert('注册失败')
			}
		}
	}
	// 2.创建请求，打开链接
	xhr.open("get",`/router/resgister/${$uname}&${$upwd}&${$email}`,true)
	// 3.发送请求
	xhr.send();
};
