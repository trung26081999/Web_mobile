import "./Header.scss";

function Header() {
  return (
    <div className="heading">
      <div className="container">
        <div className="logo">
          {/* <a href="">
            <img src="./assets/images/logo-text.png" alt="" />
          </a> */}
        </div>
        <div className="search-box">
          <form action="">
            <div className="boder">
              <input type="text" placeholder="Hôm nay bạn cần gì?" />
              <button type="submit" className="search">
                <i class="bx bx-search-alt-2"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="order">
          <div className="item">
            <a href="">
              <i class="bx bx-cart"></i>
              <label>
                <i class="bx bxs-left-arrow">
                  {" "}
                  <span id="cart-total">0</span>
                </i>
              </label>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
