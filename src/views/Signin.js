import { useState } from "react"
import { login } from "../config/api"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const signin = async () => {
        try {
            await login(email, password)
            navigate('/dashboard')
        } catch (e) {
            Swal.fire(e.message)
        }
    }

    return (
        <div style={{ margin: 'auto', display: "flex", textAlign: 'center', flexDirection: "column", width: '400px', height: '300px', border: '1px solid white', backgroundColor: '#e7ebd5', }}>
            <h2>Sign In</h2>
            <input className="input" onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your Email" />
            <input className="input" onChange={e => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
            <button style={{width:100, margin:'auto'}} onClick={signin}>Sign in</button>
            <p>Don't have an account.
                <span className="App-link" style={{ cursor: 'pointer' }} onClick={() => navigate('/signup')}>Click here</span>
            </p>
        </div>
    )
}

export default SignIn