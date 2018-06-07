$(function(){
	// 选项卡：内容导航栏切换
	$('.content-nav ul li a').click(function(){
		// “最热”“发现”导航栏
		$(this).addClass('active').parent('li').siblings('li').children('a').removeClass('active');
		// 相应页面内容也随之改变
		$('.content-text').eq($(this).parent('li').index()).show().siblings('.content-text').hide();
	});

	// 发布按钮
	$('#post-btn').click(function(){
		$('#post-panel').show();
	});

	// 取消发布按钮
	$('.cancle').click(function(){
		$('#post-panel').hide();
		$('#post-panel textarea').val('');
	})

	// 发布内容按钮
	$('.punish').click(function(){
		var punishContent = $('#post-panel textarea').val();
		if (punishContent==='') {
			alert('内容不能为空')
		} else {
			$('.content-text').eq(0).prepend('<div class="content-text1"><div class="part1"><a href="#"></a></div></div>');
			$('.content-text').eq(0).children('.content-text1').eq(0).children('.part1').children('a').text(punishContent);
			$('.content-text').eq(0).children('.content-text1').eq(0).append('<div class="part2"></div>');
			$('.content-text').eq(0).children('.content-text1').eq(0).children('.part2').append('<a href="javascrpt:;"><span class="icon-thumbs-up icon">&nbsp;&nbsp;</span><span class="count">0</span></a>');
			$('.content-text').eq(0).children('.content-text1').eq(0).children('.part2').append('<a href="javascrpt:;"><span class="icon-comment-alt icon">&nbsp;&nbsp;</span><span class="count">0</span></a>');
			$('.content-text').eq(0).children('.content-text1').eq(0).children('.part2').append('<a href="javascrpt:;"><span class="icon-heart-empty icon">&nbsp;&nbsp;</span><span class="count">私藏</span></a>')

			$('.content-text').eq(0).children('.content-text1').eq(0).children('.part2').append('<div class="comment" style="display: none;"><textarea rows="5" cols="85" placeholder="发布新评论..."></textarea><button class="post-comment">评论</button></div>')

			$('#post-panel').hide();
			$('#post-panel textarea').val('');

		}
	});

	
	$('.part2').each(function interact(){
		// 点赞

		var likeBtn = $(this).children('a').eq(0).children('span').eq(0);
		var likeCount = 0;
		likeBtn.click(function(){
		if (likeCount%2 == 0) {
			$(this).css('color','#59c715');
			$(this).siblings('span').text('1');
			$(this).siblings('span').css('color','#59c715');
			likeCount++;
		} else {
			$(this).css('color','#c0cbd9');
			$(this).siblings('span').text('0');
			$(this).siblings('span').css('color','#c0cbd9');
			likeCount++;
		}
	})

		// 评论
		var commentBtn = $(this).children('a').eq(1).children('span').eq(0);
		var commentClick = 0;
		commentBtn.click(function(){
		if (commentClick%2 == 0) {
			$(this).parent('a').siblings('.comment').show();
			commentClick++;

		} else {
			$('#comment').hide();
			$(this).parent('a').siblings('.comment').hide();
			commentClick++;
		}
	})
        
		var commentCount = 0;
		$(this).children('.comment').children('.post-comment').click(function(){
		var commentContent = $(this).siblings('textarea').val();
		if (commentContent==='') {
			alert('评论内容不能为空');
		} else {
			$('<span></span>').insertAfter($(this));
			$(this).siblings('span').css({'display':'block',height:'30px','line-height':'30px'});
			$(this).siblings('span').eq(0).text(commentContent);
			commentCount++;
			$(this).parent('.comment').siblings('a').eq(1).children('span').eq(1).text(commentCount);
			$(this).siblings('textarea').val('');
		}
	})

		// 私藏
		// var collectBtn = $('.part2 a').eq(2).children('span').eq(0);
		var collectBtn = $(this).children('a').eq(2).children('span').eq(0);
		var collectCount = 0;
		collectBtn.click(function(){
		if (collectCount%2 == 0) {
			$(this).css('color','#59c715');
			$(this).siblings('span').css('color','#59c715');
			collectCount++;
		} else {
			$(this).css('color','#c0cbd9');
			$(this).siblings('span').css('color','#c0cbd9');
			collectCount++;
		}
	})
	})

})