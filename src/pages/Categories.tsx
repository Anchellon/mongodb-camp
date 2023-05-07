import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";

function Categories() {
  return (
    <>
      <p>Explore Categories</p>
      <div className="row">
        <Link className="col-3 mb-3" to="category/AI">
          <CategoryCard />
        </Link>
        <Link className="col-3 mb-3" to="category">
          <CategoryCard />
        </Link>
        <Link className="col-3 mb-3" to="category">
          <CategoryCard />
        </Link>
        <Link className="col-3 mb-3" to="category">
          <CategoryCard />
        </Link>
        <Link className="col-3 mb-3" to="category">
          <CategoryCard />
        </Link>
        <Link className="col-3 mb-3" to="category">
          <CategoryCard />
        </Link>
        <Link className="col-3 mb-3" to="category">
          <CategoryCard />
        </Link>
      </div>
    </>
  );
}
export default Categories;
