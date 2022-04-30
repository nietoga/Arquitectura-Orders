import Order from '../../components/Order';
import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const OrderShowPage = (props) => {
    const params = useParams();
    const { id } = params;

    return (
        <Container maxWidth="md">
            <Grid container justifyContent="center">
                <Typography variant="h4">Order #{id}</Typography>
            </Grid>
            <Card>
                <CardContent>
                    <Order id={id} />
                </CardContent>
            </Card>
        </Container>
    );
};

export default OrderShowPage;
