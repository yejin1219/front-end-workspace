// open
function btn1(){
    // window.open("https://naver.com"); -->탭으로 네이버창 뜸
    window.open("https://naver.com","네이버", "width=500, height=600, resizable=no, location=no, menubar=no, scrollbars=no, status=no, toolbar=no");
    // 새창으로 네이버 뜸
}

// window.setTimeout
function btn2(){
    // window.open 에서 window 생략 가능
    let newWindow = open();
    newWindow.alert('3초 후에 페이지 종료!');
    setTimeout(() => {newWindow.close();}, 3000);
    // 3초는 3000으로 명시
}

//window.setInterval()
function btn3(){
    let second = 0;
    setInterval(() => {
        console.log(`${++second}초!`)
    }, 1000);

}

function btn4(){
    for(const key in location){
        console.log(`key:${key}, value:${location[key]}`);
    }
}

// 4. navigator 객체
function btn5(){
    for(const key in navigator){
        console.log(`key:${key}, value:${navigator[key]}`);
    }
}

//5. screen 객체
function btn6(){
    for(const key in screen){
        console.log(`key:${key}, value:${screen[key]}`);
    }
}