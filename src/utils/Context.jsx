import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'

export const productcontext = createContext();

const Context = (props) => {
  
    const [product, setproduct] = useState()
    const getproducts = async () => {
        try {
            const { data } = await axios("/products");
            // console.log(data)
            setproduct(data);


        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getproducts();
    }, []);
    console.log(product);

    return (
        <productcontext.Provider value={[product, setproduct]}>
            {props.children}

        </productcontext.Provider>
    )
}

export default Context
