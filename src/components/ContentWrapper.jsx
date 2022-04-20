import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ProductList from "./ProductList";

const initialState = {};
const initialStateUser = {};

const ContentWrapper = () => {

  const [dataApi,setDataApi] = useState(initialState)
  const [dataApiUser,setDataApiUser] = useState(initialStateUser)
  const [uploadProducts,setUploadProducts] = useState(false)
  
  useEffect(() => {
    fetch('http://localhost:3001/api/products')
      .then(response => response.json())
      .then(data => setDataApi(data))
      .catch(error => console.log(error))
    fetch('http://localhost:3001/api/user')
      .then(response => response.json())
      .then(data => setDataApiUser(data))
      .catch(error => console.log(error))
  }, [])

  console.log(dataApi);
  console.log(dataApiUser);
  
  const {total,products} = dataApi
  const {total: totalUser,users} = dataApiUser

  const handleClick = () => {
    setUploadProducts(!uploadProducts)
  }


  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <NavBar />
          <div className="container-fluid">
            <div className="text-center  mb-4">
              <h1 className="h3 mb-0 text-gray-800 ">PantsAlone Dashboard</h1>
            </div>
            <Cards amountProducts={total} amountUsers={totalUser}/>
            <ProductList productsDetail={products} stateFuncion={uploadProducts} funcionClick={handleClick}/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContentWrapper;
