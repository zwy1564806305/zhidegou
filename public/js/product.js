// 排序点击
(function(){
    // 获取所有的a
    var _buttons=document.querySelectorAll(".middle>.middle_top>.middle_top_judge>a");
    for(var button of _buttons){
        button.onclick=function(){
            // 获取带有高亮的的按钮
            var _active=document.querySelector(".middle>.middle_top>.middle_top_judge>a.active");
            // console.log(_active)
            _active.className="";
            this.className="active"
        }
    }
})();
// // 修改商品数量和总页码
// (function(){
//     // 获取要修改的页面数量
//     var _span=document.querySelector(".middle>.middle_top>.middle_top_judge>span>strong");
//     var _spanBottom=document.getElementsByClassName('page-move')[0].children[0];
//     // 获取总数量
//     var _lis=document.querySelectorAll(".middle>.middle_content>ul>li");
//     // 获取要修改的总页码
//     var _pages=document.querySelector(".middle>.middle_top>.middle_top_judge>span:last-child");
//     // 获取当前总页码
//     var _pagesOn=document.querySelectorAll(".middle>.middle_page>.pages>a")
//     // 修改商品数量
//     _span.innerHTML=_lis.length;
//     // 修改总页码
//     _pages.innerHTML=`/${_pagesOn.length-2}`;
//     _spanBottom.innerHTML=`共${_pagesOn.length-2}页`
// })();
// 点击页码进行跳转，当前页面修改
// (function(){
//     // 获取所有按钮
//     var _buttons=document.querySelectorAll(".middle>.middle_page>.pages>a");
//     // 获取上一页按钮
//     var _pre=_buttons[0];
//     // 获取下一页按钮
//     var _next=_buttons[_buttons.length-1];
//     // 点击页码，转换高亮并实现跳转，当前页码显示转换
//     for(var i=1;i<_buttons.length-1;i++){
//         _buttons[i].onclick=function(){
//             // 获取本身拥有高亮的按钮
//             var _selected=document.getElementsByClassName("selected")[0];
//             _selected.className="";
//             // 点哪个 哪个获得高亮
//             this.className="selected";
//             // 获取要修改的当前页码
//             var _page=document.querySelector(".middle>.middle_top>.middle_top_judge>span:nth-of-type(3)");
//             // 获取当前页码
//             var _pageOn=document.getElementsByClassName("selected")[0];
//             // 修改当前页码
//             _page.innerHTML=_pageOn.innerHTML;
//         }
//     }
//     // 点击上一页，跳转上一页并实现当前页高亮
//     _pre.onclick=function(){
//         // 获取拥有高亮的按钮
//         var _selected=document.getElementsByClassName("selected")[0];
//         var index;
//         for(var i=1;i<_buttons.length-1;i++){
//             if(_buttons[i].className=="selected"){
//                 index=_buttons[i].index=i;
//             }
//         }
//         if(index!=1){
//             _selected.className="";
//             _buttons[index-1].className="selected";
//             // 获取要修改的当前页码
//             var _page=document.querySelector(".middle>.middle_top>.middle_top_judge>span:nth-of-type(3)");
//             // 获取当前页码
//             var _pageOn=document.getElementsByClassName("selected")[0];
//             // 修改当前页码
//             _page.innerHTML=_pageOn.innerHTML;
//         }
//     }
//     // 点击下一页，跳转下一页并实现当前页高亮
//     _next.onclick=function(){
//         // 获取拥有高亮的按钮
//         var _selected=document.getElementsByClassName("selected")[0];
//         var index;
//         for(var i=1;i<_buttons.length-1;i++){
//             if(_buttons[i].className=="selected"){
//                 index=_buttons[i].index=i;
//             }
//         }
//         if(index!=_buttons.length-1){
//             _selected.className="";
//             _buttons[index+1].className="selected";
//             // 获取要修改的当前页码
//             var _page=document.querySelector(".middle>.middle_top>.middle_top_judge>span:nth-of-type(3)");
//             // 获取当前页码
//             var _pageOn=document.getElementsByClassName("selected")[0];
//             // 修改当前页码
//             _page.innerHTML=_pageOn.innerHTML;
//         }
//     }
// })();
// 确定按钮进行跳转
// (function(){
//     // 获取确定按钮
//     var _button=document.getElementsByClassName("page-move")[0].children[4];
//     _button.onclick=function(){
//         // 获取input值
//         var _input=document.getElementsByClassName("page-move")[0].children[2].value;
//         // 获取页码
//         var _pages=document.getElementsByClassName("pages")[0].children;
//         // 获取拥有高亮的按钮
//         var _selected=document.getElementsByClassName("selected")[0];
//         // 获取要修改的当前页码
//         var _page=document.querySelector(".middle>.middle_top>.middle_top_judge>span:nth-of-type(3)");
//         _selected.className="";
//         _pages[_input].className="selected";
//         _page.innerHTML=_input;
//     }
// })();



//头部搜索框弹出、电梯弹出
(window.onscroll=function(){
    var bill=document.getElementsByClassName('head_middle_find')
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(scrollTop)
    if(scrollTop>=220){
        bill[0].style.display='block';
    }else{
        bill[0].style.display='none';
    }
})();

// ajax
if(location.search.indexOf("kwords=")!=-1){
    // 获取查询字符串中“=”后面的字符
    var kwords=decodeURI(location.search.split("=")[1]);
    // console.log(kwords);
    // 获取要修改的总页数
    var mun=document.querySelector(".middle>.middle_top>.middle_top_judge>span:last-child");
    // 页码
    var pno=0;
    function loadpage(no=0){
        pno=no;
        // console.log(pno);
        // 创建xhr异步对象
        var xhr=new XMLHttpRequest();
        // 4.创建监听，接收响应
        xhr.onreadystatechange =function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var r = JSON.parse(xhr.responseText);
                console.log(r);
                var{products,pageCount,count}=r;
                // 修改查询结果后的字为当前搜索内容
                document.getElementsByClassName("middle_top_search")[0].children[1].innerHTML=kwords;
                // 修改查询结果后的字为总商品数量
                document.querySelector(".middle>.middle_top>.middle_top_judge>span>strong").innerHTML=count;
                // console.log(products,pageCount,count);
                pageCount>1?mun.innerHTML=`/${pageCount}`:mun.innerHTML=`/1`;
                // 获取要添加li的ul
                var ul=document.getElementsByClassName("middle_content")[0].children[0];
                // 创建一个临时的托盘——文档片段对象
                var frag=document.createDocumentFragment();
                // 动态获取商品列表
                for(var product of products){
                    var {title,md,price,took,lid}=product;
                    //每遍历一个商品，就创建一个li
                    var li =document.createElement("li");
                    li.innerHTML=`
                        <div class="product-top">
                            <a href="http://127.0.0.1:8080/product_details.html?lid=${lid}" title="${title}">
                                <img src="${md}" alt="">
                            </a>
                            <div class="desc">
                                <span>￥${price}</span>
                                <a href="#">${title}</a>
                                <a href="#">${took}条评价</a>
                            </div>
                            <div class="addCart">
                                <a href="#">
                                    <input type="checkbox">
                                    <span>对比</span>
                                </a>
                                <a href="#">
                                    <img src="images/shopping_cart/foodstore_img3.png" alt="">
                                    <span>收藏</span>
                                </a>
                                <a href="#">
                                    <img src="images/header/shop_car1.png" alt="">
                                    <span>加入购物车</span>
                                </a>
                            </div>
                        </div>
                    `;
                    frag.appendChild(li);
                }
                ul.appendChild(frag);
                // 获取页码的div
                var pages=document.getElementsByClassName("pages")[0];
                // 创建一个临时的托盘——文档片段对象
                var frag1=document.createDocumentFragment();
                // 动态获取页码
                for(var i=0;i<pageCount;i++){
                    var page=document.createElement("a");
                    page.innerHTML=i+1;
                    page.href="";
                    page.className=`${i==pno ? 'selected' : ""}`;
                    frag1.appendChild(page);
                }
                pages.innerHTML=`<a href="">上一页</a>`;
                pages.appendChild(frag1);
                pages.innerHTML+=`<a href="">下一页</a>`;
                // 获取共几页
                var nub=document.getElementsByClassName("page-move")[0].children[0];
                nub.innerHTML=`共${pageCount}页`;
                // 获取上一页
                var pre=document.querySelector('.pages>a:first-child');
                // console.log(pre)
                // 获取下一页按钮
                var next=document.querySelector('.pages>a:last-child');
                if(pno==0){
                    pre.className="disabled";
                }else{
                    pre.className="";
                }
                if(pno==pageCount-1){
                    next.className="disabled";
                }else{
                    next.className="";
                }
            }
        }
        // 2.创建请求，打开连接
        xhr.open("get",`/router/product?kwords=${kwords}&pno=${pno}`,true);
        // 3.发送请求
        xhr.send();
    }
    loadpage();
    // 获取所有按钮
    var _buttons=document.getElementsByClassName("pages")[0];
    // 获取ul
    var ul=document.getElementsByClassName("middle_content")[0].children[0];
    // 点击页码，转换高亮并实现跳转，当前页码显示转换
    _buttons.addEventListener("click",function(e){
        // 清除默认行动
        e.preventDefault();
        // 判断被点击的位置是不是a标签
        if(e.target.nodeName=='A' && e.target.className!="selected" && e.target.className!="disabled"){
            // 获取当前页码
            var page=document.querySelector(".middle>.middle_top>.middle_top_judge>span:nth-of-type(3)");
            // console.log(page)
            ul.innerHTML="";
            // 除了当前页都能点
                if(e.target==_buttons.children[0]){
                    var no=pno-1;
                }else if(e.target==_buttons.children[_buttons.children.length-1]){
                    var no=pno+1;
                }else{
                    var no=e.target.innerHTML-1;
                }
            // 修改当前页码
            page.innerHTML=no+1;
            loadpage(no);
        }
    })
    // 获取输入的想跳转的页码
    var jumpPage=document.querySelector(".page-move>input");
    var reg=/^[1-9]\d*$|^0$/; 
    jumpPage.onblur=function(){
        // 获取总共多少页
        var num = document.getElementsByClassName("pages")[0].children.length-2;
        if(jumpPage.value>num){
            jumpPage.value=num;
        }else if(jumpPage.value<1){
            jumpPage.value=1;
        }else if(reg.test(jumpPage.value)==false){
            jumpPage.value=1
        }
    }
    
    // 获取确定按钮
    var determine=document.querySelector(".page-move>a");
    determine.onclick=function(){
        // 获取总共多少页
        var num = document.getElementsByClassName("pages")[0].children.length-2;
        // console.log(num)
        // 没有页面，结束
        if(num==0){
            this.className='disabled';
        }else if(jumpPage.value<=num)
            // 获取ul
            var ul=document.getElementsByClassName("middle_content")[0].children[0];
            // 获取当前页码
            var page=document.querySelector(".middle>.middle_top>.middle_top_judge>span:nth-of-type(3)");
            // 获取被选中的页码
            var selected=document.getElementsByClassName("selected")[0].innerHTML;
            // console.log(page);
            ul.innerHTML="";
            // 只有想跳转的页面和当前页码不同并且跳转的页码在当前有对应页码才能跳转
            if(jumpPage.value!=selected && this.className!="disabled"){
                // console.log("可以跳转");
                var no=jumpPage.value-1;
            }
            page.innerHTML=no+1;
            loadpage(no)
    }
}