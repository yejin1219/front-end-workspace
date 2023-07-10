# HTML 기초

 ## 웹 브라우저 : 인터넷 화면을 보여주는 프로그램
 - Chrome, Brave, Fire Fox, Safari, Opera, Edge..
 - 사용자가 사용하는 브라우저는 정해져 있지 않으며 브라우저마다 화면이 다르게 출력이 될 수 있으니 브라우저마다 테스트를 하며 수정
   => 크로스 브라우징(모든 브라우저를 통일하게끔 만드는 것)
 
 ## 웹 페이지 개발 방법
 - 구조(Structure) : HTML
 - 표현(Presntation) : CSS
 - 동작(Behavior) : JavaScript - 프

 ## HTML(Hyper Text Markup Language) : 웹 페이지를 작성하는 언어
 - 웹 문서 / HTML 문서 / HTML 페이지

 ## 웹 페이지 생성
 - 저장 시 확장자는 .html 또는 .htm
 - 처음 보여지는 화면의 파일 이름은 "index.html"

 ## mian pge, sub page
 - main page : index.html
 - sub page : index.html 제외 파일.html 파일들

 ## HTNL 내용 작성
 1. 이해하기 쉽게 
 2. 논리적으로
 3. 의미있게
 4. 구조적으로 
 5. 콘텐츠는 "제목 + 내용"으로 작성
 6. 디자인에는 없는 요소들도 내용 전달에 필요하면 추가 작성
 7. 중요도, 선호도, 사용빈도가 높은 순으로
 
 ## 코딩 순서
 1. 내용 작성
 2. 마크업 : 용도나 목적에 맞는 태그 작성
 3. 콘텐츠 블럭
 4. CSS 초기화
 5. CSS 작성
 6. 스크립트 적용
 7. 프로그래밍 적용
 8. 표준/접근성 검사 
 9. 수정/보안

 ## 태그
```
<태그 속성="값"></태그>
```

1. "<" 와 ">" 사이에 명령어(tag, element) 작성
2. 시작태그와 종료태그로 구성
3. 종료태그가 없는 태그(br, img, hr, meta, input)
4. 태그는 중첩 가능하며 종료태그는 나중에 작성한 태그먼저 작성 
5. 가급적 모든 태그와 속성은 소문자로 작성

## 속성의 특징
1. 태그와 속성, 속성과 속성은 공백으로 구분
```html
<a href="#"></a>
```

2. 여러 개의 속성을 사용할 수 있다.
```html
<img src="/" width="100"> src이라는 속성 과 width라는 속성
```

3. 하나의 속성에는 값을 한개만 지정가능하다.
```html
<img src="/" width="100,200"> <!--작성 불가 -->
```

4. 속성값은 원래의 이름이 한글인 경우가 아니면 사용이 불가능하다.
```html
<img src="/" with="삼백"><!--작성불가-->
<meta name="keywords" content="영화, 한국영화, 외국영화"><!--예외적인 경우-->
```

## HTML 기본 문서 구조
```html
<!DOCTYPE html> <!--문서 형식(유일하게 태그가 안 붙어있음)-->
<html lang="ko"><!--lang이라는 속성: 기본 언어 설정-->
    <head></head>
    <body></body>
</html>
```

- !DOCTYPE html : 현재 문서가 HTML5 언어로 작성된 웹 문서 
- html : 웹 문서의 시작과 끝
- head : 웹 문서의 정보
- body : 실제 웹 브라우저에 나타날 내용 

## head에 많이 쓰는 태그 
1. title : 문서의 제목
```html
<head>
  <title>문서제목</title>
</head>
```
2. meta: 문서의 속성 

## meta 태그
```html
<meta charset="UTF-8"> <!-- 문자 세트 지정-->
<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- 모바일 기기(내 기기에 따라 화면을 조정 하는 것)-->
<meta http-equiv="X-UA-Compatible" content+"ie=edge"><!--인터넷 익스프롤러 브라우저-->

<!--검색 엔진-->
<meta name = "kyebords" content="키워드1, 키워드2">
<meta name = "description" content="문서 설명">
<meta name = "author" content="문서 작성자">
```
- keywords 를 사용함으로 옛날에는 검색되게끔 했지만 과한 키워드 추가로 현재는 검색 엔진에서 사용하지 않는다.(구글은 가능)