import { RestfulProvider } from 'restful-react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import OrderShowPage from '../../pages/OrderShowPage';
import OrderListPage from '../../pages/OrderListPage';

function App() {
    return (
        <RestfulProvider base={process.env.REACT_APP_BACKEND_API_URL}>
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
