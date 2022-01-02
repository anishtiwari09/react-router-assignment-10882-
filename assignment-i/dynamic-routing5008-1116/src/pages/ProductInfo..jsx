import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const ProductInfo = () => {
  const [state, setState] = useState({});
  const userId = useParams();
  const getData = (id) => {
    const config = {
      url: `https://thawing-oasis-54179.herokuapp.com/routing?id=${id}`,
      method: "get"
    };
    return axios(config);
  };

  useEffect(() => {
    getData(userId.id)
      .then((res) => {
        setState(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      console.log("cleaning");
    };
  }, []);
  return (
    <div>
      <h3>Product Info</h3>
      <h5>Product Id: {userId.id}</h5>
      <div>
        <div
          style={{
            display: "flex",
            gap: "0.46rem",
            justifyContent: "center",
            flexDirection: "column",
            border: "1px solid black",
            padding: "1rem"
          }}
        >
          <div>{state.name}</div>
          <div>${state.price}</div>
        </div>
      </div>
      <div style={{ margin: "1rem" }}>
        <Link to="/product">Back</Link>
      </div>
    </div>
  );
};
