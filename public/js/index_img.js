(function getImg(){
    // 秒杀专场ul中的图片
    var $src_skill = document.getElementsByClassName('skill_foot')[0].getElementsByTagName('img');
    // console.log($src_skill[1])
    //水果中的图片
    var $src_fruits = document.getElementsByClassName('fruits_content_right')[0].getElementsByTagName('img');
    // console.log($src_fruits[7].src)
    // 甜品中的图片
    var $src_sweet = document.getElementsByClassName('sweet_left_content')[0].getElementsByTagName('img');
    // console.log($src_sweet)
    // 坚果中的图片
    var $src_nut = document.getElementsByClassName('sweet_left_content')[1].getElementsByTagName('img');
    // console.log($src_nut[5])
    // 秒杀专场中的文字
    var $p_skill = document.getElementsByClassName('skill_foot')[0].getElementsByTagName('p');
    // 水果中的文字
    var $p_friuits = document.getElementsByClassName('fruits_content_right')[0].getElementsByTagName('p');
    // console.log($p_skill[0])
    // 甜品中的文字
    var $p_sweet = document.getElementsByClassName('sweet_left_content')[0].getElementsByTagName('p');
    // 坚果中的文字
    var $p_nut = document.getElementsByClassName('sweet_left_content')[1].getElementsByTagName('p');
    // console.log($p_nut[0])
    // 秒杀专场中的价格
    var $span_skill = document.getElementsByClassName('skill_foot')[0].getElementsByTagName('span');
    // 水果中的价格
    var $span_friuits = document.getElementsByClassName('fruits_content_right')[0].getElementsByTagName('span');
    // console.log($src_skill)
    // 创建异步对象
    var xhr = new XMLHttpRequest();
    // 4.创建监听，接收响应
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var r = JSON.parse(xhr.responseText)
            // console.log(r)
            // $src[0].src = r[10].fpic
            // $p[0].innerText=r[0].ftext
            for(var i=0;i<r.length;i++){
                // console.log(r[i].food_id)
                if(r[i].food_id==1){
                    $src_skill[i].src=r[i].fpic;
                    $p_skill[i].innerText=r[i].ftext;
                    $span_skill[i].innerText=r[i].fprice;
                }
                if(r[i].food_id==2 && i<16){
                    $src_fruits[i-8].src=r[i].fpic
                    $p_friuits[i-8].innerText=r[i].ftext;
                    $span_friuits[i-8].innerText=r[i].fprice;
                }
                if(r[i].food_id==3 && i<22){
                    $src_sweet[i-17].src=r[i].fpic
                    $p_sweet[i-17].innerText=r[i].ftext;
                }
                if(r[i].food_id==3 && i>=22 && i<25){
                    $src_sweet[i-17].src=r[i+5].fpic
                }
                if(r[i].food_id==3 && i>=25 && i<30){
                    $src_nut[i-25].src=r[i-3].fpic
                    $p_nut[i-25].innerText=r[i-3].ftext;
                }
                if(r[i].food_id==3 && i>=30 && i<33){
                    $src_nut[i-25].src=r[i].fpic
                }
            }
        }
    }
    // 2.创建请求，打开连接
    xhr.open("get",`/router/img`,true);
    // 3.发送请求
    xhr.send();
})();