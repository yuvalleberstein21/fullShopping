import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from "./screens/CategoriesScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderDetailsScreen from "./screens/OrderDetailsScreen";
import AddProduct from "./screens/AddProduct";
import UsersScreen from "./screens/UsersScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import ProductScreen from "./screens/ProductScreen";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/products" index element={<ProductScreen />} />
          <Route path="/category" element={<CategoriesScreen />} exact />
          <Route path="/orders" element={<OrderScreen />} exact />
          <Route path="/order" element={<OrderDetailsScreen />} exact />
          <Route path="/addproduct" element={<AddProduct />} exact />
          <Route path="/users" element={<UsersScreen />} exact />
          <Route path="/product/:id/edit" element={<ProductEditScreen />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="*" element={<NotFound />} exact />

        </Routes>
      </Router>
    </>
  );
}

export default App;
