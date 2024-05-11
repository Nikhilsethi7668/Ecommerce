import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { productcontext } from '../utils/Context';
//nano id is a npm package which is installed and used to  provide uniqie id to element
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
const Create = () => {
    const [product, setproduct] = useContext(productcontext)
    const [title, settitle] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    const Navigate = useNavigate();



    const addProductHandler = (e) => {
        e.preventDefault();
        if (title.trim().length < 1 || category.trim().length < 1 || price.trim().length < 1 || image.trim().length < 1 || description.trim().length < 1) {
            toast.error("Input can't empty");
            return;
        };
        const newproduct = {
            id: nanoid(),
            title,
            category,
            price,
            image,
            description
        }
        setproduct([...product, newproduct]);
        localStorage.setItem("products", JSON.stringify([...product, newproduct]))
        // console.log(product);
        toast.success("Item Added")
        Navigate("/")


    }

    return (
        <>
            <form onSubmit={addProductHandler} className='flex flex-col items-center w-screen h-screen m-auto gap-4' >
                <h1 className='text-4xl m-2'>Add New Product</h1>
                <input
                    type="text"
                    name="title"
                    placeholder='Title'
                    className='w-1/2 bg-zinc-100 p-2 rounded border border-black text-2xl'
                    onChange={(e) => settitle(e.target.value)}
                    value={title}

                />
                <div className='flex gap-1 '>
                    <input
                        type="text"
                        name="Category"
                        placeholder='Category'
                        onChange={(e) => setcategory(e.target.value)}
                        value={category}
                        className='w-[25vw] bg-zinc-100 p-2 rounded border border-black text-2xl' />
                    <input
                        type="number"
                        name="Price"
                        placeholder='Price'
                        onChange={(e) => setprice(e.target.value)}
                        value={price}
                        className='w-[25vw]  bg-zinc-100 p-2 rounded border border-black text-2xl' />

                </div>
                <input

                    type="url"
                    name="Image"
                    placeholder='Image URL'
                    onChange={(e) => setimage(e.target.value)}
                    value={image}
                    className='w-1/2 bg-zinc-100 p-2 rounded border border-black text-2xl' />
                <textarea
                    type="text-box"
                    name="description"
                    placeholder='Description'
                    onChange={(e) => setdescription(e.target.value)}
                    value={description}
                    className='w-1/2 bg-zinc-100 p-2 rounded border border-black text-2xl' />
                <button type="submit" className='hover:bg-blue-200 hover:text-white border border-blue-400 h-[6%] w-[20%] m-5 flex justify-center items-center'>Add Product</button>
            </form>


        </>
    )
}

export default Create
