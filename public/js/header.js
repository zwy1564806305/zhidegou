// 头部鼠标移入显示二级菜单
//我的账户鼠标移入
(function(){
    var bill=document.getElementsByClassName('dd_main');
    // console.log(bill[0])
    var title = document.getElementsByClassName('dropdown');
    title[0].onmouseover=function(){
            bill[0].style.display='block';
            bill[0].style.zIndex='1';
            bill[0].style.background='white'
            title[0].style.background='white'
    };
    title[0].onmouseout=function(){
        bill[0].style.display='none';
        title[0].style.background=''
    };
})();
//客户服务鼠标移入移出
(function(){
    var bill=document.getElementsByClassName('service');
    var title = document.getElementsByClassName('dropdown');
    title[1].onmouseover=function(){
        bill[0].style.display='block';
        title[1].style.background='white'
    };
    title[1].onmouseout=function(){
        bill[0].style.display='none';
        title[1].style.background=''
    };
})();
//手机版鼠标移入移出
(function(){
    var bill=document.getElementsByClassName('mobile_main');
    var title = document.getElementsByClassName('mobile');
    title[0].onmouseover=function(){
            bill[0].style.display='block';
            title[0].style.background='white'
    };
    title[0].onmouseout=function(){
        bill[0].style.display='none';
        title[0].style.background=''
    };
})();
//全部商品分类鼠标移入移除
(function(){
    var bill=document.getElementsByClassName('nav_list');
    var title = document.getElementsByClassName('nav_type');
    title[0].onmouseover=function(){
            bill[0].style.display='block';
    };
    title[0].onmouseout=function(){
        bill[0].style.display='none';
    };
})();
// 搜索框内容转变
(()=>{
    // 获取li
    var _li = document.getElementsByClassName("search-key")[0].children[0].children;
    // console.log(_li);
    // 获取input的placeholder
    var _inputP = document.getElementsByClassName("head_middle_search")[0].children[1];
    // console.log(_inputP.placeholder);
    setInterval(() => {
        // console.log(1)
        var i = Math.floor(Math.random()*7);
        _inputP.placeholder=_li[i].children[0].innerHTML;

    },3000)
    /*为搜索热词添加单击事件*/
    for(var li of _li){
        li.children[0].onclick=function(e){
		    e.preventDefault();
            // console.log(e.preventDefault())
            var kw=this.innerHTML;
            location.href=`product.html?kwords=`+kw;
        }
    }
})();



