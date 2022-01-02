import { Link } from "react-router-dom";
const style = {
  display: "flex",
  gap: "1rem",
  justifyContent: "center"
};
export default function Navbar() {
  return (
    <div style={style}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/product">Product</Link>
      </div>
    </div>
  );
}
