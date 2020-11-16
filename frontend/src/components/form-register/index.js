import React from 'react'

export default function FormLogin(){
    return(
        <form action="">
            <input type="text" name="usuario" id="usuario" placeholder="Usuário"/>
            <input type="password" name="senha" id="senha" placeholder="Senha"/>
            <button>Enviar</button>
        </form>
    )
}