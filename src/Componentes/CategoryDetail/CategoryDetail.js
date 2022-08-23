import React from "react";
import "./CategoryDetail.css";
import Arrow from "../../Assets/arrow.png";
import BraImage from "../../Assets/img/bra-category.jpg";
import ConjuntoImage from "../../Assets/img/conjunto-category.jpg";
import PijamaImage from "../../Assets/img/pijama-category.jpg";
import { Link } from "react-router-dom";

export const CategoryDetail = () => {
  return (
    <div className="category-detail-container">
      <Link
        to="category"
        state={{ type: "bombacha" }}
        className="bra-category-container"
      >
        <img src={BraImage} className="bra-category-image" />
        <img src={Arrow} className="bra-category-arrow" />
        <h4 className="bra-category-title">Bombachas</h4>
      </Link>
      <Link
        to="category"
        state={{ type: "conjunto" }}
        className="conjunto-category-container"
      >
        <img src={ConjuntoImage} className="conjunto-category-image" />
        <img src={Arrow} className="conjunto-category-arrow" />
        <h4 className="conjunto-category-title">Conjuntos</h4>
      </Link>
      <Link
        to="category"
        state={{ type: "pijama" }}
        className="pijama-category-container"
      >
        <img src={PijamaImage} className="pijama-category-image" />
        <img src={Arrow} className="pijama-category-arrow" />
        <h4 className="pijama-category-title">Pijamas</h4>
      </Link>
    </div>
  );
};

export default CategoryDetail;
