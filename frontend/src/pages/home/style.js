import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    
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
export default Wrapper