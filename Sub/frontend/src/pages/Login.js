import React from 'react';
import Title from './../components/Title/index';
import Detalhes from '../components/Detalhes/index';

export default function Login() {
    return (
        <div>
            <Title
                title={"Detalhes"}
                text={"Detalhes do seu livro"} />
            <Detalhes />
        </div>
    )
}