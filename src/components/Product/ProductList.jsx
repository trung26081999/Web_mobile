import Product from "../components/Product/Product";
const listProduct = [
  {
   product_name:"Apple iPhone 14 Pro Max - Chính hãng VN/A",
   images:"/demo/public/assets/images/Product/product_1.png",
   price:31490000,
  },
];

const ProductList = () => {
  return (
    <div>
      {listProduct.map((item, index) => {
        return (
          <Product
            // id={item.id}
            product_name={item.product_name}
            images={item.images}
            price={item.price}
          />
        );
      })}
    </div>
  );
};
export default ProductList;
// export const detailProduct = {
//   id: 1,
//   tenSanPham: "SamSung",
//   hinhAnh: "img/product-1.jpg",
//   giaBan: 10,
//   company: "SamSung",
//   moTa: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//   inCart: false,
//   count: 0,
//   total: 0,
// };
