let maxScrollValue ;
const progressBar = document.querySelector('.progress-bar');

function resizeHandler(){
    // 전체스크롤의 범위  = 바디 전체 높이 - 윈도우 현재 창의 높이
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
}
window.addEventListener('scroll', function(){
    // console.log((window.scrollY / maxScrollValue)*100);
    // console.log(window.pageYOffset); // deprecated
    progressBar.style.width = (window.scrollY/maxScrollValue)*100 + '%'; 
    
});

window.addEventListener('resize', resizeHandler);
resizeHandler();
