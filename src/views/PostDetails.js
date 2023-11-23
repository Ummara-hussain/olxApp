import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { details } from "../config/api"

function PostDetails() {
    const [adDetail, setAdDetail] = useState([])
    const params = useParams()
    const id = params.id


    useEffect(() => {
        fetch('http://localhost:3000/ads/' + id)
        .then(res => res.json())
        .then(res => setAdDetail(res.data))
    }, [])

    // useEffect(() => {
    //     productDetail()
    // }, [])

    // async function productDetail() {
    //     const addData = await details(id)
    //     console.log('function', addData)
    //     setAdDetail(addData)
    //     console.log('state', details)
    // }

    // if (!adDetail) {
    //     return <div>
    //         <img src="https://i.gifer.com/ZKZg.gif" width='100' />
    //     </div>
    // }
    return (
        <div style={{
            width: '400px', textAlign: 'center', padding: '20px', borderRadius: '12px', marginTop: '15px',
            lineHeight: '1', margin: 'auto', height: '360px', border: '1px solid black', marginBottom: '10px'
        }}>
            <img width={250} height={220} src={adDetail.imageUrl} />
            <h2>{adDetail.title}</h2>
            <h3>Price Rs: {adDetail.price}</h3>
            <p>Description: {adDetail.description}</p>
        </div>
    )
}

export default PostDetails