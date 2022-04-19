import React from "react";

const ProductList = ({ productsDetail,funcionClick,stateFuncion }) => {
  console.log(productsDetail);
  return (
    <>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Productos:
              </h5>
            </div>
            <div className="card-body">
              {stateFuncion && 
                <>
                  {productsDetail.map((product, i) => {
                    return (
                      <>
                          <div key={i++} className="row">
                            <div className="col-lg-6 mb-4">
                              <div className="card bg-dark text-white shadow">
                                <div className="card-body">{product.model}</div>
                                <div className="card-body">Quantity: {product.quantity}</div>
                              </div>
                            </div>
                          </div>
                      </>
                    );
                  })}
                </>
              }
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-success " onClick={funcionClick}> 
              {stateFuncion ? 'Ocultar Productos' : 'Mostrar Productos' }
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
