import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Wrapper from './style'

export default function Home(){
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/video')
        .then((response) => {
            setProdutos(response.data)
        })
    }, [setProdutos])
    
    return(
     <Wrapper>
         <ul>
        {produtos.map((prod, index) => (
            <li key={index}>
                <div><img src={prod.url} alt=""/></div>
                <div><h3>{prod.name}</h3></div>
            </li>
        ))}
     </ul>
     </Wrapper>
    )
}