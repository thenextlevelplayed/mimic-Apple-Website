import Axios from 'axios'
import React, { useRef, useState, useEffect } from "react";


const DataItem =()=>{
    const [item,setItem] = useState('');
    useEffect(()=>{
        Axios.get('http://localhost:3001/item').then((res)=>{
        // console.log('res.data.data',res.data.data)
        setItem(res.data.data)
    
        }).catch(error=>{
          if (error.response){
            console.log(error.response)
    
            //do something
            
            }else if(error.request){
                console.log(error.request)
            
            //do something else
            
            }else if(error.message){
                console.log(error.message)
            
            //do something other than the other two
            
            }
        })
      },[])
}


export default React.createContext({

    DataItem,
    cart: [],
    addProductToCart: product => {},
    removeProductFromCart: productId => {}
  });