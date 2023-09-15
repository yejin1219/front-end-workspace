import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = ({text, click}) => {
  return <button onClick={click}>{text}</button>;
};

// props 의 타입을 지정해주는 역할 
Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
};


const Counter= () => {
  const [counter, setCounter] = useState(0);
  

  const plus = () =>{
    setCounter(counter+1)
   };

   const minus = () =>{
    setCounter( counter-1)
   };

   console.log("always~");

   useEffect(() => {
      console.log("userEffect~~"); // [] 배열이 비어있는 경우 콘솔창에 userEffect~~한번만 찍히고 더이상 찍히지 않음 

   },[]);

  useEffect(() => {
       console.log("counter change~"); //[] 배열안에는 변하는 값, 데이터가 변할 때마다 뭘하고 싶을 때 사용
                                        // ex. 댓글 달때마다 알림이 뜨게 할 경우 
  }, [counter]); 

  return ( 
      <div>
         <h1 style={{backgroundColor: "pink", color: "skyblue"}}>Total Clicks : {counter}</h1>  
         <Button text="+1" click={plus}/>   {/*props타입을 지정해주면 <Button text={plus} click="+1"/>이렇게 바꿧을 경우 props 타입이 맞지 않아 오류남*/}  
         <Button text="-1" click={minus}/>
        {/*<button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>*/}
          </div>
     );
  
};

export default Counter;
