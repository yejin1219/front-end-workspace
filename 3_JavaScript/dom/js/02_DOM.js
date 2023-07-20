function btn1(){
    console.log(document);
    console.log(document.head);
    console.log(document.title);
    console.log(document.body);
}

function btn2(){
    const div = document.getElementById("testId");
    console.log(div);
}


function btn3(){
  const div = document.getElementsByClassName("testClass");
 console.log(div);
//  class가 여러개 일때 배열로 출려됨
 console.log(div[0]);
//  class가 2개일땐 인덱스 값으로 각각에 접근
}

function btn4(){
    const div = document.getElementsByName("testName");
    console.log(div);
}
function btn5(){
  const div = document.getElementsByTagName("div");
  console.log(div);

}

function btn6(){
    let div = document.querySelector("#testId");
    div = document.querySelector(".testClass");
    // 클래스가 2개지만 querySelector쓰면 맨 첫번째 것만 가져옴
    console.log(div);


    let divList = document.querySelectorAll("div");
    // 모두 가져옴
    console.log(divList);
}

function btn7(){
    // div 3개 가져오기 변수명: divList
    const divList = document.querySelectorAll("div");
    console.log(divList);
    divList[0].textContent = '<span>안녕하세요</span>';
    divList[1].innerHTML = '<span>안녕하세요</span>'; //

}

function btn8(){
    // #testId인것만 가져오세요
   const div = document.querySelector("#testId");
   div.setAttribute("data-test", "테스트");
   console.log(div.getAttribute("data-test"));
   console.log(div.getAttribute("class"));
}

// 3) 스타일 조작하기
function btn9(){
    const div = document.querySelector("#testId");
    div.style.color = "orange";
    div.style.backgroundColor = "yellow";
}

function btn10(){
    const div2 = document.querySelector("#testId2");
    div2.classList.add("black");
}

function btn11(){
    const div2 = document.querySelector("#testId2");
    div2.classList.remove("black");
}
function btn12(){
    const div2 = document.querySelector("#testId2");
   const check = div2.classList.contains("black");
   console.log(check);
   if(check){
    div2.classList.remove("black");
   }else{
    div2.classList.add("black");
   }
}
function btn13(){
    const div2 = document.querySelector("#testId2");
    div2.classList.toggle("black");
}

function btn14(){

    const div2 = document.querySelector("#testId2");
    const p = document.createElement("p");
    p.innerHTML = "Lorem Ipsum";
    div2.appendChild(p);

    const input = document.createElement("input");
    input.value = "Bye~~!";
    div2.appendChild(input);

}
function btn15(){
    const div2 = document.querySelector("#testId2");
    const p = document.querySelector("p");
    // div2.removeChild(p); 부모태그를 가지고 자식을 삭제
    
    p.parentNode.removeChild(p);
    // 부모객체를 찾기 어려울 경우 나의 부모객체를 찾아서 나를 삭제시킴

}