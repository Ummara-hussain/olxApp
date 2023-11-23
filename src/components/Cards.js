function Cards(props) {
    const { click, image, title, price } = props
    return (
        <div onClick={click} style={{
            width: '250px', textAlign: 'center', padding: '20px', borderRadius:'10px',
            lineHeight: '1', margin: '20px', display: "inline-block", height: '250px', border: '1px solid gray'
        }}>
            <img width={180} height={150} src={image} />
            <h2>{title} </h2>
            <h3>Price Rs: {price}</h3>
        </div>
    )
}

export default Cards