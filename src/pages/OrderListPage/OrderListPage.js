import OrderList from '../../components/OrderList';
import { Container, Grid, Typography } from '@mui/material';

const OrderListPage = () => {
    return (
        <Container maxWidth="lg">
            <Grid container justifyContent="center">
                <Typography variant="h4">Placed Orders</Typography>
                <Container maxWidth="lg" style={{ height: 500 }} sx={{ mt: 2 }}>
                    <OrderList />
                </Container>
            </Grid>
        </Container>
    );
};

export default OrderListPage;
