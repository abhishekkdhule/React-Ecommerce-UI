import React, { useEffect, useReducer } from "react";
import Product from "./Product";
import axios from "axios";

const intialState = {
  isLoading: true,
  currentObj: {},
  currentPath: "http://127.0.0.1:8000/products",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "URL_UPDATE_NEXT":
      console.log("url updated");
      return { ...state, currentPath: state.currentObj.next };
    case "URL_UPDATE_PREV":
      return { ...state, currentPath: state.currentObj.previous };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, currentObj: action.payload };
    case "FETCH_FAIL":
      return { ...state, isLoading: true, currentObj: {} };
    default:  
      return state;
  }
};

function Products() {
  const [currentState, dispatch] = useReducer(reducer, intialState);

  useEffect(() => {
    if (currentState.currentPath) {
      axios.get(currentState.currentPath).then((response) => {
        dispatch({
          type: "FETCH_SUCCESS",
          payload: response.data,
        });
      });
    }
  }, [currentState.currentPath]);

  console.log("current object=", currentState.currentObj);

  return (
    <>
      {" "}
      {currentState.isLoading ? (
        <div className="text-center " style={{ marginTop: "250px" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="container-fluid mt-4 mb-4">
            <div className="row">
              {currentState.currentObj.results.map((cval) => {
                return (
                  <div className="col " key={cval.id}>
                    <Product
                      name={cval.prod_name}
                      price={cval.original_price}
                      imgUrl={cval.images[0].image}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <ul className="pagination text-center">
              <li className="page-item ">
                <button
                  className="page-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch({ type: "URL_UPDATE_PREV" })}
                >
                  ◀️
                </button>
              </li>
              <li className="page-item">
                <button
                  className="page-link"
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch({ type: "URL_UPDATE_NEXT" })}
                >
                  ▶️
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Products;
