import TodoFeature from "./features/Todo";
import NotFound from "./components/NotFound";
import { Route, Routes, Link, NavLink } from "react-router-dom";

function App() {
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
