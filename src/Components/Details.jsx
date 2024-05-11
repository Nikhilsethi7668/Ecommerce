import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productcontext } from '../utils/Context';
import axios from '../utils/Axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Details = () => {
    const [product, setproduct] = useContext(productcontext)
    const { id } = useParams();
    const [details, setdetails] = useState(null)
    const navigate = useNavigate();
    // const singleproduct = async () => {
    //     try {
    //         const { data } = await axios.get(`/products/${id}`);
    //         console.log(data);
    //         setdetails(data)

    //     } catch (error) {
    //         console.log(error);

    //     }
    // }
    useEffect(() => {
        // singleproduct(); 
        setdetails(product.filter((p) => p.id == id)[0])

    }, [])
    const deleteh = (id) => {
        const filteredp = product.filter((p) => p.id != id);
        setproduct(filteredp);
        localStorage.setItem("products", JSON.stringify(filteredp));
        toast.success("Item deleted successfully")
        navigate("/")
    }
    return details ? (
        <div className='flex container  h-[80vh] mx-auto my-5 items-center justify-center '>
            <div className="set flex justify-center items-center gap-8">
                <img className='w-[15vw] h-[50%]' src={`${details.image}`} alt="" />
                <div className="details  w-[50%] p-9 flex flex-col gap-6">
                    <h1 className='text-2xl '>{details.title}</h1>
                    <hr />
                    <h3 className='text-red-300'>$ {details.price}</h3>
                    <h2 className='border  bg-red-500 w-fit rounded-xl p-3'>{details.category}</h2>
                    <h1 className='text-xl'>{details.description}</h1>
                    <div className="links flex gap-0 m-0 p-0">
                        <Link to={`/details/edit/${details.id}`} className='border border-blue-400 text-blue-500 w-[4vw] px-2 flex items-center justify-center   m-2'>Edit</Link>
                        <button onClick={() => deleteh(details.id)} className='border border-red-400 w-[10vw]text-red-500 m-2 '>Delete</button>

                    </div>
                </div>
            </div>

        </div>
    ) : <h1 className='flex items-center justify-center w-[100vw] text-7xl'>LOADING........</h1>
}

export default Details
