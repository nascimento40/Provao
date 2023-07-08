import { Routes, Route } from 'react-router-dom';

import Detalhes from './pages/Login';
import Cliente from './pages/Cliente';
import Home from './pages/Home';

export default function RoutesConfig() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='detalhes' element={<Detalhes />} />
            <Route path='cliente' element={<Cliente />} />
            <Route path='*' element={<h1> 404 - Página Não Encontrada!</h1>} />
        </Routes>
    );
}