import React from "react";
import FavoriteActions from "./FavoriteActions";
import { Link } from "react-router-dom";
import "./styles.css";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";
import propTypes from "prop-types";
const Dog = ({ id, name, image }) => {
  return (
    <Container className="container-fluid mt-2 d-lg-inline-flex ">
      <div key={id}>
        <Row>
          <Col md={"4"} className="d-inline-block w-25 ">
            <Link to={`/detail/${id}`}>
              {name}
              <Image
                className="dog-images img-fluid card-img-top rounded-circle"
                src={image}
              />
            </Link>
          </Col>
          <div className="col-12 mt-3">
            <FavoriteActions id={id} />
          </div>
        </Row>
      </div>
    </Container>
  );
};
Dog.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  image: propTypes.string,
};
Dog.defaultProps = {
  id: "Köpek Id",
  name: "Köpek İsmi:",
  image: "Image Url",
};
export default Dog;
