import axios from 'axios';
import React, { useState, useEffect } from 'react'
export default function Episodios(){

    const [categoria, setCategoria] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/categorias?id=1` ).then((response) => {
            setCategoria(response.data)
        })
    }, [setCategoria])

    const valor = categoria.map(breno => breno.videos)
    const outrovalor = valor.map(outrobreno => outrobreno)
    return(
       <ul>
           {console.log(outrovalor)}
       </ul>
    )
}