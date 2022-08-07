import { BrowserRouter, NavLink } from "react-router-dom";
import { routes } from "./routes/router";
function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <NavLink to="">Home</NavLink>
      </BrowserRouter>
    </>
  );
}

export default App;
