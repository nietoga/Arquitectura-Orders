import OrderListPage from '../../pages/OrderListPage';
import OrderShowPage from '../../pages/OrderShowPage';
import Header from '../Header';
import { Container, createTheme, ThemeProvider } from '@mui/material';
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
                    <Header />
                    <Container component="main" maxWidth="xl" sx={{ mb: 2, mt: 2 }}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/orders" />} replace />
                            <Route path="/order/:id" element={<OrderShowPage />} />
                            <Route path="/orders" element={<OrderListPage />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Container>
                </BrowserRouter>
            </ThemeProvider>
        </RestfulProvider>
    );
}

export default App;
