import React, {useEffect, useContext} from 'react'
import { Table } from 'react-bootstrap'
import { UpdateContext } from '../UpdateProductContext'
import { ProductContext } from '../ProductContext'
import ProductRow from './ProductRow'
import { useNavigate  } from 'react-router-dom';

const ProductsTable = () => {
    const [products, setProducts] = useContext(ProductContext)
    const [updateProductInfo, setUpdateProductInfo] = useContext(UpdateContext)

    const history = useNavigate()

    const handleDelete = (id) => {
      fetch("http://127.0.0.1:8000/product/" + id, {
        method: "DELETE",
        headers: {
          accept: 'application/json'
        }
      }).then(resp => {
        return resp.json()
      }).then(result => {
        if (result.status === 'ok') {
          const filteredProducts = products.data.filter((product) => product.id !== id)
          setProducts({data: [...filteredProducts]})
          alert("Product deleted!")
        } else {
          alert("Product NOT deleted!")
        }
      })
    }

    const handleUpdate = (id) => {
      console.log("Hello owrld");

      const product = products.data.filter(product => product.id === id)[0]
      setUpdateProductInfo({
        ProductName: product.name,
        QuantityInStock: product.quantity_in_stock,
        QuantitySold: product.quantity_sold,
        UnitPrice: product.unit_price,
        Revenue: product.revenue,
        ProductId: id
      })
        
      history("/updateproduct")
      
    }

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
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                        />
                    ))}
				</tbody>
			</Table>
    </div>
  )
}

export default ProductsTable