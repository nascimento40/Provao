import React from 'react';
import Title from '../components/Title/index';
import Livros from '../components/Livros/index';

export default function Login() {
    return (
        <div>
            <Title
                title={"Biblioteca"}
                text={"Livros disponiveis"} />
            <Livros />
        </div>
    )
}