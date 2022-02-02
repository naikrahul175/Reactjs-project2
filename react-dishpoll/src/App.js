
import './App.css';
import { Login } from "./Components/Login";
import { Dish } from "./Components/Dish";
import React, {useState} from 'react';
import UserData from "./user.json";



function App() {

  const  [user, setUser] = useState({id:"",email:"",password:""});
  const [dish, setDish] = useState([]);
  // const [dummy, setDummy] = useState(UserData);

  // const admin ={
  //   email: "rahul@gmail.com",
  //   password: "rahul123"

  // }
  const admin =(UserData) //multiple user data 

     //login function
const login =(email,password)=>{
  // console.log(dummy);
  // console.log(email)
  // console.log(password)
  admin.map(el=>{
    // console.log(el.username,el.password)
  if(el.username == email && el.password == password)
  {
    console.log("matched")
    setUser({
              id: el.id,
              email: email,
              password:password
          });
          fetchData();
  }else{
    console.log("doesnt matched")
  }
});
}
       //logout function
const logout= ()=>{
setUser({email:"",   password:""}
)}
      //fetching dish
const fetchData=()=>{
    fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
    .then(Response => Response.json())
    .then(dish =>{
        setDish(dish);
        console.log(dish)
        console.log(" i am here")
    });
 
  }
      //displaying dishes based on the rank 
  // const rank=()=>{
  //   return(
  //     <div className="rank">
  //      <DishRanking />
  //     </div>
  //   )
  //   // console.log("i am here")
  // }

  return (
    <div className="app">
    {(user.email !="") ?
    //  <div className="mainPage">
    //    <p>welcome to the main page</p>
    //    <button  onClick={logout}>Logout</button>
    //  </div>
         <Dish logout={logout} dish={dish} user={user}/>
     :   <Login  login={login}/>
      }
    </div>
  );
}
    
export default App;
