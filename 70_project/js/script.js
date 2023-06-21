$(function(){
    // 프로그래스바
    let progressState = 0
    $(window).scroll(function(){
        if ($(this).scrollTop() >= 1300) {
            if (progressState === 0) {
                pgbar(90,0);
                pgbar(80,1);
                pgbar(65,2);
                progressState = 1;
            } else {
                return;
            }
        } else {
            progressState = 0;
        }
    })

    function pgbar(maxWidth,idx) {
        const elem = $(".progress div");
        let w = 0;
        const timer = setInterval(bar, 30);

        function bar() {
            if (w >= maxWidth) {
                clearInterval(timer);
            } else {
                w++;
                elem.eq(idx).css({ width: w + "%" });
                elem.eq(idx).text(w + "%");
            }
        }
    }

    // 카운터
    const elem = $('#counter li');
        const q = elem.eq(0).find('span').text();
        const w = elem.eq(1).find('span').text();
        const e = elem.eq(2).find('span').text();
        const r = elem.eq(3).find('span').text();

        let countState = 0;
        $(window).scroll(function () {
            // console.log($(window).scrollTop()); // 현재 스크롤의 탑값 확인
            // 윈도우 스크롤이 150이상이면 
            if ($(this).scrollTop() >= 1500) {
                if (countState === 0) {
                    move(q,0);
                    move(w,1);
                    move(e,2);
                    move(r,3);
                    countState = 1;
                } else {
                    return;
                }
            } else {
                countState = 0;
            }
        });

        function move(a, b) {
            let num = 0;
            // counter 함수를 0.1초마다 실행
            const timer = setInterval(counter, 100);
            function counter() {
                if (num <= a) {
                    elem.eq(b).find('span').text(`${num}+`);
                    num++;
                } else {
                    clearInterval(timer);
                }
            }
        }
})
