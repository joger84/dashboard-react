import React from "react";

const ProductList = ({ productsDetail,funcionClick,stateFuncion }) => {
  return (
    <>
      <div className="row justify-content-center">
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
                            <div className="col-lg-12 mb-4">
                              <div className="card bg-dark text-white shadow">
                                <div className="card-body font-weight-bold">{product.model}</div>
                                <div className="card-body font-weight-bold">Quantity: {product.quantity}</div>
                                <div className="card-body text-justify">
                                  {product.description}
                                </div>
                              </div>
                            </div>
                          </div>
                      </>
                    );
                  })}
                </>
              }
            </div>
            <div className="d-flex justify-content-center mb-3">
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
