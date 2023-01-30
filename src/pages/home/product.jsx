import React from "react";

export const Product = (props) => {
  const { id, name, price, image } = props.data;

  return (
    <div
      className="product"
      style={{
        borderRadius: "15px",
        width: "300px",
        height: "350px",
        margin: "100px",
        display: "flex",
        flexDirection: "column",
        AlignItems: "center",
        "&:hover": {
          transition: "0.3s ease-in",
          cursor: "pointer",
        },
      }}
    >
      <img src={image} alt="" style={{ width: "400px" }} />
      <div className="Title" key={id} style={{ textAlign: "center" }}>
        <p>
          <b>{name}</b>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </div>
      <button
        className="addToButton"
        style={{
          backgroundColor: "transparent",
          border: "2px solid",
          minWidth: "100px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "5px",
          paddingBottom: "5px",
          borderRadius: "15px",
          "&:hover": {
            backgroundColor: "yellow",
            color: "white",
            cursor: "pointer",
          },
        }}
      >
        this is a button
      </button>
    </div>
  );
};
