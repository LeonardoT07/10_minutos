import styled from 'styled-components'

const ContainerMain = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
`

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    width:80%;
    
    ul{
        width:80%;
        display:flex;
        list-style:none;

        li{
            margin:15px;

            h3{
                text-align:center;
                margin-top:10px;
            }
        }
    }
`
const WrapperImage = styled.div`
    padding:20px;

`
export {Wrapper, ContainerMain, WrapperImage}