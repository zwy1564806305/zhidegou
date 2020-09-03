// 数量增加
(function(){
    // 获取+-按钮
    var _button=document.querySelectorAll(".car_main>.car_box_list>.list_content>.nub>button");
    // console.log(_button);
    for(var i=0;i<_button.length;i++){
        // 如果单数则为-按钮
        if(i%2==0){
            _button[i].onclick=function(){
                // 获取当前按钮的兄弟input
                var _input=this.parentNode.children[1]
                // console.log(_input);
                if(_input.value>1){
                    _input.value--;
                    // 计算当前商品总价
                    // 获取单价
                    var _price=this.parentNode.parentNode.children[2].children[0].innerHTML.slice(1)
                    // console.log(_price);
                    // 获取要修改的当前商品的总价
                    var totalPrice=this.parentNode.parentNode.children[4].children[0];
                    // console.log(_totalPrice);
                    // 总价=单价*数量
                    totalPrice.innerHTML=`￥${(_price*_input.value).toFixed(2)}`;
                }

                // 数量变化修改合计
                // 获取是否被选中的input
                var _check=this.parentNode.parentNode.children[0].children[0];
                // console.log(_check);
                // 寻找选中的
                var _onchecked=document.querySelectorAll(".car_main>.car_box_list>.list_content>.check>input:checked");
                if(_check.checked==true){
                    // 获取所有选中商品的总价
                    // 初始值为0
                    var price=0;
                    // 遍历所有商品的总价相加得到最终的总价
                    for(var i of _onchecked){
                        // 获取被选中的商品的各个总价
                        var _price =Number(i.parentNode.parentNode.children[4].children[0].innerHTML.slice(1));
                        price+=_price;
                    }
                    // console.log(price)
                    // 获取合计的总价
                    var _totalPrice=document.querySelector(".car_main>.car_box_bottom>.footer_tol>span:nth-child(2)");
                    _totalPrice.innerHTML=`${price.toFixed(2)}元`;
                }
            }
        }else{//双数为+按钮
            _button[i].onclick=function(){
                // 获取当前按钮的兄弟input
                var _input=this.parentNode.children[1]
                // console.log(_input);
                if(_input.value<99){
                    _input.value++;
                    // 计算当前商品总价
                    // 获取单价
                    var _price=this.parentNode.parentNode.children[2].children[0].innerHTML.slice(1)
                    // console.log(_price);
                    // 获取要修改的当前商品的总价
                    var totalPrice=this.parentNode.parentNode.children[4].children[0];
                    // console.log(_totalPrice);
                    // 总价=单价*数量
                    totalPrice.innerHTML=`￥${(_price*_input.value).toFixed(2)}`;
                }
                // 获取是否被选中的input
                var _check=this.parentNode.parentNode.children[0].children[0];
                // console.log(_check);
                // 寻找选中的
                var _onchecked=document.querySelectorAll(".car_main>.car_box_list>.list_content>.check>input:checked");
                if(_check.checked==true){
                    // 获取所有选中商品的总价
                    // 初始值为0
                    var price=0;
                    // 遍历所有商品的总价相加得到最终的总价
                    for(var i of _onchecked){
                        // 获取被选中的商品的各个总价
                        var _price =Number(i.parentNode.parentNode.children[4].children[0].innerHTML.slice(1));
                        price+=_price;
                    }
                    // console.log(price)
                    // 获取合计的总价
                    var _totalPrice=document.querySelector(".car_main>.car_box_bottom>.footer_tol>span:nth-child(2)");
                    _totalPrice.innerHTML=`${price.toFixed(2)}元`;
                }
            }
        }
    }
    // 获取数量
    var _inputs=document.querySelectorAll(".car_main>.car_box_list>.list_content>.nub>input");
    console.log(_inputs);
    for(var i=0;i<_inputs.length;i++){
        _inputs[i].onblur=function () {
            if(this.value>99){
                this.value=99;
                // 获取单价
                var _price=this.parentNode.parentNode.children[2].children[0].innerHTML.slice(1);
                // 获取要修改的当前商品的总价
                var totalPrice=this.parentNode.parentNode.children[4].children[0];
                // console.log(_totalPrice);
                // 总价=单价*数量
                totalPrice.innerHTML=`￥${(_price*this.value).toFixed(2)}`;
            }else if(this.value<1){
                this.value=1;
                // 获取单价
                var _price=this.parentNode.parentNode.children[2].children[0].innerHTML.slice(1);
                // 获取要修改的当前商品的总价
                var totalPrice=this.parentNode.parentNode.children[4].children[0];
                // console.log(_totalPrice);
                // 总价=单价*数量
                totalPrice.innerHTML=`￥${(_price*this.value).toFixed(2)}`;
            }
            
            // 计算合计
            // 获取是否被选中的input
            var _check=this.parentNode.parentNode.children[0].children[0];
            // console.log(_check);
            // 寻找选中的
            var _onchecked=document.querySelectorAll(".car_main>.car_box_list>.list_content>.check>input:checked");
            if(_check.checked==true){
                // 获取所有选中商品的总价
                // 初始值为0
                var price=0;
                // 遍历所有商品的总价相加得到最终的总价
                for(var i of _onchecked){
                    // 获取被选中的商品的各个总价
                    var _price =Number(i.parentNode.parentNode.children[4].children[0].innerHTML.slice(1));
                    price+=_price;
                }
                // console.log(price)
                // 获取合计的总价
                var _totalPrice=document.querySelector(".car_main>.car_box_bottom>.footer_tol>span:nth-child(2)");
                _totalPrice.innerHTML=`${price.toFixed(2)}元`;
            }
        }
        _inputs[i].addEventListener("input",function(e){
            
            // 获取单价
            var _price=this.parentNode.parentNode.children[2].children[0].innerHTML.slice(1);
            // console.log(_price);
            // 获取要修改的当前商品的总价
            var totalPrice=this.parentNode.parentNode.children[4].children[0];
            // console.log(_totalPrice);
            // 总价=单价*数量
            totalPrice.innerHTML=`￥${(_price*this.value).toFixed(2)}`;
            // console.log(e.target)

            // 获取是否被选中的input
            var _check=this.parentNode.parentNode.children[0].children[0];
            // console.log(_check);
            // 寻找选中的
            var _onchecked=document.querySelectorAll(".car_main>.car_box_list>.list_content>.check>input:checked");
            if(_check.checked==true){
                // 获取所有选中商品的总价
                // 初始值为0
                var price=0;
                // 遍历所有商品的总价相加得到最终的总价
                for(var i of _onchecked){
                    // 获取被选中的商品的各个总价
                    var _price =Number(i.parentNode.parentNode.children[4].children[0].innerHTML.slice(1));
                    price+=_price;
                }
                // console.log(price)
                // 获取合计的总价
                var _totalPrice=document.querySelector(".car_main>.car_box_bottom>.footer_tol>span:nth-child(2)");
                _totalPrice.innerHTML=`${price.toFixed(2)}元`;
            }
        })
    }
})();
// 勾选
(function(){
    // 获取勾选框
    var _checks=document.querySelectorAll(".car_main>.car_box_list>.list_content>.check>input");
    // console.log(_checks);
    // 获取上面的全选
    var _allTop=document.querySelector(".car_main>.car_box>.car_box_top>span>input");
    // console.log(_allTop)
    // 获取下面的全选
    var _allBot=document.querySelector(".car_main>.car_box_bottom>.base>input");
    // console.log(_allBot);

    // 上面的全选点击事件
    _allTop.onclick=function () {
        for(var chb of _checks){
            chb.checked=this.checked;
        }
        _allBot.checked=this.checked;

        // 计算选中几件商品
        // 寻找选中的
        var _onchecked=document.querySelectorAll(".car_main>.car_box_list>.list_content>.check>input:checked");
        // 获取商品数量
        var _num=document.querySelector(".car_main>.car_box_bottom>.go_price>span:nth-child(2)");
        // console.log(_num)
        _num.innerHTML=_onchecked.length;

        // 计算合计
        // 获取所有选中商品的总价
            // 初始值为0
            var price=0;
            // 遍历所有商品的总价相加得到最终的总价
            for(var i of _onchecked){
                // 获取被选中的商品的各个总价
                var _price =Number(i.parentNode.parentNode.children[4].children[0].innerHTML.slice(1));
                price+=_price;
            }
            // console.log(price)
            // 获取合计的总价
            var _totalPrice=document.querySelector(".car_main>.car_box_bottom>.footer_tol>span:nth-child(2)");
            _totalPrice.innerHTML=`${price.toFixed(2)}元`
    }

    // 下面的全选点击事件
    _allBot.onclick=function () {
        for(var chb of _checks){
            chb.checked=this.checked;
        }
        _allTop.checked=this.checked;

        // 计算选中几件商品
        // 寻找选中的
        var _onchecked=document.querySelectorAll(".car_main>.car_box_list>.list_content>.check>input:checked");
        // 获取商品数量
        var _num=document.querySelector(".car_main>.car_box_bottom>.go_price>span:nth-child(2)");
        // console.log(_num)
        _num.innerHTML=_onchecked.length;

        // 计算合计
        // 获取所有选中商品的总价
            // 初始值为0
            var price=0;
            // 遍历所有商品的总价相加得到最终的总价
            for(var i of _onchecked){
                // 获取被选中的商品的各个总价
                var _price =Number(i.parentNode.parentNode.children[4].children[0].innerHTML.slice(1));
                price+=_price;
            }
            // console.log(price)
            // 获取合计的总价
            var _totalPrice=document.querySelector(".car_main>.car_box_bottom>.footer_tol>span:nth-child(2)");
            _totalPrice.innerHTML=`${price.toFixed(2)}元`
    }
    
    // 勾选框点击事件
    for(var check of _checks){
        check.onclick=function () {
            // 寻找未选中的
            var _unchecked=document.querySelector(".car_main>.car_box_list>.list_content>.check>input:not(:checked)");
            // 没找到未选中全选为true否则为false
            _unchecked!=null?_allTop.checked=_allBot.checked=false:_allTop.checked=_allBot.checked=true;

            // 计算选中几件商品
            // 寻找选中的
            var _onchecked=document.querySelectorAll(".car_main>.car_box_list>.list_content>.check>input:checked");
            // console.log(_onchecked.length);
            // 获取商品数量
            var _num=document.querySelector(".car_main>.car_box_bottom>.go_price>span:nth-child(2)");
            // console.log(_num)
            _num.innerHTML=_onchecked.length;

            // 计算合计
            // 获取所有选中商品的总价
            // 初始值为0
            var price=0;
            // 遍历所有商品的总价相加得到最终的总价
            for(var i of _onchecked){
                // 获取被选中的商品的各个总价
                var _price =Number(i.parentNode.parentNode.children[4].children[0].innerHTML.slice(1));
                price+=_price;
            }
            // console.log(price)
            // 获取合计的总价
            var _totalPrice=document.querySelector(".car_main>.car_box_bottom>.footer_tol>span:nth-child(2)");
            _totalPrice.innerHTML=`${price.toFixed(2)}元`
        }
    }
})();
