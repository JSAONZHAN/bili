// 以下是轮播
var lunboLeft = document.querySelector('.lunbo-left');
var list = document.querySelector('.lb-list');
var buttons = document.querySelector('.lb-button').getElementsByTagName('span');
var pre = document.querySelector('.pre');
var next = document.querySelector('.next');
var index = 1;
var animated = false;
function showButton (){
	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].className == 'on') {
			buttons[i].className = '';
			break;
		}
	}
	buttons[index - 1].className = 'on';
}

function animate(offset){
	animated = true;
	var newleft = parseInt(list.style.left) + offset
	var time = 300;//位移总时间
	var interval = 10;//位移间隔时间
	var speed = offset/(time/interval);//每次位移量
	function go (){
		if ((speed < 0 && parseInt(list.style.left) > newleft)||(speed > 0 && parseInt(list.style.left)<newleft)) {
			list.style.left = parseInt(list.style.left) + speed + 'px';
			setTimeout(go,interval);
		}else{
			animated = false;
			list.style.left=newleft + 'px';
			if (newleft > -440) {
				list.style.left = -2200 + 'px';
			}
			if (newleft < -2200) {
				list.style.left = -440 + 'px';
			}
		}
	}
	go();
}
function play(){
	timer = setInterval(function () {
		next.onclick();
	},5000);
}
function stop(){
	clearInterval(timer);
}
next.onclick = function () {
	if (index == 5) {
		index = 1;
	}else{
		index +=1;
	}
	showButton();
	animate(-440);
}
pre.onclick = function () {
	if (index == 1) {
		index = 5;
	}else{
		index -=1;
	}
	showButton();
	animate(440);
}

for(var i =0; i <buttons.length; i++){
	buttons[i].onclick = function(){
		if (this.className == 'on') {
			return;
		}
		var myIndex = parseInt(this.getAttribute('index'));
		var offset = -440 * (myIndex - index);
		if (!animated) {
			animate(offset);
		}
		index = myIndex;
		showButton();
	}
}
lunboLeft.onmouseover = stop;
lunboLeft.onmouseout = play;
play();
//下面是side-bar
//回到顶部
var btn_gotop = document.querySelector('.btn-gotop');
var timer = null;
var isTop = true;
var dsq = true;
//滚动条滚动时触发
window.onscroll = function(){
	if (!isTop) {
		clearInterval(timer);
	}
	isTop = false;
}
btn_gotop.onclick = function (){
	//设置定时器
	timer = setInterval(function(){
		//获取滚动条距离顶部的高度
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		var ispeed = Math.floor(-osTop/5);
		document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
		isTop = true;
		// console.log(osTop - ispeed);
		if(osTop == 0){
			clearInterval(timer);
		}
	},30)	
}
//连续点击回到顶部会出现问题

// 下面是foot
var phone = document.querySelector('.phone');
var pic_hv = document.querySelector('.pic-hv');
var weibo = document.querySelector('.weibo');
var pic_hv2 = document.querySelector('.pic-hv2');
var weixin = document.querySelector('.weixin');
var pic_hv3 = document.querySelector('.pic-hv3');
// function picShow (){
// 	pic_hv.style.display = "block";
// }
// function hiddenPic (){
// 	pic_hv.style.display = "none";
// }
// function picShow2 (){
// 	pic_hv2.style.display = "block";
// }
// function hiddenPic2 (){
// 	pic_hv2.style.display = "none";
// }
phone.onmouseover = function(){
	return pic_hv.style.display = "block";
}
phone.onmouseout = function(){
	return pic_hv.style.display = "none";
}
weibo.onmouseover = function(){
	return pic_hv2.style.display = "block";
}
weibo.onmouseout = function(){
	return pic_hv2.style.display = "none";
}
weixin.onmouseover = function(){
	return pic_hv3.style.display = "block";
}
weixin.onmouseout = function(){
	return pic_hv3.style.display = "none";
}

// 网页定位导航

// 滚动条滚动
// $(window).scroll(function(){
// 	var top = $(document).scrollTop();
// 	var menu = $(".nav-list");
// 	var items = $("#content").find(".item");
// 	items.each(function(){
// 		var m = $(this);
// 		var itemTop = m.offset().top;
// 		console.log(itemTop);

// 	})


// 	//console.log(top);


// });

window.onscroll = function (){
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	var menus = document.querySelector('.nav-list').getElementsByTagName("a");
}





















