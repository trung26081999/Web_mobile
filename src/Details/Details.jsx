import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
// import data from "../data.js";
function Details() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
        <div className="header">
          <ol className="breadcrumb">
            <li>
              <a href="/"><i class='bx bx-home'></i>Trang chu</a>
            </li>
            <li><a href="">Dien thoai</a></li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Details;
