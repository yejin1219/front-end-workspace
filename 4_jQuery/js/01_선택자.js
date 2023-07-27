$(function(){
    // 1. 태그 선택자 //
    // 자바스크립트 방식
    const pList = document.querySelectorAll('p');
    for(p of pList){
        p.style.color = "white";
        p.style.backgroundColor = "tomato";
    }

    // 제이쿼리 방식
    $('h5').css('color', 'skyblue').css('backgroundColor', 'purple');


    // 2. 아이디 선택자 // 
    // 자바스크립트 방식
    document.querySelector('#id1').style.color = 'crimson';

    // 제이쿼리 방식
    $('#id2').css('color','green');

    // 3. 클래스 선택자 //
    // 자바스크립트 방식
    const items = document.querySelectorAll('.item');
    for( tem of items){
        tem.style.backgroundColor = 'yellow';
    }
    
    // 제이쿼리 방식(여러가지 스타일 넣을 때)
    $('.item').css({
         'color' : 'white',
         'background-color' : 'indigo'
    });


    // 4. 자식 선택자와 자손 선택자 //
    // 1) 자식 선택자 : 부모 > 자식
    $('div > h3').css('color','violet');
    $('div > ul > li').css('color','green');
    $('div > ul > li > h3').css('color', 'indianred');

    // 2) 자손 선택자: 부모 자손
    $('div h3').css('background-color','khaki');
    $('div .ch').css('background-color','lime');

    // 5. 속성 선택자 //
    $('#div1 input[class]').css
    ('background-color','turquoise');
    $('#div1 input[type=text]').val('ChangeValue');
    // 값을 넣을 수 있음
    $('#div1 input[class~=test1]').val('123456789');
    $('#div1 input[type^=ra]').prop('checked', true);
    // prop :속성, property 의 약자
    $('#div1 input[type$=box]').prop('checked', true);
    $('#div1 input[class*=st3]').css({'width' : '100px', 'height':'100px'}).val('10000');

    // 6. 입력 양식 선택자 //
    $('#div2 :text').css('background-color','pink');
    $('#div2 :button').val('버튼').css({'width':'100px', 'height':'100px'});
    $('#div2 :checkbox').css({'width':'50px', 'height':'50px'}).prop('checked', true);
    $('#div2 :file').css('background-color', 'yellow');

    // 7. 입력 양식 상태에 대한 선택자 //
    // 1) input 태그 중 활성화된 객체 선택 - 배경색상: lavender
    $('#div3 :enabled').css('background-color','lavender');
    // 2) input 태그 중 비활성화된 객체 선택 - 배경색상 : lightcyan
    $('#div3 :disabled').css('background-color','lightcyan');
    // 3) input 태그 중 체크된 객체 선택 - 사이즈 : 3opx X 3opx 
    $('#div3 :checked').css({'width':'30px', 'height':'30px'});
    


     // 4) checkbox에 change 이벤트 핸들러 등록 //
    //  console.log($('#div3 :checkbox'));
     $('#div3 input:checkbox').change(function() {
        // alert("!");
        const checkbox = $(this);
        console.log(checkbox.attr('checked'));
        // attr : attribute 약자 , checked 또는 undefined 로 출력
        console.log(checkbox.prop('checked'));
        // true, false

        //체크가 되면 사이즈를 5opx X 5opx
        if(checkbox.prop('checked')){
            checkbox.css({'width':'50px', 'height':'50px'});
        }else{ // 체크가 안되면 사이즈를 15px X 15px
            checkbox.css({'width':'15px', 'height':'15px'});
        }

        
     });
     //5) select에 change 이벤트 핸들러 등록
     $('#national').change(function(){
        // console.log($('#div3 div select'));

        // option태그 중 선택된 값이 각각 result1에는 국가명이 들어가고
        const value = $('#national option:selected').val();
        console.log(value);
        $('#result1').val(value);
     });

     // result2에는 취미가 들어가게
     $('#hobby').change(function(){
        const value = $('#hobby option:selected').val();
        $('#result2').val(value);
     });
     
     //8. attr()와 prop()
     let cb1 = $('#cb1');
     let cb2 = $('#cb2');

     // attr() 로 checked 값 읽어오기
     console.log(`cb1.attr('checked') : ${cb1.attr('checked')}`);
     console.log(`cb2.attr('checked') : ${cb2.attr('checked')}`);

     //prop()로 checked 값 읽어오기
     console.log(`cb1.prop('checked') : ${cb1.prop('checked')}`);
     console.log(`cb2.prop('checked') : ${cb2.prop('checked')}`);

     // atter()와 prop()로 값 설정하기
     cb2.attr('checked','checked');
     cb1.prop('checked', false);
      

});





