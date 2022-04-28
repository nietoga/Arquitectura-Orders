import './App.css';

import { RestfulProvider } from 'restful-react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import OrderShowPage from './components/OrderShowPage';
import OrderListPage from './components/OrderListPage';

function App() {
    return (
        <RestfulProvider base="https://evergreen-dis.herokuapp.com/api">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/orders" />} replace />
                    <Route path="/order/:id" element={<OrderShowPage />} />
                    <Route path="/orders" element={<OrderListPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </RestfulProvider>
    );
}

export default App;
