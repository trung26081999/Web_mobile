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