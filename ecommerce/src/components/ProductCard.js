import

export default  function ProductCard(imageUrl,price,title){
    return <div className="product-card">
        <img src={imageUrl} alt={title}  />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
}