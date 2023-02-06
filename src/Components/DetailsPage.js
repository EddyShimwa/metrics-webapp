import React from 'react'
import { Link } from 'react-router-dom';
import {  BsChevronLeft } from 'react-icons/bs'

const Details = () => {
    return (
        <div>
            <header>
            <li>
         <Link to="/"><BsChevronLeft /> </Link>
         </li>
            </header>
       <h1> Hello from Details page</h1>

    </div>
    )
}


export default Details;