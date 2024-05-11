import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import { productcontext } from '../utils/Context'
import axios from '../utils/Axios'




const Home = () => {
    const [product, setproduct] = useContext(productcontext)
    const [filtered, setfiltered] = useState(null);
    // console.log(filtered);

    //useLocation= path me ?se jo likha hotahai vo querry hoti hai and poori querry fetch kar leta hai ye function to search ke andr ?se leke sb ajayga as it is....

    const { search } = useLocation();
    // console.log(search);

    //splitting the querry in order to get the category name and storing the value of index 1 which contains exact path name (category name);

    let category = search.split("=")[1];
    // console.log(category);
    //removing allthe extra chracter from fatched path and making it simple readable string

    let catstr = decodeURI(category);
    // console.log(catstr);

    const getfiltered = async () => {
        try {
            let { data } = await axios.get(`/products/category/${catstr}`)
            setfiltered(data);
            // console.log(data);


        } catch (error) {
            console.log(error);

        }
    }
    // console.log(product);
    useEffect(() => {
        if (catstr != "undefined") {
            //  getfiltered()
            setfiltered(product.filter((p) => p.category == catstr))

        };
        if (filtered == null || catstr == "undefined") {

            product && setfiltered(product);
            // console.log(filtered);
        }
    }, [catstr, product])

    return product ? (
        <>
            <Nav />
            <div className='container  w-[85%] h-screen flex overflow-y-auto overflow-x-hidden flex-wrap items-center justify-center '>
                {filtered && filtered.map((p, i) => (


                    < Link key={i} to={`/details/${p.id}`} className='hover:text-blue-500 h-[40vh] w-[15vw] m-5 border rounded-lg overflow-hidden flex-wrap '>
                        <div className='hover:scale-110 bg-contain bg-center w-full h-[60%] bg-no-repeat p-4 mt-4 '
                            style={{ backgroundImage: `url(${p.image})`, }}>

                        </div>

                        <div className=" details m-3 pl-4">{p.title}</div>

                    </Link>
                ))};
            </div >

        </>
    ) : <h1 className='flex items-center justify-center w-[100vw] text-7xl'>LOADING........</h1>

}

export default Home
