import React, {useState, createContext} from 'react'

export const UpdateContext = createContext()


export const UpdateProductContextProvider = (props) => {
    const [updateProductInfo, setUpdateProductInfo] = useState({
        ProductName: "",
        QuantityInStock: 0,
        QuantitySold: 0,
        UnitPrice: 0,
        Revenue: 0,
        ProductId: ""

    })
    
  return (
    <div>
        <UpdateContext.Provider value={[updateProductInfo, setUpdateProductInfo]}>
            {props.children}
        </UpdateContext.Provider>
    </div>
  )
}