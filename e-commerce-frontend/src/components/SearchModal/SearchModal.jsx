import React, { useState } from "react";
import "./SearchModal.css";
import crossIcon from "../../assets/images/cross-icon.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SearchModal = ({ handleCloseModal }) => {
  const products = useSelector((store) => store.products);
  const [productName, setProductName] = useState("");

  const filterProductData = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );
  console.log("filter product data is ", filterProductData);
  return (
    <section className="container">
      <div className="search-modal-overlay">
        <div className="search-modal-content">
          <img
            className="crossIcon"
            onClick={handleCloseModal}
            src={crossIcon}
            alt="close Icon"
          />
          <h2 className="searchHeading">Search a Product</h2>
          <input
            className="searchInputField"
            type="text"
            placeholder="Enter a Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <div className="productDataWrapper">
            {productName === "" ? (
              <p>No Product Found</p>
            ) : filterProductData.length > 0 ? (
              filterProductData.map((product) => (
                <Link
                  to={`/products-detail/${product.id}`}
                  className="productData"
                  key={product.id}
                >
                  {
                    <img
                      className="productImages"
                      src={product.image_path}
                      alt=""
                    />
                  }
                  {product.name}
                </Link>
              ))
            ) : (
              <p>No Product Found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchModal;
