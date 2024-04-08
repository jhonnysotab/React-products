import { ProductGrid } from "./ProductGrid"
import { PropTypes } from "prop-types";
export const ProductDetails = ({ pr = {}, handlerRemove, handlerSelected }) => {

    return (
        <tr>
            <td>
                {pr.id}
            </td>
            <td>
                {pr.name}
            </td>
            <td>
                {pr.price}
            </td>
            <td>
                {pr.description}
            </td>
            <td>
                <button className="btn btn-secundary btn-sm" onClick={() => handlerSelected(pr)}>
                    Update
                </button>
            </td>

            <td>
                <button className="btn btn-danger btn-sm" onClick={() => handlerRemove(pr.id)}>
                    Eliminar
                </button>
            </td>


        </tr>
    )
}

ProductDetails.propTypes = {
    pr: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerSelected:PropTypes.func.isRequired
}