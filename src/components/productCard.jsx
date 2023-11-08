
<<<<<<< HEAD
function ProductCard(props) {
  const { category, description, image, price, title } = props.product;
  return (
      <div className="card col-lg-4 col-md-4 col-sm-1">
        <div className="card-img">
          <img src={image} alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title h6">{title}</h1>
          <p className="product-price small">{price}</p>
        </div>
        <div className="card-footer d-flex justify-content-end ">
          <button className="btn btn-dark mx-1 d-flex align-content-center gap-2">
            {price} $
            <img src="imgs/cart4.svg" alt="" className="" />
            </button>
          <button className="btn btn-success">Details</button>
=======
function ProductCard() {
  return (
      <div className="card">
        <div className="card-img">
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        </div>
        <div className="card-body">
          
>>>>>>> 34c8b07d9a3f2ca27f01d4764fd6be0acfcc85bf
        </div>
      </div>
  );
}

export default ProductCard;