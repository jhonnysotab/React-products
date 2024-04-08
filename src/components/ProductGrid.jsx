import { ProductDetails } from "./ProductDetails";

import {PropTypes} from "prop-types";
export const ProductGrid=({products, handlerRemove, handlerSelected})=>{

    return(
        <table className="table table-hover table-striped">
        <thead>
            <tr>
                <th> Id </th>
                <th> Nombre </th>
                <th> Precio </th>
                <th> Descripcion </th>
                <th> Update </th>
                <th> Remove </th>
            </tr>
        </thead>
        <tbody>
            {products.map(pr => {
                return <ProductDetails key={pr.id} pr={pr} handlerRemove={handlerRemove}  handlerSelected={handlerSelected}/>
            })}

        </tbody>
    </table>
    );
}

ProductGrid.propTypes={
    products: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerSelected:PropTypes.func.isRequired
}