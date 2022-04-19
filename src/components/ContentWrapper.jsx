import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ProductList from "./ProductList";

const initialState = {};

const ContentWrapper = () => {

  const [dataApi,setDataApi] = useState(initialState)
  const [uploadProducts,setUploadProducts] = useState(false)
  
  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => setDataApi(data))
      .catch(error => console.log(error))
  }, [])

  const {total,products} = dataApi

  const handleClick = () => {
    setUploadProducts(!uploadProducts)
  }


  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <NavBar />
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <Cards amountProducts={total} />
            <ProductList productsDetail={products} stateFuncion={uploadProducts} funcionClick={handleClick}/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContentWrapper;
