import { useState } from "react"

import toast from "react-hot-toast";

function Page1() {

   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
   
   //handleOnSubmit function
   const handleOnSubmit =(e: any)=>{
    	         if(!name || !phone || !email){
        	         e.preventDefault();
        	           toast.error("Please fillup all the given fields!")
                 }else{
        
            e.preventDefault();
            const userData = {
              name: name,
              phone: phone,
              email: email,
            };
                localStorage.setItem("user-details",JSON.stringify(userData));

                toast.success("Logged In Successfully!");
                window.location.reload()
  
                 }
   }

  return (
    <div style={{background:"rgba(12,0,1,0.6)", display:"flex", justifyContent:"center",alignItems:"center", height:"100vh", width: "100vw" }}>
    
      <div style={{height:"75vh", width:"25vw", background:"white", border:"black", borderRadius:"10px", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
          <h1>Sign In</h1>
          <form style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center", gap:5}} onSubmit={(e)=>{handleOnSubmit(e)}}>
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <label htmlFor="PhoneNum">Phone No.</label>
            <input type="number" placeholder="Phone No." value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <button type="submit">Sign In</button>
          </form>
      </div>
    </div>
  )
}

export default Page1
