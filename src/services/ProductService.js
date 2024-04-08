import axios from "axios";

const initProducts = [
    {   
        id: 1,
        name: 'Monitos Samsung 65',
        price: 500,
        descripcion: 'El Monitor es increibles!'
    },
    {
        id: 2,
        name: 'Iphone 15',
        price: 1220,
        descripcion: 'El Iphone es increibles!'
    }
]
const BASE_URL = 'http://localhost:8080/products';
export const listProduct =()=>{
    return initProducts;
}


export const findAll=async()=>{
    try {
        const response = await axios.get(BASE_URL);
        return response
        
    } catch (error) {
        return console.log(error);

    }

}

export const create = async ({name,description, price})=>{

    try {
        const response = await axios.post(BASE_URL,{
             name,
             description,
             price
        });

    return response;

    } catch (error) {
        console.log(error);

    }
    return undefined;

}


export const update = async ({id,name,description, price})=>{

    try {
        const response = await axios.put(`${BASE_URL}/${id}`,{
             name,
             description,
             price
        });

    return response;

    } catch (error) {
        console.log(error);

    }
    return undefined;
    
}

export const remove =async(id)=>{

    try {
       await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.log(error)
    }
}