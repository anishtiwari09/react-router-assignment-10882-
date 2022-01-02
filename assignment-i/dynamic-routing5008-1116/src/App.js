import Navbar from "./component.jsx/Navbar";
import AllRoutes from "./Routers/allRoutes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Dynamic Routing</h1>
      <Navbar />
      <AllRoutes />
    </div>
  );
}
