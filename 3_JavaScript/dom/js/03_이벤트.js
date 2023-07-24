// window.addEventListener('DOMContentLoaded', function(){
//     // load : 모든 구조가 끝나고 실행하는 이벤트,,
//     //  돔구조만 바로 실행되는 이벤트 그래서 load보다 빠름 
// const h1 = document.querySelector('h1');
// console.log(h1);

// });


const h1 = document.querySelector('h1');

h1.addEventListener('click', function(){
      h1.style.backgroundColor = "skyblue";

});
h1.addEventListener('mouseenter', function(){
    // 마우스가 올라가기만해도 배경색 바뀌는 이벤트 
    h1.style.backgroundColor = "skyblue";

});

// 1. 첫번째 방식
// const img1 = document.querySelector('.container img:nth-child(1)');
// const img2 = document.querySelector('.container img:nth-child(2)');
// const img3 = document.querySelector('.container img:nth-child(3)');
// const img4 = document.querySelector('.container img:nth-child(4)');
// const img5 = document.querySelector('.container img:nth-child(5)');

// img1.addEventListener('click', function(){
//     img1.style.visibility = 'hidden';
//     img1.style.display = 'none';
    // visibility 와 display 차이
// })

//2 . 두번째 방식
// const imgList = document.querySelectorAll('.container img');

// imgList[0].addEventListener('click', function(){
//     imgList[0].style.visibility = 'hidden';
// })
// imgList[1].addEventListener('click', function(){
//     imgList[1].style.visibility = 'hidden';
// })
// imgList[2].addEventListener('click', function(){
//     imgList[2].style.visibility = 'hidden';
// })
// imgList[3].addEventListener('click', function(){
//     imgList[3].style.visibility = 'hidden';
// })
// imgList[4].addEventListener('click', function(){
//     imgList[4].style.visibility = 'hidden';
// })
// ↓ for문
// function removeHandler(){
//     console.log(this);
//     this.style.visibility = 'hidden';
// }
// for(let i = 0; i < imgList.length; i++){
//     imgList[i].addEventListener('click', removeHandler);
       
// }

//3. 3번째 방식
const container = document.querySelector('.container ');
function removeHandler(e){
    console.log(e.currentTarget);
    if(e.target !== container){ //이 조건을 넣어야 배경이 선택되도 사진이 안 없어짐
        e.target.style.display = 'none';
    }
    
}
container.addEventListener('click', removeHandler);
