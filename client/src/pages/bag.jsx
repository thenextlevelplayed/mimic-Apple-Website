import Navbar from "../components/Navbar"
import Bag_empty from "./components/bag_empty"
import Bag_with_items from "./components/bag_with_items"
import "../css/bag.css"
import Axios from 'axios'
import React, { useRef, useState, useEffect } from "react";


const Bag = () =>{

    // bag is empty
    // return(
    //     <>
    //     <Navbar />
    //     <Bag_empty />
    //     </>
    // )


    return(
        <>
        <Navbar />
        <Bag_with_items />
        </>
    )
}

export default Bag