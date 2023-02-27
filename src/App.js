import TodoFeature from "./features/Todo";
import NotFound from "./components/NotFound";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import productApi from "./api/productApi";

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    }

    fetchProducts();
  }, [])

  return (
    <div className="App">
      <p>
        <Link to="/">Homepage</Link>
      </p>
      <p>
        <Link to="/todos">Todos</Link>
      </p>

      <p>
        <NavLink to="/">Homepage</NavLink>
      </p>
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>

      <h1>Homepage</h1>
      <Routes>
        <Route path="/" element={<TodoFeature />} />
        <Route path="todos/*" element={<TodoFeature />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
