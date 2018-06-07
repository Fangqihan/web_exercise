


// 点赞和收藏，重复点赞默认为取消
$('.content-text').on('click','.a1',function () {
    var num = $(this).children('.num').text();
     $(this).children('.num').text(parseInt(num)+1);
     flag = false
});


comment_flag = true
// 评论按钮标志位，用于评论框的显示和关闭
$('.content-text').on('click','.a2',function () {
    // 切换显示评论框
    if(comment_flag){
    $(this).parent().next().removeClass('hide');
        comment_flag=false
    }
    else if (!comment_flag){
        $(this).parent().next().addClass('hide');
        comment_flag=true
    }
});


// 添加用户评论内容,采用时间委派
$('.content-text').on('click','.comment_sumbit',function () {
 var comment_data = $(this).prev().prev().val();
    // 评论数递增
    if(comment_data.trim()){
        var html_str = '<div class="comment_item"><a><span class="comment_user">'+'user'+'</span></a><span>'+comment_data+'</span></div>';
        $(this).parent().prev().append(html_str);
        $(this).prev().prev().val('');
        var comment_num = $(this).parent().parent().prev().find('.comment_num').text();
        $(this).parent().parent().prev().find('.comment_num').text(parseInt(comment_num)+1)
    }
});


// 切换页面内容 (实现在 最热 和 发现 页面切换)
$('.content_nav').click(function () {
    var id_name = $(this).attr('id');
    $(this).addClass('active').parent().siblings().children().removeClass('active');
    $('.'+id_name).removeClass('hide').siblings().addClass('hide')
});


// 发布文章功能
$('#post_btn').click(function () {
    $(this).next().show();return false
});


// 取消按钮隐藏
$('.btn_cancel').click(function () {
    $(this).parent().hide()
});


// 发布按钮
$('.btn_publish').click(function () {
    var publish_data = $(this).prev().prev().val();
    if(publish_data.trim()){
        var html_str = '<div class="content-text1">\n' +
            '\n' +
            '    <!--内容显示区-->\n' +
            '    <div class="part1">\n' +
            '      <a href="#">' + publish_data + '</a>\n' +
            '      <a href="#"></a>\n' +
            '    </div>\n' +
            '\n' +
            '    <!--点赞收藏和评论按钮-->\n' +
            '    <div class="part2">\n' +
            '      <a class="down a1">\n' +
            '          <span class="glyphicon glyphicon-thumbs-up"></span>\n' +
            '          <span class="up_num num">0</span>\n' +
            '      </a>\n' +
            '      <a class="down a2"><span class="glyphicon glyphicon-comment"></span><span class="comment_num num">0</span></a>\n' +
            '      <a class="down a1"><span class="glyphicon glyphicon-heart"></span><span class="favor_num num">0</span></a>\n' +
            '    </div>\n' +
            '\n' +
            '    <!--用户评论-->\n' +
            '    <div class="comment hide">\n' +
            '        <!--评论列表-->\n' +
            '        <div class="comment_list">\n' +
            '            <h5 style="color: #00AA88">最新评论</h5>\n' +
            '        </div>\n' +
            '\n' +
            '        <!-- 发布评论 -->\n' +
            '        <div class="user_commnet">\n' +
            '            <textarea rows="2" cols="85" placeholder="发布新评论..." style="font-size: 12px" class="comment_area"></textarea><br>\n' +
            '            <button class="btn-success btn comment_sumbit">评论</button>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '</div>';

        // 注意，发布到当前处于激活的页面（例如 最热 页面）
        $('.content-text[class!=hide]').append(html_str)
    }
    $(this).prev().prev().val('');
    $(this).parent().hide()
});


