import React, { useContext } from 'react'
import { productcontext } from '../utils/Context'
import { Link, useLocation } from 'react-router-dom'
import Create from './Create'

const Nav = () => {
    //REDUCE WILL BE USED
    const [product] = useContext(productcontext)
    let color = () => {
        return `rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},0.5)`
    }


    let distinct_cat = product && product.reduce((acc, cv) => [...acc, cv.category], [])

    distinct_cat = [...new Set(distinct_cat)]// set in js is used to remove all duplicate elements

    return (


        <nav className='bg-red-100  overflow-y-hidden sticky w-[15%] h-screen  flex flex-col gap-2 item-center '>
            <Link to="/create" className='border border-blue-400 h-[7%] w-[80%] m-5 flex justify-center items-center'>
                <button>
                    <h1 className='text-blue-300 '>Add New Product</h1>
                </button>
            </Link>
            <h1 className='flex justify-center'>Category Filter</h1>
            <div>{distinct_cat.map((cat, i) =>
                < Link to={`/?category=${cat}`} key={i} className='flex items-center gap-2 justify-center text-left w-[100%]'>
                    <span style={{ backgroundColor: `${color()}` }} className=' w-[15px] h-[15px] border rounded-full text-left'></span>
                    <h3>{cat}</h3>
                </Link>
            )}


            </div>

        </nav >

    )
}

export default Nav
