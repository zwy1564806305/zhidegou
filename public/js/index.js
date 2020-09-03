// 倒计时秒杀
(function(){
    var now1 = new Date();
    var targer = now1.getTime() + 999999999999;
    var _timeOpen = setInterval(() => {
        function countTime() {
            var now2 = new Date();
            var s = Math.floor((targer - now2.getTime()) / 1000)
            //  console.log(s)
            if (s > 0) {
                var hour = Math.floor(s % (3600 * 24) / 3600);
                var minute = Math.floor(s % 3600 / 60);
                s = s % 60;
                if (hour < 10) hour = '0' + hour;
                if (minute < 10) minute = '0' + minute;
                if (s < 10) s = '0' + s;
                var _timerParent = document.getElementsByClassName('skill_head_right')[0];
                // console.log(_timerParent)
                _timerParent.getElementsByTagName('strong')[0].innerHTML = hour
                _timerParent.getElementsByTagName('strong')[1].innerHTML = minute
                _timerParent.getElementsByTagName('strong')[2].innerHTML = s
                // timer = setTimeout(countTime,1000);
                // console.log(timer)
            } else {
                (function () {
                    alert('抢购结束');
                    clearInterval(_timeOpen);
                })();
            }
        }
        countTime();
    }, 1000);
})();

// 秒杀专场左右小轮播
(function () {
    let _ul = document.getElementsByClassName("skill_foot")[0].getElementsByTagName("ul")[0];
    let _lis = _ul.getElementsByTagName("li");
    let move = 0;
    // console.log(_lis.length)
    // console.log(_ul)
    let _arrow_l = document.getElementsByClassName("control-l")[0];
    let _arrow_r = document.getElementsByClassName("control-r")[0];
    // console.log(_arrow_l)
    // console.log(_arrow_r)
    _arrow_l.onclick = function () {
        // console.log(this.className.indexOf('active'))
        // console.log(this.className=='active')
        if (this.className.indexOf('active') < 0) {
            // if(!this.className=='active'){
            move--;
            let m_left = -1152 * move + 'px';
            let _left = this;
            _ul.style.marginLeft = m_left;
            // console.log(_ul.style.marginLeft)
            if (_lis.length - move == 8) {
                // console.log(_lis.length)
                _left.classList.add("active");
                _arrow_r.classList.remove("active");
            }
        }
    };
    _arrow_r.onclick = function () {
        // console.log(this.className.indexOf('active'))
        if (this.className.indexOf('active') < 0) {
            move++;
            let m_right = -1152 * move + 'px';
            _ul.style.marginLeft = m_right;
            // console.log(_ul.style.marginLeft)
            if (_lis.length - move < 8) {
                this.classList.add("active");
                _arrow_l.classList.remove("active");
            }
        }
    };
})();


//调用轮播配置
$(".container").show().carousel();

//楼层点击返回顶部
(function(){
    var _top = document.getElementsByClassName('foot_bar')[0].children[1]
    // console.log($top);
    _top.onclick=function(){
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    }
})();

// 楼层含有父级元素获取到顶部的高度为父级元素到顶部距离+当前元素到父级元素距离
function getMyTop(e){
    var _top = e.offsetTop;
    while(e = e.offsetParent){
        _top +=e.offsetTop;
    }
    return _top;
}
// 楼层点击跳转事件
(function(){
    // 调试
    var a = document.getElementsByClassName('sweet')[0];
    // console.log(getMyTop(a))
    // 获取电梯所有的li
    var _lis = document.getElementsByClassName('foot_bar_list')[0].children;
    // console.log(_ul);
    // 获取电梯所对应的所有的div
    var _floor = document.getElementsByClassName('_floor');
    console.log(_floor);
    // 获取被点击的li的下标
    for(var i = 0;i<_lis.length;i++){
        _lis[i].index = i;
        _lis[i].onclick = function(){
            var _remove = document.getElementsByClassName('on')[0];
            _remove.classList.remove('on');
            this.classList.add('on');
            // 根据下标对应相对应的div，并获取对应div到页面最顶部的高度
            // var _height = _floor[this.index].offsetTop-65;
            var _height = getMyTop(_floor[this.index])-65;
            // console.log(_height);
            window.scrollTo({
                top:_height,
                left:0,
                behavior:"smooth"
            })
        }
    }
})();


// 排行榜鼠标移入事件
(function(){
    // 获取排行榜中的ul
    var $li = document.getElementsByClassName('rank')[0].children[0]
    // console.log($li);
    // 获取li下面的下划线
    var $tab = document.getElementsByClassName('tab')[0]
    // console.log($tab);
    // 获取下面部分所有的ul
    var $ul = document.getElementsByClassName('rank_list')[0].children
    // console.log($ul)
    $li.onmouseover = function(e){
        e = e||window.event;
        // 获取当前li
        var $target = e.srcElement || e.target;
        // console.log($target)
        var $children;
        if($target.tagName.toLowerCase()=='li'){
            $children = this.children;
            for(var i=0;i<5;i++){
                if($target == $children[i]){
                    var $left = 15 + 72*i + 'px'
                    // console.log($left)
                    $tab.style.left = $left;
                    // 获取本身出现的ul
                    var $act = document.getElementsByClassName('tabr_active')[0]
                    // console.log($act)
                    $act.classList.remove('tabr_active')
                    $ul[i].classList.add('tabr_active')
                    // console.log($ul[i])
                    return
                }
            }
        }
    }
})();

// 会买专辑轮播
(()=>{
    // 获取div
    var _div=document.getElementsByClassName("goods_left2_content")[0].children;
    // console.log(_div);
    // 获取小圆点
    var _lis=_div[3].children;
    console.log(_lis)
    var count=0;
    setInterval(()=>{
        _div[count].classList.remove("active");
        _lis[count].classList.remove("active");
        count++;
        if(count==3){
            count=0;
        }
        _div[count].classList.add("active");
        _lis[count].classList.add("active");
    },3000)
})();

//头部搜索框弹出、电梯弹出
(window.onscroll=function(){
    var bill=document.getElementsByClassName('head_middle_find')
    var foot=document.getElementsByClassName('foot_bar')
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(scrollTop)
    if(scrollTop>=220){
        bill[0].style.display='block';
        foot[0].style.display='block';
    }else{
        bill[0].style.display='none';
        foot[0].style.display='none';
    }
// 楼层滚轮时间
    // 获取电梯所有的li
    var _lis = document.getElementsByClassName('foot_bar_list')[0].children;
    // 获取电梯所对应的所有的div
    var _floor = document.getElementsByClassName('_floor');
    // console.log(_floor[1].offsetHeight/2)
    for(let i = 0;i<_lis.length;i++){
        _lis[i] = i;
        // 获取元素本身高度的一半
        var _innerHeight = _floor[i].offsetHeight/2;
        // 获取元素距离页面的高度减去元素本身高度的一半
        var _height = getMyTop(_floor[_lis[i].index]) - _innerHeight;  
        // console.log(1,_floor[_lis[i].index] ) 
        // console.log(_innerHeight)
        if(scrollTop>=_height){
            var _remove = document.getElementsByClassName('on')[0];
            _remove.classList.remove('on');
            _lis[i].classList.add('on');
        }
    }
    // BUG 刷新过后默认限时秒杀高亮
})();