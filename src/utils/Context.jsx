import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'

export const productcontext = createContext();

const Context = (props) => {
    // now we are using local storage instead of api so that new product can be added in the data
    const [product, setproduct] = useState(JSON.parse(localStorage.getItem('products')) || null);
    // const getproducts = async () => {
    //     try {
    //         const { data } = await axios("/products");
    //         // console.log(data)
    //         setproduct(data);


    //     } catch (error) {
    //         console.log(error);

    //     }
    // }
    // useEffect(() => {
    //     getproducts();
    // }, []);
    console.log(product);

    return (
        <productcontext.Provider value={[product, setproduct]}>
            {props.children}

        </productcontext.Provider>
    )
}

export default Context
