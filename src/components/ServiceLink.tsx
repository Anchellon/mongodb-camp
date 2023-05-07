import React from "react";
import ServiceType from "../interfaces/ServiceType";

function ServiceLink(props: ServiceType) {
  return (
    <ul>
      <a href={props.url}>{props.name}</a>
    </ul>
  );
}

export default ServiceLink;
