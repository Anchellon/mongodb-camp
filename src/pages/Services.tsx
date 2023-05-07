import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import Categories from "./Categories";

function Services() {
  // get all categories
  // categories haave to be unique
  // create a category card
  // create a route for each card to its own page
  // later paginate

  return (
    <>
      <Container className="mt-4">
        <Outlet></Outlet>
      </Container>
    </>
  );
}
export default Services;
