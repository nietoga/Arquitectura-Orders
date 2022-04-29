import { forwardRef } from 'react';

import { RestfulProvider } from 'restful-react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

import OrderShowPage from '../../pages/OrderShowPage';
import OrderListPage from '../../pages/OrderListPage';

const LinkBehavior = forwardRef((props, ref) => {
    const { href, ...other } = props;
    return <Link ref={ref} to={href} {...other} />;
});

const theme = createTheme({
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
    },
});

function App() {
    return (
        <RestfulProvider base={process.env.REACT_APP_BACKEND_API_URL}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/orders" />} replace />
                        <Route path="/order/:id" element={<OrderShowPage />} />
                        <Route path="/orders" element={<OrderListPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </RestfulProvider>
    );
}

export default App;
