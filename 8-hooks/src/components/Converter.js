import { useState, useEffect } from "react";


const Converter = () => {
     
      const [number, setNumber] = useState("");
      const [bool, setBool] = useState(true);
      const [text, setText] = useState("Invert");

      const change = (event) =>{
         console.log(event.target.value);
         setNumber(event.target.value);
      }
     
      const reset = ()=>{
           setNumber("");
      }

      const invert =(e)=>{
           
            setBool(!bool);
            reset();
          
      }

     useEffect(() => {
        if(bool) setText("Invert");
        else setText("Turn Back");
     },[bool]);
        
    return (

       <>
         <h1>Time Converter</h1>
         <div>
            <label>Minutes</label> 
            <input type="number" placeholder="Minutes" disabled={!bool} onChange={change} value={ bool ? number : Math.floor(number * 60)}/>
         </div>
         <div>
            <label>Hours</label> 
            <input type="number" placeholder="Hours" disabled={bool} value= {bool ? Math.floor(number/60) : number } onChange={change}/>   
         </div>
        

          <Btn click={reset} btnText="Reset" backgroundColor="tomato"/>
          <Btn click={invert} btnText={text} backgroundColor="skyblue" />

      </>
    );


};

const Btn = ({click, btnText, backgroundColor }) => {

    return <button style={{backgroundColor, color:"white", padding: "10px 20px", border: "none", borderRadius:"10px",}} onClick={click}>{btnText}</button>;
   };
export default Converter;