import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Wrapper, ContainerMain, WrapperImage} from './style'
import Nav from '../../components/nav/';

import BannerMain from '../../images/BannerMain.png'

export default function Home(){
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/categorias')
        .then((response) => {
            setProdutos(response.data)
        })
    }, [setProdutos])
    
    return(
        <>
        <Nav/>
        <ContainerMain>
            <Wrapper>
                <WrapperImage>
                    <img src={BannerMain} alt=""/>
                </WrapperImage>
                
                    <ul>
                    {produtos.map((prod, index) => (
                        <li key={index}>
                            <div>
                                <img src={prod.url} alt=""/>
                            </div>
                            <div>
                                <h3>{prod.name}</h3>
                            </div>
                        </li>
                        ))}
                    </ul>
            </Wrapper>
        </ContainerMain>
     </>
    )
}