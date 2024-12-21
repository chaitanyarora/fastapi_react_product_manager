import React from 'react'

function ProductRow({id, name, quantity_in_stock, quantity_sold, unit_price, revenue, handleDelete, handleUpdate, handleSupplier}) {
    return (
        <tr>
           <td>{id}</td>
            <td>{name}</td>
            <td>{quantity_in_stock}</td>
            <td>{quantity_sold}</td>
            <td>{unit_price}</td>
            <td>{revenue}</td>
            <td>
                <button className="btn btn-outline-info btn-sm  mr-2">Update</button>     
            </td>
        </tr>
    )
}

export default ProductRow