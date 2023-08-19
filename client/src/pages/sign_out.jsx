import {useNavigate} from 'react-router-dom';
import React, { useEffect } from "react";

const Sign_out =() =>{
    window.sessionStorage.clear();
    const navigate= useNavigate()
    useEffect(()=>{
        navigate('/', {replace: true});
    
    })
}



export default Sign_out
