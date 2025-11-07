// src/Pages/ProductPage.tsx
import { useParams } from "react-router-dom";
import Template3 from "../Components/Template3";
import data from "../data.json";

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();

  const productObj = data.find((item) => String(item.id) === productId);

  if (!productObj) {
    return <div className="text-white p-8">Product not found</div>;
  }

  return (
    <Template3
      brand={productObj.brand}
      name={productObj.name}
      review={productObj.rating}
      srcss={productObj.image}
      description={productObj.description}
      price={productObj.price}
      id={productObj.id}
      category={productObj.category}
      material={productObj.strap_material}
      color={productObj.strap_color}
      type={productObj.type}
    />
  );
}
