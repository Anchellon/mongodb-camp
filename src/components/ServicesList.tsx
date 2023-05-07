import React from "react";
import ServiceType from "../interfaces/ServiceType";
import ServiceLink from "./ServiceLink";
// PASSING ARRAYS IN REACT USING TYPE SCRIPT
function ServicesList(props: { services: ServiceType[] }) {
  const { services } = props;
  console.log(services);
  return (
    <>
      {services.map(function (svc, i) {
        return <ServiceLink {...svc} key={i} />;
      })}
    </>
  );
}

export default ServicesList;
