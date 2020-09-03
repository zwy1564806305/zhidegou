// 小图标转换
(function(){
    // 获取所有li
    var _lis=document.getElementsByClassName("content_l_b")[0].children[0].children;
    // console.log(_lis)
    for(var i=1;i<_lis.length-1;i++){
        _lis[i].onmouseover=function(){
            // 获取带有active的li
            var _active=document.querySelector(".content>.content_m>.content_l>.content_l_b>ul>li.active");
            // console.log(_active)
            // 获取大图
            var _img=document.getElementsByClassName("small_img")[0].children[1];
            // console.log(_img.classList)
            _img.src=this.children[0].src;
            _active.className="";
            this.className="active"
        }
    }
})();
// 小图标左右点
(function(){
    // 获取所有的li
    var _lis=document.getElementsByClassName("content_l_b")[0].children[0].children;
    console.log(_lis)
    // 获取左右按钮
    var _left=_lis[0];
    // console.log(_left)
    var _right=_lis[_lis.length-1];
    // console.log(_right)
    // 获取对应下标
    for(var i=0;i<_lis.length;i++){
        _lis[i].index=i;
    }
    _left.onclick=function(){
        // 获取带有active的li
        var _active=document.querySelector(".content>.content_m>.content_l>.content_l_b>ul>li.active");
        // console.log(_active.index);
        // 获取大图
        var _img=document.getElementsByClassName("small_img")[0].children[1];
        if(_active.index==1){
            _active.className="";
            _lis[5].className="active";
            _img.src=_lis[5].children[0].src
        }else{
            _active.className="";
            _lis[_active.index-1].className="active";
            _img.src=_lis[_active.index-1].children[0].src
        }
        
    }
    _right.onclick=function(){
        // 获取带有active的li
        var _active=document.querySelector(".content>.content_m>.content_l>.content_l_b>ul>li.active");
        // console.log(_active.index);
        // 获取大图
        var _img=document.getElementsByClassName("small_img")[0].children[1];
        if(_active.index==5){
            _active.className="";
            _lis[1].className="active";
            _img.src=_lis[1].children[0].src
        }else{
            _active.className="";
            _lis[_active.index+1].className="active";
            _img.src=_lis[_active.index+1].children[0].src
        }
        
    }
})();
// 放大镜
(function(){
    // 遮挡层
    var _superMark=document.getElementsByClassName("superMark")[0];
    // 左侧图片元素
    var _smallImg=document.getElementsByClassName("small_img")[0];
    // console.log(_smallImg)
    // 滑块元素
    var _slide=document.getElementsByClassName("slide")[0];
    // console.log(_slide)
    // 右侧图片元素
    var _bigImg=document.getElementsByClassName("show")[0];
    // console.log(_bigImg)
    // 右侧图片
    var _jane=document.getElementsByClassName("jane")[0];
    // console.log(_jane);
    // console.log(_jane)
    // 鼠标移入
    _superMark.onmouseover=function(){
        // 滑块显示
        _slide.style.display="block";
        // 大图显示
        _bigImg.style.display="block";
    }
    // 鼠标移动
    _superMark.onmousemove=function(e){
        var left=e.offsetX - _slide.offsetWidth/2;
        // console.log(left)
        var top=e.offsetY - _slide.offsetHeight/2;
        // console.log(top)
        //最大移动的范围
        if(left<0){
            left=0;
        }else if(left> _smallImg.offsetWidth-_slide.offsetWidth){
            left= _smallImg.offsetWidth-_slide.offsetWidth;
        }
        if(top<0){
            top=0;
        }else if(top> _smallImg.offsetHeight-_slide.offsetHeight){
            top= _smallImg.offsetHeight-_slide.offsetHeight;
        }
        //给滑块的left和top值赋值
        _slide.style.left=left+'px';
        _slide.style.top=top+'px';
        //右侧图片赋值   *2的原因是两边的关系是1：2 刚好左边是右边的一半，所以右侧的图片必须是2倍的关系   
        //比例=大图：小图
        _jane.style.left=-left*2.64+'px';
        _jane.style.top=-top*2.83+'px';
    }
    //移出
    _superMark.onmouseout=function(){
        // 滑块隐藏
        _slide.style.display="none";
        // 大图隐藏
        _bigImg.style.display="none";
    }
})();
// 数量规格
(function(){
    // 获取+和-按钮
    var _button=document.querySelectorAll(".content>.content_m>.content_r>.spec>div>button");
    // console.log(_button)
    // 获取input
    var _input=document.querySelector(".content>.content_m>.content_r>.spec>div>input");
    // console.log(_input)
    _button[0].onclick=function(){
        if(_input.value>1){
            _input.value--;
        }
    }
    _button[1].onclick=function(){
            _input.value++;
    }
})();
// 立即购买
(function(){
    // 获取立即购买按钮
    var _button=document.getElementsByClassName("buy")[0].children[0]
    // 获取wrap
    var _wrap=document.getElementsByClassName("wrap")[0]
    // 获取付款框
    var _box=document.getElementsByClassName("buy_box")[0]
    // console.log(_button)
    _button.onclick=function(){
        // 获取单价
        var _price=document.getElementsByClassName("price")[0].children[1].innerHTML.slice(1);
        console.log(_price)
        // 获取数量
        var _num=document.getElementsByClassName("spec")[0].children[3].children[1].value;
        console.log(_num)
        // 计算支付的价格
        var _pay=_price*_num;
        console.log(_pay)
        // 获取付款时价格
        var _payNum=document.getElementsByClassName("buy_box")[0].children[4];
        // console.log(_payNum)
        _wrap.style.display="block";
        // fadeIn(_wrap,20,0)
        _box.style.display="block";
        _payNum.innerHTML=`￥${_pay}`;
    }
})();
// 关闭立即购买
(function(){
    // 获取叉叉
    var _close=document.getElementsByClassName("buy_box_close")[0].children[0]
    // console.log(_close);
    // 获取wrap
    var _wrap=document.getElementsByClassName("wrap")[0]
    // 获取付款框
    var _box=document.getElementsByClassName("buy_box")[0]
    _close.onclick=function(){
        _wrap.style.display="none";
        _box.style.display="none";
    }
})();
// 付款方式
(function(){
    // 获取按钮
    var _button=document.getElementsByClassName("buy_box_b")[0].children;
    // console.log(_button);
    for(var i=0;i<_button.length;i++){
        _button[i].index=i
        _button[i].onclick=function(){
            // 获取拥有高亮的button
            var _active=document.querySelector(".buy_box>.buy_box_b>button.active");
            // 获取付款二维码
            var _code=document.querySelector(".buy_box>img");
            _active.className="";
            this.className="active";
            console.log(this.index)
            _code.src=`./images/erweima/${this.index+1}.jpg`;
        }
    }
    
})();
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
(function(){
    if(location.search.indexOf("lid=")!=-1){
        var lid=decodeURI(location.search.split("=")[1]);
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var r = JSON.parse(xhr.responseText);
                console.log(r)
                var {pics,product,specs}=r;
                // 获取商品系列
                var titleList=document.getElementsByClassName("title")[0].children[0]
                titleList.innerHTML=`首页>${product.title.split("空气净化器")[0]}系列`
                // 获取商品标题
                var title=document.getElementsByClassName('title')[1].children[0];
                title.innerHTML=product.title;
                // 获取优惠
                var subtitle=document.getElementsByClassName("subtitle")[0].children[0];
                subtitle.innerHTML=product.subtitle;
                // 获取价格
                var price=document.getElementsByClassName('price')[0].children[1];
                price.innerHTML=`￥${product.price}`;
                // 获取服务承诺
                var promise=document.getElementsByClassName('price')[0].children[2];
                promise.innerHTML=`服务承诺：${product.promise}`;
                // 获取规格
                var specShow=document.getElementsByClassName("spec-show")[0];
                // 创建一个临时的托盘——文档片段对象
                var frag=document.createDocumentFragment();
                // 动态获取规格列表
                for(var spec of specs){
                    //每遍历一个商品，就创建一个a
                    var a=document.createElement("a");
                    a.href=`http://127.0.0.1:8080/product_details.html?lid=${spec.lid}`;
                    if(spec.lid==lid){
                        a.className="select"
                    }
                    a.innerHTML=`${spec.spec}`;
                    frag.appendChild(a);
                }
                specShow.appendChild(frag);
                // 获取放小图的ul
                var smImag=document.getElementsByClassName("content_l_b")[0].children[0];
                // 动态获取图片列表
                for(pic of pics){
                    //每遍历一个商品，就创建一个li
                    var li=document.createElement("li");
                    li.innerHTML=`
                        <a href="javascript:">
                            <img src="${pic.sm}" alt="">
                        </a>
                    `;
                    frag.appendChild(li);
                }
                smImag.innerHTML=`
                    <li>
                        <a href="javascript:">
                            <img src="./images/banner/arrow-left.png" alt="">
                        </a>
                    </li>
                `;
                smImag.appendChild(frag);
                smImag.innerHTML+=`
                    <li>
                        <a href="javascript:">
                            <img src="./images/banner/arrow-right.png" alt="">
                        </a>
                    </li>
                `;
            }
        }
        xhr.open("get",`/router/getdetails?lid=${lid}`,true);
        xhr.send();
    }
})()

