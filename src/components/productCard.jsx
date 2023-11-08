function ProductCard(props) {
  const { category, description, image, price, title } = props.product;
  return (
      <div className="card col-lg-4 col-md-4 col-sm-1">
        <div className="card-img">
          <img src={image} alt="" />
        </div>
        <div className="card-body">
          <h1 className="card-title h6">{title}</h1>
          {/* <p className="product-price pinned">{category}</p> */}
        </div>
        <div className="card-footer d-flex justify-content-end ">
          <button className="btn btn-dark mx-1 d-flex align-content-center gap-2">
            {price} $
            <img src="imgs/cart4.svg" alt="" className="" />
            </button>
          <button className="btn btn-success">Details</button>
        </div>
      </div>
  );
}

export default ProductCard;