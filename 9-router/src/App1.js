import "./App.css";
import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Create = ({addBeverage})=>{
    const navigate = useNavigate();
    const onSubmit = (e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        addBeverage(title, desc);
        navigate("/");
    }


   return (
     <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="title">음료명 : </label>
            <input type="text" id="title" name="title" placeholder="음료명"/>
        </div>
        <div>
            <label htmlFor="desc">설명 : </label>
            <input type="text" id="desc" name="desc" placeholder="설명"/>
        </div>
        <input type="submit" value="추가"/>
     </form>
   );
};
const Home = ({list, deleteBeverage})=>{
    const onClick =(e)=>{
        deleteBeverage(e.target.id);
    }

      return (
        <table border="1">
               <thead>
                  <tr>
                    <th>ID</th>
                    <th>음료</th>
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
                    <td><button onClick={onClick} id={item.id}>삭제</button></td>
                  </tr>
                  ))}
                </tbody>
        </table>
      );
};





const App = ()=>{
    const [beverages, setBeverages] = useState([
        {id:1, title:"dd", desc:"de"},
        {id:2, title:"dsd", desc:"desd"}
    ]);
    const deleteBeverage = (id)=>{
        const newList = beverages.filter((item)=> item.id !== parseInt(id))
        setBeverages(newList);
    };

    const [nextId, setNextId]= useState(3);
    const addBeverage = (title, desc)=>{
        const newBeverage = {
            id:nextId,
            title,
            desc
        }
       setBeveragesId([...beverages,newBeverage ]);
        setNextId(nextId +1);
    };
    return (
        <BrowserRouter>
           <h1>Cafe</h1>
           <ul>
              <li><NavLink to="/">목록</NavLink></li>
              <li><NavLink to="/create">추가</NavLink></li>
           </ul>

          <Routes>
            <Route path="/" element={<Home list={beverages} deleteBeverage={deleteBeverage} />}/>
            <Route path="/create" element={<Create addBeverage={addBeverage}/>}/>
          </Routes>
        </BrowserRouter>
    );
}
export default App;