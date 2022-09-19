import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <ul className="root">
          <li>
            <a href="">
              <i class="bx bx-mobile"></i>
              <span>Điện thoại</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bx bxs-watch"></i>
              <span>Đồng hồ</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bx bx-laptop"></i>
              <span>Laptop</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bx bx-desktop"></i>
              <span>Màn hình</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bx bxs-tv"></i>
              <span>Smart TV</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bx bx-tab"></i>
              <span>Tablet</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bx bx-headphone"></i>
              <span>Tai nghe</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bx bx-news"></i>
              <span>Tin tức</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
