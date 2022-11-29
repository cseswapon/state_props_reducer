import { useContext } from "react"
import { PRODUCT_CONTEXT } from "../context/ProductProvider";

export const useProductProvider = () => {
    const contexts = useContext(PRODUCT_CONTEXT);
    return contexts;
}