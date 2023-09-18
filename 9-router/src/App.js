import {BrowserRouter, Routes, Route, Link, NavLink, useNavigate} from "react-router-dom";
// active 를 사용하고 싶을 땐 NavLink 아닐 땐 Link
import { useState } from "react";
import "./App.css";

const Home = ({list, deleteBeverage}) => {
  console.log(list);
  const onClick = (e) => {
    console.log(e.target.id);
    deleteBeverage(e.target.id);
  };
  return (
       
       <table border="1" style={{borderCollapse:"collapse"}}>
          <thead>
           <tr>
              <th>ID</th>
              <th>음료명</th>
              <th>설명</th>
              <th>삭제</th>
           </tr>
          </thead>
          <tbody>
            {list.map((item)=>(
              <tr key={item.id}> 
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.desc}</td>
                <td>
                  <button onClick={onClick} id={item.id}>삭제</button>
                </td>
              </tr>
            ))}
           </tbody> 
       </table>
  
       
  );
         
  
};
const Create =({addBeverage}) => {
  const navigate = useNavigate(); // 내가이동하고 싶은 경로로 설정할 수 잇음 
  const onSubmit = (e) => {
   e.preventDefault();
   const title = e.target.title.value;
   const desc = e.target.desc.value;
   addBeverage(title, desc);
   navigate("/");// 내가이동하고 싶은 경로로 설정할 수 잇음 
  };

 
 
  return (
          <form onSubmit={onSubmit}>
            <h1>Create</h1>
             <div>
              <label htmlFor="title">음료명 : </label>
             <input type="text"id="title" name="title" placeholder="음료명 입력"/>
             </div>
             <div>
             <label htmlFor="desc">설명 : </label>
             <input type="text" id="desc" name="desc" placeholder="설명 입력" /></div>
             <input type="submit" value="추가"/>
          </form>
  
  );
}
const App = () => {
  const[beverages, setBeverages] = useState([
    {id:1 , title: "여수 윤슬 헤이즐넛 콜드브루", desc:"윤슬을 형상화한 헤이즐넛 콜드브루"},
    {id:2, title: "아이스 오렌지 판타지 유스베리 티", desc:"상큼한 오렌지와 유스베리, 얼그레이 티의 조화", }
  ]);

   const [nextId, setNextId] = useState(3);
   const addBeverage = (title,desc) => {
        const newBeverage = {id:nextId,
          title, 
          desc}
          setBeverages([...beverages,newBeverage ]); //... : 기존 배열 복제 
      
        
          setNextId(nextId+1);
   };

   const deleteBeverage = (id) =>{
 
    const newList = beverages.filter((item)=>item.id !== parseInt(id));
    setBeverages(newList);
  };






  return (
     <BrowserRouter> 
      {/*공통적인 부분 나오게 할 땐 여기서  */}
      <h1>Cafe</h1>
        <ul>
           <li><NavLink to="/">목록</NavLink></li>
           <li><NavLink to="/create">추가</NavLink></li>
        </ul>
         

       <Routes>
         <Route path="/" element={<Home list={beverages} deleteBeverage={deleteBeverage} />}/>
         <Route path="/create" element={<Create addBeverage={addBeverage}/>}></Route>
       </Routes>
  </BrowserRouter>
  );
};

export default App;
