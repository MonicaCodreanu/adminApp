import "./products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

function Products() {
  return (
    <div className="products">
      <Sidebar />
      <div className="productsContainer">
        <Navbar />
        <Datatable type="products" />
      </div>
    </div>
  );
}

export default Products;
