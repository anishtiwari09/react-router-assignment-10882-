import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductDetails({ name, price, id }) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".5rem",
        margin: "1rem",
        justifyContent: "center",
        border: "1px solid black",
        padding: "1rem"
      }}
    >
      <div>
        <div style={{ padding: "0.54rem" }}>{name}</div>
        <div style={{ padding: "0.54rem" }}>
          <Link to={`/product/${id}`}>Show More</Link>
        </div>
      </div>
      <div style={{ padding: "0.54rem" }}>
        <div>${price}</div>
      </div>
    </div>
  );
}

export default function Product() {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const getData = () => {
    const config = {
      url: "https://thawing-oasis-54179.herokuapp.com/routing",
      method: "get"
    };
    return axios(config);
  };
  useEffect(() => {
    setIsLoading(true);
    getData()
      .then((res) => {
        setState(res.data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(true);
      });
  }, []);
  return (
    <div style={{ margin: "2rem" }}>
      {isLoading && <h3>loading...</h3>}
      {isError && <h3>Something wrong </h3>}
      {state?.map((item) => (
        <ProductDetails
          key={item.id}
          name={item.name}
          price={item.price}
          id={item.id}
        />
      ))}
    </div>
  );
}
