import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contribute from "./pages/Contribute";
import Categories from "./pages/Categories";
import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />}>
            <Route index element={<Categories />} />
            <Route path="category/:categoryName" element={<Category />} />
          </Route>
          <Route path="contribute" element={<Contribute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
