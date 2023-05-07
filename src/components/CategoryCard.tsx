import React from "react";
import Card from "react-bootstrap/Card";

function CategoryCard() {
  return (
    <Card style={{ width: "16rem", height: "11rem" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default CategoryCard;
