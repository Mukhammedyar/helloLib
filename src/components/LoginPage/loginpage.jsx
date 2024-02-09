import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Inputs from './inputs';
import './loginPage.css';

const LoginPage = () => {
  const [login, setlogin] = useState(true);
  const [request, setRequest] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loggedIn ,setLoggedIn] = useState(false);

  useEffect(() => { 
    userHandler();
  }, [login === true])
   
  const userHandler = () => {
    
    // const reqres = new XMLHttpRequest()
    
    // reqres.onload = () => { 
    //   if (reqres.status === 200) { 
    //     setRequest(JSON.parse(reqres.responseText));
    //   }
    //   else {
    //     console.log("error: " + reqres.status)
    //   }
    // }
    // reqres.open('GET', 'https://jsonplaceholder.typicode.com/users')
    // reqres.send()
  }
  
  // const inputChangeHandler = (event) => {
  //   setCredentials((prevCredentials) => ({
  //     ...prevCredentials,
  //     [event.target.name]: event.target.value,
  //   }));
  // }
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Email:", credentials.email);
  //   console.log("Password:", credentials.password);
  // };

  const onSubmitHandler=() => { 

  }

  return (
    // <div className="bg-gray-800 top-0 absolute z-10 h-[100vh] w-full  min-h-screen flex items-center justify-center">
    //   <div className="w-1/2 rounded-md mt-5 bg-gray-800 p-5 mb-5 shadow-lg">
    //     <div className="relative transform transition duration-600">
    //       <form
    //         onSubmit={handleSubmit}
    //         className="flex items-center flex-col bg-blue-900 rounded-lg p-8 text-white text-center"
    //       >
    //         <h4 className="mb-4 pb-3">{login ? "Log In" : "Sing Up"}</h4>
    //         <Inputs login={login} inputChangeHandler={inputChangeHandler} />
    //         <button
    //           type="submit"
    //           className="bg-white text-black font-bold px-5 my-3 py-1 rounded-md"
    //         >
    //           Submit
    //         </button>
    //       </form>
    //       <div className={`mt-2 h-[70px] text-primary realtive`}>
    //         <input
    //           className=" w-full absolute h-1/2 opacity-0 bottom-0"
    //           type="checkbox"
    //           onChange={(event) => setlogin(event.target.checked)}
    //         />
    //         <span>
    //           {login
    //             ? "I haven't an account SignUp"
    //             : "I already have an account"}
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='className="w-full h-[100vh] flex items-center justify-center'>
      <form onSubmit={onSubmitHandler()} className="bg-white w-[300px] h-[200px] flex justify-center flex-col p-5">
        <label>Name</label>
        <input type="text" name="name" placeholder="name here" className='border-slate-700 rounded-md p-1 px-2 border-[1px] my-1' />      
      </form>
    </div>
  );
};

export default LoginPage;