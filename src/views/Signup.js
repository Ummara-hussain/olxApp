import { useState } from "react"
import { register } from "../config/api"
import { useNavigate } from "react-router-dom"

function Signup(){
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    const signup = () =>{
        register(email, password, firstName, lastName)
    }
    return(
        <div style={{margin: 'auto', textAlign:'center', display: "flex", flexDirection: "column", width:'400px', height:'350px', border: '1px solid white', backgroundColor:'#e7ebd5',}}>
            <h2>Sign Up</h2>
            <input className="input" onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter your First Name" />
            <input className="input" onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter your Last Name" /> 
            <input className="input" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your Email" /> 
            <input className="input" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter a password" />
            <button style={{width:100, margin:'auto'}} onClick={signup}>Sign up</button>
            <p>Already have an account.
                <span className="App-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}> Click here</span>
            </p>
        </div>
    )
}

export default Signup