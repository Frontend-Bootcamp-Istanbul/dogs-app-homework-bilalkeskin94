import React from "react";
import { Button } from "reactstrap";

const FavoriteActions = (props) => {
  const { id, lockButton } = props;
  return (
    <div className="buttons">
      {props.getStatus(props.id) ? (
        <Button
          color="danger"
          disabled={id === lockButton}
          onClick={() => {
            props.toggle(props.id);
          }}
        >
          Favorilerden Cikar
        </Button>
      ) : (
        <Button
          color="primary"
          disabled={id === lockButton}
          onClick={() => {
            props.toggle(props.id);
          }}
        >
          Favoriye Ekle
        </Button>
      )}
    </div>
  );
};

export default FavoriteActions;
