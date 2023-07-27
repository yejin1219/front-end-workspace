//1. Content 설정
// 1) html()
console.log($('#content1').html());

// #content2에 #content1의 내용을 대입
$('#content2').html($('#content1').html());

// #content1의 a태그 속성 href에 https://naver.com 대입
$('#content1 a').attr('href','https://naver.com');
// 속성값 수정 attr, prop -> 리턴값의 차이 

// #content2의 a태그 속성에도 href에 https://naver.com 대입
$('#content2 ').find('a').prop('href','https://naver.com');

// content클래스 중 첫번째 것만 가져옴
console.log($('.content').html());
// 수정 할 때는 전체 다 수정함!!
$('.content').html('vvvvvvvv');
$('.content').html(function(index,content){
    console.log(index,content);
    return `<h4>인덱스 : ${index}, 내용 : ${content}</h4>`;
});


// 2) text() : 텍스트만 넣어줌(태그 포함x) -->.html()과 다른점 !!!!!
$('#content4').text($('#content3').text());
$('#content4').text('<strong>Hello~</strong>'); //--> strong을 태그로 인식못함! 텍스트로 인식!!

console.log($('.content2').text()); // text() 테스트 1text() 테스트 2text() 테스트 3
$('.content2').text(function(index,content){
      console.log(index,content);
      return `<h4>인덱스 : ${index}, 내용 : ${content}</h4>`;
});

// 2. 요소 추가
// 1) 자바스크립트와 제이쿼리
const p = document.createElement('p');
p.innerHTML = '자바스크립트 추가'; //innerHTML는 태그도 같이 인식해서 추가 해줌
document.querySelector('#area1').appendChild(p);
//-----------------------------------------------------------------
const p2 = $('<p>').text('제이쿼리로 추가');
$('#area1').append(p2);

//2) 요소 추가 1
//a 옆에 자식요소로 추가됨
$('#add1').append('<span>B</span>');
$('#add2').prepend('<span>B</span>');
// 형제요소로 뒤에 추가 
$('#add3').after('<spad3n>B</span>'); //
// 형제요소로 앞에 추가 
$('#add4').before('<span>B</span>');

//3) 요소 추가 2
$('<span>B</span>').appendTo('#add5');
$('<span>B</span>').prependTo('#add6');
$('<span>B</span>').insertAfter('#add7');
$('<span>B</span>').insertBefore('#add8');

//3. 요소 복제
//  hover 이벤트에는 mouseenter와 mouseleave 출력
$('#item1').hover(
    // (event) => { //mouseenter
    //     console.log(event.type);
    //     $(event.target).addClass('bg-hotpink');
    //     // event.target :자신에게 접속
    // },
    // (event) => { //mouseleave
    //     console.log(event.type);
    //     $(event.target).removeClass('bg-hotpink');
    // }

    //toggleClass로 한번에 처리
    (event) => {
        $(event.target).toggleClass('bg-hotpink');
    }



);

// 버튼 클릭 시 요소 복제
$('#btn1').click(function(){
   const item =  $('#item1').clone(true);// true를 명시해야 위에서 걸었던 hover이벤트까지 같이 복제됨
   $('#clone-result').append(item);
});

//요소 제거
$('#item2').hover(
    (event)=>{
        $(event.target).toggleClass('bg-hotpink');
    }

)
// 1) remove
// remove버튼 클릭시 #item2를 remove로 제거 후 #remove-result에 리턴받은 값 출력
$('#remove').click(function(){
       const remove = $('#item2').remove();
       $('#remove-result').html(remove);
                        //.append도 가능    
});
//2) detach
// detach 버튼 클릭 시 #item2를 detach로 제거 후 #remove-result에 리턴받은 값 출력
$('#detach').click(function(){
      const detach = $('#item2').detach();
      $('#remove-result').html(detach);
});

//3) empty
//empty 버튼 클릭 시 #remove-test를 비워버림
$('#empty').click(function(){
    $('#remove-test').empty();
});


// 5. 배열
const array = [
    {name : '구글', link: 'https://google.com'},
    {name : '네이버', link: 'https://naver.com'},
    {name : '다음', link: 'https://daum.net'}
]


//자바스크립트
array.forEach(function(element, index, origin){
    console.log(element, index, origin);
})

//제이쿼리
$.each(array,function(index,element){
   console.log(index,element);
});
$(array).each(function(index,element){
    console.log(index,element);
});

// #each-test에 배열의 값들을 
//a링크고 href에는 link, content부분에는 name을 사용해서 출력!
let result;
$(array).each(function(index,element){
    console.log(index,element);

    // 1.append쓸 경우 $('#each-test').append(`<a href="${element.link}">${element.name}</a><br>`);
   result += `<a href="${element.link}"> ${element.name}</a><br>`;

});
$('#each-test').html(result);
