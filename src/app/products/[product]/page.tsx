'use client';
import React from 'react';
import Productpg from '../../Components/Productpg';
import data from '../../data.json';

interface PageProps {
  params: {
    product: string;
  };
}

export default function Page({ params }: PageProps) {
  const productId = params.product;
  const productObj = data.find((item) => String(item.id) === String(productId));

  return (
    <>
      {productObj ? (
        <Productpg
          brand={productObj.brand}
          name={productObj.name}
          review={productObj.rating}
          srcss={productObj.image}
          description={productObj.description}
          price={productObj.price}
          id={productObj.id}
        />
      ) : (
        <div className="text-white p-8">Product not found</div>
      )}
    </>
  );
}
