window.onload=function(){
	search();
	time();
	scrollPic();
}
// 搜索框透明度变化
var search=function(){
	var jd_header_box=document.getElementsByClassName('jd_header_box')[0];
    var banner=document.getElementById('banner');
    var bannerHeight=banner.offsetHeight;
    window.onscroll=function(){
    	var top=document.body.scrollTop;
    	
    	// 当页面滚动的距离大于banner高度时，搜索框的透明度固定
    	if(top>bannerHeight){
    		jd_header_box.style.background="rgba(201,21,35,0.85)";
    	}
    	// 当页面滚动的距离大于banner高度时，搜索框的透明度随滚动的距离发生变化
    	else{
    		var tp=top/bannerHeight*0.85;
    		
    		jd_header_box.style.background="rgba(201,21,35,"+tp+")";
    	}

    }     
}
// 倒计时效果
var time=function(){
	var ms_time=document.getElementsByClassName('ms_time')[0];
	var number=document.getElementsByClassName('number');
	var times=6*60*60;
	var i;
	var timer=setInterval(function(){
	 times--;
     var h=Math.floor(times/(60*60));
     var m=Math.floor(times/60%60);
     var s=Math.floor(times%60);
     number[0].innerHTML=h>10?Math.floor(h/10):0;
     number[1].innerHTML=h%10;
     number[2].innerHTML=m>10?Math.floor(m/10):0;
     number[3].innerHTML=m%10;
     number[4].innerHTML=s>10?Math.floor(s/10):0;
     number[5].innerHTML=s%10;
     if(times<=0){
     	clearInterval(timer);
     }

	},1000)
	
}
// 轮播图效果
var scrollPic=function(){
	var banner=document.getElementById('banner');
	var imagesUl=banner.getElementsByTagName('ul')[0];
	var dotUl=banner.getElementsByTagName('ul')[1];
	//获得图片项
	var imagesLis=imagesUl.getElementsByTagName('li');
	//获得点项
	var dotLis=dotUl.getElementsByTagName('li');
	var index=1;
	var bannerWidth=banner.offsetWidth;
    //加上过渡效果
    var addTransition=function(){
    	imagesUl.style.transition="all .3s ease";
    	//imagesUl.style.webkitTransition="all .3s ease";

    }
    //移除过渡效果
    var removeTransition=function(){
    	imagesUl.style.transition="none";
    	imagesUl.style.webkitTransition="none";

    }
    //加上位移效果
    var addTransform=function(t){
    	imagesUl.style.transform="translateX("+t+"px)";
    	

    }
    //移除位移效果
    //加上下面的点根据轮播图的移动变化效果
    var addDotClass=function(i){   	
      	dotLis[i].className='active';
    }
    var removeDotClass=function(){
    for(i in dotLis){
    	dotLis[i].index=i;
    	dotLis[i].className=" ";
    }
    }
    //轮播图自动播放效果
    var timer=setInterval(ts,2000);
    function ts(){
    	//清除之前轮播图片的原点效果
    	//removeDotClass();
    	//给当前轮播的图片加上对应的原点效果
    	//addDotClass(index);
    	index++;
    	addTransition(index);
    	
    	addTransform(-index*bannerWidth); 
    }
    //当每张图片过渡效果结束时
     imagesUl.addEventListener("transitionEnd",function(){
     	//若图片到了最后一张，最后一张跟第二张是一样的图片
     	
     	    if(index>=9){
     	    	index=0;
     	    	
     	    }
     	    //或者图片到了第一张，第一张跟第八张是一样的图片
     	    else if(index<=0)
     	    {
     	    	index=8;

     	    }
     	    //移除最后一张到第一张的过渡效果，实现无缝滚动
     	    
     	    removeTransition();
     	    addTransform(-index*bannerWidth);
     	    console.log(index);
     	   


        },false);
     imagesUl.addEventListener("webkitTransitionEnd",function(){
     	if(index>=9){
     	    	index=1;   
     	    }
     	    else if(index<=0)
     	    {
     	    	index=8;   	    	
     	    }
     	    removeTransition();
         	addTransform(-index*bannerWidth);  
        	
        },false);
     
     //轮播图触屏滑动效果
    imagesUl.addEventListener("touchstart",function(e){
    	console.log("e");
    },false);
}