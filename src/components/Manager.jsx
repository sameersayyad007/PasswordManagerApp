//import React from 'react'

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect, useRef } from "react"
//import { faCopy } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';



export default function Manager() {
    const  [form, setForm] = useState({site:'',username:'',password:''})
    const [passwordArray, setPasswordArray]= useState([])
    const [btnName, setbtnName]= useState('Show')
    const passwordRef= useRef();

const showPass = () => {
 
 if( passwordRef.current.type=="text"){
  passwordRef.current.type="password"
  setbtnName('Show')
 }
 else{
  passwordRef.current.type="text"
  setbtnName('Hide')
 }
}


const savePassword= () => {
    console.log("form",form)
    setPasswordArray([...passwordArray,form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray,form]))
    console.log("object",passwordArray)
    setForm({site:'',username:'',password:''})

}

const handleChange=(e) => {
  setForm({...form, [e.target.name]:e.target.value})
  
}


useEffect(() => {
  let passwords= localStorage.getItem('passwords');
 
  if(passwords){
    setPasswordArray(JSON.parse(passwords))
  }
  

  
}, [])

const copyText=(text) => {
  navigator.clipboard.writeText(text)
  toast('🦄Text copied to clipboard!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    
    });
}


  return (
    <>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
{/* Same as */}
<ToastContainer />

    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

<div className="container mx-auto bg-slate-200  max-w-5xl p-10 py-10 my-8 rounded-md pt-5">
    <h1 className="text-3xl text-center font-mono font-bold"><span className="text-green-800">&lt; <span className="text-black">Password</span> Manager /&gt;</span>
</h1>
    <p className="font-mono text-2xl text-center font-bold">~ Your personalised password manager tool ~</p>
<div className="text-black flex flex-col p-4 gap-2 ">
   <input value={form.site}  onChange={handleChange} type="text" name="site" id="" className="rounded-md border border-green-400 p-2"  placeholder="Enter webiste URL"/>

   <div className="flex gap-3  justify-between w-full py-3  ">
    <input type="text" value={form.username} onChange={handleChange} name="username" id="" className="rounded-md border border-green-400 p-2 w-1/2"  placeholder="Enter username"/>


<div className="relative flex flex-col w-1/2">
<input value={form.password} ref={passwordRef} type="password" onChange={handleChange}  name="password" id="" className="rounded-md border border-green-400 p-2 w-full" placeholder="Enter password" />
<span className="absolute mx-1 my-2 right-0 cursor-pointer bg-slate-200 py-0.4 px-1.5 hover:bg-orange-200 rounded-md" onClick={showPass}>{btnName}<script src="https://cdn.lordicon.com/lordicon.js"></script>
<lord-icon
    src="https://cdn.lordicon.com/ccrgnftl.json"
    trigger="hover"
    style={{width:'20px',height:'20px',padding:'3px'}} >
</lord-icon>

</span>
{/* <FontAwesomeIcon icon={faCopy} /> */}

</div>

   </div>
   <div className="flex  flex-col items-center">
   <button type="button" className="flex justify-center items-center w-40 rounded-md bg-green-400  p-1.5 hover:font-bold" onClick={savePassword}>Add password <lord-icon
    src="https://cdn.lordicon.com/ftndcppj.json"
    trigger="hover"
   >
</lord-icon></button>
   </div>
   
</div>


<div className="passwords mb-5">
    <h2 className="mb-3">Your passwords:</h2>
   
  {
    passwordArray.length===0? <div>No data available</div>:
    <table className="table-auto w-full bg-green-100 rounded-md overflow-hidden text-black">
    <thead className="bg-green-700 rounded-md text-white ">
      <tr>
        <th className="py-1.5 text-lg">URL</th>
        <th className="py-1.5 text-lg">Username</th>
        <th className="py-1.5 text-lg">Password</th>
        <th className="py-1.5 text-lg">Actions</th>
       
      </tr>
    </thead> 
    <tbody>

        {
            passwordArray.map((item)=>{
                return(
                    <>
                    <tr>
        <td className="text-center w-12 py-0.4 text-lg"><a href={item.site} target="_blank">{item.site}</a>
        <span onClick={()=>copyText(item.site)} className=" mx-1 my-2 right-0 cursor-pointer bg-slate-200  ml-5 py-0.4 px-1.5 text-sm hover:font-bold hover:bg-orange-200 rounded-md">copy</span></td>
        <td className="text-center w-12 py-0.4 text-lg">{item.username}
        <span onClick={()=>copyText(item.username)} className=" mx-1 my-2 right-0 cursor-pointer  ml-2 bg-slate-200 py-0.4 px-1.5 text-sm hover:font-bold hover:bg-orange-200 rounded-md">copy</span>
        </td>
        <td className="text-center w-12 py-0.4 text-lg">{item.password}
        <span onClick={()=>copyText(item.password)} className=" mx-1 my-2 right-0 cursor-pointer ml-2 bg-slate-200 py-0.4 px-1.5 text-sm hover:font-bold hover:bg-orange-200 rounded-md">copy</span>
        </td>
        <td className="justify-center text-center w-16 py-1 text-lg">
        <span  ><lord-icon
    src="https://cdn.lordicon.com/vhyuhmbl.json"
    trigger="hover"
    style={{width:"25px",height:"25px"}}>
</lord-icon></span>
        <span className="mx-2 my-2" ><lord-icon
    src="https://cdn.lordicon.com/hjbrplwk.json"
    trigger="hover"
    style={{width:"25px",height:"25px"}}>
</lord-icon></span>
        </td>
      </tr>
                    </>
                )
            })
        }
      
     
    </tbody>
  </table>
  }

</div>
</div>

</>
  )
}
