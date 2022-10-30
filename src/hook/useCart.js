import { useState, useEffect } from 'react';
const useCart=()=>{

    const [carts, setCarts]=useState([]);

    useEffect(()=>{
        fetch('player.json')
        .then(res=>res.json())
        .then(data=>setCarts(data));
       
    });
 return[carts, setCarts];
}
export default useCart;