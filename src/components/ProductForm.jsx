import { useEffect, useState } from "react"

import {PropTypes} from "prop-types";
export const ProductForm = ({handlerAdd, productSelected}) => {
    const [form, setForm] = useState({
        id:0,
        name: '',
        description: '',
        price: 0
    })

    const { id, name, description, price } = form;

    const onSubmit = (event) => {
        event.preventDefault();
        if (!id ,!name || !description || !price) {
            alert('Debe de completar los datos del formulario')
            return;
        }
        // console.log(form);
        handlerAdd(form);
        setForm(
            {   
                id:0,
                name: '',
                description: '',
                price: 0
            }
        );
    }
    
    useEffect(()=>{
    
        setForm(productSelected)

    },[productSelected]);

    return (
        <form onSubmit={onSubmit}>
             <div>
                <input
                    placeholder="id"
                    className="form-control my-3 w-75"
                    name="id"
                    value={id}
                    onChange={(event) => setForm({
                        ...form,
                        id: event.target.value
                    })}
                />
            </div>

            <div>
                <input
                    placeholder="Name"
                    name="Name"
                    className="form-control my-3 w-75"
                    value={name}
                    onChange={(event) => setForm({
                        ...form,
                        name: event.target.value
                    })}
                />
            </div>

            <div>
                <input
                    placeholder="description"
                    name="description"
                    className="form-control my-3 w-75"
                    value={description}
                    onChange={(event) => setForm({
                        ...form,
                        description: event.target.value
                    })}
                />
            </div>

            <div>
                <input
                    placeholder="Price"
                    name="price"
                    className="form-control my-3 w-75"  
                    value={price}
                    onChange={(event) => setForm({
                        ...form,
                        price: event.target.value
                    })}
                />
            </div>
            <button type="submit" className="btn btn-primary"> {id>0 ?'Update' : 'Create'}</button>
        </form>
    )
}
ProductForm.propTypes={
    handlerAdd: PropTypes.func.isRequired,
    productSelected:PropTypes.array.isRequired
}