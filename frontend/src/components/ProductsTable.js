import React, {useEffect, useContext} from 'react'
import { Table } from 'react-bootstrap'
import { ProductContext } from '../ProductContext'
import ProductRow from './ProductRow'

const ProductsTable = () => {
    const [products, setProducts] = useContext(ProductContext)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("http://127.0.0.1:8000/product");
            const data = await response.json();
            setProducts({ "data": [...data.data] })
            console.log(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      
        // No cleanup is needed, so return nothing
        return () => {};
      }, []); // Dependency array
      
    
  return (
    <div>
        
        <Table striped bordered hover>
				<thead>
					<tr>
						<th>Id</th>
						<th>Product Name</th>
						<th>Quantity In Stock</th>
						<th>Quantity Sold</th>
						<th>Unit Price</th>
						<th>Revenue</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
                    {products.data.map(product => (
                        <ProductRow 
                        id = {product.id}
                        name = {product.name}
                        quantity_in_stock = {product.quantity_in_stock}
                        quantity_sold = {product.quantity_sold}
                        unit_price = {product.unit_price}
                        revenue = {product.revenue}
                        key={product.id}
                        />
                    ))}
				</tbody>
			</Table>
    </div>
  )
}

export default ProductsTable