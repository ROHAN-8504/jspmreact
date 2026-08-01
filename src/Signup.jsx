
import { useState } from "react"
function Signup() {
  const [username,setusername]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [role,setrole]=useState('')

   let senddetails=async (event)=>{
    event.preventDefault()
    let data= await fetch('https://jspmbackend.onrender.com/api/register',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({username,password,email,role})
    })

   let finaldata=await data.json()
   alert(finaldata.msg)
   localStorage.setItem('token:finaldata.token')
   }
  return (
    <>
    <section className="page-section signup-layout">
      <div className="section-heading section-heading--compact">
        <p className="eyebrow">Create account</p>
        <h2>Join the storefront with a cleaner first step</h2>
        <p>A calmer form layout makes the registration flow feel deliberate instead of utility-first.</p>
      </div>
    <form className="signup-card" onSubmit={senddetails}    >
    <input type="text"  onChange={(e)=>{setusername(e.target.value)}}      placeholder="Username" />
    <input type="text"  onChange={(e)=>setpassword(e.target.value)}         placeholder="Password"  />
    <input type="text"  onChange={(e)=>{setemail(e.target.value)}}   placeholder="Email" />
    <input type="text"  onChange={(e)=>{setrole(e.target.value)}}   placeholder="Role"/>
    <button type="submit" >Register</button> 

    </form>
    </section>
    </>
  )
}

export default Signup