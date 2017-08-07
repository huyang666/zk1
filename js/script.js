$('.nav-tab li').on('touchstart',function(){
	$(this).addClass('active').siblings().removeClass('active');
})
$('.nav-list span').on('touchstart',function(){
	$(this).addClass('on').siblings().removeClass('on');
})
$('footer li').on('touchstart',function(){
	$(this).addClass('on').siblings().removeClass('on');
})