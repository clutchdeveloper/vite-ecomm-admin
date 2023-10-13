import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import BlogcatList from "./pages/BlogcatList";
import BlogList from "./pages/BlogList";
import Addblog from "./pages/Addblog";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ColorList from "./pages/ColorList";
import CategoryList from "./pages/CategoryList";
import BrandList from "./pages/BrandList";
import ProductList from "./pages/ProductList";
import AdminLayout from "./components/AdminLayout";
import AddblogCat from "./pages/AddblogCat";
import AddColor from "./pages/AddColor";
import AddCategory from "./pages/AddCat";
import AddBrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/enquiries" element={<Enquiries />} />
          <Route path="/admin/product-list" element={<ProductList />} />
          <Route path="/admin/brand-list" element={<BrandList />} />
          <Route path="/admin/category-list" element={<CategoryList />} />
          <Route path="/admin/blog-list" element={<BlogList />} />
          <Route path="/admin/blog-cat-list" element={<BlogcatList />} />
          <Route path="/admin/color-list" element={<ColorList />} />
          <Route path="/admin/add-blog" element={<Addblog />} />
          <Route path="/admin/add-blog-cat" element={<AddblogCat />} />
          <Route path="/admin/add-color" element={<AddColor />} />
          <Route path="/admin/add-category" element={<AddCategory />} />
          <Route path="/admin/add-brand" element={<AddBrand />} />
          <Route path="/admin/add-product" element={<AddProduct/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
