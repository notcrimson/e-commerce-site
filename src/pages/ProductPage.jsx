import { useLocation, useParams } from "react-router-dom";

//TODO: layot and style ProductPage

const ProductPage = () => {
  const location = useLocation();

  const product = location.state?.data;

  // const { productID } = useParams();
  // const singleProduct = products?.find((product) => product.id === parseInt(productID));
  // console.log(singleProduct);

  return (
    <div className="section__padding">
      <div className="flex justify-center flex-col">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <img src={product.thumbnail} />
      </div>
    </div>
  );
};

export default ProductPage;
