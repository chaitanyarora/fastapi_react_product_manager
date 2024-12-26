import './App.css';
import NavBar from './components/NavBar';
import ProductsTable from './components/ProductsTable';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProductProvider } from './ProductContext';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import { UpdateProductContextProvider } from './UpdateProductContext';

function App() {
  return (
    <div>
      <Router>
        <ProductProvider>

          <NavBar />
          <div className="row">
              <div className="col-sm-10 col-xm-12 mr-auto ml-auto mt-4 mb-4">
              <UpdateProductContextProvider>
        
        <Routes>
        
              
            <Route exact path='/' element={<ProductsTable />}/>
             
             
             <Route exact path="/addproduct" element={<AddProduct />} />
             <Route exact path="/updateproduct" element={<UpdateProduct />} />

    
        </Routes>
        </UpdateProductContextProvider>

        </div>
        </div>
        </ProductProvider>

      </Router>
    </div>
  );
}

export default App; 
