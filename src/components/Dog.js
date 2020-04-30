import React from "react";
import FavoriteActions from "./FavoriteActions";
import { Link } from "react-router-dom";
import "./styles.css";
const Dog = ({ id, name, toggle, getStatus, lockButton }) => {
  return (
    <div className="favDog" key={id}>
      <Link to={`/detail/${id}`}>
        <div className="names">
          {name}
          <br />
        </div>
      </Link>
      <FavoriteActions
        toggle={toggle}
        id={id}
        getStatus={getStatus}
        lockButton={lockButton}
      />
    </div>
  );
};
export default Dog;
