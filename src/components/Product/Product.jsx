import "./Product.scss";
export const Product = (props) => {
  console.log(Product);
  return (
    <div className="container">
      <div className="product">
        <div className="header">
          <h4>
            <a href="">Apple authorised Reseller</a>
          </h4>
        </div>
        <div className="content-list">
          <div className="item">
            <div className="img">
              <a href="/details">
                <img src="./assets/images/Product/product_1.png" alt="" />
              </a>
            </div>
            <div className="info">
              <a href="/details">{props.product_name}</a>
              <span className="price">
                <strong>{props.price}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
