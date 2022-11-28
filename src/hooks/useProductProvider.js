import { useContext } from "react"
import { CREATECONTEXTS } from "../context/ProductProvider";

export const useProductProvider = () => {
    const contexts = useContext(CREATECONTEXTS);
    return contexts;
}