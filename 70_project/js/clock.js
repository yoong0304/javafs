
/* 
    문서의 DOM내용을 읽은 후 함수를 실행

    자바스크립트
    document.addEventListener('DOMContentLoaded', function(){};

    제이쿼리
    $(document).ready(){};
    $(function(){});

    순수 자바스크립트 = 바닐라 스크립트
*/

// 문서의 DOM내용을 읽은 후 함수를 실행
document.addEventListener('DOMContentLoaded', function () {

    let yy = document.querySelector('.yy');
    let mo = document.querySelector('.mm');
    let dd = document.querySelector('.dd');
    let we = document.querySelector('.we');
    let hh = document.querySelector('.hh');
    let mi = document.querySelector('.mi');
    let sss = document.querySelector('.ss');

    setInterval(timer, 1000);
    function timer() {
        // 날짜와 시간 객체 생성
        let d = new Date();
        // Tue May 23 2023 16:16:50 GMT+0900 (한국 표준시)

        // 년(yyyy)
        yy.innerHTML = d.getFullYear() + '년';

        // 월(mm): 0(1월) ~ 11(12월)
        mo.innerHTML = (d.getMonth() + 1) + '월';

        // 일(dd)
        dd.innerHTML = d.getDate() + '일';

        // 요일(week): 0(일) ~ 6(토)
        // if를 사용하여 요일을 일요일 ~ 토요일까지 문자열로 표시하기
        let week = d.getDay();
        if (week === 0) {
            week = '일요일<br>';
        } else if (week === 1) {
            week = '월요일<br>';
        } else if (week === 2) {
            week = '화요일<br>';
        } else if (week === 3) {
            week = '수요일<br>';
        } else if (week === 4) {
            week = '목요일<br>';
        } else if (week === 5) {
            week = '금요일<br>';
        } else {
            week = '토요일<br>';
        }
        we.innerHTML = week;

        // // 시(hh)
        // // 오전과 오후를 구분하여 12시간제로 표시하기
        let time = d.getHours();
        if (time === 24) {
            time -= 12;
            time = '오전' + time;
        } else if (time === 12) {
            time = '오후' + time;
        } else if (time > 12) {
            time -= 12;
            if (time < 10) {
                time = '0' + time;
            }
            time = '오후' + time;
        } else {
            if (time < 10) {
                time = '0' + time;
            }
            time = '오전' + time;
        }
        hh.innerHTML = time + '시';

        // 분(mm)
        let mm = d.getMinutes();
        if (mm < 10) {
            mm = '0' + mm;
        }
        mi.innerHTML = mm + '분';

        // 초(ss)
        ss = d.getSeconds();
        if (ss < 10) {
            ss = '0' + ss;
        }
        sss.innerHTML = ss + '초';

    };

});
