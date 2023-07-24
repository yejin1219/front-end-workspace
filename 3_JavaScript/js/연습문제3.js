// console.log(Math.floor(Math.random()*3) + 1);
// 1~3 까지 랜덤 숫자!

const click = document.querySelector(".click");
const imageList = document.querySelectorAll(".main-image img");
const restart = document.querySelector(".restart");
const result = document.querySelector(".main-result");
const span = document.querySelector('.click span');

let count = 0;

click.addEventListener('click', randomHandler);

    
   
    function randomHandler(){
    span.innerHTML = ++count;

        const random=[Math.floor(Math.random()*3)+1, Math.floor(Math.random()*3)+1,Math.floor(Math.random()*3)+1];
        for(let i=0; i<imageList.length; i++){
            imageList[i].setAttribute ('src', `../resources/spy${random[i]}.jpg`);
        }
        if(random[0]===random[1]&& random[1]==random[2]){
            result.innerHTML = `성공`;
            click.setAttribute("disabled", "disabled"); 
            //여기서 disabled할때 값을 명시해줘야 함
        }
    }


restart.addEventListener('click', restartHandler);
function restartHandler(){
   span.innerHTML = "";
   result.innerHTML = "";
   for(let i=0; i<imageList.length; i++){
    imageList[i].setAttribute ('src', `../resources/spy${1}.jpg`);
    click.setAttribute("disabled", "abled");
  }
  
}

restart.addEventListener('click', restartHandler);
function restartHandler(){
    count=0;
   span.innerHTML = '';
   result.innerHTML = '';
   for(let i=0; i<imageList.length; i++){
    imageList[i].setAttribute ('src', `../resources/spy1.jpg`);
    click.removeAttribute("disabled");
  }
  
}