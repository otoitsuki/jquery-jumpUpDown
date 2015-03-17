// --------------------------------------
//
// jQuery 上下跳區塊
// 修改自 http://webdesignerwall.com/tutorials/scrollto-posts-with-jquery
// DEMO: http://jsfiddle.net/wwod6950/4/
// 
//
// 使用方法：修改article為要跳躍的區塊類別名稱，上下按鈕帶".js-jump-next,.js-jump-prev"即可
// --------------------------------------

$(function() {

    // Closure 
    function scrolling(direction) {

        var scroll,
            positions = [], // 建立postions這個array
            here = $(window).scrollTop(), // 目前位置
            article = $('.post'); // 每個要移動的區塊的類別名稱

        article.each(function() { // 計算出每個article的.offset.top，並塞到position裡面去
            positions.push(parseInt($(this).offset().top,10));
        });

        for(i = 0; i < positions.length; i++) {
            if (direction == 'next' && positions[i] > here) { 
                scroll = positions[i]; // 如果按下的話，找出第一個大於目前位置的article
                break; 
            }
            if (direction == 'prev' && i > 0 && positions[i] >= here) { 
                scroll = positions[i-1]; // 如果按上的話，找出第一個大於目前位置的article，回推一個就是上一篇
                break;
            }
        }

        if (scroll) {
            $('html,body').animate({ scrollTop: scroll }, 600);
        }

    }

    $(".js-jump-prev").click(function(event) { // 按鈕要帶的class
        event.preventDefault();
        return scrolling("prev");  
    });
    $(".js-jump-next").click(function(event) { // 按鈕要帶的class
        event.preventDefault();
        return scrolling("next");  
    });

});