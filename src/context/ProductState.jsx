import { useReducer } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import PropTypes from "prop-types"
import { getProductService } from "../../services/productServices";

const initialSate = {
    products: [],
    product: {},
}

const ProductState = ({children}) => {

    const [globalState] = useReducer(productReducer, initialSate)

    const getProducts = async () => {
        const response = await getProductService()
    }
    const getProduct = () => {}

    return (
        <ProductContext.Provider value={{
            products: globalState.products,
            product: globalState.product,
            getProducts,
            getProduct,
        }}>
        {children}
        </ProductContext.Provider>
    )
}

ProductState.PropTypes = {
    children: PropTypes.node,
}

export default ProductState;