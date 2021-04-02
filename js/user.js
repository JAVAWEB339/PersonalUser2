window.onload = function () {
	// var oDiv = document.getElementsByClassName("p-c-l-top");
	// var lis = oDiv[0].getElementsByTagName("button");
	// var shownews = document.getElementsByClassName("shownews")
	// var lisDiv = shownews[0].getElementsByClassName("p-c-l-down");
	// for (var i = 0; i < lis.length; i++) {
	// 	lis[i].index = i;
	// 	lis[i].onmouseover = function () {
	// 		show(this.index);
	// 	}
	// }
	// function show(a) {
	// 	for (var j = 0; j < lis.length; j++) {
	// 		lisDiv[j].id = "";
	// 	}
	// 	lisDiv[a].id = "act";
	// }
	// var imgx = document.getElementById("show");
	// var divact = document.getElementsByClassName("new");
	// var img = ["../image/new1-1.png", "../image/new1-2.jpg", "../image/new1-3.jpg", "../image/new1-4.png", "../image/new1-5.jpg", "../image/new1-6.jpg", "../image/new1-7.jpg", "../image/new1-8.jpg"]
	// for (var i = 0; i < divact.length; i++) {
	// 	divact[i].index = i;
	// 	divact[i].onmouseover = function () {
	// 		imgx.src = img[this.index];
	// 	}
	// }

	// var linkmanshow = document.getElementsByClassName("linkman-show");
	// var linkmanheader = document.getElementsByClassName("linkman-header");
	// var linkbtn = linkmanheader[0].getElementsByTagName("button");
	// for(var i = 0; i < linkbtn.length; i++) {
	// 	linkbtn[i].index = i;
	// 	linkbtn[i].onclick = function(){
	// 		for(var j = 0; j < linkbtn.length; j++){
	// 			linkmanshow[j].style.display = 'none';
	// 		}
	// 		linkmanshow[this.index].style.display = 'block';
	// 	}
	// }
	// var xDiv = document.getElementsByClassName("employee-left-top");
	// var buttonlis = xDiv[0].getElementsByTagName("button");
	// var xDivCon = document.getElementsByClassName("employee-left-down");
	// var messageshow = xDivCon[0].getElementsByClassName("matter")
	// for (var i = 0; i < buttonlis.length; i++) {
	// 	buttonlis[i].index = i;
	// 	buttonlis[i].onmouseover = function () {
	// 		show2(this.index);
	// 	}
	// }
	// function show2(a) {
	// 	for (var j = 0; j < buttonlis.length; j++) {
	// 		messageshow[j].id = "";
	// 	}
	// 	messageshow[a].id = "matteract";
	// }
	// var link = document.getElementsByClassName("newhref");
	// for(var i = 0; i< link.length; i++){
	// 	link[i].index = i;
	// 	link[i].onclick = function (){
	// 		skip(this.index);
	// 	}
	// }
	// function skip(a){
	// 	var url = 'personal-user.html'+'?id'+a;
	// 	history.pushState(a,null,url);
	// 	document.getElementsByClassName('.newmodule').html('新闻链接'+href);
	// }
	
}
// document.onreadystatechange = function(){
// 	var showall = document.getElementById("container");
// 	var showLoadParent = document.getElementById("showLoadParent");
// 	if(document.readyState == "complete"){
// 		window.setTimeout(() => {
// 			showLoadParent.style.display = 'none';
// 	}, 1000);
// 		showall.style.display = 'block';
// 	}else{
// 		showLoadParent.style.display = 'block';
// 	}
// }
// $('.historyAPI').on('click',function(e){
// 	e.preventDefault();
// 	var href = $(this).attr('href');
// 	$('#change').html('新闻页面'+href);
// 	history.pushState(null,null,href)
// })
// window.addEventListener('popstate',function(e){
// 	$('#change').html('当前页面'+location.pathname);
// })
// $('.newhref').on('click',function(e){
// 	e.preventDefault();
// 	var href = $(this).attr('href');
// 	$('.newmodule').html('新闻链接'+href+'?id=5');
// 	history.pushState(null,null,href)
// 	$(document).ready(function(){
// 		$('.newmodule').load(href);
// 	})	
// })

