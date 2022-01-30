
import './App.css';
import { Login } from "./Components/login";
import { Dish } from "./Components/Dish";
import React, {useState} from 'react';



function App() {

  const  [user, setUser] = useState({email:"",password:""});
  const [dish, setDish] = useState([]);

  const admin ={
    email: "rahul@gmail.com",
    password: "rahul123"

  }
  
const login =(email,password) =>{
  if(email == admin.email && password == admin.password )
  {
    console.log("matched")
      setUser({
          email: email,
          password:password
      });
      fetchData();
  }else{
    console.log("does not matched")
    console.log(email)
  }}

const logout= ()=>{
setUser({email:"",   password:""}
)}

const fetchData=()=>{
    fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
    .then(Response => Response.json())
    .then(dish =>{
        setDish(dish);
        console.log(dish)
        console.log(" i am here")
    });
  }

  return (
    <div className="app">
    {(user.email !="") ?
    //  <div className="mainPage">
    //    <p>welcome to the main page</p>
    //    <button  onClick={logout}>Logout</button>
    //  </div>
         <Dish logout={logout} dish={dish}/>
     :   <Login  login={login} />
      }
    </div>
  );
}
    
export default App;
