$(document).ready(function(){
    //快速通道的折叠效果
    $('.f-c-left').css({
        "overflow":"hidden"
    });
    $('.f-c-left').mouseover(function(){
        $('.f-c-left').css({
            "overflow":"visible"
        });
    })
    $('.f-c-left').mouseout(function(){
        $('.f-c-left').css({
            "overflow":"hidden"
        });
    })
    //导航栏的悬浮显示效果
   $('.news-center').hide();
   $('.news-show').mouseover(function(){
        $(this).children().show();
   })
   $('.news-show').mouseout(function(){
    $('.news-center').hide()
    })
    //用户登录位置的悬浮效果
    $('.function').hide();
    $('.loginshow').mouseover(function(){
        $('.function').show();
    })
    $('.loginshow').mouseout(function(){
        $('.function').hide()
        })
    //新闻中心：悬浮title改变下面div，悬浮新闻链接显示相应图片。
    $('.p-c-l-down').eq(0).show();
    $('.p-c-l-down').not(':eq(0)').hide();
    var buttonTitle = $('.p-c-l-top').children('button');
    $(buttonTitle).each(function(index){
        $(buttonTitle).eq(index).mouseover(function(){
            $('.p-c-l-down').not(':eq(index)').hide();
            $('.p-c-l-down').eq(index).show();
        })
    })
    var img = ["../image/new1-1.png", "../image/new1-2.jpg", "../image/new1-3.jpg", "../image/new1-4.png", "../image/new1-5.jpg", "../image/new1-6.jpg", "../image/new1-7.jpg", "../image/new1-8.jpg"]
    var newslink = $('.newhref');
    $(newslink).each(function(index){
        $(newslink).eq(index).mouseover(function(){
            $('.show').attr('src',img[index]);
        })
    })
    //新闻中心右侧，联系人查询和文件查询的切换
    $('.linkman-show').eq(0).show();
    $('.linkman-show').not(':eq(0)').hide();
    var linkmanBtuuonTitle = $('.linkman-header').children('button');
    $(linkmanBtuuonTitle).eq(0).css({
        'color': 'blue',
        'border-bottom': 'blue solid 2px'
    })
    $(linkmanBtuuonTitle).each(function(index){
        $(linkmanBtuuonTitle).eq(index).click(function(){
            $('.linkman-show').not(':eq(index)').hide();
            $('.linkman-show').eq(index).show();
            $(linkmanBtuuonTitle).not(':eq(index)').css({
                'color': '#8D8E79',
                'border-bottom': 'white solid 2px'
            })
            $(linkmanBtuuonTitle).eq(index).css({
                'color': 'blue',
                'border-bottom': 'blue solid 2px'
            })
        })
    })

    //员工关怀：悬浮title，切换div
    $('.matter').eq(0).show();
    $('.matter').not(':eq(0)').hide();
    var employeeButtonTitle = $ ('.employee-left-top').children('button');
    $(employeeButtonTitle).each(function(index){
        $(employeeButtonTitle).eq(index).mouseover(function(){
            $('.matter').not(':eq(index)').hide();
            $('.matter').eq(index).show();
        })
    })
    //轮播图
    var index = 1;
    var timer = null;
    var size = $('.slide').children().size();
    var picWidth = $('.slideImg').width();
    // 鼠标移上去的时候暂停
    $('.slideshow').mouseover(function () {
        clearInterval(timer);
    });
    //鼠标移走的时候再次开始
    $('.slideshow').mouseleave(function () {
        autoSlide();
    });
    $('.slide').mouseleave();
    // //自动播放
    function autoSlide() {
        timer = setInterval(function () {
            index++;
            changeImg();
            changeDots();
        }, 5000);
    };

    // 图片切换函数
    function changeImg() {
        var slideWidth = -1 * picWidth * index;
        $('.slide').animate({
            'left': slideWidth + 'px'
        }, 500);
        if (index >= size - 1) {
            $('.slide').animate({ 'left': -picWidth + 'px' }, 0);
            index = 1;
        }
        if(index<1){
            $('.slide').animate({'left':-(size-2)*picWidth+'px'},0);
            index=size-2;
        }
    }
    //小圆点切换的函数
    function changeDots() {
        $('.dot').eq(index - 1).addClass('active').siblings().removeClass('active');
    }
    //点击小圆点，切换到对应的图片
    $('.dot').click(function (event) {
        var target = event.target;
        index = $(target).index() + 1;
        changeImg();
        changeDots();
    });
    // 点击下一张切换图片
    $('.next').click(function () {
        index++;
        changeImg();
        changeDots();
    });
    // 点击上一张切换图片
    $('.prev').click(function () {
        index--;
        changeImg();
        changeDots();
    });
    //history路由跳转
    $('.historyAPI').on('click',function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        $('#change').html('新闻页面'+href);
        history.pushState(null,null,href)
    })
    // window.addEventListener('popstate',function(e){
    // 	$('#change').html('当前页面'+location.pathname);
    // })
    $('.newhref').on('click',function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        $('.newmodule').html('新闻链接'+href+'?id=5');
        history.pushState(null,null,href)
        $(document).ready(function(){
            $('.newmodule').load(href);
        })	
    })
   
})
//回顶
$(".top").hide()
$(window).scroll(function(){
    if($(this).scrollTop()>100){    
         $(".top").show()
    }else{
         $(".top").hide()
    }
})
//加载动画
document.onreadystatechange = function(){
	var showall = document.getElementById("container");
	var showLoadParent = document.getElementById("showLoadParent");
	if(document.readyState == "complete"){
		window.setTimeout(() => {
			showLoadParent.style.display = 'none';
	}, 1000);
		showall.style.display = 'block';
	}else{
		showLoadParent.style.display = 'block';
	}
}
// $.ajax({
//     complete: function(){
//         $('.container').show();
//     }
// });