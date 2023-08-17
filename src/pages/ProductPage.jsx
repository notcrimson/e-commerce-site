import { cards } from "../constants/cards";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { productID } = useParams();

  const singleProduct = cards.find((card) => card.id === parseInt(productID));

  return (
    <div className="section__padding">
      <div className="flex justify-center flex-col">
        <h1>{singleProduct.name}</h1>
        <p>{singleProduct.description}</p>
        <p>{singleProduct.img}</p>
      </div>
    </div>
  );
};

export default ProductPage;
