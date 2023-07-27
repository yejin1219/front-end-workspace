// 1.이벤트 연결
//1) on, off
/*
$('#area1').on('mouseenter',function(event){

   //마우스 올라갔을 때
   // 배경색상 : beige, 텍스트는:마우스가 올라감
   $(event.target).css('background-color','beige').text('마우스가 올라감');
});

//mouseleave 함수
// 배경색상 : hotpink, 텍스트는 : 마우스가 내려감
$('#area1').on('mouseleave', function(event){
    $(event.target).css('background-color','hotpink').text('마우스가 내려감');
})
*/

/*
$('#area1').on('mouseenter mouseleave', function(event){
     console.log(event.type);
     if(event.type ==='mouseenter'){
        $('#area1').on('mouseenter',function(event){

            //마우스 올라갔을 때
            // 배경색상 : beige, 텍스트는:마우스가 올라감
            $(event.target).css('background-color','beige').text('마우스가 올라감');
         });

     }else if(event.type ==='mouseleave'){
        $('#area1').on('mouseleave', function(event){
            $(event.target).css('background-color','hotpink').text('마우스가 내려감');
        })
     }
});
*/


/*
$('#area1').on('click', function(event){
   // 배경색은 white, 텍스트는 ''
   console.log(event.type);
      $(event.target).css('background-color','white').text('').off('mouseenter mouseleave');
    //   .off : 이벤트 삭제 ()괄호 안에 이벤트 2개도 들어갈 수 있음 
});
*/


// 위 3가지 방법을 하나로 쓰기 : on메소드 
$('#area1').on({
    mouseenter : function(event){
        $(event.target).css('background-color','beige').text('마우스가 올라감');
    },
    mouseleave : function(event){
        $(event.target).css('background-color','hotpink').text('마우스가 내려감');
    },
    click : function(event){
        $(event.target).css('background-color','white').text('').off('mouseenter mouseleave');
    } //   .off : 이벤트 삭제 ()괄호 안에 이벤트 2개도 들어갈 수 있음 
});

// 2) one
$('#area2').one('click', function(){
    alert('실행!'); //
});

//2. 키보드 이벤트
//1) keydown, keypress, keyup 
// 콘솔에 키다운이 먼저 입력되고 키프레스 그다음 키업
// keydown : 키보드가 눌려질 때


$('#textarea1').keydown(function(e){
    console.log(`keydown / e.key : ${e.key}, e.keycode : ${e.keyCode}`);
});

//keypress :글자가 입력될때 
$('#textarea1').keypress(function(e){
    console.log(`keypress / e.key : ${e.key}, e.keycode : ${e.keyCode}`);
});

//keyup: 키보드가 떼어질 때
$('#textarea1').keyup(function(e){
    console.log(`keyup / e.key : ${e.key}, e.keycode : ${e.keyCode}`);
});


// -> 3가지를 on 메소드로 한번에!
$('#textarea1').on({
    keydown : (function(e){
        console.log(`keydown / e.key : ${e.key}, e.keycode : ${e.keyCode}`);

    }),

    keypress : (function(e){
        console.log(`keypress / e.key : ${e.key}, e.keycode : ${e.keyCode}`);
    }),
    keyup : (function(e){
        console.log(`keyup / e.key : ${e.key}, e.keycode : ${e.keyCode}`);
    })

});

// substring
console.log("".substring(0,1)); //H
let count =0;
$('#textarea2').on('keyup',function(e){

    // keydown: (function(e){
    //     count++
    //     if(e.target.value.lenght()<=50){
    //         console.log(e.target.value.substring(0,49));
    //     }else if(e.target.value.lenght()>50){

    //     }
    // })
    console.log($(e.target).val().length);
  
    const currentLength = $(e.target).val().length;
    $('#counter').text(currentLength);
    const maxLength = parseInt($('#maxLength').text());
       /*
       console.log(typeof parseInt(maxLength));
          //maxLength타입을 보면 string 으로 나옴
          //parseInt 로 타입을 number로 바꿔줌
       */ 
     
          if(currentLength > maxLength){
            // 글자 수 제한 substring
            $(e.target).val().substring(0,maxLength); // 50글자만 제한 ㅎ률ㅇ
            $(e.target).val($(e.target).val().substring(0,maxLength)); //textarea에 50글자만 넣겠다..!

          }else{
            // counter가 올라가야함
            $('#counter').text(currentLength);
          }

    

});