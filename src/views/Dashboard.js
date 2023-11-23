import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, details, getAds } from "../config/api";
import { onAuthStateChanged } from "firebase/auth";
import Cards from "../components/Cards";

function Dashboard() {
    const [ad, setAd] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3000/ads')
        .then(res => res.json())
        .then(res => setAd(res.data))

    }, [])


    console.log('ad--->', ad)

    if (!ad) {
        return <div>Loading....</div>
    }

    // const getData = async () => {
    //     const adsData = await getAds()
    //     setLoading(false)
    //     setAds(adsData)
    // }

    // const cards = () => {
    //     details()
    //     navigate('/postAd/'+ ads.id)
    // }
    return (
        <div >
            {
                // loading ? <img width='30' src='https://i.gifer.com/ZKZg.gif' />
                //     :
                ad.map(item => {
                    return (
                    
                    
                    // <div onClick={() => navigate('/postAd/' + item._id)} style={{
                    //     width: '250px', textAlign: 'center', padding: '20px', borderRadius:'10px',
                    //     lineHeight: '1', margin: '20px', display: "inline-block", height: '250px', border: '1px solid gray'
                    // }}>
                    //     <img width={180} height={150} src={item.imageUrl} />
                    //     <h2>{item.title} </h2>
                    //     <h3>Price Rs: {item.price}</h3>
                    // </div>

                    <Cards click={() => navigate('/postAd/' + item._id)} title={item.title}
                        price={item.price} image={item.imageUrl} />
                     
                    // <div onClick={() => navigate('/postAd/' + item.id)} style={{margin: '10px', padding:'5px', width: '20%', height: '100', lineHeight: '1', border: '1px solid black', display: "inline-block" }}>
                    //     <img src={item.imageUrl} width={'40%'} />
                    //     <h4>{item.title}</h4>
                    //     <h4>Rs: {item.price}</h4>
                    // </div>
                    )
                })}

        </div>
    )
}
export default Dashboard