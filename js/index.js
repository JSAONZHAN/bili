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








