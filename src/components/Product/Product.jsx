import "./Product.scss";
import {Link} from 'react-router-dom';
export const Product=(props)=> {
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
              <Link href="/details">
                <img src="./assets/images/Product/product_1.png" alt="" />
              </Link>
            </div>
            <div className="info">
              <a href="">Apple iPhone 14 Pro Max - Chính hãng VN/A</a>
              <span className="price">
                <strong>31,490,000 ₫</strong>
              </span>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
}

export default Product;
