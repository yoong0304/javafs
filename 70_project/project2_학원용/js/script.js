// 문서가 준비되면 함수 실행
$(function(){
    $('#fullpage').fullpage({
        sectionsColor: ['#FF5F45', '#0798EC', '#FC6C7C', '#FEC401'],
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        menu: '#menu',
        navigation: true,
        navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        showActiveTooltip: true,
        // 현재 페이지를 떠날 때
        onLeave: function(idx) {
            if(idx == 2) {
                $('.section3 p').animate({opacity:1, left:'50%'},700);
            }
        },
        // 현재 페이지에 도착한 이후
        afterLoad: function(e, idx) {
            if(idx == 2) {
                $('.section3 p').animate({opacity:0, left:-500});
            }
        }
    });
});
