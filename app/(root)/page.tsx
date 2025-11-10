import React from "react";
import ProductList from '@/components/shared/product/product-list';
import sampleData from '@/db/sample-data';


export default function Home() {
  return (
   <div className="wrapper">
      <ProductList data={sampleData.products} title='Mi lista'/>
    </div>
  );
}
