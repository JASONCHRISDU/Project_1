//網站一載入時, 過渡效果
$(window).load(function() {
	// 網站loading
	$('#loading').stop().animate({
		'top': '-100%'
	}, 500);
})
//網站Dom, 圖載入完畢後
$(document).ready(function() {
	//將所有區塊先隱藏	
	$('.showblock').css({
		display: 'block',
		opacity: '0'
	})	
	//導覽航點擊捲動導引
	$("a[href^=#]:not([href=#])").click(function(e){	
		//阻止默認事件
		e.preventDefault();
		//取得顯示內容的位置
		var target = $($(this).attr("href")).offset().top;	
		//將座標減70px
		target -= 70;		
		//平滑捲動到指定位置
		$("html, body").animate({
			scrollTop: target + 100 
		}, 500);
		//
		return false;
	});
	//滑鼠滑過特效
	$('.hover-a').hover(function() {		
		$(this).addClass('bounce animated05')	
	},function() {
		$(this).removeClass('bounce animated05')	
	});
	//至頂
	$('#toTop').click(function(e) {		
		//阻止默認事件
		e.preventDefault();
		// 平滑捲動到指定位置
		$("html, body").animate({
			scrollTop: 0},
		 500);
	})	
})
//頁面捲動監聽
$(window).scroll(function() {
	// 獲取螢幕高度的一半
	var window_h = $(window).height();
	//判斷捲動高度是否大於頁面高度-200px(彈出導航框)
	if($(window).scrollTop() > window_h - 200) {
		$('.float-nav').addClass("fadeIn animated05");			
	}else {	
		$('.float-nav').removeClass("fadeIn animated05");	
	}	
	//設定導航框跟隨的位置
	$(".float-nav").stop().animate({
		"top": $(window).scrollTop() + window_h / 2
	}, 500);
});
//滾動淡入特效
$(window).on('load scroll',function() {
	//獲取每個b-block
	var setArea = $('.showblock'),
		showHeight = 150;//差距高
	//跑每個區塊		
	setArea.each(function() {
		areaTop = $(this).offset().top;
		//判斷是否淡入
		if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height()) {
			$(this).stop().animate({opacity:'1'}, 500);
		}else {
			$(this).stop().animate({opacity:'0'}, 500);
		}
	});
});


