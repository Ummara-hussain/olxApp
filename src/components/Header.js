import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { auth, logout } from "../config/api"
import { onAuthStateChanged } from "firebase/auth"

function Header() {
    const navigate = useNavigate()
    // const [currentUser, setCurrentUser] = useState()
    // const [userExists, setUserExists] = useState(false)
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUserExists(true)
    //             setCurrentUser(user.email)
    //             navigate('/dashboard')
    //         } else {
    //             setUserExists(false)
    //             navigate('/')
    //         }
    //     })
    // }, [])

    return (
        <div>
            <div style={{ backgroundColor: 'beige', padding: '10px' }}>
                <div style={{ display: 'flex' }}>
                    <img style={{ marginLeft: '100px' }} width={50} src="https://brandlogos.net/wp-content/uploads/2022/07/olx-logo_brandlogos.net_ijizj.png" />
                    <a style={{ marginLeft: '70px', fontSize: 'medium', color: 'black', textDecoration: 'none' }} href="https://www.olx.com.pk/motors/">MOTORS</a>
                    <a style={{ marginLeft: '70px', fontSize: 'medium', color: 'black', textDecoration: 'none' }} href="https://www.olx.com.pk/properties/">PROPERTY</a>
                  {/* {userExists &&  <p style={{ marginLeft: '100px', fontSize: 'medium', color: 'black' }} >Logged in as: {currentUser}</p> } */}
                </div>
                <img style={{ marginLeft: '100px' }} width={60} src="https://admiral.digital/wp-content/uploads/2021/07/client-olx-greyscale.png" />
                <select style={{ width: '20%', height: '40px', margin: '20px', fontSize: 'large' }} name="group" id="group">
                    <option>Pakistan</option>
                    <option>Sindh,Pakistan</option>
                    <option>Punjab,Pakistan</option>
                    <option>Balochistan,Pakistan</option>
                    <option>Khyber Pakhtunkhwa,Pakistan</option>
                </select>
                <input style={{ width: '35%', height: '35px', margin: '20px', fontSize: 'large' }} type="text" placeholder="Find Car, Mobile Phones and more " size={30} />
               {/* {userExists ? <button onClick={logout} style={{ padding: '10px', fontSize: 'medium', backgroundColor: 'white', border: '1px solid blue', borderRadius: '12px', marginRight: '10px' }}>
                    Logout</button> : */}
                <button onClick={() => navigate('/')} style={{ padding: '10px', fontSize: 'medium', backgroundColor: 'white', border: '1px solid blue', borderRadius: '12px', marginRight: '10px' }}>
                    Login</button>
                    {/* } */}
                <button onClick={() => navigate('/postAd')} style={{ padding: '10px', fontSize: 'medium', backgroundColor: 'white', border: '1px solid red', borderRadius: '12px', marginRight: '10px' }}>
                    SELL</button>
                <button onClick={() => navigate('/dashboard')} style={{ padding: '10px', fontSize: 'medium', backgroundColor: 'white', border: '1px solid green', borderRadius: '12px', marginRight: '10px' }}>
                    Products</button>
            </div>
        </div>
    )
}

export default Header