import OrderListPage from '../../pages/OrderListPage';
import OrderShowPage from '../../pages/OrderShowPage';
import { createTheme, ThemeProvider } from '@mui/material';
import { forwardRef } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { RestfulProvider } from 'restful-react';

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
        <RestfulProvider base="https://evergreen-dis.herokuapp.com/api">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <div>
                        <h1>DIS - 1</h1>
                        <Routes>
                            <Route path="/" element={<Navigate to="/orders" />} replace />
                            <Route path="/order/:id" element={<OrderShowPage />} />
                            <Route path="/orders" element={<OrderListPage />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        </RestfulProvider>
    );
}

export default App;
