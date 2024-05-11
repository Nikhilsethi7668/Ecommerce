import React, { useContext, useEffect, useState } from 'react'
import { productcontext } from '../utils/Context'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Edit = () => {
    const [product, setproduct] = useContext(productcontext)
    // const [product, setproduct] = useContext(productcontext)
    const [eproduct, seteproduct] = useState({
        title: "",
        category: "",
        price: "",
        image: "",
        description: ""


    });
    const Navigate = useNavigate();
    const { id } = useParams();
    const change = (e) => {
        // console.log(e.target.name, e.target.value);
        seteproduct({ ...eproduct, [e.target.name]: e.target.value })


    }
    const setting = () => {
        seteproduct(product.filter((p) => p.id == id)[0])
    }


    const addProductHandler = (e) => {
        e.preventDefault();
        // console.log(e);
        if (eproduct.title.trim().length < 1 || eproduct.category.trim().length < 1 || eproduct.price < 1 || eproduct.image.trim().length < 1 || eproduct.description.trim().length < 1) {
            alert("Input is empty");
            return;

        }
        else {
            const pi = product.findIndex((p) => p.id == id);
            const copyData = [...product];
            copyData[pi] = { ...product[pi], ...eproduct }
            // console.log(eproduct)
            setproduct(copyData)
            localStorage.setItem('products', JSON.stringify(copyData))
            toast.success("product edited")
            Navigate(-1)

        }



    }



    useEffect(() => {
        setting();

    }, [id])

    return (
        <>
            <form onSubmit={addProductHandler} className='flex flex-col items-center w-screen h-screen m-auto gap-4' >
                <h1 className='text-4xl m-2'>Edit Product</h1>
                <input
                    type="text"
                    name="title"
                    placeholder='Title'
                    className='w-1/2 bg-zinc-100 p-2 rounded border border-black text-2xl'
                    onChange={change}

                    value={eproduct && eproduct.title}

                />
                <div className='flex gap-1 '>
                    <input
                        type="text"
                        name="category"
                        placeholder='Category'
                        onChange={change}
                        value={eproduct && eproduct.category}
                        className='w-[25vw] bg-zinc-100 p-2 rounded border border-black text-2xl' />
                    <input
                        type="number"
                        name="price"
                        placeholder='Price'
                        onChange={change}
                        value={eproduct && eproduct.price}
                        className='w-[25vw]  bg-zinc-100 p-2 rounded border border-black text-2xl' />

                </div>
                <input

                    type="url"
                    name="image"
                    placeholder='Image URL'
                    onChange={change}
                    value={eproduct && eproduct.image}
                    className='w-1/2 bg-zinc-100 p-2 rounded border border-black text-2xl' />
                <textarea
                    type="text-box"
                    name="description"
                    placeholder='Description'
                    onChange={change}
                    value={eproduct && eproduct.description}
                    className='w-1/2 bg-zinc-100 p-2 rounded border border-black text-2xl' />
                <button
                    // onClick={() => edited()}
                    type="submit" className='hover:bg-blue-200 hover:text-white border border-blue-400 h-[6%] w-[20%] m-5 flex justify-center items-center'>Submit</button>
            </form>


        </>
    )

}
export default Edit;
