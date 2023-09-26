import { connect, useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../store/modules/counter";

const Button = ({text, click}) => {
  return <button onClick={click}>{text}</button>;
};


const Counter= () => {
  const counter = useSelector((state)=> state.counter.counter);
  const dispatch = useDispatch();
  return ( 
      <div>
         <h1 >Total Clicks : {counter}</h1>  
         <Button text="+1" click={()=> dispatch(increase())} />  
         <Button text="-1" click={()=> dispatch(decrease())} />
          </div>
     );
  
};

// const mapStateToProps = (state)=>({
//    counter: state.counter.counter,
// });
// const mapDispatchToProps = (dispatch)=>({


  
  
//   increase: ()=>{
//     console.log("increase");
//     dispatch(increase());
//   },
//   decrease:()=>{
//     console.log("decrease");
//     dispatch(decrease());
//   }
// });

                        //컴포넌트가 액션한테 보낼때 :Dispatch
//connect(mapStateToProps, mapDispatchToProps)(연동할 컴포넌트)
export default Counter;
