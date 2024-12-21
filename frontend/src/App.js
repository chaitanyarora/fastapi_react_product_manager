import './App.css';
import NavBar from './components/NavBar';
import ProductsTable from './components/ProductsTable';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from './ProductContext';

function App() {
  return (
    <div>
      <Router>
        <ProductProvider>
          <NavBar />
          <div className="row">
              <div className="col-sm-10 col-xm-12 mr-auto ml-auto mt-4 mb-4">
              <ProductsTable />
              </div>
            </div>
          <Routes>
            {/* <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/addproduct" element={<h1>Add Product Page</h1>} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} /> */}
          </Routes>
        </ProductProvider>
      </Router>
    </div>
  );
}

export default App; 
