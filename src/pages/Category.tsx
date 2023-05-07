import React from "react";
import svcs from "../assets/data";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import ServiceType from "../interfaces/ServiceType";
import ServicesList from "../components/ServicesList";

import Services from "./Services";

function Category() {
  const { categoryName } = useParams();
  const services: ServiceType[] = svcs.filter(
    (service) => service.category === categoryName
  );
  //   console.log(services);

  return (
    <Container>
      <ServicesList services={services}></ServicesList>
    </Container>
  );
}
export default Category;
