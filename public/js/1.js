// 点击页码进行跳转，当前页面修改
(function(){
    // 获取所有按钮
    var _buttons=document.querySelectorAll(".middle>.middle_page>.pages>a");
    // 获取上一页按钮
    
    var _pre=_buttons[0];
    // 获取下一页按钮
    var _next=_buttons[_buttons.length-1];
    // 点击页码，转换高亮并实现跳转，当前页码显示转换
    for(var i=1;i<_buttons.length-1;i++){
        _buttons[i].onclick=function(){
            // 获取本身拥有高亮的按钮
            var _selected=document.getElementsByClassName("selected")[0];
            _selected.className="";
            // 点哪个 哪个获得高亮
            this.className="selected";
            // 获取要修改的当前页码
            var _page=document.querySelector(".middle>.middle_top>.middle_top_judge>span:nth-of-type(3)");
            // 获取当前页码
            var _pageOn=document.getElementsByClassName("selected")[0];
            // 修改当前页码
            _page.innerHTML=_pageOn.innerHTML;
        }
    }
    // 点击上一页，跳转上一页并实现当前页高亮
    _pre.onclick=function(){
        // 获取拥有高亮的按钮
        var _selected=document.getElementsByClassName("selected")[0];
        var index;
        for(var i=1;i<_buttons.length-1;i++){
            if(_buttons[i].className=="selected"){
                index=_buttons[i].index=i;
            }
        }
        if(index!=1){
            _selected.className="";
            _buttons[index-1].className="selected";
            // 获取要修改的当前页码
            var _page=document.querySelector(".middle>.middle_top>.middle_top_judge>span:nth-of-type(3)");
            // 获取当前页码
            var _pageOn=document.getElementsByClassName("selected")[0];
            // 修改当前页码
            _page.innerHTML=_pageOn.innerHTML;
        }
    }
    // 点击下一页，跳转下一页并实现当前页高亮
    _next.onclick=function(){
        // 获取拥有高亮的按钮
        var _selected=document.getElementsByClassName("selected")[0];
        var index;
        for(var i=1;i<_buttons.length-1;i++){
            if(_buttons[i].className=="selected"){
                index=_buttons[i].index=i;
            }
        }
        if(index!=_buttons.length-1){
            _selected.className="";
            _buttons[index+1].className="selected";
            // 获取要修改的当前页码
            var _page=document.querySelector(".middle>.middle_top>.middle_top_judge>span:nth-of-type(3)");
            // 获取当前页码
            var _pageOn=document.getElementsByClassName("selected")[0];
            // 修改当前页码
            _page.innerHTML=_pageOn.innerHTML;
        }
    }
})();